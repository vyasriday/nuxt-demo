export default defineEventHandler(async (event) => {
  return $fetch(`https://api.coinlore.net${event.node.req.url}`)
})
