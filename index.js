
// from jquery.autoKana

var isHiragana = function(char){
  var matcher = char.match(/[\sぁあ-んー]/)
  return (matcher && matcher.length > 0) ? true : false
}
var isKatakana = function(char){
  var matcher = char.match(/[\sァ-ヶー]/)
  return (matcher && matcher.length > 0) ? true : false
}


module.exports.isHiraganaChar = isHiragana
module.exports.isKatakanaChar = isKatakana

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
