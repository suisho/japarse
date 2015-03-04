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
      assert.equal(true, kana.isHiraganaChar(val))
      assert.equal(false, kana.isKatakanaChar(val))
    })
    it("ぃ", function(){
      var val = "ぃ"
      assert.equal(true, kana.isHiraganaChar(val))
      assert.equal(false, kana.isKatakanaChar(val))
    })
    it("ウ", function(){
      var val = "ウ"
      assert.equal(false, kana.isHiraganaChar(val))
      assert.equal(true, kana.isKatakanaChar(val))
    })
    it("ゥ", function(){
      var val = "ゥ"
      assert.equal(false, kana.isHiraganaChar(val))
      assert.equal(true, kana.isKatakanaChar(val))
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