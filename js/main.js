/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_components.js":
/*!*******************************!*\
  !*** ./src/js/_components.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_ex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ex */ "./src/js/components/ex.js");


/***/ }),

/***/ "./src/js/_vendor.js":
/*!***************************!*\
  !*** ./src/js/_vendor.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor/focus-visible.js */ "./src/js/vendor/focus-visible.js");
/* harmony import */ var _vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vendor_jquery_validate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vendor/jquery.validate.js */ "./src/js/vendor/jquery.validate.js");
/* harmony import */ var _vendor_jquery_validate_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vendor_jquery_validate_js__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/js/components/ex.js":
/*!*********************************!*\
  !*** ./src/js/components/ex.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var graph_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graph-tabs */ "./node_modules/graph-tabs/src/graph-tabs.js");
// Реализация табов

const profileTabs = document.querySelector('.profile__tabs');
if (profileTabs) {
  const tabs = new graph_tabs__WEBPACK_IMPORTED_MODULE_0__["default"]('profile');
}
const cityNizhny = document.querySelector('.city-nizhny');
if (cityNizhny) {
  const cityAnother = document.querySelector('.city-another');
  const input1 = cityNizhny.querySelector('input');
  input1.addEventListener('change', () => {
    if (input1.checked) {
      $('.js-city_area-spoiler').slideUp(300);
      $('.js-city_nizhny-spoiler').slideDown(300);
    }
  });
  const input2 = cityAnother.querySelector('input');
  input2.addEventListener('change', () => {
    if (input2.checked) {
      $('.js-city_nizhny-spoiler').slideUp(300);
      $('.js-city_area-spoiler').slideDown(300);
    }
  });
}
const testTimer = document.querySelector('#timer');
if (testTimer) {
  let time = 1500;
  // const countDownEl = document.getelementById("#timer-minutes");
  const test = document.querySelector('.test');
  const testEnd = document.querySelector('.test__end');
  function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    testTimer.innerHTML = `${minutes}:${seconds}`;
    time--;
    if (minutes <= 4) {
      testTimer.style.color = '#FF4D1C';
    }
    if (time < 0) {
      test.classList.add('hide');
      testEnd.classList.add('active');
    }
  }
  setInterval(updateCountdown, 1000);
}
const testSubmitBtn = document.querySelector('#test-submit');
if (testSubmitBtn) {
  const test = document.querySelector('.test');
  const testEnd = document.querySelector('.test__end');
  testSubmitBtn.addEventListener('click', e => {
    e.preventDefault();
    test.classList.add('hide');
    testEnd.classList.add('active');
  });
}

// Input file
const fileInputWrap = document.querySelector('.upload__area');
const inputs = document.querySelectorAll('.input__file');
if (fileInputWrap) {
  const input = fileInputWrap.querySelector('input[type="file"]');
  let label = fileInputWrap.querySelector('.upload__area_text');
  labelVal = label.querySelector('.user-file').innerText;
  input.addEventListener('change', function (e) {
    let countFiles = '';
    if (this.files && this.files.length >= 1) countFiles = this.files.length;
    if (countFiles)
      // label.querySelector('.input__file-button-text').innerText = 'Выбрано файлов: ' + countFiles;
      label.querySelector('.user-file').innerText = this.files[0].name;else label.querySelector('.user-file').innerText = labelVal;
    const uploadReq = document.querySelector('.upload__required');
    var fname = this.files[0].name;
    var re = /(\.jpg|\.jpeg|\.pdf)$/i;
    if (!re.exec(fname) && this.files[0].size <= 10485760) {
      uploadReq.classList.add('active');
      input.value = '';
      label.querySelector('.user-file').innerText = labelVal;
    } else {
      uploadReq.classList.remove('active');
    }
  });
}

// change res of the test
const resInputs = document.querySelectorAll('.vol_ball_cur');
if (resInputs.length != 0) {
  const testResult = document.querySelector('#test-result');
  let res = 0;
  for (let i = 0; i < resInputs.length; i++) {
    res += parseInt(resInputs[i].value);
  }
  testResult.innerHTML = res;
  for (let j = 0; j < resInputs.length; j++) {
    resInputs[j].addEventListener('change', () => {
      let res = 0;
      for (let i = 0; i < resInputs.length; i++) {
        res += parseInt(resInputs[i].value);
      }
      testResult.innerHTML = res;
    });
  }
}

// password check
const passwordForm = document.querySelector('#password-form');
if (passwordForm) {
  const infoItems = passwordForm.querySelectorAll('input');
  const passwordsError = document.querySelector('.passwords-error');
  const passwordSubmit = passwordForm.querySelector('.content-block__more');
  infoItems[0].addEventListener('input', () => {
    if (infoItems[1].value != '' && infoItems[0].value != infoItems[1].value) {
      passwordsError.classList.add('visible');
      passwordSubmit.classList.add('disabled');
    } else {
      passwordsError.classList.remove('visible');
      passwordSubmit.classList.remove('disabled');
    }
  });
  infoItems[1].addEventListener('input', () => {
    if (infoItems[0].value != '' && infoItems[0].value != infoItems[1].value) {
      passwordsError.classList.add('visible');
      passwordSubmit.classList.add('disabled');
    } else {
      passwordsError.classList.remove('visible');
      passwordSubmit.classList.remove('disabled');
    }
  });
}

/***/ }),

/***/ "./src/js/vendor/focus-visible.js":
/*!****************************************!*\
  !*** ./src/js/vendor/focus-visible.js ***!
  \****************************************/
