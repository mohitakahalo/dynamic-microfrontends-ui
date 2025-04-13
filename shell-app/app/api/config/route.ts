export async function GET() {
  const resp = await fetch(`${process.env.MOCK_API_URL}`)
  const responseJson = await resp.json()
  console.log(responseJson)
  return new Response(JSON.stringify(responseJson), {
    status: 200,
    headers: {'Content-Type': 'application/json'}
  })
}

export async function POST(request: Request) {
  // Parse the request body
  const body = await request.json()
  const {name} = body

  // e.g. Insert new user into your DB
  const newUser = {id: Date.now(), name}

  return new Response(JSON.stringify(newUser), {
    status: 201,
    headers: {'Content-Type': 'application/json'}
  })
}
