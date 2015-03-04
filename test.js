var assert = require("power-assert")
var kana = require("./index")
describe("kana", function(){
  describe("extract kana", function(){
  /*  it("extracting kana", function(){
      var result = kana.extractKana("あああ山本")
      assert.equal("あああ", result)
    })*/
  })

  describe("regexp char funcs", function(){
    it("い", function(){
      var val = "い"
      assert.equal(true, kana.isHiragana(val))
      assert.equal(false, kana.isKatakana(val))
    })
    it("ぃ", function(){
      var val = "ぃ"
      assert.equal(true, kana.isHiragana(val))
      assert.equal(false, kana.isKatakana(val))
    })
    it("ウ", function(){
      var val = "ウ"
      assert.equal(false, kana.isHiragana(val))
      assert.equal(true, kana.isKatakana(val))
    })
    it("ゥ", function(){
      var val = "ゥ"
      assert.equal(false, kana.isHiragana(val))
      assert.equal(true, kana.isKatakana(val))
    })
    it("いあああ", function(){
      var val = "いあああ"
      assert.equal(true, kana.isHiragana(val))
      assert.equal(false, kana.isKatakana(val))
    })
    it("いあああウウウ", function(){
      var val = "いあああウウウ"
      assert.equal(false, kana.isHiragana(val))
      assert.equal(false, kana.isKatakana(val))
    })
  })
  describe("to katakana", function(){
    it("正常系", function(){
      var result = kana.toKatakana("あぅん")
      assert.equal("アゥン", result)
    })
    it("ひらがな以外をど含む場合", function(){
      var result = kana.toKatakana("あぅん鬼acdb")
      assert.equal("アゥン鬼acdb", result)
    })
  })
  describe("split", function(){
    it("あいうえお", function(){
      assert.deepEqual(["あいうえお"], kana.split("あいうえお"))
    })
    it("あい上お", function(){
      assert.deepEqual(["あい", "上", "お"], kana.split("あい上お"))
    })
    it("藍雨えお下記区けこ", function(){
      assert.deepEqual(["藍雨", "えお", "下記区", "けこ"], kana.split("藍雨えお下記区けこ"))
    })
  })
})

var parser = require("./parser")
describe("parser", function(){
  it("あ", function(){
    assert.equal(parser.parse("あ").value, "あ")
  })
  it("ああ", function(){
    assert.equal(parser.parse("ああ").value, "ああ")
  })
  it("イ", function(){
    console.log(parser.parse("イ"))
    //assert.equal(parser.parse("イ").value, "イ")
  })
  it("あイ", function(){
    var a = parser.parse("あイ")
    console.log(a)
    //assert.equal(a.value, "あイ")
  })
})
