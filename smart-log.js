'use strict';

module.exports = SmartLog;

var method = [
  'log',
  'debug',
  'info',
  'warn',
  'error',
  'fatal'
];

var smartObject = {
  'kt': 'ｷﾀ━━━━(ﾟ∀ﾟ)━━━━!!!!',
  'kta': 'ｷﾀ━━━━o(*´∀`)○━━━━━!!',
  'ktkr': 'ｷﾀ(ﾟ∀ﾟ)ｺﾚ',
  'kita': 'ｷﾀ━━━━(°Д°)━━━━!!!!',
  'kiri': '( ｰ`дｰ´)ｷﾘｯ',
  'ok': '( ´∀｀)bｸﾞｯ!',
  'good': '(￣ー￣)ｂｸﾞｯ!',
  'kuma': '（´(ｪ)｀）',
  'dame': 'ﾀﾞｧﾒ 乂(ﾟДﾟ三ﾟДﾟ)乂 ﾀﾞｧﾒ'
};

function SmartLog() {

  var _smartObject = {};
  _objectEach(smartObject, function(value, key) {
    _smartObject[key] = value;
  });

  var smartLog = function() {
    smartLog.log.apply(smartLog, arguments);
    return smartLog;
  };

  /**
   * @param {Object} options
   */
  smartLog.configure = function(options) {

    _objectEach(options, function(value, key) {
      _smartObject[key] = options[key];
    });
    return this;
  };

  _arrayEach(method, function(level) {
    smartLog[level] = function(smartKey) {
      var smartValue = _smartObject[smartKey];
      if (smartValue === undefined) {
        smartValue = smartKey;
      }
      var l = arguments.length - 1;
      if (l > 0) {
        var i = 0;
        var args = Array(l);
        while(i++ < l) {
          args[i - 1] = arguments[i];
        }
        args.unshift(smartValue);
        console.log.apply(console, args);
      } else {
        console.log(smartValue === undefined ? '' : smartValue);
      }
      return this;
    };
  });

  return smartLog;
}

function _arrayEach(array, iterator) {

  var i = -1;
  var l = array.length;
  while(++i < l) {
    iterator(array[i], i);
  }
}

function _objectEach(object, iterator) {

  var keys = Object.keys(object);
  var i = -1;
  var l = keys.length;
  while(++i < l) {
    var key = keys[i];
    iterator(object[key], key);
  }
}

