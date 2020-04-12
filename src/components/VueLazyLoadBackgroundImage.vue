<template>
  <div
    :class="[imageClass, imageState]"
    :style="computedStyle"
    :data-width="imageWidth"
    :data-height="imageHeight"
    :data-state="imageState"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    imageSource: {
      type: String,
      required: true,
    },
    lgSuffix: {
      type: String,
      required: false,
      default: '',
    },
    mdSuffix: {
      type: String,
      required: false,
      default: '',
    },
    smSuffix: {
      type: String,
      required: false,
      default: '',
    },
    imageClass: {
      type: String,
      required: false,
      default: '',
    },
    loadingImage: {
      type: String,
      required: true,
    },
    errorImage: {
      type: String,
      required: true,
    },
    imageErrorCallback: {
      type: Function,
      required: false,
      default: function () {},
    },
    imageSuccessCallback: {
      type: Function,
      required: false,
      default: function () {},
    },
    backgroundSize: {
      type: String,
      required: false,
      default: 'cover',
    },
    backgroundColor: {
      type: String,
      required: false,
      default: '',
    },
    backgroundRepeat: {
      type: String,
      required: false,
      default: 'no-repeat',
    },
  },
  data() {
    return {
      imageWidth: 0,
      imageHeight: 0,
      imageState: 'loading',
      asyncImage: new Image(),
    }
  },
  computed: {
    imageURL() {
      return {
        sm: this.smSuffix,
        md: this.mdSuffix,
        lg: this.lgSuffix,
      }[this.$mq]
    },
    backgroundPos() {
      return 'center'
    },
    computedStyle() {
      if (this.imageState === 'loading') {
        return (
          'background-image: url(' +
          this.loadingImage +
          '); background-size: ' +
          this.backgroundSize +
          '; background-repeat: ' +
          this.backgroundRepeat +
          '; background-position: ' +
          this.backgroundPos +
          ' ;'
        )
      }

      if (this.imageState === 'error') {
        return (
          'background-image: url(' +
          this.errorImage +
          '); background-size: ' +
          this.backgroundSize +
          '; background-repeat: ' +
          this.backgroundRepeat +
          '; background-position: ' +
          this.backgroundPos +
          ' ;'
        )
      }

      if (this.imageState === 'loaded') {
        return (
          'background-image: url(' +
          this.asyncImage.src +
          '); background-size: ' +
          this.backgroundSize +
          '; background-repeat: ' +
          this.backgroundRepeat +
          '; background-position: ' +
          this.backgroundPos +
          ' ;'
        )
      }

      return ''
    },
  },
  methods: {
    fetchImage(url) {
      this.asyncImage.onload = this.imageOnLoad
      this.asyncImage.onerror = this.imageOnError
      this.imageState = 'loading'
      this.asyncImage.src = this.imageSource + this.imageURL
    },
    imageOnLoad(success) {
      this.imageState = 'loaded'
      this.imageWidth = this.asyncImage.naturalWidth
      this.imageHeight = this.asyncImage.naturalHeight
      this.imageSuccessCallback()
    },
    imageOnError(error) {
      this.imageState = 'error'
      this.imageErrorCallback()
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.fetchImage()
    })
  },
}
</script>
