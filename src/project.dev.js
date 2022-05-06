window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  register: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6d729fmli9DD6kYsgRZl9Ho", "register");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        _email: "",
        _passWord: "",
        _numberPhone: "",
        _passWordAgain: "",
        prefabItem: cc.Prefab,
        registerAgain: cc.Component,
        content: cc.Component,
        btnRegister: cc.Component,
        btndelete: cc.Component,
        wellcome: cc.Component,
        slider: cc.Component,
        loading: cc.Component,
        _countCheck: 0
      },
      getInfoRegister: function getInfoRegister() {
        var register = this.node.getChildByName("register");
        this._email = this.getString(register, "Email");
        this._passWord = this.getString(register, "Password");
        this._numberPhone = this.getString(register, "numberPhone");
        this._passWordAgain = this.getString(register, "PasswordAgain");
      },
      handlerRegister: function handlerRegister() {
        if (!this.checkEmail()) {
          alert("vui l\xf2ng nh\u1eadp \u0111\xfang email : example@gmail.com");
          return;
        }
        this.enabled = false;
        var item = cc.instantiate(this.prefabItem);
        item.getChildByName("userName").getComponent(cc.Label).string = this._email;
        item.parent = this.content.node;
        item.x = 22.208;
        this.loading.node.active = true;
        this.loadingProgressBar();
      },
      loadingProgressBar: function loadingProgressBar() {
        var _this = this;
        this.wellcome.node.active = true;
        var interval = setInterval(function() {
          _this.loading.getComponent(cc.ProgressBar).progress += .01;
          if (_this.loading.getComponent(cc.ProgressBar).progress >= 1) {
            _this.loading.node.active = false;
            _this.activeNode(true);
            clearInterval(interval);
          }
        }, 50);
      },
      activeNode: function activeNode(bool) {
        this.wellcome.node.active = false;
        this.node.getChildByName("register").active = !bool;
        this.node.getChildByName("showUser").active = bool;
        this.registerAgain.node.active = bool;
        this.btndelete.node.active = bool;
        this.slider.node.active = bool;
      },
      handleSlider: function handleSlider() {
        var item = this.content.node;
        for (var i = 0; i < item.children.length; i++) {
          var labelPrefab = item.children[i].getChildByName("userName").getComponent(cc.Label);
          labelPrefab.fontSize = 8 + .125 * this.slider.progress * 64;
        }
      },
      handlerRegisterAgain: function handlerRegisterAgain() {
        this.loading.getComponent(cc.ProgressBar).progress = 0;
        this.activeNode(false);
      },
      handleDelete: function handleDelete() {
        var item = this.content.node;
        for (var i = 0; i < item.children.length; i++) {
          cc.log(item.children);
          var checkitem = item.children[i].getChildByName("checkBox").getComponent(cc.Toggle).isChecked;
          true == checkitem && item.children[i].destroy();
        }
      },
      getString: function getString(nodeString, labelName) {
        var content = nodeString.getChildByName(labelName).getChildByName("TEXT_LABEL").getComponent(cc.Label).string;
        return content;
      },
      start: function start() {},
      update: function update(dt) {
        this.getInfoRegister();
        "" != this._email.trim() && "" != this._passWord.trim() ? this.btnRegister.getComponent(cc.Button).interactable = true : this.btnRegister.getComponent(cc.Button).interactable = false;
      },
      checkEmail: function checkEmail() {
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return !!filter.test(this._email);
      }
    });
    cc._RF.pop();
  }, {} ]
}, {}, [ "register" ]);