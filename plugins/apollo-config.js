export default function() {
  return {
    httpEndpoint: 'https://graphql.datocms.com',
    getAuth: () => `Bearer ${process.env.DATOCMS_API}`
  }
}
