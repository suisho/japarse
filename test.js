var assert = require("power-assert")
var japarse = require("./index")
describe("kana", function() {
  describe("extract kana", function() {
    /*  it("extracting kana", function(){
        var result = kana.extractKana("あああ山本")
        assert.equal("あああ", result)
      })*/
  })

  describe("split", function() {
    it("あいうえお", function() {
      assert.deepEqual([{
        value : "あいうえおお",
        hiragana : true,
        katakana : false
      }], japarse("あいうえおお"))
    })
    it("あい上お", function() {
      assert.deepEqual([{
        value : "あい",
        hiragana : true,
        katakana : false
      }, {
        value : "上",
        hiragana : false,
        katakana : false
      }, {
        value : "お",
        hiragana : true,
        katakana : false
      }, ], japarse("あい上お"))
    })
    it("藍雨えお下記区ケコ", function() {
      assert.deepEqual([
        {value:"藍雨", hiragana: false, katakana :false },
        {value:"えお", hiragana: true, katakana :false },
        {value:"下記区", hiragana: false, katakana :false },
        {value:"ケコ", hiragana: false, katakana :true }
      ],
      japarse("藍雨えお下記区ケコ"))
    })
  })
})
