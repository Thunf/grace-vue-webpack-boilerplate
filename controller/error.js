'use strict'

exports[404] = function*() {
  this.body = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>404</title>
        <style>
          html{padding: 20vh;text-align: center}
          a{color: #42b983}
        </style>
      </head>
      <body>
        <h2>离开彼此</h2>
        <h2>我们就像个迷路的孩子</h2>
        <h2>踏上迷途</h2>
        <h2><a href="/home">点这找回</a>来时的路</h2>
      </body>
    </html>
  `;
}
