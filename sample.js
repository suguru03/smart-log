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
.debug('kta')
.info('ok')
.warn('kuma')
.error('dame')
.fatal('kita', 'kita');

// renewal
var sl = require('smart-log').SmartLog();
sl()('**** renewal ****');
sl('kuma');
