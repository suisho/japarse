
// from jquery.autoKana

var isHiragana = function(str){
  var matcher = str.match(/[\sぁあ-んー]/)
  return (matcher && matcher.length > 0) ? true : false
}
var isKatakana = function(str){
  var matcher = str.match(/[\sァ-ヶー]/)
  return (matcher && matcher.length > 0) ? true : false
}

module.exports.isHiragana = isHiragana
module.exports.isKatakana = isKatakana

module.exports.toKatakana = function(str){
  return str.split("").map(function(char){
    if(isHiragana(char)){
      var code = char.charCodeAt()
      return String.fromCharCode(code + 96)
    }
    return char
  }).join("")
}

module.exports.split = function(str){
  str = str || ""
  var splits = []
  var currentBuffer = ""
  var currentMode
  str.split("").forEach(function(char){
    var kanaFlag = isHiragana(char)
    if(currentMode === undefined){ // initalize
      currentMode = kanaFlag
    }
    // console.log(char, kanaFlag, currentMode, currentBuffer)
    if(currentMode !== kanaFlag){
      splits.push(currentBuffer)
      currentBuffer = ""
      currentMode = kanaFlag
    }
    currentBuffer += char
  })
  splits.push(currentBuffer)
  return splits
}
