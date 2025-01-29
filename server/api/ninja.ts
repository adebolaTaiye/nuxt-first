export default defineEventHandler( (event) => {
    const query = getQuery(event)
    return {
        message: `hello ${query.name}`
    }
  })
  