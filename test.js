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
        value: "あいうえおお",
        hiragana: true,
      }], japarse("あいうえおお"))
    })
    it("あい上お", function() {
      assert.deepEqual([{
        value: "あい",
        hiragana: true,
      }, {
        value: "上",
      }, {
        value: "お",
        hiragana: true,
      }, ], japarse("あい上お"))
    })
    it("藍雨えお下記区ケコ", function() {
      assert.deepEqual([{
          value: "藍雨",
        }, {
          value: "えお",
          hiragana: true,
        }, {
          value: "下記区",
        }, {
          value: "ケコ",
          katakana: true
        }],
        japarse("藍雨えお下記区ケコ"))
    })
  })
})
