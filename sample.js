'use strict';

var s = require('smart-log');

// simple
s('**** simple ****');
s('kt');

// multi
s()('**** multi ****');
s('kt')('ktkr')('test')('good');

// chain
s()('**** chain ****');
s
.configure({
  kuma: '(*￣(ｴ)￣*)'
})
('kiri')
.log('kt')
.color('c')
.info('ok')
.c('m')
.warn('kuma')
.c('r')
.error('dame', 'dame')
.c('clear');

// extend - node only
s()('**** extend ****')
.ex()
.info('kt', { a: { b: { c: { d: { e: 1 } } } } })
.ex(false)
( { a: { b: { c: { d: { e: 2 } } } } });

// activate and inactivate
s()('**** activate ****')
.inactivate()
.log('ok')
.activate()
.log('ok');

// smart line
s()('**** smart line ****')
.log('4-')
.info('8+')
.warn('12=')
.error('10hoge')
.configure({
  'l': '48='
})
.c('y')
.log('l')
.c('clear')
.log('10');

// timer
s()('**** timer ****')
.time('test')
.timeEnd('test')
.timeClear('test')
.t(['test', 'kt'])
.te('test', 'kt')
.te('kt')
.tc('test')
.c('c')
.t('test')
.te('test');

// renewal
var sl = require('smart-log').SmartLog();
sl()('**** renewal ****');
sl('kuma');

