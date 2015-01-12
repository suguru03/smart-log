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
.info('ok')
.warn('kuma')
.error('dame', 'dame');

// extend - node only
s()('**** extend ****')
.ex()
.info('kt', { a: { b: { c: { d: { e: 1 } } } } })
.ex(false)
( { a: { b: { c: { d: { e: 2 } } } } });

// renewal
var sl = require('smart-log').SmartLog();
sl()('**** renewal ****');
sl('kuma');
