#Smart-Log

```js
var s = require('smart-log');

// simple
s('**** simple ****');
s('kt');
/*
**** simple ****
ｷﾀ━━━━(ﾟ∀ﾟ)━━━━!!!!
*/

// multi
s()('**** multi ****');
s('kt')('ktkr')('test')('good');
/*
**** multi ****
ｷﾀ━━━━(ﾟ∀ﾟ)━━━━!!!!
ｷﾀ(ﾟ∀ﾟ)ｺﾚ
test
(￣ー￣)ｂｸﾞｯ!
*/

// chain
s()('**** chain ****');
s
.configure({
  kuma: '(*￣(ｴ)￣*)'
})
('kiri')
.log('kt')
.info('ok')
.warn('kuma')
.error('dame', 'dame');
/*
**** chain ****
( ｰ`дｰ´)ｷﾘｯ
ｷﾀ━━━━(ﾟ∀ﾟ)━━━━!!!!
( ´∀｀)bｸﾞｯ!
(*￣(ｴ)￣*)
ﾀﾞｧﾒ 乂(ﾟДﾟ三ﾟДﾟ)乂 ﾀﾞｧﾒ dame
*/

// extend - node only
s()('**** extend ****')
.ex()
.info('kt', { a: { b: { c: { d: { e: 1 } } } } })
.ex(false)
( { a: { b: { c: { d: { e: 2 } } } } });
/*
**** extend ****
ｷﾀ━━━━(ﾟ∀ﾟ)━━━━!!!! { a: { b: { c: { d: { e: 1 } } } } }
{ a: { b: { c: [Object] } } }
*/

// renewal
var sl = require('smart-log').SmartLog();
sl()('**** renewal ****');
sl('kuma');
/*
**** renewal ****
（´(ｪ)｀）
*/
```