/***/ (() => {

/**
 * Applies the :focus-visible polyfill at the given scope.
 * A scope in this case is either the top-level Document or a Shadow Root.
 *
 * @param {(Document|ShadowRoot)} scope
 * @see https://github.com/WICG/focus-visible
 */
function applyFocusVisiblePolyfill(scope) {
  var hadKeyboardEvent = true;
  var hadFocusVisibleRecently = false;
  var hadFocusVisibleRecentlyTimeout = null;
  var inputTypesAllowlist = {
    text: true,
    search: true,
    url: true,
    tel: true,
    email: true,
    password: true,
    number: true,
    date: true,
    month: true,
    week: true,
    time: true,
    datetime: true,
    'datetime-local': true
  };

  /**
   * Helper function for legacy browsers and iframes which sometimes focus
   * elements like document, body, and non-interactive SVG.
   * @param {Element} el
   */
  function isValidFocusTarget(el) {
    if (el && el !== document && el.nodeName !== 'HTML' && el.nodeName !== 'BODY' && 'classList' in el && 'contains' in el.classList) {
      return true;
    }
    return false;
  }

  /**
   * Computes whether the given element should automatically trigger the
   * `focus-visible` class being added, i.e. whether it should always match
   * `:focus-visible` when focused.
   * @param {Element} el
   * @return {boolean}
   */
  function focusTriggersKeyboardModality(el) {
    var type = el.type;
    var tagName = el.tagName;
    if (tagName === 'INPUT' && inputTypesAllowlist[type] && !el.readOnly) {
      return true;
    }
    if (tagName === 'TEXTAREA' && !el.readOnly) {
      return true;
    }
    if (el.isContentEditable) {
      return true;
    }
    return false;
  }

  /**
   * Add the `focus-visible` class to the given element if it was not added by
   * the author.
   * @param {Element} el
   */
  function addFocusVisibleClass(el) {
    if (el.classList.contains('focus-visible')) {
      return;
    }
    el.classList.add('focus-visible');
    el.setAttribute('data-focus-visible-added', '');
  }

  /**
   * Remove the `focus-visible` class from the given element if it was not
   * originally added by the author.
   * @param {Element} el
   */
  function removeFocusVisibleClass(el) {
    if (!el.hasAttribute('data-focus-visible-added')) {
      return;
    }
    el.classList.remove('focus-visible');
    el.removeAttribute('data-focus-visible-added');
  }

  /**
   * If the most recent user interaction was via the keyboard;
   * and the key press did not include a meta, alt/option, or control key;
   * then the modality is keyboard. Otherwise, the modality is not keyboard.
   * Apply `focus-visible` to any current active element and keep track
   * of our keyboard modality state with `hadKeyboardEvent`.
   * @param {KeyboardEvent} e
   */
  function onKeyDown(e) {
    if (e.metaKey || e.altKey || e.ctrlKey) {
      return;
    }
    if (isValidFocusTarget(scope.activeElement)) {
      addFocusVisibleClass(scope.activeElement);
    }
    hadKeyboardEvent = true;
  }

  /**
   * If at any point a user clicks with a pointing device, ensure that we change
   * the modality away from keyboard.
   * This avoids the situation where a user presses a key on an already focused
   * element, and then clicks on a different element, focusing it with a
   * pointing device, while we still think we're in keyboard modality.
   * @param {Event} e
   */
  function onPointerDown(e) {
    hadKeyboardEvent = false;
  }

  /**
   * On `focus`, add the `focus-visible` class to the target if:
   * - the target received focus as a result of keyboard navigation, or
   * - the event target is an element that will likely require interaction
   *   via the keyboard (e.g. a text box)
   * @param {Event} e
   */
  function onFocus(e) {
    // Prevent IE from focusing the document or HTML element.
    if (!isValidFocusTarget(e.target)) {
      return;
    }
    if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {
      addFocusVisibleClass(e.target);
    }
  }

  /**
   * On `blur`, remove the `focus-visible` class from the target.
   * @param {Event} e
   */
  function onBlur(e) {
    if (!isValidFocusTarget(e.target)) {
      return;
    }
    if (e.target.classList.contains('focus-visible') || e.target.hasAttribute('data-focus-visible-added')) {
      // To detect a tab/window switch, we look for a blur event followed
      // rapidly by a visibility change.
      // If we don't see a visibility change within 100ms, it's probably a
      // regular focus change.
      hadFocusVisibleRecently = true;
      window.clearTimeout(hadFocusVisibleRecentlyTimeout);
      hadFocusVisibleRecentlyTimeout = window.setTimeout(function () {
        hadFocusVisibleRecently = false;
      }, 100);
      removeFocusVisibleClass(e.target);
    }
  }

  /**
   * If the user changes tabs, keep track of whether or not the previously
   * focused element had .focus-visible.
   * @param {Event} e
   */
  function onVisibilityChange(e) {
    if (document.visibilityState === 'hidden') {
      // If the tab becomes active again, the browser will handle calling focus
      // on the element (Safari actually calls it twice).
      // If this tab change caused a blur on an element with focus-visible,
      // re-apply the class when the user switches back to the tab.
      if (hadFocusVisibleRecently) {
        hadKeyboardEvent = true;
      }
      addInitialPointerMoveListeners();
    }
  }

  /**
   * Add a group of listeners to detect usage of any pointing devices.
   * These listeners will be added when the polyfill first loads, and anytime
   * the window is blurred, so that they are active when the window regains
   * focus.
   */
  function addInitialPointerMoveListeners() {
    document.addEventListener('mousemove', onInitialPointerMove);
    document.addEventListener('mousedown', onInitialPointerMove);
    document.addEventListener('mouseup', onInitialPointerMove);
    document.addEventListener('pointermove', onInitialPointerMove);
    document.addEventListener('pointerdown', onInitialPointerMove);
    document.addEventListener('pointerup', onInitialPointerMove);
    document.addEventListener('touchmove', onInitialPointerMove);
    document.addEventListener('touchstart', onInitialPointerMove);
    document.addEventListener('touchend', onInitialPointerMove);
  }
  function removeInitialPointerMoveListeners() {
    document.removeEventListener('mousemove', onInitialPointerMove);
    document.removeEventListener('mousedown', onInitialPointerMove);
    document.removeEventListener('mouseup', onInitialPointerMove);
    document.removeEventListener('pointermove', onInitialPointerMove);
    document.removeEventListener('pointerdown', onInitialPointerMove);
    document.removeEventListener('pointerup', onInitialPointerMove);
    document.removeEventListener('touchmove', onInitialPointerMove);
    document.removeEventListener('touchstart', onInitialPointerMove);
    document.removeEventListener('touchend', onInitialPointerMove);
  }

  /**
   * When the polfyill first loads, assume the user is in keyboard modality.
   * If any event is received from a pointing device (e.g. mouse, pointer,
   * touch), turn off keyboard modality.
   * This accounts for situations where focus enters the page from the URL bar.
   * @param {Event} e
   */
  function onInitialPointerMove(e) {
    // Work around a Safari quirk that fires a mousemove on <html> whenever the
    // window blurs, even if you're tabbing out of the page. ¯\_(ツ)_/¯
    if (e.target.nodeName && e.target.nodeName.toLowerCase() === 'html') {
      return;
    }
    hadKeyboardEvent = false;
    removeInitialPointerMoveListeners();
  }

  // For some kinds of state, we are interested in changes at the global scope
  // only. For example, global pointer input, global key presses and global
  // visibility change should affect the state at every scope:
  document.addEventListener('keydown', onKeyDown, true);
  document.addEventListener('mousedown', onPointerDown, true);
  document.addEventListener('pointerdown', onPointerDown, true);
  document.addEventListener('touchstart', onPointerDown, true);
  document.addEventListener('visibilitychange', onVisibilityChange, true);
  addInitialPointerMoveListeners();

  // For focus and blur, we specifically care about state changes in the local
  // scope. This is because focus / blur events that originate from within a
  // shadow root are not re-dispatched from the host element if it was already
  // the active element in its own scope:
  scope.addEventListener('focus', onFocus, true);
  scope.addEventListener('blur', onBlur, true);

  // We detect that a node is a ShadowRoot by ensuring that it is a
  // DocumentFragment and also has a host property. This check covers native
  // implementation and polyfill implementation transparently. If we only cared
  // about the native implementation, we could just check if the scope was
  // an instance of a ShadowRoot.
  if (scope.nodeType === Node.DOCUMENT_FRAGMENT_NODE && scope.host) {
    // Since a ShadowRoot is a special kind of DocumentFragment, it does not
    // have a root element to add a class to. So, we add this attribute to the
    // host element instead:
    scope.host.setAttribute('data-js-focus-visible', '');
  } else if (scope.nodeType === Node.DOCUMENT_NODE) {
    document.documentElement.classList.add('js-focus-visible');
    document.documentElement.setAttribute('data-js-focus-visible', '');
  }
}

// It is important to wrap all references to global window and document in
// these checks to support server-side rendering use cases
// @see https://github.com/WICG/focus-visible/issues/199
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  // Make the polyfill helper globally available. This can be used as a signal
  // to interested libraries that wish to coordinate with the polyfill for e.g.,
  // applying the polyfill to a shadow root:
  window.applyFocusVisiblePolyfill = applyFocusVisiblePolyfill;

  // Notify interested libraries of the polyfill's presence, in case the
  // polyfill was loaded lazily:
  var event;
  try {
    event = new CustomEvent('focus-visible-polyfill-ready');
  } catch (error) {
    // IE11 does not support using CustomEvent as a constructor directly:
    event = document.createEvent('CustomEvent');
    event.initCustomEvent('focus-visible-polyfill-ready', false, false, {});
  }
  window.dispatchEvent(event);
}
if (typeof document !== 'undefined') {
  // Apply the polyfill to the global document, so that no JavaScript
  // coordination is required to use the polyfill in the top-level document:
  applyFocusVisiblePolyfill(document);
}

/***/ }),

