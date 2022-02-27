import fetch from 'node-fetch'
import FormData from 'form-data'
import { createReadStream } from 'fs'
const formData = new FormData()
formData.append('file', createReadStream('package.json'))
const url = 'https://test-worker.ahaoboy.workers.dev/'

async function main() {
  const resp = await fetch(url, {
    method: 'POST',
    body: formData,
  })
  console.log(await resp.text())
}

main()
