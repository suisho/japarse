var japanese = require("japanese")
// from jquery.autoKana

var isHiragana = function(str){
  var m = str.match(japanese.hiraganaRegex)
  return (m && m.length === str.length) ? true : false
}
var isKatakana = function(str){
  var m = str.match(japanese.katakanaRegex)
  return (m && m.length === str.length) ? true : false
}

var pack = function(value, hiragana, katakana){
  var obj = {
    value : value || "",
  }
  if(hiragana){
    obj.hiragana = hiragana
  }
  if(katakana){
    obj.katakana = katakana
  }
  return obj
}

var compare = function(obj1, obj2){
  return ["hiragana", "katakana"].every(function(key){
    return obj1[key] === obj2[key]
  })
}
module.exports = function(str){
  var splits = []
  var chars = (str || "").split("")
  var charObjs = chars.map(function(char){
    return pack(
      char,
      isHiragana(char),
      isKatakana(char)
    )
  })
  var rest = charObjs.reduce(function(a, b){
    if(compare(a, b)){
      return pack(a.value + b.value, a.hiragana, a.katakana)
    }else{
      splits.push(a)
      return b
    }
  })
  splits.push(rest)
  return splits
}