/***/ "./src/js/vendor/jquery.validate.js":
/*!******************************************!*\
  !*** ./src/js/vendor/jquery.validate.js ***!
  \******************************************/
/***/ (() => {

/*! jQuery Validation Plugin - v1.11.1 - 3/22/2013\n* https://github.com/jzaefferer/jquery-validation
* Copyright (c) 2013 JГ¶rn Zaefferer; Licensed MIT */
(function (t) {
  t.extend(t.fn, {
    validate: function (e) {
      if (!this.length) return e && e.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."), void 0;
      var i = t.data(this[0], "validator");
      return i ? i : (this.attr("novalidate", "novalidate"), i = new t.validator(e, this[0]), t.data(this[0], "validator", i), i.settings.onsubmit && (this.validateDelegate(":submit", "click", function (e) {
        i.settings.submitHandler && (i.submitButton = e.target), t(e.target).hasClass("cancel") && (i.cancelSubmit = !0), void 0 !== t(e.target).attr("formnovalidate") && (i.cancelSubmit = !0);
      }), this.submit(function (e) {
        function s() {
          var s;
          return i.settings.submitHandler ? (i.submitButton && (s = t("<input type='hidden'/>").attr("name", i.submitButton.name).val(t(i.submitButton).val()).appendTo(i.currentForm)), i.settings.submitHandler.call(i, i.currentForm, e), i.submitButton && s.remove(), !1) : !0;
        }
        return i.settings.debug && e.preventDefault(), i.cancelSubmit ? (i.cancelSubmit = !1, s()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0, !1) : s() : (i.focusInvalid(), !1);
      })), i);
    },
    valid: function () {
      if (t(this[0]).is("form")) return this.validate().form();
      var e = !0,
        i = t(this[0].form).validate();
      return this.each(function () {
        e = e && i.element(this);
      }), e;
    },
    removeAttrs: function (e) {
      var i = {},
        s = this;
      return t.each(e.split(/\s/), function (t, e) {
        i[e] = s.attr(e), s.removeAttr(e);
      }), i;
    },
    rules: function (e, i) {
      var s = this[0];
      if (e) {
        var r = t.data(s.form, "validator").settings,
          n = r.rules,
          a = t.validator.staticRules(s);
        switch (e) {
          case "add":
            t.extend(a, t.validator.normalizeRule(i)), delete a.messages, n[s.name] = a, i.messages && (r.messages[s.name] = t.extend(r.messages[s.name], i.messages));
            break;
          case "remove":
            if (!i) return delete n[s.name], a;
            var u = {};
            return t.each(i.split(/\s/), function (t, e) {
              u[e] = a[e], delete a[e];
            }), u;
        }
      }
      var o = t.validator.normalizeRules(t.extend({}, t.validator.classRules(s), t.validator.attributeRules(s), t.validator.dataRules(s), t.validator.staticRules(s)), s);
      if (o.required) {
        var l = o.required;
        delete o.required, o = t.extend({
          required: l
        }, o);
      }
      return o;
    }
  }), t.extend(t.expr[":"], {
    blank: function (e) {
      return !t.trim("" + t(e).val());
    },
    filled: function (e) {
      return !!t.trim("" + t(e).val());
    },
    unchecked: function (e) {
      return !t(e).prop("checked");
    }
  }), t.validator = function (e, i) {
    this.settings = t.extend(!0, {}, t.validator.defaults, e), this.currentForm = i, this.init();
  }, t.validator.format = function (e, i) {
    return 1 === arguments.length ? function () {
      var i = t.makeArray(arguments);
      return i.unshift(e), t.validator.format.apply(this, i);
    } : (arguments.length > 2 && i.constructor !== Array && (i = t.makeArray(arguments).slice(1)), i.constructor !== Array && (i = [i]), t.each(i, function (t, i) {
      e = e.replace(RegExp("\\{" + t + "\\}", "g"), function () {
        return i;
      });
    }), e);
  }, t.extend(t.validator, {
    defaults: {
      messages: {},
      groups: {},
      rules: {},
      errorClass: "error",
      validClass: "valid",
      errorElement: "label",
      focusInvalid: !0,
      errorContainer: t([]),
      errorLabelContainer: t([]),
      onsubmit: !0,
      ignore: ":hidden",
      ignoreTitle: !1,
      onfocusin: function (t) {
        this.lastActive = t, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(t)).hide());
      },
      onfocusout: function (t) {
        this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t);
      },
      onkeyup: function (t, e) {
        (9 !== e.which || "" !== this.elementValue(t)) && (t.name in this.submitted || t === this.lastElement) && this.element(t);
      },
      onclick: function (t) {
        t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode);
      },
      highlight: function (e, i, s) {
        "radio" === e.type ? this.findByName(e.name).addClass(i).removeClass(s) : t(e).addClass(i).removeClass(s);
      },
      unhighlight: function (e, i, s) {
        "radio" === e.type ? this.findByName(e.name).removeClass(i).addClass(s) : t(e).removeClass(i).addClass(s);
      }
    },
    setDefaults: function (e) {
      t.extend(t.validator.defaults, e);
    },
    messages: {
      required: "This field is required.",
      remote: "Please fix this field.",
      email: "Пожалуйста введите корректный почтовый адрес.",
      url: "Please enter a valid URL.",
      date: "Please enter a valid date.",
      dateISO: "Please enter a valid date (ISO).",
      number: "Please enter a valid number.",
      digits: "Please enter only digits.",
      creditcard: "Please enter a valid credit card number.",
      equalTo: "Please enter the same value again.",
      maxlength: t.validator.format("Please enter no more than {0} characters."),
      minlength: t.validator.format("Please enter at least {0} characters."),
      rangelength: t.validator.format("Please enter a value between {0} and {1} characters long."),
      range: t.validator.format("Please enter a value between {0} and {1}."),
      max: t.validator.format("Please enter a value less than or equal to {0}."),
      min: t.validator.format("Please enter a value greater than or equal to {0}.")
    },
    autoCreateRanges: !1,
    prototype: {
      init: function () {
        function e(e) {
          var i = t.data(this[0].form, "validator"),
            s = "on" + e.type.replace(/^validate/, "");
          i.settings[s] && i.settings[s].call(i, this[0], e);
        }
        this.labelContainer = t(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || t(this.currentForm), this.containers = t(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
        var i = this.groups = {};
        t.each(this.settings.groups, function (e, s) {
          "string" == typeof s && (s = s.split(/\s/)), t.each(s, function (t, s) {
            i[s] = e;
          });
        });
        var s = this.settings.rules;
        t.each(s, function (e, i) {
          s[e] = t.validator.normalizeRule(i);
        }), t(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", e).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", e), this.settings.invalidHandler && t(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler);
      },
      form: function () {
        return this.checkForm(), t.extend(this.submitted, this.errorMap), this.invalid = t.extend({}, this.errorMap), this.valid() || t(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid();
      },
      checkForm: function () {
        this.prepareForm();
        for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++) this.check(e[t]);
        return this.valid();
      },
      element: function (e) {
        e = this.validationTargetFor(this.clean(e)), this.lastElement = e, this.prepareElement(e), this.currentElements = t(e);
        var i = this.check(e) !== !1;
        return i ? delete this.invalid[e.name] : this.invalid[e.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), i;
      },
      showErrors: function (e) {
        if (e) {
          t.extend(this.errorMap, e), this.errorList = [];
          for (var i in e) this.errorList.push({
            message: e[i],
            element: this.findByName(i)[0]
          });
          this.successList = t.grep(this.successList, function (t) {
            return !(t.name in e);
          });
        }
        this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors();
      },
      resetForm: function () {
        t.fn.resetForm && t(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue");
      },
      numberOfInvalids: function () {
        return this.objectLength(this.invalid);
      },
      objectLength: function (t) {
        var e = 0;
        for (var i in t) e++;
        return e;
      },
      hideErrors: function () {
        this.addWrapper(this.toHide).hide();
      },
      valid: function () {
        return 0 === this.size();
      },
      size: function () {
        return this.errorList.length;
      },
      focusInvalid: function () {
        if (this.settings.focusInvalid) try {
          t(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin");
        } catch (e) {}
      },
      findLastActive: function () {
        var e = this.lastActive;
        return e && 1 === t.grep(this.errorList, function (t) {
          return t.element.name === e.name;
        }).length && e;
      },
      elements: function () {
        var e = this,
          i = {};
        return t(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function () {
          return !this.name && e.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in i || !e.objectLength(t(this).rules()) ? !1 : (i[this.name] = !0, !0);
        });
      },
      clean: function (e) {
        return t(e)[0];
      },
      errors: function () {
        var e = this.settings.errorClass.replace(" ", ".");
        return t(this.settings.errorElement + "." + e, this.errorContext);
      },
      reset: function () {
        this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = t([]), this.toHide = t([]), this.currentElements = t([]);
      },
      prepareForm: function () {
        this.reset(), this.toHide = this.errors().add(this.containers);
      },
      prepareElement: function (t) {
        this.reset(), this.toHide = this.errorsFor(t);
      },
      elementValue: function (e) {
        var i = t(e).attr("type"),
          s = t(e).val();
        return "radio" === i || "checkbox" === i ? t("input[name='" + t(e).attr("name") + "']:checked").val() : "string" == typeof s ? s.replace(/\r/g, "") : s;
      },
      check: function (e) {
        e = this.validationTargetFor(this.clean(e));
        var i,
          s = t(e).rules(),
          r = !1,
          n = this.elementValue(e);
        for (var a in s) {
          var u = {
            method: a,
            parameters: s[a]
          };
          try {
            if (i = t.validator.methods[a].call(this, n, e, u.parameters), "dependency-mismatch" === i) {
              r = !0;
              continue;
            }
            if (r = !1, "pending" === i) return this.toHide = this.toHide.not(this.errorsFor(e)), void 0;
            if (!i) return this.formatAndAdd(e, u), !1;
          } catch (o) {
            throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + u.method + "' method.", o), o;
          }
        }
        return r ? void 0 : (this.objectLength(s) && this.successList.push(e), !0);
      },
      customDataMessage: function (e, i) {
        return t(e).data("msg-" + i.toLowerCase()) || e.attributes && t(e).attr("data-msg-" + i.toLowerCase());
      },
      customMessage: function (t, e) {
        var i = this.settings.messages[t];
        return i && (i.constructor === String ? i : i[e]);
      },
      findDefined: function () {
        for (var t = 0; arguments.length > t; t++) if (void 0 !== arguments[t]) return arguments[t];
        return void 0;
      },
      defaultMessage: function (e, i) {
        return this.findDefined(this.customMessage(e.name, i), this.customDataMessage(e, i), !this.settings.ignoreTitle && e.title || void 0, t.validator.messages[i], "<strong>Warning: No message defined for " + e.name + "</strong>");
      },
      formatAndAdd: function (e, i) {
        var s = this.defaultMessage(e, i.method),
          r = /\$?\{(\d+)\}/g;
        "function" == typeof s ? s = s.call(this, i.parameters, e) : r.test(s) && (s = t.validator.format(s.replace(r, "{$1}"), i.parameters)), this.errorList.push({
          message: s,
          element: e
        }), this.errorMap[e.name] = s, this.submitted[e.name] = s;
      },
      addWrapper: function (t) {
        return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))), t;
      },
      defaultShowErrors: function () {
        var t, e;
        for (t = 0; this.errorList[t]; t++) {
          var i = this.errorList[t];
          this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass), this.showLabel(i.element, i.message);
        }
        if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success) for (t = 0; this.successList[t]; t++) this.showLabel(this.successList[t]);
        if (this.settings.unhighlight) for (t = 0, e = this.validElements(); e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, this.settings.validClass);
        this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show();
      },
      validElements: function () {
        return this.currentElements.not(this.invalidElements());
      },
      invalidElements: function () {
        return t(this.errorList).map(function () {
          return this.element;
        });
      },
      showLabel: function (e, i) {
        var s = this.errorsFor(e);
        s.length ? (s.removeClass(this.settings.validClass).addClass(this.settings.errorClass), s.html(i)) : (s = t("<" + this.settings.errorElement + ">").attr("for", this.idOrName(e)).addClass(this.settings.errorClass).html(i || ""), this.settings.wrapper && (s = s.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(s).length || (this.settings.errorPlacement ? this.settings.errorPlacement(s, t(e)) : s.insertAfter(e))), !i && this.settings.success && (s.text(""), "string" == typeof this.settings.success ? s.addClass(this.settings.success) : this.settings.success(s, e)), this.toShow = this.toShow.add(s);
      },
      errorsFor: function (e) {
        var i = this.idOrName(e);
        return this.errors().filter(function () {
          return t(this).attr("for") === i;
        });
      },
      idOrName: function (t) {
        return this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name);
      },
      validationTargetFor: function (t) {
        return this.checkable(t) && (t = this.findByName(t.name).not(this.settings.ignore)[0]), t;
      },
      checkable: function (t) {
        return /radio|checkbox/i.test(t.type);
      },
      findByName: function (e) {
        return t(this.currentForm).find("[name='" + e + "']");
      },
      getLength: function (e, i) {
        switch (i.nodeName.toLowerCase()) {
          case "select":
            return t("option:selected", i).length;
          case "input":
            if (this.checkable(i)) return this.findByName(i.name).filter(":checked").length;
        }
        return e.length;
      },
      depend: function (t, e) {
        return this.dependTypes[typeof t] ? this.dependTypes[typeof t](t, e) : !0;
      },
      dependTypes: {
        "boolean": function (t) {
          return t;
        },
        string: function (e, i) {
          return !!t(e, i.form).length;
        },
        "function": function (t, e) {
          return t(e);
        }
      },
      optional: function (e) {
        var i = this.elementValue(e);
        return !t.validator.methods.required.call(this, i, e) && "dependency-mismatch";
      },
      startRequest: function (t) {
        this.pending[t.name] || (this.pendingRequest++, this.pending[t.name] = !0);
      },
      stopRequest: function (e, i) {
        this.pendingRequest--, 0 > this.pendingRequest && (this.pendingRequest = 0), delete this.pending[e.name], i && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (t(this.currentForm).submit(), this.formSubmitted = !1) : !i && 0 === this.pendingRequest && this.formSubmitted && (t(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1);
      },
      previousValue: function (e) {
        return t.data(e, "previousValue") || t.data(e, "previousValue", {
          old: null,
          valid: !0,
          message: this.defaultMessage(e, "remote")
        });
      }
    },
    classRuleSettings: {
      required: {
        required: !0
      },
      email: {
        email: !0
      },
      url: {
        url: !0
      },
      date: {
        date: !0
      },
      dateISO: {
        dateISO: !0
      },
      number: {
        number: !0
      },
      digits: {
        digits: !0
      },
      creditcard: {
        creditcard: !0
      }
    },
    addClassRules: function (e, i) {
      e.constructor === String ? this.classRuleSettings[e] = i : t.extend(this.classRuleSettings, e);
    },
    classRules: function (e) {
      var i = {},
        s = t(e).attr("class");
      return s && t.each(s.split(" "), function () {
        this in t.validator.classRuleSettings && t.extend(i, t.validator.classRuleSettings[this]);
      }), i;
    },
    attributeRules: function (e) {
      var i = {},
        s = t(e),
        r = s[0].getAttribute("type");
      for (var n in t.validator.methods) {
        var a;
        "required" === n ? (a = s.get(0).getAttribute(n), "" === a && (a = !0), a = !!a) : a = s.attr(n), /min|max/.test(n) && (null === r || /number|range|text/.test(r)) && (a = Number(a)), a ? i[n] = a : r === n && "range" !== r && (i[n] = !0);
      }
      return i.maxlength && /-1|2147483647|524288/.test(i.maxlength) && delete i.maxlength, i;
    },
    dataRules: function (e) {
      var i,
        s,
        r = {},
        n = t(e);
      for (i in t.validator.methods) s = n.data("rule-" + i.toLowerCase()), void 0 !== s && (r[i] = s);
      return r;
    },
    staticRules: function (e) {
      var i = {},
        s = t.data(e.form, "validator");
      return s.settings.rules && (i = t.validator.normalizeRule(s.settings.rules[e.name]) || {}), i;
    },
    normalizeRules: function (e, i) {
      return t.each(e, function (s, r) {
        if (r === !1) return delete e[s], void 0;
        if (r.param || r.depends) {
          var n = !0;
          switch (typeof r.depends) {
            case "string":
              n = !!t(r.depends, i.form).length;
              break;
            case "function":
              n = r.depends.call(i, i);
          }
          n ? e[s] = void 0 !== r.param ? r.param : !0 : delete e[s];
        }
      }), t.each(e, function (s, r) {
        e[s] = t.isFunction(r) ? r(i) : r;
      }), t.each(["minlength", "maxlength"], function () {
        e[this] && (e[this] = Number(e[this]));
      }), t.each(["rangelength", "range"], function () {
        var i;
        e[this] && (t.isArray(e[this]) ? e[this] = [Number(e[this][0]), Number(e[this][1])] : "string" == typeof e[this] && (i = e[this].split(/[\s,]+/), e[this] = [Number(i[0]), Number(i[1])]));
      }), t.validator.autoCreateRanges && (e.min && e.max && (e.range = [e.min, e.max], delete e.min, delete e.max), e.minlength && e.maxlength && (e.rangelength = [e.minlength, e.maxlength], delete e.minlength, delete e.maxlength)), e;
    },
    normalizeRule: function (e) {
      if ("string" == typeof e) {
        var i = {};
        t.each(e.split(/\s/), function () {
          i[this] = !0;
        }), e = i;
      }
      return e;
    },
    addMethod: function (e, i, s) {
      t.validator.methods[e] = i, t.validator.messages[e] = void 0 !== s ? s : t.validator.messages[e], 3 > i.length && t.validator.addClassRules(e, t.validator.normalizeRule(e));
    },
    methods: {
      required: function (e, i, s) {
        if (!this.depend(s, i)) return "dependency-mismatch";
        if ("select" === i.nodeName.toLowerCase()) {
          var r = t(i).val();
          return r && r.length > 0;
        }
        return this.checkable(i) ? this.getLength(e, i) > 0 : t.trim(e).length > 0;
      },
      email: function (t, e) {
        return this.optional(e) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(t);
      },
      url: function (t, e) {
        return this.optional(e) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t);
      },
      date: function (t, e) {
        return this.optional(e) || !/Invalid|NaN/.test("" + new Date(t));
      },
      dateISO: function (t, e) {
        return this.optional(e) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(t);
      },
      number: function (t, e) {
        return this.optional(e) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t);
      },
      digits: function (t, e) {
        return this.optional(e) || /^\d+$/.test(t);
      },
      creditcard: function (t, e) {
        if (this.optional(e)) return "dependency-mismatch";
        if (/[^0-9 \-]+/.test(t)) return !1;
        var i = 0,
          s = 0,
          r = !1;
        t = t.replace(/\D/g, "");
        for (var n = t.length - 1; n >= 0; n--) {
          var a = t.charAt(n);
          s = parseInt(a, 10), r && (s *= 2) > 9 && (s -= 9), i += s, r = !r;
        }
        return 0 === i % 10;
      },
      minlength: function (e, i, s) {
        var r = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
        return this.optional(i) || r >= s;
      },
      maxlength: function (e, i, s) {
        var r = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
        return this.optional(i) || s >= r;
      },
      rangelength: function (e, i, s) {
        var r = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
        return this.optional(i) || r >= s[0] && s[1] >= r;
      },
      min: function (t, e, i) {
        return this.optional(e) || t >= i;
      },
      max: function (t, e, i) {
        return this.optional(e) || i >= t;
      },
      range: function (t, e, i) {
        return this.optional(e) || t >= i[0] && i[1] >= t;
      },
      equalTo: function (e, i, s) {
        var r = t(s);
        return this.settings.onfocusout && r.unbind(".validate-equalTo").bind("blur.validate-equalTo", function () {
          t(i).valid();
        }), e === r.val();
      },
      remote: function (e, i, s) {
        if (this.optional(i)) return "dependency-mismatch";
        var r = this.previousValue(i);
        if (this.settings.messages[i.name] || (this.settings.messages[i.name] = {}), r.originalMessage = this.settings.messages[i.name].remote, this.settings.messages[i.name].remote = r.message, s = "string" == typeof s && {
          url: s
        } || s, r.old === e) return r.valid;
        r.old = e;
        var n = this;
        this.startRequest(i);
        var a = {};
        return a[i.name] = e, t.ajax(t.extend(!0, {
          url: s,
          mode: "abort",
          port: "validate" + i.name,
          dataType: "json",
          data: a,
          success: function (s) {
            n.settings.messages[i.name].remote = r.originalMessage;
            var a = s === !0 || "true" === s;
            if (a) {
              var u = n.formSubmitted;
              n.prepareElement(i), n.formSubmitted = u, n.successList.push(i), delete n.invalid[i.name], n.showErrors();
            } else {
              var o = {},
                l = s || n.defaultMessage(i, "remote");
              o[i.name] = r.message = t.isFunction(l) ? l(e) : l, n.invalid[i.name] = !0, n.showErrors(o);
            }
            r.valid = a, n.stopRequest(i, a);
          }
        }, s)), "pending";
      }
    }
  }), t.format = t.validator.format;
})(jQuery), function (t) {
  var e = {};
  if (t.ajaxPrefilter) t.ajaxPrefilter(function (t, i, s) {
    var r = t.port;
    "abort" === t.mode && (e[r] && e[r].abort(), e[r] = s);
  });else {
    var i = t.ajax;
    t.ajax = function (s) {
      var r = ("mode" in s ? s : t.ajaxSettings).mode,
        n = ("port" in s ? s : t.ajaxSettings).port;
      return "abort" === r ? (e[n] && e[n].abort(), e[n] = i.apply(this, arguments), e[n]) : i.apply(this, arguments);
    };
  }
}(jQuery), function (t) {
  t.extend(t.fn, {
    validateDelegate: function (e, i, s) {
      return this.bind(i, function (i) {
        var r = t(i.target);
        return r.is(e) ? s.apply(r, arguments) : void 0;
      });
    }
  });
}(jQuery);

