<template>
  <div class="columns is-multiline">
    <div v-for="post in images" :key="post.id" class="column">
      <div class="card">
        <div class="card-image">
          <figure class="image">
            <img v-lazy="post.imageObj" :alt="post.alt" />
          </figure>
        </div>
        <!--        <div class="content">-->
        <!--          {{ post.caption.text }}-->
        <!--        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Instaposts',
}
</script>

<style scoped lang="scss">
$card-shadow: 0 !important;
.card {
  min-height: 160px;
  min-width: 160px;
  display: flex;
  flex-direction: column;
}

.column .card-footer {
  margin-top: auto;
}
</style>
