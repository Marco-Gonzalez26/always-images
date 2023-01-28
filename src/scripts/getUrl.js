import fs from 'fs'

export default function (url) {
  return fs.createReadStream(url)
}