/***/ }),

/***/ "./node_modules/graph-tabs/src/graph-tabs.js":
/*!***************************************************!*\
  !*** ./node_modules/graph-tabs/src/graph-tabs.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GraphTabs)
/* harmony export */ });
class GraphTabs {
  constructor(selector, options) {
    let defaultOptions = {
      isChanged: () => {}
    }
    this.options = Object.assign(defaultOptions, options);
    this.selector = selector;
    this.tabs = document.querySelector(`[data-tabs="${selector}"]`);
    if (this.tabs) {
      this.tabList = this.tabs.querySelector('.tabs__nav');
      this.tabsBtns = this.tabList.querySelectorAll('.tabs__nav-btn');
      this.tabsPanels = this.tabs.querySelectorAll('.tabs__panel');
    } else {
      console.error('Селектор data-tabs не существует!');
      return;
    }

    this.check();
    this.init();
    this.events();
  }

  check() {
    if (document.querySelectorAll(`[data-tabs="${this.selector}"]`).length > 1) {
      console.error('Количество элементов с одинаковым data-tabs больше одного!');
      return;
    }

    if (this.tabsBtns.length !== this.tabsPanels.length) {
      console.error('Количество кнопок и элементов табов не совпадает!');
      return;
    }
  }

  init() {
    this.tabList.setAttribute('role', 'tablist');

    this.tabsBtns.forEach((el, i) => {
      el.setAttribute('role', 'tab');
      el.setAttribute('tabindex', '-1');
      el.setAttribute('id', `${this.selector}${i + 1}`);
      el.classList.remove('tabs__nav-btn--active');
    });

    this.tabsPanels.forEach((el, i) => {
      el.setAttribute('role', 'tabpanel');
      el.setAttribute('tabindex', '-1');
      el.setAttribute('aria-labelledby', this.tabsBtns[i].id);
      el.classList.remove('tabs__panel--active');
    });

    this.tabsBtns[0].classList.add('tabs__nav-btn--active');
    this.tabsBtns[0].removeAttribute('tabindex');
    this.tabsBtns[0].setAttribute('aria-selected', 'true');
    this.tabsPanels[0].classList.add('tabs__panel--active');
  }

