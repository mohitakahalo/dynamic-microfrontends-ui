export const fetcher = async (
  url: string,
  method: string = 'GET',
  body: unknown = null
) => {
  try {
    const res = await fetch(url, {
      method,
      ...(!!body && {body: JSON.stringify(body)})
    })
    return res.json()
  } catch (error) {
    console.error(error)
  }
}
