
// vue
// 富文本反转义html  项目中用到
export function escape2Html (str) {
  let re1 = new RegExp('<.+?>', 'g')
  let wenText1 = str.replace(re1, '')
  var arrEntities = { '&lt;': '<', '&gt;': '>', '&nbsp;': ' ', '&amp;': '&', '&quot;': '"' }
  return wenText1.replace(/(&lt;|&gt;|&nbsp;|&amp;|&quot;)/g, function (t) {
    return arrEntities[t]
  })
}

// 富文本转义html
export function html2Escape (str) {
  return str.replace(/[<>&"]/g, function (c) {
    return { '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' }[c]
  })
}