  events() {
    this.tabsBtns.forEach((el, i) => {
      el.addEventListener('click', (e) => {
        let currentTab = this.tabList.querySelector('[aria-selected]');

        if (e.currentTarget !== currentTab) {
          this.switchTabs(e.currentTarget, currentTab);
        }
      });

      el.addEventListener('keydown', (e) => {
        let index = Array.prototype.indexOf.call(this.tabsBtns, e.currentTarget);

        let dir = null;

        if (e.which === 37) {
          dir = index - 1;
        } else if (e.which === 39) {
          dir = index + 1;
        } else if (e.which === 40) {
          dir = 'down';
        } else {
          dir = null;
        }

        if (dir !== null) {
          if (dir === 'down') {
            this.tabsPanels[i].focus();
          } else if (this.tabsBtns[dir]) {
            this.switchTabs(this.tabsBtns[dir], e.currentTarget);
          }
        }
      });
    });
  }

  switchTabs(newTab, oldTab = this.tabs.querySelector('[aria-selected]')) {
    newTab.focus();
    newTab.removeAttribute('tabindex');
    newTab.setAttribute('aria-selected', 'true');

    oldTab.removeAttribute('aria-selected');
    oldTab.setAttribute('tabindex', '-1');

    let index = Array.prototype.indexOf.call(this.tabsBtns, newTab);
    let oldIndex = Array.prototype.indexOf.call(this.tabsBtns, oldTab);

    this.tabsPanels[oldIndex].classList.remove('tabs__panel--active');
    this.tabsPanels[index].classList.add('tabs__panel--active');

    this.tabsBtns[oldIndex].classList.remove('tabs__nav-btn--active');
    this.tabsBtns[index].classList.add('tabs__nav-btn--active');

    this.options.isChanged(this);
  }
}

