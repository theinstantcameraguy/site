const join = require('lodash/join')

const fs = require('fs')

const filmList = [
  'Pigeonhole',
  'Color\\-Protection',
  'PZ680',
  'PX680',
  'PX680FF',
  'AmericanWoods',
  'PX600',
  'PZ600',
  'UV\\+',
  'Silver Shade',
  'Grey\\sFrame',
  'Black\\sFrame',
  'PX70',
  'FP\\-3000B',
  'FP\\-100B',
  'FP\\-100C',
]

const filmListRe = new RegExp(join(filmList, '|'), 'g')

/**
 * Process files
 * @returns {unknown[]}
 */
const processImages = async () => {
  console.log('Files:')
  let files = fs.readdirSync('./Images', { withFileTypes: true })
  return Promise.all(
    files.map(async (file) => {
      if (file.isFile()) {
        let labels = await fetchLabels(file.name)
        return {
          name: file.name,
          tags: file.name.match(filmListRe),
          labels: labels,
        }
      }
    })
  )
}

/**
 * Fetch labels from Google Cloud Vision API
 * @param filename
 * @returns {Promise<string[]>}
 */
async function fetchLabels(filename) {
  // Imports the Google Cloud client library
  const vision = require('@google-cloud/vision')

  // Creates a client
  const client = new vision.ImageAnnotatorClient()

  // Performs label detection on the image file
  return client.labelDetection(`./Images/${filename}`).then((result) => {
    return result[0].labelAnnotations.map((label) => {
      return label.description
    })
  })
}

async function writeToFile() {
  const images = await processImages()
  fs.writeFileSync('processed_images.json', JSON.stringify(images))
}

writeToFile().then(() => console.log('Finished Writing to file'))
