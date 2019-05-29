import axios from 'axios'
import _ from 'lodash'
import * as mtypes from './mutation-types'

export const state = () => ({
  feeds: []
})

export const mutations = {
  [mtypes.SET_INSTAGRAM_FEED](state, payload) {
    state.feeds = payload
  }
}
export const actions = {
  getUserFeed({ commit }, count, mediaType = '', tags = []) {
    axios
      .get(`https://api.instagram.com/v1/users/self/media/recent`, {
        params: { access_token: process.env.INSTATOKEN, count: count }
      })
      .then(response => {
        let feeds = []
        if (response.data.meta.code === 400) this.error = response.data.meta
        if (response.data.meta.code === 200) {
          if (response.data.meta.code === 200) {
            let { data } = response.data
            const types = ['image', 'video']
            if (mediaType && types.indexOf(mediaType) > -1) {
              data = _.filter(data, item => mediaType === item.type)
            }
            if (tags.length) {
              data = _.filter(
                data,
                item => _.intersection(tags, item.tags).length
              )
            }
            feeds = _.slice(_.values(data), 0, count)
            return feeds
          }
        }
      })
      .then(feeds => {
        commit(mtypes.SET_INSTAGRAM_FEED, feeds)
      })
      .catch(error => {
        throw error
      })
  }
}
export const getters = {
  feeds: state => state.feeds
}