/***/ }),

/***/ "./src/js/vendor/datatables-ru.json":
/*!******************************************!*\
  !*** ./src/js/vendor/datatables-ru.json ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"processing":"Подождите...","search":"Поиск:","lengthMenu":"Показать _MENU_ записей","info":"Записи с _START_ до _END_ из _TOTAL_ записей","infoEmpty":"Записи с 0 до 0 из 0 записей","infoFiltered":"(отфильтровано из _MAX_ записей)","loadingRecords":"Загрузка записей...","zeroRecords":"Записи отсутствуют.","emptyTable":"В таблице отсутствуют данные","paginate":{"first":"Первая","previous":"Предыдущая","next":"Следующая","last":"Последняя"},"aria":{"sortAscending":": активировать для сортировки столбца по возрастанию","sortDescending":": активировать для сортировки столбца по убыванию"},"select":{"rows":{"1":"Выбрана одна запись","_":"Выбрано записей: %d"},"cells":{"1":"Выбрана 1 ячейка ","_":"Выбрано %d ячеек"},"columns":{"1":"Выбран 1 столбец ","_":"Выбрано %d столбцов "}},"searchBuilder":{"conditions":{"string":{"startsWith":"Начинается с","contains":"Содержит","empty":"Пусто","endsWith":"Заканчивается на","equals":"Равно","not":"Не","notEmpty":"Не пусто","notContains":"Не содержит","notStartsWith":"Не начинается на","notEndsWith":"Не заканчивается на"},"date":{"after":"После","before":"До","between":"Между","empty":"Пусто","equals":"Равно","not":"Не","notBetween":"Не между","notEmpty":"Не пусто"},"number":{"empty":"Пусто","equals":"Равно","gt":"Больше чем","gte":"Больше, чем равно","lt":"Меньше чем","lte":"Меньше, чем равно","not":"Не","notEmpty":"Не пусто","between":"Между","notBetween":"Не между ними"},"array":{"equals":"Равно","empty":"Пусто","contains":"Содержит","not":"Не равно","notEmpty":"Не пусто","without":"Без"}},"data":"Данные","deleteTitle":"Удалить условие фильтрации","logicAnd":"И","logicOr":"Или","title":{"0":"Конструктор поиска","_":"Конструктор поиска (%d)"},"value":"Значение","add":"Добавить условие","button":{"0":"Конструктор поиска","_":"Конструктор поиска (%d)"},"clearAll":"Очистить всё","condition":"Условие","leftTitle":"Превосходные критерии","rightTitle":"Критерии отступа"},"searchPanes":{"clearMessage":"Очистить всё","collapse":{"0":"Панели поиска","_":"Панели поиска (%d)"},"count":"{total}","countFiltered":"{shown} ({total})","emptyPanes":"Нет панелей поиска","loadMessage":"Загрузка панелей поиска","title":"Фильтры активны - %d","showMessage":"Показать все","collapseMessage":"Скрыть все"},"buttons":{"pdf":"PDF","print":"Печать","collection":"Коллекция <span class=\\"ui-button-icon-primary ui-icon ui-icon-triangle-1-s\\"></span>","colvis":"Видимость столбцов","colvisRestore":"Восстановить видимость","copy":"Копировать","copyKeys":"Нажмите ctrl or u2318 + C, чтобы скопировать данные таблицы в буфер обмена.  Для отмены, щелкните по сообщению или нажмите escape.","copyTitle":"Скопировать в буфер обмена","csv":"CSV","excel":"Excel","pageLength":{"1":"Показать 1 строку","-1":"Показать все строки","_":"Показать %d строк"},"removeState":"Удалить","renameState":"Переименовать","copySuccess":{"1":"Строка скопирована в буфер обмена","_":"Скопировано %d строк в буфер обмена"},"createState":"Создать состояние","removeAllStates":"Удалить все состояния","savedStates":"Сохраненные состояния","stateRestore":"Состояние %d","updateState":"Обновить"},"decimal":".","infoThousands":",","autoFill":{"cancel":"Отменить","fill":"Заполнить все ячейки <i>%d<i></i></i>","fillHorizontal":"Заполнить ячейки по горизонтали","fillVertical":"Заполнить ячейки по вертикали","info":"Информация"},"datetime":{"previous":"Предыдущий","next":"Следующий","hours":"Часы","minutes":"Минуты","seconds":"Секунды","unknown":"Неизвестный","amPm":["AM","PM"],"months":{"0":"Январь","1":"Февраль","2":"Март","3":"Апрель","4":"Май","5":"Июнь","6":"Июль","7":"Август","8":"Сентябрь","9":"Октябрь","10":"Ноябрь","11":"Декабрь"},"weekdays":["Вс","Пн","Вт","Ср","Чт","Пт","Сб"]},"editor":{"close":"Закрыть","create":{"button":"Новый","title":"Создать новую запись","submit":"Создать"},"edit":{"button":"Изменить","title":"Изменить запись","submit":"Изменить"},"remove":{"button":"Удалить","title":"Удалить","submit":"Удалить","confirm":{"1":"Вы точно хотите удалить 1 строку?","_":"Вы точно хотите удалить %d строк?"}},"multi":{"restore":"Отменить изменения","title":"Несколько значений","noMulti":"Это поле должно редактироватся отдельно, а не как часть групы","info":"Выбранные элементы содержат разные значения для этого входа.  Чтобы отредактировать и установить для всех элементов этого ввода одинаковое значение, нажмите или коснитесь здесь, в противном случае они сохранят свои индивидуальные значения."},"error":{"system":"Возникла системная ошибка (<a target=\\"\\\\\\" rel=\\"nofollow\\" href=\\"\\\\\\">Подробнее</a>)."}},"searchPlaceholder":"Что ищете?","stateRestore":{"creationModal":{"button":"Создать","search":"Поиск","columns":{"search":"Поиск по столбцам","visible":"Видимость столбцов"},"name":"Имя:","order":"Сортировка","paging":"Страницы","scroller":"Позиция прокрутки","searchBuilder":"Редактор поиска","select":"Выделение","title":"Создать новое состояние","toggleLabel":"Включает:"},"removeJoiner":"и","removeSubmit":"Удалить","renameButton":"Переименовать","duplicateError":"Состояние с таким именем уже существует.","emptyError":"Имя не может быть пустым.","emptyStates":"Нет сохраненных состояний","removeConfirm":"Вы уверены, что хотите удалить %s?","removeError":"Не удалось удалить состояние.","removeTitle":"Удалить состояние","renameLabel":"Новое имя для %s:","renameTitle":"Переименовать состояние"},"thousands":" "}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_vendor */ "./src/js/_vendor.js");
