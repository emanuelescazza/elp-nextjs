async function fetchAPI(params, model) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/${model}`)

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }

  return json.data
}