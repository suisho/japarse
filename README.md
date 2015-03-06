# Japarser
> Japanese string parser

# Install

```
npm install --save japarse
```
# Usage

```
var result = japarse("藍雨えお下記区ケコ")
```

And result like this
```
[{
  value: "藍雨",
}, {
  value: "えお",
  hiragana: true,
}, {
  value: "下記区",
}, {
  value: "ケコ",
  katakana: true
}]
```

This is inspired by [diff](https://www.npmjs.com/package/diff)

## Output objects
These objects are consist of the following fields:

- `value` : Text content
- `hiragana` : True if Hiragana
- `katakana` : True if Katakana

# TODO
- 半角カナ (`hankaku` fields)
