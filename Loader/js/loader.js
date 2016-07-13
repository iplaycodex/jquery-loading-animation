var loader = (function () {
    function createMask() {
        var scrollWidth = document.documentElement.clientWidth || document.body.clientWidth;
        var scrollHeight = document.documentElement.clientHeight || document.body.clientHeight;
        var availHeight = window.screen.availHeight;
        var oMask = document.createElement("div");
        oMask.id = "mask";
        oMask.style.height = scrollHeight + "px";
        oMask.style.width = scrollWidth + "px";
        document.body.appendChild(oMask);
        return oMask;
    }

    function hasClass(obj, cls) {
        return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
    }

    function addClass(obj, cls) {
        if (!hasClass(obj, cls)) obj.className += " " + cls;
    }

    function removeClass(obj, cls) {
        if (hasClass(obj, cls)) {
            var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
            obj.className = obj.className.replace(reg, ' ');
        }
    }

    function toggleClass(obj, cls) {
        if (hasClass(obj, cls)) {
            removeClass(obj, cls);
        } else {
            addClass(obj, cls);
        }
    }

    var delay = 2000;

    var close = function (callback) {
        var mask = document.getElementById('mask');
        var dailog = document.getElementById('dailog');
        addClass(mask, 'showUI-fadeOut');
        setTimeout(function () {
            document.body.removeChild(dailog);
            document.body.removeChild(mask);
        }, this.delay);
        if (callback && typeof (callback) == 'function') {
            callback();
        }
    };

    //扩展map
    var Map = function () {
        this._entrys = new Array();

        this.put = function (key, value) {
            if (key == null || key == undefined) {
                return;
            }
            var index = this._getIndex(key);
            if (index == -1) {
                var entry = new Object();
                entry.key = key;
                entry.value = value;
                this._entrys[this._entrys.length] = entry;
            } else {
                this._entrys[index].value = value;
            }
        };
        this.get = function (key) {
            var index = this._getIndex(key);
            return (index != -1) ? this._entrys[index].value : null;
        };
        this.remove = function (key) {
            var index = this._getIndex(key);
            if (index != -1) {
                this._entrys.splice(index, 1);
            }
        };
        this.clear = function () {
            this._entrys.length = 0;;
        };
        this.contains = function (key) {
            var index = this._getIndex(key);
            return (index != -1) ? true : false;
        };
        this.getCount = function () {
            return this._entrys.length;
        };
        this.getEntrys = function () {
            return this._entrys;
        };
        this._getIndex = function (key) {
            if (key == null || key == undefined) {
                return -1;
            }
            var _length = this._entrys.length;
            for (var i = 0; i < _length; i++) {
                var entry = this._entrys[i];
                if (entry == null || entry == undefined) {
                    continue;
                }
                if (entry.key === key) {//equal  
                    return i;
                }
            }
            return -1;
        };
    }

    var classMap = new Map();
    classMap.put('ball-pulse', '<div></div><div></div><div></div>');
    classMap.put('ball-grid-pulse', '<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>');
    classMap.put('ball-clip-rotate', '<div></div>');
    classMap.put('ball-clip-rotate-pulse', '<div></div><div></div>');
    classMap.put('square-spin', '<div></div>');
    classMap.put('ball-clip-rotate-multiple', '<div></div><div></div>');
    classMap.put('ball-pulse-rise', '<div></div><div></div><div></div><div></div><div></div>');
    classMap.put('ball-rotate', '<div></div>');
    classMap.put('cube-transition', '<div></div><div></div>');
    classMap.put('ball-zig-zag', '<div></div><div></div>');
    classMap.put('ball-zig-zag-deflect', '<div></div><div></div>');
    classMap.put('ball-triangle-path', '<div></div><div></div><div></div>');
    classMap.put('ball-scale', '<div></div>');
    classMap.put('line-scale', '<div></div><div></div><div></div><div></div><div></div>');
    classMap.put('line-scale-party', '<div></div><div></div><div></div><div></div>');
    classMap.put('ball-scale-multiple', '<div></div><div></div><div></div>');
    classMap.put('ball-pulse-sync', '<div></div><div></div><div></div>');
    classMap.put('ball-beat', '<div></div><div></div><div></div>');
    classMap.put('line-scale-pulse-out', '<div></div><div></div><div></div><div></div><div></div>');
    classMap.put('line-scale-pulse-out-rapid', '<div></div><div></div><div></div><div></div><div></div>');
    classMap.put('ball-scale-ripple', '<div></div>');
    classMap.put('ball-scale-ripple-multiple', '<div></div><div></div><div></div>');
    classMap.put('ball-spin-fade-loader', '<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>');
    classMap.put('line-spin-fade-loader', '<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>');
    classMap.put('triangle-skew-spin', '<div></div>');
    classMap.put('pacman', '<div></div><div></div><div></div><div></div><div></div>');
    classMap.put('ball-grid-beat', '<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>');
    classMap.put('semi-circle-spin', '<div></div>');

    var loading = function (params) {
        var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
        var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
        /*创建遮罩层*/
        var mask = createMask();
        var alertDlg = document.createElement("div");
        alertDlg.id = 'dailog';
        if (!params) {
            params = {};
            params.className = 'ball-pulse';
            params.delay = 2000;
        }

        var className = params.className || 'ball-pulse';
        var div = this.map.get(className);
        addClass(alertDlg, className);
        //获取登陆框的宽和高
        var dHeight = alertDlg.offsetHeight;
        var dWidth = alertDlg.offsetWidth;
        //设置登陆框的left和top
        alertDlg.style.left = clientWidth / 2 - dWidth / 2 + "px";
        alertDlg.style.top = clientHeight / 2 - dHeight / 2 + "px";
        alertDlg.innerHTML = div;
        document.body.appendChild(alertDlg);
        if (params.delay > 0) {
            loader.delay = params.delay;
        }
    };

    return {
        loading: loading,
        close: close,
        map: classMap
    };
})(window.loader || {});