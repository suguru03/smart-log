/* global performance */
(function() {

  'use strict';

  var method = [
    'debug',
    'log',
    'info',
    'warn',
    'error'
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

  var objectTypes = {
    'function': true,
    'object': true
  };

  function SmartLog() {

    var _smartObject = {};
    var extend = false;
    var smart = true;
    var timer = {};
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

    // activate feature of replace text
    smartLog.activate = function() {

      smart = true;
      return this;
    };

    // inactivate feature of replace text
    smartLog.inactivate = function() {

      smart = false;
      return this;
    };

    // node only
    smartLog.ex = function(bool) {
      extend = objectTypes[module] ? bool !== false : false;
      return this;
    };

    /**
     * @param {String|String[]} name
     */
    smartLog.time = smartLog.t = function time(name) {
      if (Array.isArray(name)) {
        _arrayEach(name, function(name) {
          time(name);
        });
        return this;
      }
      if (arguments.length > 1) {
        _objectEach(arguments, function(name) {
          time(name);
        });
        return this;
      }
      name = _smartObject[name] || name;
      timer[name] = getTimer().init().start();
      return this;
    };

    /**
     * @param {String|String[]} name
     */
    smartLog.timeEnd = smartLog.te = function timeEnd(name) {
      if (Array.isArray(name)) {
        _arrayEach(name, function(name) {
          timeEnd(name);
        });
        return this;
      }
      if (arguments.length > 1) {
        _objectEach(arguments, function(name) {
          timeEnd(name);
        });
        return this;
      }
      name = _smartObject[name] || name;
      if (timer[name]) {
        console.log(name, timer[name].diff(), '[μs]');
      }
      return this;
    };

    /**
     * @param {String|String[]} name
     */
    smartLog.timeClear = smartLog.tc = function timeClear(name) {
      if (Array.isArray(name)) {
        _arrayEach(name, function(name) {
          timeClear(name);
        });
        return this;
      }
      if (arguments.length > 1) {
        _objectEach(arguments, function(name) {
          timeClear(name);
        });
        return this;
      }
      name = _smartObject[name] || name;
      if (timer[name]) {
        delete timer[name];
      }
      return this;
    };


    _arrayEach(method, function(level) {
      smartLog[level] = function(smartKey) {
        var smartValue = smartKey;
        if (smart) {
          smartValue = _smartObject[smartKey] !== undefined ? _smartObject[smartKey] : smartKey;
        }
        if (smart && typeof smartValue === 'string') {
          var keys = smartValue.split('');
          var size = keys.length;
          var index = keys.reverse().reduce(function(memo, value, index) {
            if (memo === -1 && /[0-9]/.test(+value)) {
              memo = size - index;
            }
            return memo;
          }, -1);

          if (index >= 0 && index < size) {
            var num = smartValue.substr(0, index);
            var str = smartValue.substr(index);
            if (!isNaN(num) && num > 0) {
              var s = _smartObject[str] || str;
              smartValue = s;
              while(--num) {
                smartValue += s;
              }
            }
          }
        }

        var l = arguments.length - 1;
        if (l > 0) {
          var i = 0;
          var args = Array(l);
          while(i++ < l) {
            if (extend) {
              args[i - 1] = require('util').inspect(arguments[i], false, null);
            } else {
              args[i - 1] = arguments[i];
            }
          }
          args.unshift(smartValue);
          if (console[level]) {
            console[level].apply(console, args);
          } else {
            console.log.apply(console, args);
          }
        } else {
          var arg = smartValue === undefined ? '' : smartValue;
          if (extend) {
            arg = require('util').inspect(arg, false, null);
          }
          if (console[level]) {
            console[level](arg);
          } else {
            console.log(arg);
          }
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

  function getTimer() {

    if (objectTypes[typeof process] && process && process.hrtime) {
      return nodeTimer();
    }
    if (objectTypes[typeof performance] && performance && performance.now) {
      return performanceTimer();
    }
  }

  function nodeTimer() {

    // process.hrtime
    return {

      _startTime: null,
      _diff: null,

      init: function() {

        this._startTime = null;
        this._diff = null;
        return this;
      },

      start: function () {

        this._startTime = process.hrtime();
        return this;
      },

      diff: function() {

        var diff = process.hrtime(this._startTime);
        // ns
        this._diff = diff[0] * 1e9 + diff[1];
        return this._diff / 1000;
      }
    };
  }

  function performanceTimer() {

    // performance.now
    return {

      _startTime: null,
      _diff: null,

      init: function() {

        this._startTime = null;
        this._diff = null;
        return this;
      },

      start: function () {

        this._startTime = performance.now();
        return this;
      },

      diff: function() {

        // ms
        this._diff = performance.now() - this._startTime;
        return this._diff * 1000;
      }
    };
  }

  var s = SmartLog();
  s.SmartLog = SmartLog;

  // AMD / RequireJS
  if (objectTypes[typeof define] && define && define.amd) {
    define([], function() {
      return s;
    });
  }
  // Node.js
  else if (objectTypes[typeof module] && module && module.exports) {
    module.exports = s;
  } else {
    this.s = this.smartLog = s;
  }

}).call(this);
