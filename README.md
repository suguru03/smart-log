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
.debug('kta')
.info('ok')
.warn('kuma')
.error('dame')
.fatal('kita');
/*
**** chain ****
( ｰ`дｰ´)ｷﾘｯ
ｷﾀ━━━━(ﾟ∀ﾟ)━━━━!!!!
ｷﾀ━━━━o(*´∀`)○━━━━━!!
( ´∀｀)bｸﾞｯ!
(*￣(ｴ)￣*)
ﾀﾞｧﾒ 乂(ﾟДﾟ三ﾟДﾟ)乂 ﾀﾞｧﾒ
ｷﾀ━━━━(°Д°)━━━━!!!!
*/

// renewal
var sl = require('smart-log').SmartLog();
sl()('**** renewal ****');
sl('kuma');
/*
（´(ｪ)｀）
*/
```


