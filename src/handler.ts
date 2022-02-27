export async function handleRequest(request: Request): Promise<Response> {
  const fd = await request.formData()
  const file = fd.get('file') as File
  const size = file?.size ?? 0
  console.log('111size:', size)
  return new Response(`111request method: ${request.method} ${size}`)
}
