const join = require('lodash/join')

const fs = require('fs')
const readline = require('readline')
const { google } = require('googleapis')

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/drive.readonly.metadata']
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = 'token.json'

// Load client secrets from a local file.
// https://developers.google.com/drive/api/v3/quickstart/nodejs
fs.readFile('credentials.json', (err, content) => {
  if (err) return console.log('Error loading client secret file:', err)
  // Authorize a client with credentials, then call the Google Drive API.
  authorize(JSON.parse(content), processImages)
})

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
  const { client_secret, client_id, redirect_uris } = credentials.installed
  const oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  )

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getAccessToken(oAuth2Client, callback)
    oAuth2Client.setCredentials(JSON.parse(token))
    callback(oAuth2Client)
  })
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getAccessToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  })
  console.log('Authorize this app by visiting this url:', authUrl)
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close()
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error retrieving access token', err)
      oAuth2Client.setCredentials(token)
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) return console.error(err)
        console.log('Token stored to', TOKEN_PATH)
      })
      callback(oAuth2Client)
    })
  })
}

const filmList = [
  'Pigeonhole',
  'Color\\-Protection',
  'PZ680',
  'PX680',
  'PX680FF',
  'AmericanWoods',
  'PX600',
  'UV\\+',
  'Silver Shade',
  'Grey\\sFrame',
  'Black\\sFrame',
  'PX70',
  'FP\\-3000B',
]

const filmListRe = new RegExp(join(filmList, '|'), 'g')

/**
 * Lists the names and IDs of up to 10 files.
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
function processImages(auth) {
  const drive = google.drive({ version: 'v3', auth })

  drive.files.list(
    {
      q: "parents in '1BWwZfLhwzv5g_o-fHJWEuEBixOmja74f'",
      fields: 'files(id, name)',
    },
    (err, res) => {
      if (err) return console.log('The API returned an error: ' + err)
      const files = res.data.files
      if (files.length) {
        console.log('Files:')
        files.map((file) => {
          let tags = file.name.match(filmListRe)
          console.log(
            `Processing ${file.name} (${file.id}) tags [ ${join(tags, ',')} ]`
          )
          downloadFile(drive, file)
        })
      } else {
        console.log('No files found.')
      }
    }
  )
}

/**
 * Downloads file to tmp for processing
 * @param drive
 * @param file
 */
function downloadFile(drive, file) {
  let dest = fs.createWriteStream(`./tmp/${file.name}`)

  drive.files
    .get({
      fileId: file.id,
      alt: 'media',
    })
    .on('end', function () {
      fetchLabels(file.name)
        .then((labels) => {
          console.log('Labels:')

          labels.forEach((label) => console.log(label.description))
          console.log('Done')
        })
        .catch((err) => console.log('Error during download', err))
    })
    .on('error', function (err) {
      console.log('Error during download', err)
    })
    .pipe(dest)
}

/**
 * Fetch labels from Google Cloud Vision API
 * @param filename
 * @returns {Promise<google.cloud.vision.v1.IEntityAnnotation[]>}
 */
async function fetchLabels(filename) {
  // Imports the Google Cloud client library
  const vision = require('@google-cloud/vision')

  // Creates a client
  const client = new vision.ImageAnnotatorClient()

  // Performs label detection on the image file
  const [result] = await client.labelDetection(`./tmp/${filename}`)
  return result.labelAnnotations
}
