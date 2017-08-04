/* eslint-disable */

/**
 * [space 给字符串添加两端空字符，主要服务于vux.toast.text]
 * @param  {[type]} str
 * @return {[type]}    
 */
function space (str) {
  return ['&nbsp;', str, '&nbsp;'].join('')
}

export {
  space
}

/* eslint-enable */
