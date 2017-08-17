'use strict'

const sizeOf = require('image-size')

const svgTemplate = (url, width, height) => `
  <svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <image width="${width}" height="${height}" xlink:href="${url}"/>
  </svg>
`.trim()

module.exports = function (content, arg1, arg2) {
  const sizeInfo = sizeOf(content)

  let url = content

  if (Buffer.isBuffer(url)) {
    url = `data:image/${sizeInfo.type};base64,${content.toString('base64')}`
  }

  return svgTemplate(url, sizeInfo.width, sizeInfo.height)
}

module.exports.raw = true
