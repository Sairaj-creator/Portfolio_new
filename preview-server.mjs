import { createServer } from 'node:http'
import { readFile, stat } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'dist')

const contentTypes = {
  '.css': 'text/css',
  '.html': 'text/html',
  '.ico': 'image/x-icon',
  '.js': 'text/javascript',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
}

const server = createServer(async (request, response) => {
  const url = new URL(request.url ?? '/', 'http://127.0.0.1')
  const requestPath = decodeURIComponent(url.pathname)
  let filePath = path.join(root, requestPath === '/' ? 'index.html' : requestPath)

  if (!filePath.startsWith(root)) {
    response.writeHead(403)
    response.end('Forbidden')
    return
  }

  try {
    const fileStat = await stat(filePath)
    if (!fileStat.isFile()) {
      filePath = path.join(root, 'index.html')
    }
  } catch {
    filePath = path.join(root, 'index.html')
  }

  try {
    const data = await readFile(filePath)
    response.writeHead(200, {
      'Content-Type': contentTypes[path.extname(filePath)] ?? 'application/octet-stream',
    })
    response.end(data)
  } catch {
    response.writeHead(404)
    response.end('Not found')
  }
})

server.listen(4173, '127.0.0.1', () => {
  console.log('Portfolio preview: http://127.0.0.1:4173/')
})