/* harmony import */ var _vendor_datatables_ru_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vendor/datatables-ru.json */ "./src/js/vendor/datatables-ru.json");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_components */ "./src/js/_components.js");

$(document).ready(function () {
  if ($("#aero_phone").length) {
    $("#aero_phone").inputmask('+7-999-999-99-99');
  }
  $("#become_vol").validate({
    errorElement: "div",
    ignore: ":hidden",
    rules: {
      fullname: {
        required: true
      },
      dob: {
        required: true
      },
      user_dob_agreement: {
        required: true,
        accept: "pdf|jpg|jpeg"
      },
      user_photo: {
        required: true
      },
      gender: {
        required: true
      },
      citizenship: {
        required: true
      },
      phone: {
        required: true
      },
      email: {
        required: true
      },
      vk_link: {
        required: true,
        url: true
      },
      inst_link: {
        required: true
      },
      preferred_direction_of_volunteering: {
        required: true
      },
      preferred_direction_of_volunteering_sob: {
        required: true
      },
      proficiency_in_english: {
        required: true
      },
      other_languages: {
        required: true
      },
      other_lang_text: {
        required: true
      },
      proficiency_in_other_lang: {
        required: true
      },
      size_clothes: {
        required: true
      },
      size_clothes_niz: {
        required: true
      },
      city: {
        required: true
      },
      city_area: {
        required: true
      },
      study_place: {
        required: true
      },
      study_class: {
        required: true
      },
      study_family: {
        required: true
      },
      volunteered_at_the_сhampionships: {
        required: true
      },
      volunteered_at_the_forum: {
        required: true
      },
      experience: {
        required: true
      },
      state_awards: {
        required: true
      },
      experience_leading: {
        required: true
      },
      why_volunteer: {
        required: true
      },
      work: {
        required: true
      },
      passport_ser_num: {
        required: true
      },
      passport_date: {
        required: true
      },
      passport_who: {
        required: true
      },
      passport_address: {
        required: true
      },
      passport_address_fact: {
        required: true
      },
      trustee: {
        required: true
      },
      terms_ok: {
        required: true
      },
      terms_ok2: {
        required: true
      },
      user_dob_fio: {
        required: true
      },
      user_dob_phone: {
        required: true
      },
      fullname_f: {
        required: true
      },
      fullname_i: {
        required: true
      },
      fullname_o: {
        required: true
      }
    },
    messages: {
      username: {
        required: "Это поле должно быть заполнено",
        email: "Введите корректный email"
      },
      terms_ok: {
        required: "Вы должны подтвердить"
      },
      terms_ok2: {
        required: "Вы должны подтвердить"
      }
    }
  });
  $("#enter-form").validate({
    errorElement: "div",
    ignore: ":hidden",
    rules: {
      enter_email: {
        required: true
      },
      enter_fullname: {
        required: true
      },
      enter_checkbox: {
        required: true
      }
    },
    messages: {
      enter_checkbox: {
        required: "Вы должны подтвердить"
      }
    }
  });
  $("#login-form").validate({
    errorElement: "div",
    ignore: ":hidden",
    rules: {
      enter_email: {
        required: true
      },
      enter_fullname: {
        required: true
      }
    },
    messages: {
      enter_checkbox: {
        required: "Вы должны подтвердить"
      }
    }
  });
  $("#password-form").validate({
    errorElement: "div",
    ignore: ":hidden",
    rules: {
      enter_pass: {
        required: true
      },
      repeat_pass: {
        required: true
      }
    }
  });
  $("#question-form").validate({
    errorElement: "div",
    ignore: ":hidden",
    rules: {
      question: {
        required: true
      }
    }
  });
});
$.extend($.validator.messages, {
  required: "Это поле необходимо заполнить.",
  url: "Введите корретную ссылку"
});
$(document).ready(function () {
  $('input[name="passport_ser_num"]').inputmask({
    "mask": "9999 999999"
  });
  $('.js-dob-calendar').datepicker({
    dateFormat: 'yyyy/mm/dd',
    view: 'years',
    // minDate: '0',
    // maxDate: "0",

    onSelect: function (dateText, inst) {
      var birthDay = dateText;
      var DOB = new Date(birthDay);
      var today = new Date();
      var age = today.getTime() - DOB.getTime();
      age = Math.floor(age / (1000 * 60 * 60 * 24 * 365.25));
      if (parseInt(age) < 18) {
        $('.js-dob-spoiler').slideDown(300);
      } else {
        $('.js-dob-spoiler').slideUp(300);
      }
      if (parseInt(age) < 16) {
        $('#become_vol .content-block__more').addClass('disabled');
        $('#become_vol .content-block__more .youshallnotpass').remove();
        $('#become_vol .content-block__more').append('<span class="youshallnotpass">К сожалению, вы не можете отправить анкету, так как вы младше 16 лет.</span>');
      } else {
        $('#become_vol .content-block__more').removeClass('disabled');
        $('#become_vol .content-block__more .youshallnotpass').remove();
      }
    }
  });
});

var adminTable = $('#admin-table').DataTable({
  responsive: true,
  dom: 'Bfrtip',
  buttons: ['excel'],
  language: _vendor_datatables_ru_json__WEBPACK_IMPORTED_MODULE_1__
});
var testTable = $('#test-table').DataTable({
  responsive: true,
  language: _vendor_datatables_ru_json__WEBPACK_IMPORTED_MODULE_1__,
  "ordering": false,
  paging: false,
  "searching": false
});
const inputRanges = document.querySelectorAll('.input-range');
if (inputRanges.length != 0) {
  inputRanges.forEach(inputRange => {
    inputRange.addEventListener('input', () => {
      if (inputRange.value != '' && inputRange.value > 3) {
        inputRange.value = '3';
      } else if (inputRange.value != '' && inputRange.value < 0) {
        inputRange.value = '0';
      }
    });
  });
}

})();

/******/ })()
;