var Parsimmon = require("Parsimmon")
var lazy = Parsimmon.lazy
var optWhite = Parsimmon.optWhitespace
var regex = Parsimmon.regex
var any = Parsimmon.any
var seq = Parsimmon.seq
var alt = Parsimmon.alt

var hiraganaLiteral = regex(/[ぁあ-んー]*/).desc("hiragana")
var katakanaLiteral = regex(/[ァ-ヶー]*/).desc("katakana")
//var kana = hiraganaLiteral.or(katakanas) //.or(optWhite).or(any)
var expr = lazy("Kana parser", function(){
  return alt(hiraganaLiteral, katakanaLiteral)// optWhite, any)
})

module.exports = expr
