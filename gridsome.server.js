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
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
