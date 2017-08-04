/* eslint-disable */

/**
 * [update 更新页面title]
 * @problem  微信/支付宝：document.title没法实时更新title
 * @resolve  通过iframe的加载，让webview更新title
 * @return
 */
function update (title) {
  var doc = window.document
  if (!title || doc.title === title) return
  doc.title = title
  var iframe = doc.createElement('iframe')
  iframe.src = 'data:text/html; charset=utf-8, Hello World!'
  iframe.style.visibility = 'hidden'
  iframe.style.width = iframe.style.height = '0'
  iframe.onload = function () {
    setTimeout(function () {
      doc.body.removeChild(iframe)
    }, 0)
  }
  doc.body.appendChild(iframe)
}

export {
  update
}
/* eslint-ensable */
