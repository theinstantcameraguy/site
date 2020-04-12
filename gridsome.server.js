// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const filter = require('lodash/filter')
const intersection = require('lodash/intersection')
const slice = require('lodash/slice')
const values = require('lodash/values')
const axios = require('axios')

module.exports = function (api) {
  api.loadSource(async ({ addCollection, addSchemaTypes }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    addSchemaTypes(`
    type InstagramPost implements Node @infer {
      id: ID
      user: InstaUser
      images: PostImages
      caption: PostCaption
      created_time: Date
      likes: PostCount
      comments: PostCount
      tags: [String]
      type: String
      link: String
    }
    type PostCount {
      count: String
    }
    type PostCaption {
      text: String
    }
    type PostImages {
      thumbnail: InstaImage
      low_resolution: InstaImage
      standard_resolution: InstaImage
    }
    type InstaImage {
      height: String
      width: Image
      description: String
      url: String
    }
    type InstaUser  {
      id: ID
      profile_picture: String
      username: String
    }
    `)
    const collection = addCollection('InstagramPost')
    let count = 9
    let mediaType = 'image'
    axios
      .get(`https://api.instagram.com/v1/users/self/media/recent`, {
        headers: { 'Access-Control-Allow-Origin': '*' },
        params: {
          access_token: process.env.INSTATOKEN,
          count,
        },
      })
      .then((response) => {
        let feeds = []
        if (response.data.meta.code === 400) this.error = response.data.meta
        if (response.data.meta.code === 200) {
          if (response.data.meta.code === 200) {
            let { data } = response.data
            const types = ['image', 'video']
            if (mediaType && types.includes(mediaType)) {
              data = filter(data, (item) => mediaType === item.type)
            }
            feeds = slice(values(data), 0, count)
            return feeds
          }
        }
      })
      .then((feeds) => {
        for (const item of feeds) {
          collection.addNode({
            id: item.id,
            user: item.user,
            images: item.images,
            caption: item.caption,
            created_time: item.created_time,
            likes: item.likes,
            tags: item.tags,
            comments: item.comments,
            type: item.type,
            link: item.link,
          })
        }
      })
      .catch((error) => {
        throw error
      })
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
