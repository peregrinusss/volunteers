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
/* harmony import */ var _components_ex__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_ex__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/js/_functions.js":
/*!******************************!*\
  !*** ./src/js/_functions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_mobile_check__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/mobile-check */ "./src/js/functions/mobile-check.js");
// Данный файл - лишь собрание подключений готовых компонентов.
// Рекомендуется создавать отдельный файл в папке components и подключать все там

// Определение операционной системы на мобильных

console.log((0,_functions_mobile_check__WEBPACK_IMPORTED_MODULE_0__.mobileCheck)());

// Определение ширины экрана
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('...')
// }

// Троттлинг функции (для ресайза, ввода в инпут, скролла и т.д.)
// import { throttle } from './functions/throttle';
// let yourFunc = () => { console.log('throttle') };
// let func = throttle(yourFunc);
// window.addEventListener('resize', func);

// Фикс фулскрин-блоков
// import './functions/fix-fullheight';

// Реализация бургер-меню
// import { burger } from './functions/burger';

// Реализация остановки скролла (не забудьте вызвать функцию)
// import { disableScroll } from './functions/disable-scroll';

// Реализация включения скролла (не забудьте вызвать функцию)
// import { enableScroll } from './functions/enable-scroll';

// Реализация модального окна
// import GraphModal from 'graph-modal';
// const modal = new GraphModal();

// Реализация табов
// import GraphTabs from 'graph-tabs';
// const tabs = new GraphTabs('tab');

// Получение высоты шапки сайта (не забудьте вызвать функцию)
// import { getHeaderHeight } from './functions/header-height';

// Подключение плагина кастом-скролла
// import 'simplebar';

// Подключение плагина для позиционирования тултипов
// import { createPopper, right} from '@popperjs/core';
// createPopper(el, tooltip, {
//   placement: 'right'
// });

// Подключение свайпера
// import Swiper, { Navigation, Pagination } from 'swiper';
// Swiper.use([Navigation, Pagination]);
// const swiper = new Swiper(el, {
//   slidesPerView: 'auto',
// });

// Подключение анимаций по скроллу
// import AOS from 'aos';
// AOS.init();

// Подключение параллакса блоков при скролле
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');

// Подключение плавной прокрутки к якорям
// import SmoothScroll from 'smooth-scroll';
// const scroll = new SmoothScroll('a[href*="#"]');

// Подключение событий свайпа на мобильных
// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//   console.log(e.target);
//   console.log(e.detail);
//   console.log(e.detail.dir);
// });

// import { validateForms } from './functions/validate-forms';
// const rules1 = [...];

// const afterForm = () => {
//   console.log('Произошла отправка, тут можно писать любые действия');
// };

// validateForms('.form-1', rules1, afterForm);

/***/ }),

/***/ "./src/js/_vars.js":
/*!*************************!*\
  !*** ./src/js/_vars.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body
});

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


/***/ }),

/***/ "./src/js/components/ex.js":
/*!*********************************!*\
  !*** ./src/js/components/ex.js ***!
  \*********************************/
/***/ (() => {

!function (t, e, i) {
  !function () {
    var s,
      a,
      n,
      h = "2.2.3",
      o = "datepicker",
      r = ".datepicker-here",
      c = !1,
      d = '<div class="datepicker"><i class="datepicker--pointer"></i><nav class="datepicker--nav"></nav><div class="datepicker--content"></div></div>',
      l = {
        classes: "",
        inline: !1,
        language: "ru",
        startDate: new Date(),
        firstDay: "",
        weekends: [6, 0],
        dateFormat: "",
        altField: "",
        altFieldDateFormat: "@",
        toggleSelected: !0,
        keyboardNav: !0,
        position: "bottom left",
        offset: 12,
        view: "days",
        minView: "days",
        showOtherMonths: !0,
        selectOtherMonths: !0,
        moveToOtherMonthsOnSelect: !0,
        showOtherYears: !0,
        selectOtherYears: !0,
        moveToOtherYearsOnSelect: !0,
        minDate: "",
        maxDate: "",
        disableNavWhenOutOfRange: !0,
        multipleDates: !1,
        multipleDatesSeparator: ",",
        range: !1,
        todayButton: !1,
        clearButton: !1,
        showEvent: "focus",
        autoClose: !1,
        monthsField: "monthsShort",
        prevHtml: '<svg><path d="M 17,12 l -5,5 l 5,5"></path></svg>',
        nextHtml: '<svg><path d="M 14,12 l 5,5 l -5,5"></path></svg>',
        navTitles: {
          days: "MM, <i>yyyy</i>",
          months: "yyyy",
          years: "yyyy1 - yyyy2"
        },
        timepicker: !1,
        onlyTimepicker: !1,
        dateTimeSeparator: " ",
        timeFormat: "",
        minHours: 0,
        maxHours: 24,
        minMinutes: 0,
        maxMinutes: 59,
        hoursStep: 1,
        minutesStep: 1,
        onSelect: "",
        onShow: "",
        onHide: "",
        onChangeMonth: "",
        onChangeYear: "",
        onChangeDecade: "",
        onChangeView: "",
        onRenderCell: ""
      },
      u = {
        ctrlRight: [17, 39],
        ctrlUp: [17, 38],
        ctrlLeft: [17, 37],
        ctrlDown: [17, 40],
        shiftRight: [16, 39],
        shiftUp: [16, 38],
        shiftLeft: [16, 37],
        shiftDown: [16, 40],
        altUp: [18, 38],
        altRight: [18, 39],
        altLeft: [18, 37],
        altDown: [18, 40],
        ctrlShiftUp: [16, 17, 38]
      },
      m = function (t, a) {
        this.el = t, this.$el = e(t), this.opts = e.extend(!0, {}, l, a, this.$el.data()), s == i && (s = e("body")), this.opts.startDate || (this.opts.startDate = new Date()), "INPUT" == this.el.nodeName && (this.elIsInput = !0), this.opts.altField && (this.$altField = "string" == typeof this.opts.altField ? e(this.opts.altField) : this.opts.altField), this.inited = !1, this.visible = !1, this.silent = !1, this.currentDate = this.opts.startDate, this.currentView = this.opts.view, this._createShortCuts(), this.selectedDates = [], this.views = {}, this.keys = [], this.minRange = "", this.maxRange = "", this._prevOnSelectValue = "", this.init();
      };
    n = m, n.prototype = {
      VERSION: h,
      viewIndexes: ["days", "months", "years"],
      init: function () {
        c || this.opts.inline || !this.elIsInput || this._buildDatepickersContainer(), this._buildBaseHtml(), this._defineLocale(this.opts.language), this._syncWithMinMaxDates(), this.elIsInput && (this.opts.inline || (this._setPositionClasses(this.opts.position), this._bindEvents()), this.opts.keyboardNav && !this.opts.onlyTimepicker && this._bindKeyboardEvents(), this.$datepicker.on("mousedown", this._onMouseDownDatepicker.bind(this)), this.$datepicker.on("mouseup", this._onMouseUpDatepicker.bind(this))), this.opts.classes && this.$datepicker.addClass(this.opts.classes), this.opts.timepicker && (this.timepicker = new e.fn.datepicker.Timepicker(this, this.opts), this._bindTimepickerEvents()), this.opts.onlyTimepicker && this.$datepicker.addClass("-only-timepicker-"), this.views[this.currentView] = new e.fn.datepicker.Body(this, this.currentView, this.opts), this.views[this.currentView].show(), this.nav = new e.fn.datepicker.Navigation(this, this.opts), this.view = this.currentView, this.$el.on("clickCell.adp", this._onClickCell.bind(this)), this.$datepicker.on("mouseenter", ".datepicker--cell", this._onMouseEnterCell.bind(this)), this.$datepicker.on("mouseleave", ".datepicker--cell", this._onMouseLeaveCell.bind(this)), this.inited = !0;
      },
      _createShortCuts: function () {
        this.minDate = this.opts.minDate ? this.opts.minDate : new Date(-86399999136e5), this.maxDate = this.opts.maxDate ? this.opts.maxDate : new Date(86399999136e5);
      },
      _bindEvents: function () {
        this.$el.on(this.opts.showEvent + ".adp", this._onShowEvent.bind(this)), this.$el.on("mouseup.adp", this._onMouseUpEl.bind(this)), this.$el.on("blur.adp", this._onBlur.bind(this)), this.$el.on("keyup.adp", this._onKeyUpGeneral.bind(this)), e(t).on("resize.adp", this._onResize.bind(this)), e("body").on("mouseup.adp", this._onMouseUpBody.bind(this));
      },
      _bindKeyboardEvents: function () {
        this.$el.on("keydown.adp", this._onKeyDown.bind(this)), this.$el.on("keyup.adp", this._onKeyUp.bind(this)), this.$el.on("hotKey.adp", this._onHotKey.bind(this));
      },
      _bindTimepickerEvents: function () {
        this.$el.on("timeChange.adp", this._onTimeChange.bind(this));
      },
      isWeekend: function (t) {
        return -1 !== this.opts.weekends.indexOf(t);
      },
      _defineLocale: function (t) {
        "string" == typeof t ? (this.loc = e.fn.datepicker.language[t], this.loc || (console.warn("Can't find language \"" + t + '" in Datepicker.language, will use "ru" instead'), this.loc = e.extend(!0, {}, e.fn.datepicker.language.ru)), this.loc = e.extend(!0, {}, e.fn.datepicker.language.ru, e.fn.datepicker.language[t])) : this.loc = e.extend(!0, {}, e.fn.datepicker.language.ru, t), this.opts.dateFormat && (this.loc.dateFormat = this.opts.dateFormat), this.opts.timeFormat && (this.loc.timeFormat = this.opts.timeFormat), "" !== this.opts.firstDay && (this.loc.firstDay = this.opts.firstDay), this.opts.timepicker && (this.loc.dateFormat = [this.loc.dateFormat, this.loc.timeFormat].join(this.opts.dateTimeSeparator)), this.opts.onlyTimepicker && (this.loc.dateFormat = this.loc.timeFormat);
        var i = this._getWordBoundaryRegExp;
        (this.loc.timeFormat.match(i("aa")) || this.loc.timeFormat.match(i("AA"))) && (this.ampm = !0);
      },
      _buildDatepickersContainer: function () {
        c = !0, s.append('<div class="datepickers-container" id="datepickers-container"></div>'), a = e("#datepickers-container");
      },
      _buildBaseHtml: function () {
        var t,
          i = e('<div class="datepicker-inline">');
        t = "INPUT" == this.el.nodeName ? this.opts.inline ? i.insertAfter(this.$el) : a : i.appendTo(this.$el), this.$datepicker = e(d).appendTo(t), this.$content = e(".datepicker--content", this.$datepicker), this.$nav = e(".datepicker--nav", this.$datepicker);
      },
      _triggerOnChange: function () {
        if (!this.selectedDates.length) {
          if ("" === this._prevOnSelectValue) return;
          return this._prevOnSelectValue = "", this.opts.onSelect("", "", this);
        }
        var t,
          e = this.selectedDates,
          i = n.getParsedDate(e[0]),
          s = this,
          a = new Date(i.year, i.month, i.date, i.hours, i.minutes);
        t = e.map(function (t) {
          return s.formatDate(s.loc.dateFormat, t);
        }).join(this.opts.multipleDatesSeparator), (this.opts.multipleDates || this.opts.range) && (a = e.map(function (t) {
          var e = n.getParsedDate(t);
          return new Date(e.year, e.month, e.date, e.hours, e.minutes);
        })), this._prevOnSelectValue = t, this.opts.onSelect(t, a, this);
      },
      next: function () {
        var t = this.parsedDate,
          e = this.opts;
        switch (this.view) {
          case "days":
            this.date = new Date(t.year, t.month + 1, 1), e.onChangeMonth && e.onChangeMonth(this.parsedDate.month, this.parsedDate.year);
            break;
          case "months":
            this.date = new Date(t.year + 1, t.month, 1), e.onChangeYear && e.onChangeYear(this.parsedDate.year);
            break;
          case "years":
            this.date = new Date(t.year + 10, 0, 1), e.onChangeDecade && e.onChangeDecade(this.curDecade);
        }
      },
      prev: function () {
        var t = this.parsedDate,
          e = this.opts;
        switch (this.view) {
          case "days":
            this.date = new Date(t.year, t.month - 1, 1), e.onChangeMonth && e.onChangeMonth(this.parsedDate.month, this.parsedDate.year);
            break;
          case "months":
            this.date = new Date(t.year - 1, t.month, 1), e.onChangeYear && e.onChangeYear(this.parsedDate.year);
            break;
          case "years":
            this.date = new Date(t.year - 10, 0, 1), e.onChangeDecade && e.onChangeDecade(this.curDecade);
        }
      },
      formatDate: function (t, e) {
        e = e || this.date;
        var i,
          s = t,
          a = this._getWordBoundaryRegExp,
          h = this.loc,
          o = n.getLeadingZeroNum,
          r = n.getDecade(e),
          c = n.getParsedDate(e),
          d = c.fullHours,
          l = c.hours,
          u = t.match(a("aa")) || t.match(a("AA")),
          m = "am",
          p = this._replacer;
        switch (this.opts.timepicker && this.timepicker && u && (i = this.timepicker._getValidHoursFromDate(e, u), d = o(i.hours), l = i.hours, m = i.dayPeriod), !0) {
          case /@/.test(s):
            s = s.replace(/@/, e.getTime());
          case /aa/.test(s):
            s = p(s, a("aa"), m);
          case /AA/.test(s):
            s = p(s, a("AA"), m.toUpperCase());
          case /dd/.test(s):
            s = p(s, a("dd"), c.fullDate);
          case /d/.test(s):
            s = p(s, a("d"), c.date);
          case /DD/.test(s):
            s = p(s, a("DD"), h.days[c.day]);
          case /D/.test(s):
            s = p(s, a("D"), h.daysShort[c.day]);
          case /mm/.test(s):
            s = p(s, a("mm"), c.fullMonth);
          case /m/.test(s):
            s = p(s, a("m"), c.month + 1);
          case /MM/.test(s):
            s = p(s, a("MM"), this.loc.months[c.month]);
          case /M/.test(s):
            s = p(s, a("M"), h.monthsShort[c.month]);
          case /ii/.test(s):
            s = p(s, a("ii"), c.fullMinutes);
          case /i/.test(s):
            s = p(s, a("i"), c.minutes);
          case /hh/.test(s):
            s = p(s, a("hh"), d);
          case /h/.test(s):
            s = p(s, a("h"), l);
          case /yyyy/.test(s):
            s = p(s, a("yyyy"), c.year);
          case /yyyy1/.test(s):
            s = p(s, a("yyyy1"), r[0]);
          case /yyyy2/.test(s):
            s = p(s, a("yyyy2"), r[1]);
          case /yy/.test(s):
            s = p(s, a("yy"), c.year.toString().slice(-2));
        }
        return s;
      },
      _replacer: function (t, e, i) {
        return t.replace(e, function (t, e, s, a) {
          return e + i + a;
        });
      },
      _getWordBoundaryRegExp: function (t) {
        var e = "\\s|\\.|-|/|\\\\|,|\\$|\\!|\\?|:|;";
        return new RegExp("(^|>|" + e + ")(" + t + ")($|<|" + e + ")", "g");
      },
      selectDate: function (t) {
        var e = this,
          i = e.opts,
          s = e.parsedDate,
          a = e.selectedDates,
          h = a.length,
          o = "";
        if (Array.isArray(t)) return void t.forEach(function (t) {
          e.selectDate(t);
        });
        if (t instanceof Date) {
          if (this.lastSelectedDate = t, this.timepicker && this.timepicker._setTime(t), e._trigger("selectDate", t), this.timepicker && (t.setHours(this.timepicker.hours), t.setMinutes(this.timepicker.minutes)), "days" == e.view && t.getMonth() != s.month && i.moveToOtherMonthsOnSelect && (o = new Date(t.getFullYear(), t.getMonth(), 1)), "years" == e.view && t.getFullYear() != s.year && i.moveToOtherYearsOnSelect && (o = new Date(t.getFullYear(), 0, 1)), o && (e.silent = !0, e.date = o, e.silent = !1, e.nav._render()), i.multipleDates && !i.range) {
            if (h === i.multipleDates) return;
            e._isSelected(t) || e.selectedDates.push(t);
          } else i.range ? 2 == h ? (e.selectedDates = [t], e.minRange = t, e.maxRange = "") : 1 == h ? (e.selectedDates.push(t), e.maxRange ? e.minRange = t : e.maxRange = t, n.bigger(e.maxRange, e.minRange) && (e.maxRange = e.minRange, e.minRange = t), e.selectedDates = [e.minRange, e.maxRange]) : (e.selectedDates = [t], e.minRange = t) : e.selectedDates = [t];
          e._setInputValue(), i.onSelect && e._triggerOnChange(), i.autoClose && !this.timepickerIsActive && (i.multipleDates || i.range ? i.range && 2 == e.selectedDates.length && e.hide() : e.hide()), e.views[this.currentView]._render();
        }
      },
      removeDate: function (t) {
        var e = this.selectedDates,
          i = this;
        if (t instanceof Date) return e.some(function (s, a) {
          return n.isSame(s, t) ? (e.splice(a, 1), i.selectedDates.length ? i.lastSelectedDate = i.selectedDates[i.selectedDates.length - 1] : (i.minRange = "", i.maxRange = "", i.lastSelectedDate = ""), i.views[i.currentView]._render(), i._setInputValue(), i.opts.onSelect && i._triggerOnChange(), !0) : void 0;
        });
      },
      today: function () {
        this.silent = !0, this.view = this.opts.minView, this.silent = !1, this.date = new Date(), this.opts.todayButton instanceof Date && this.selectDate(this.opts.todayButton);
      },
      clear: function () {
        this.selectedDates = [], this.minRange = "", this.maxRange = "", this.views[this.currentView]._render(), this._setInputValue(), this.opts.onSelect && this._triggerOnChange();
      },
      update: function (t, i) {
        var s = arguments.length,
          a = this.lastSelectedDate;
        return 2 == s ? this.opts[t] = i : 1 == s && "object" == typeof t && (this.opts = e.extend(!0, this.opts, t)), this._createShortCuts(), this._syncWithMinMaxDates(), this._defineLocale(this.opts.language), this.nav._addButtonsIfNeed(), this.opts.onlyTimepicker || this.nav._render(), this.views[this.currentView]._render(), this.elIsInput && !this.opts.inline && (this._setPositionClasses(this.opts.position), this.visible && this.setPosition(this.opts.position)), this.opts.classes && this.$datepicker.addClass(this.opts.classes), this.opts.onlyTimepicker && this.$datepicker.addClass("-only-timepicker-"), this.opts.timepicker && (a && this.timepicker._handleDate(a), this.timepicker._updateRanges(), this.timepicker._updateCurrentTime(), a && (a.setHours(this.timepicker.hours), a.setMinutes(this.timepicker.minutes))), this._setInputValue(), this;
      },
      _syncWithMinMaxDates: function () {
        var t = this.date.getTime();
        this.silent = !0, this.minTime > t && (this.date = this.minDate), this.maxTime < t && (this.date = this.maxDate), this.silent = !1;
      },
      _isSelected: function (t, e) {
        var i = !1;
        return this.selectedDates.some(function (s) {
          return n.isSame(s, t, e) ? (i = s, !0) : void 0;
        }), i;
      },
      _setInputValue: function () {
        var t,
          e = this,
          i = e.opts,
          s = e.loc.dateFormat,
          a = i.altFieldDateFormat,
          n = e.selectedDates.map(function (t) {
            return e.formatDate(s, t);
          });
        i.altField && e.$altField.length && (t = this.selectedDates.map(function (t) {
          return e.formatDate(a, t);
        }), t = t.join(this.opts.multipleDatesSeparator), this.$altField.val(t)), n = n.join(this.opts.multipleDatesSeparator), this.$el.val(n);
      },
      _isInRange: function (t, e) {
        var i = t.getTime(),
          s = n.getParsedDate(t),
          a = n.getParsedDate(this.minDate),
          h = n.getParsedDate(this.maxDate),
          o = new Date(s.year, s.month, a.date).getTime(),
          r = new Date(s.year, s.month, h.date).getTime(),
          c = {
            day: i >= this.minTime && i <= this.maxTime,
            month: o >= this.minTime && r <= this.maxTime,
            year: s.year >= a.year && s.year <= h.year
          };
        return e ? c[e] : c.day;
      },
      _getDimensions: function (t) {
        var e = t.offset();
        return {
          width: t.outerWidth(),
          height: t.outerHeight(),
          left: e.left,
          top: e.top
        };
      },
      _getDateFromCell: function (t) {
        var e = this.parsedDate,
          s = t.data("year") || e.year,
          a = t.data("month") == i ? e.month : t.data("month"),
          n = t.data("date") || 1;
        return new Date(s, a, n);
      },
      _setPositionClasses: function (t) {
        t = t.split(" ");
        var e = t[0],
          i = t[1],
          s = "datepicker -" + e + "-" + i + "- -from-" + e + "-";
        this.visible && (s += " active"), this.$datepicker.removeAttr("class").addClass(s);
      },
      setPosition: function (t) {
        t = t || this.opts.position;
        var e,
          i,
          s = this._getDimensions(this.$el),
          a = this._getDimensions(this.$datepicker),
          n = t.split(" "),
          h = this.opts.offset,
          o = n[0],
          r = n[1];
        switch (o) {
          case "top":
            e = s.top - a.height - h;
            break;
          case "right":
            i = s.left + s.width + h;
            break;
          case "bottom":
            e = s.top + s.height + h;
            break;
          case "left":
            i = s.left - a.width - h;
        }
        switch (r) {
          case "top":
            e = s.top;
            break;
          case "right":
            i = s.left + s.width - a.width;
            break;
          case "bottom":
            e = s.top + s.height - a.height;
            break;
          case "left":
            i = s.left;
            break;
          case "center":
            /left|right/.test(o) ? e = s.top + s.height / 2 - a.height / 2 : i = s.left + s.width / 2 - a.width / 2;
        }
        this.$datepicker.css({
          left: i,
          top: e
        });
      },
      show: function () {
        var t = this.opts.onShow;
        this.setPosition(this.opts.position), this.$datepicker.addClass("active"), this.visible = !0, t && this._bindVisionEvents(t);
      },
      hide: function () {
        var t = this.opts.onHide;
        this.$datepicker.removeClass("active").css({
          left: "-100000px"
        }), this.focused = "", this.keys = [], this.inFocus = !1, this.visible = !1, this.$el.blur(), t && this._bindVisionEvents(t);
      },
      down: function (t) {
        this._changeView(t, "down");
      },
      up: function (t) {
        this._changeView(t, "up");
      },
      _bindVisionEvents: function (t) {
        this.$datepicker.off("transitionend.dp"), t(this, !1), this.$datepicker.one("transitionend.dp", t.bind(this, this, !0));
      },
      _changeView: function (t, e) {
        t = t || this.focused || this.date;
        var i = "up" == e ? this.viewIndex + 1 : this.viewIndex - 1;
        i > 2 && (i = 2), 0 > i && (i = 0), this.silent = !0, this.date = new Date(t.getFullYear(), t.getMonth(), 1), this.silent = !1, this.view = this.viewIndexes[i];
      },
      _handleHotKey: function (t) {
        var e,
          i,
          s,
          a = n.getParsedDate(this._getFocusedDate()),
          h = this.opts,
          o = !1,
          r = !1,
          c = !1,
          d = a.year,
          l = a.month,
          u = a.date;
        switch (t) {
          case "ctrlRight":
          case "ctrlUp":
            l += 1, o = !0;
            break;
          case "ctrlLeft":
          case "ctrlDown":
            l -= 1, o = !0;
            break;
          case "shiftRight":
          case "shiftUp":
            r = !0, d += 1;
            break;
          case "shiftLeft":
          case "shiftDown":
            r = !0, d -= 1;
            break;
          case "altRight":
          case "altUp":
            c = !0, d += 10;
            break;
          case "altLeft":
          case "altDown":
            c = !0, d -= 10;
            break;
          case "ctrlShiftUp":
            this.up();
        }
        s = n.getDaysCount(new Date(d, l)), i = new Date(d, l, u), u > s && (u = s), i.getTime() < this.minTime ? i = this.minDate : i.getTime() > this.maxTime && (i = this.maxDate), this.focused = i, e = n.getParsedDate(i), o && h.onChangeMonth && h.onChangeMonth(e.month, e.year), r && h.onChangeYear && h.onChangeYear(e.year), c && h.onChangeDecade && h.onChangeDecade(this.curDecade);
      },
      _registerKey: function (t) {
        var e = this.keys.some(function (e) {
          return e == t;
        });
        e || this.keys.push(t);
      },
      _unRegisterKey: function (t) {
        var e = this.keys.indexOf(t);
        this.keys.splice(e, 1);
      },
      _isHotKeyPressed: function () {
        var t,
          e = !1,
          i = this,
          s = this.keys.sort();
        for (var a in u) t = u[a], s.length == t.length && t.every(function (t, e) {
          return t == s[e];
        }) && (i._trigger("hotKey", a), e = !0);
        return e;
      },
      _trigger: function (t, e) {
        this.$el.trigger(t, e);
      },
      _focusNextCell: function (t, e) {
        e = e || this.cellType;
        var i = n.getParsedDate(this._getFocusedDate()),
          s = i.year,
          a = i.month,
          h = i.date;
        if (!this._isHotKeyPressed()) {
          switch (t) {
            case 37:
              "day" == e ? h -= 1 : "", "month" == e ? a -= 1 : "", "year" == e ? s -= 1 : "";
              break;
            case 38:
              "day" == e ? h -= 7 : "", "month" == e ? a -= 3 : "", "year" == e ? s -= 4 : "";
              break;
            case 39:
              "day" == e ? h += 1 : "", "month" == e ? a += 1 : "", "year" == e ? s += 1 : "";
              break;
            case 40:
              "day" == e ? h += 7 : "", "month" == e ? a += 3 : "", "year" == e ? s += 4 : "";
          }
          var o = new Date(s, a, h);
          o.getTime() < this.minTime ? o = this.minDate : o.getTime() > this.maxTime && (o = this.maxDate), this.focused = o;
        }
      },
      _getFocusedDate: function () {
        var t = this.focused || this.selectedDates[this.selectedDates.length - 1],
          e = this.parsedDate;
        if (!t) switch (this.view) {
          case "days":
            t = new Date(e.year, e.month, new Date().getDate());
            break;
          case "months":
            t = new Date(e.year, e.month, 1);
            break;
          case "years":
            t = new Date(e.year, 0, 1);
        }
        return t;
      },
      _getCell: function (t, i) {
        i = i || this.cellType;
        var s,
          a = n.getParsedDate(t),
          h = '.datepicker--cell[data-year="' + a.year + '"]';
        switch (i) {
          case "month":
            h = '[data-month="' + a.month + '"]';
            break;
          case "day":
            h += '[data-month="' + a.month + '"][data-date="' + a.date + '"]';
        }
        return s = this.views[this.currentView].$el.find(h), s.length ? s : e("");
      },
      destroy: function () {
        var t = this;
        t.$el.off(".adp").data("datepicker", ""), t.selectedDates = [], t.focused = "", t.views = {}, t.keys = [], t.minRange = "", t.maxRange = "", t.opts.inline || !t.elIsInput ? t.$datepicker.closest(".datepicker-inline").remove() : t.$datepicker.remove();
      },
      _handleAlreadySelectedDates: function (t, e) {
        this.opts.range ? this.opts.toggleSelected ? this.removeDate(e) : 2 != this.selectedDates.length && this._trigger("clickCell", e) : this.opts.toggleSelected && this.removeDate(e), this.opts.toggleSelected || (this.lastSelectedDate = t, this.opts.timepicker && (this.timepicker._setTime(t), this.timepicker.update()));
      },
      _onShowEvent: function (t) {
        this.visible || this.show();
      },
      _onBlur: function () {
        !this.inFocus && this.visible && this.hide();
      },
      _onMouseDownDatepicker: function (t) {
        this.inFocus = !0;
      },
      _onMouseUpDatepicker: function (t) {
        this.inFocus = !1, t.originalEvent.inFocus = !0, t.originalEvent.timepickerFocus || this.$el.focus();
      },
      _onKeyUpGeneral: function (t) {
        var e = this.$el.val();
        e || this.clear();
      },
      _onResize: function () {
        this.visible && this.setPosition();
      },
      _onMouseUpBody: function (t) {
        t.originalEvent.inFocus || this.visible && !this.inFocus && this.hide();
      },
      _onMouseUpEl: function (t) {
        t.originalEvent.inFocus = !0, setTimeout(this._onKeyUpGeneral.bind(this), 4);
      },
      _onKeyDown: function (t) {
        var e = t.which;
        if (this._registerKey(e), e >= 37 && 40 >= e && (t.preventDefault(), this._focusNextCell(e)), 13 == e && this.focused) {
          if (this._getCell(this.focused).hasClass("-disabled-")) return;
          if (this.view != this.opts.minView) this.down();else {
            var i = this._isSelected(this.focused, this.cellType);
            if (!i) return this.timepicker && (this.focused.setHours(this.timepicker.hours), this.focused.setMinutes(this.timepicker.minutes)), void this.selectDate(this.focused);
            this._handleAlreadySelectedDates(i, this.focused);
          }
        }
        27 == e && this.hide();
      },
      _onKeyUp: function (t) {
        var e = t.which;
        this._unRegisterKey(e);
      },
      _onHotKey: function (t, e) {
        this._handleHotKey(e);
      },
      _onMouseEnterCell: function (t) {
        var i = e(t.target).closest(".datepicker--cell"),
          s = this._getDateFromCell(i);
        this.silent = !0, this.focused && (this.focused = ""), i.addClass("-focus-"), this.focused = s, this.silent = !1, this.opts.range && 1 == this.selectedDates.length && (this.minRange = this.selectedDates[0], this.maxRange = "", n.less(this.minRange, this.focused) && (this.maxRange = this.minRange, this.minRange = ""), this.views[this.currentView]._update());
      },
      _onMouseLeaveCell: function (t) {
        var i = e(t.target).closest(".datepicker--cell");
        i.removeClass("-focus-"), this.silent = !0, this.focused = "", this.silent = !1;
      },
      _onTimeChange: function (t, e, i) {
        var s = new Date(),
          a = this.selectedDates,
          n = !1;
        a.length && (n = !0, s = this.lastSelectedDate), s.setHours(e), s.setMinutes(i), n || this._getCell(s).hasClass("-disabled-") ? (this._setInputValue(), this.opts.onSelect && this._triggerOnChange()) : this.selectDate(s);
      },
      _onClickCell: function (t, e) {
        this.timepicker && (e.setHours(this.timepicker.hours), e.setMinutes(this.timepicker.minutes)), this.selectDate(e);
      },
      set focused(t) {
        if (!t && this.focused) {
          var e = this._getCell(this.focused);
          e.length && e.removeClass("-focus-");
        }
        this._focused = t, this.opts.range && 1 == this.selectedDates.length && (this.minRange = this.selectedDates[0], this.maxRange = "", n.less(this.minRange, this._focused) && (this.maxRange = this.minRange, this.minRange = "")), this.silent || (this.date = t);
      },
      get focused() {
        return this._focused;
      },
      get parsedDate() {
        return n.getParsedDate(this.date);
      },
      set date(t) {
        return t instanceof Date ? (this.currentDate = t, this.inited && !this.silent && (this.views[this.view]._render(), this.nav._render(), this.visible && this.elIsInput && this.setPosition()), t) : void 0;
      },
      get date() {
        return this.currentDate;
      },
      set view(t) {
        return this.viewIndex = this.viewIndexes.indexOf(t), this.viewIndex < 0 ? void 0 : (this.prevView = this.currentView, this.currentView = t, this.inited && (this.views[t] ? this.views[t]._render() : this.views[t] = new e.fn.datepicker.Body(this, t, this.opts), this.views[this.prevView].hide(), this.views[t].show(), this.nav._render(), this.opts.onChangeView && this.opts.onChangeView(t), this.elIsInput && this.visible && this.setPosition()), t);
      },
      get view() {
        return this.currentView;
      },
      get cellType() {
        return this.view.substring(0, this.view.length - 1);
      },
      get minTime() {
        var t = n.getParsedDate(this.minDate);
        return new Date(t.year, t.month, t.date).getTime();
      },
      get maxTime() {
        var t = n.getParsedDate(this.maxDate);
        return new Date(t.year, t.month, t.date).getTime();
      },
      get curDecade() {
        return n.getDecade(this.date);
      }
    }, n.getDaysCount = function (t) {
      return new Date(t.getFullYear(), t.getMonth() + 1, 0).getDate();
    }, n.getParsedDate = function (t) {
      return {
        year: t.getFullYear(),
        month: t.getMonth(),
        fullMonth: t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1,
        date: t.getDate(),
        fullDate: t.getDate() < 10 ? "0" + t.getDate() : t.getDate(),
        day: t.getDay(),
        hours: t.getHours(),
        fullHours: t.getHours() < 10 ? "0" + t.getHours() : t.getHours(),
        minutes: t.getMinutes(),
        fullMinutes: t.getMinutes() < 10 ? "0" + t.getMinutes() : t.getMinutes()
      };
    }, n.getDecade = function (t) {
      var e = 10 * Math.floor(t.getFullYear() / 10);
      return [e, e + 9];
    }, n.template = function (t, e) {
      return t.replace(/#\{([\w]+)\}/g, function (t, i) {
        return e[i] || 0 === e[i] ? e[i] : void 0;
      });
    }, n.isSame = function (t, e, i) {
      if (!t || !e) return !1;
      var s = n.getParsedDate(t),
        a = n.getParsedDate(e),
        h = i ? i : "day",
        o = {
          day: s.date == a.date && s.month == a.month && s.year == a.year,
          month: s.month == a.month && s.year == a.year,
          year: s.year == a.year
        };
      return o[h];
    }, n.less = function (t, e, i) {
      return t && e ? e.getTime() < t.getTime() : !1;
    }, n.bigger = function (t, e, i) {
      return t && e ? e.getTime() > t.getTime() : !1;
    }, n.getLeadingZeroNum = function (t) {
      return parseInt(t) < 10 ? "0" + t : t;
    }, n.resetTime = function (t) {
      return "object" == typeof t ? (t = n.getParsedDate(t), new Date(t.year, t.month, t.date)) : void 0;
    }, e.fn.datepicker = function (t) {
      return this.each(function () {
        if (e.data(this, o)) {
          var i = e.data(this, o);
          i.opts = e.extend(!0, i.opts, t), i.update();
        } else e.data(this, o, new m(this, t));
      });
    }, e.fn.datepicker.Constructor = m, e.fn.datepicker.language = {
      ru: {
        days: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
        daysShort: ["Вос", "Пон", "Вто", "Сре", "Чет", "Пят", "Суб"],
        daysMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
        months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
        monthsShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
        today: "Сегодня",
        clear: "Очистить",
        dateFormat: "dd.mm.yyyy",
        timeFormat: "hh:ii",
        firstDay: 1
      }
    }, e(function () {
      e(r).datepicker();
    });
  }(), function () {
    var t = {
        days: '<div class="datepicker--days datepicker--body"><div class="datepicker--days-names"></div><div class="datepicker--cells datepicker--cells-days"></div></div>',
        months: '<div class="datepicker--months datepicker--body"><div class="datepicker--cells datepicker--cells-months"></div></div>',
        years: '<div class="datepicker--years datepicker--body"><div class="datepicker--cells datepicker--cells-years"></div></div>'
      },
      s = e.fn.datepicker,
      a = s.Constructor;
    s.Body = function (t, i, s) {
      this.d = t, this.type = i, this.opts = s, this.$el = e(""), this.opts.onlyTimepicker || this.init();
    }, s.Body.prototype = {
      init: function () {
        this._buildBaseHtml(), this._render(), this._bindEvents();
      },
      _bindEvents: function () {
        this.$el.on("click", ".datepicker--cell", e.proxy(this._onClickCell, this));
      },
      _buildBaseHtml: function () {
        this.$el = e(t[this.type]).appendTo(this.d.$content), this.$names = e(".datepicker--days-names", this.$el), this.$cells = e(".datepicker--cells", this.$el);
      },
      _getDayNamesHtml: function (t, e, s, a) {
        return e = e != i ? e : t, s = s ? s : "", a = a != i ? a : 0, a > 7 ? s : 7 == e ? this._getDayNamesHtml(t, 0, s, ++a) : (s += '<div class="datepicker--day-name' + (this.d.isWeekend(e) ? " -weekend-" : "") + '">' + this.d.loc.daysMin[e] + "</div>", this._getDayNamesHtml(t, ++e, s, ++a));
      },
      _getCellContents: function (t, e) {
        var i = "datepicker--cell datepicker--cell-" + e,
          s = new Date(),
          n = this.d,
          h = a.resetTime(n.minRange),
          o = a.resetTime(n.maxRange),
          r = n.opts,
          c = a.getParsedDate(t),
          d = {},
          l = c.date;
        switch (e) {
          case "day":
            n.isWeekend(c.day) && (i += " -weekend-"), c.month != this.d.parsedDate.month && (i += " -other-month-", r.selectOtherMonths || (i += " -disabled-"), r.showOtherMonths || (l = ""));
            break;
          case "month":
            l = n.loc[n.opts.monthsField][c.month];
            break;
          case "year":
            var u = n.curDecade;
            l = c.year, (c.year < u[0] || c.year > u[1]) && (i += " -other-decade-", r.selectOtherYears || (i += " -disabled-"), r.showOtherYears || (l = ""));
        }
        return r.onRenderCell && (d = r.onRenderCell(t, e) || {}, l = d.html ? d.html : l, i += d.classes ? " " + d.classes : ""), r.range && (a.isSame(h, t, e) && (i += " -range-from-"), a.isSame(o, t, e) && (i += " -range-to-"), 1 == n.selectedDates.length && n.focused ? ((a.bigger(h, t) && a.less(n.focused, t) || a.less(o, t) && a.bigger(n.focused, t)) && (i += " -in-range-"), a.less(o, t) && a.isSame(n.focused, t) && (i += " -range-from-"), a.bigger(h, t) && a.isSame(n.focused, t) && (i += " -range-to-")) : 2 == n.selectedDates.length && a.bigger(h, t) && a.less(o, t) && (i += " -in-range-")), a.isSame(s, t, e) && (i += " -current-"), n.focused && a.isSame(t, n.focused, e) && (i += " -focus-"), n._isSelected(t, e) && (i += " -selected-"), (!n._isInRange(t, e) || d.disabled) && (i += " -disabled-"), {
          html: l,
          classes: i
        };
      },
      _getDaysHtml: function (t) {
        var e = a.getDaysCount(t),
          i = new Date(t.getFullYear(), t.getMonth(), 1).getDay(),
          s = new Date(t.getFullYear(), t.getMonth(), e).getDay(),
          n = i - this.d.loc.firstDay,
          h = 6 - s + this.d.loc.firstDay;
        n = 0 > n ? n + 7 : n, h = h > 6 ? h - 7 : h;
        for (var o, r, c = -n + 1, d = "", l = c, u = e + h; u >= l; l++) r = t.getFullYear(), o = t.getMonth(), d += this._getDayHtml(new Date(r, o, l));
        return d;
      },
      _getDayHtml: function (t) {
        var e = this._getCellContents(t, "day");
        return '<div class="' + e.classes + '" data-date="' + t.getDate() + '" data-month="' + t.getMonth() + '" data-year="' + t.getFullYear() + '">' + e.html + "</div>";
      },
      _getMonthsHtml: function (t) {
        for (var e = "", i = a.getParsedDate(t), s = 0; 12 > s;) e += this._getMonthHtml(new Date(i.year, s)), s++;
        return e;
      },
      _getMonthHtml: function (t) {
        var e = this._getCellContents(t, "month");
        return '<div class="' + e.classes + '" data-month="' + t.getMonth() + '">' + e.html + "</div>";
      },
      _getYearsHtml: function (t) {
        var e = (a.getParsedDate(t), a.getDecade(t)),
          i = e[0] - 1,
          s = "",
          n = i;
        for (n; n <= e[1] + 1; n++) s += this._getYearHtml(new Date(n, 0));
        return s;
      },
      _getYearHtml: function (t) {
        var e = this._getCellContents(t, "year");
        return '<div class="' + e.classes + '" data-year="' + t.getFullYear() + '">' + e.html + "</div>";
      },
      _renderTypes: {
        days: function () {
          var t = this._getDayNamesHtml(this.d.loc.firstDay),
            e = this._getDaysHtml(this.d.currentDate);
          this.$cells.html(e), this.$names.html(t);
        },
        months: function () {
          var t = this._getMonthsHtml(this.d.currentDate);
          this.$cells.html(t);
        },
        years: function () {
          var t = this._getYearsHtml(this.d.currentDate);
          this.$cells.html(t);
        }
      },
      _render: function () {
        this.opts.onlyTimepicker || this._renderTypes[this.type].bind(this)();
      },
      _update: function () {
        var t,
          i,
          s,
          a = e(".datepicker--cell", this.$cells),
          n = this;
        a.each(function (a, h) {
          i = e(this), s = n.d._getDateFromCell(e(this)), t = n._getCellContents(s, n.d.cellType), i.attr("class", t.classes);
        });
      },
      show: function () {
        this.opts.onlyTimepicker || (this.$el.addClass("active"), this.acitve = !0);
      },
      hide: function () {
        this.$el.removeClass("active"), this.active = !1;
      },
      _handleClick: function (t) {
        var e = t.data("date") || 1,
          i = t.data("month") || 0,
          s = t.data("year") || this.d.parsedDate.year,
          a = this.d;
        if (a.view != this.opts.minView) return void a.down(new Date(s, i, e));
        var n = new Date(s, i, e),
          h = this.d._isSelected(n, this.d.cellType);
        return h ? void a._handleAlreadySelectedDates.bind(a, h, n)() : void a._trigger("clickCell", n);
      },
      _onClickCell: function (t) {
        var i = e(t.target).closest(".datepicker--cell");
        i.hasClass("-disabled-") || this._handleClick.bind(this)(i);
      }
    };
  }(), function () {
    var t = '<div class="datepicker--nav-action" data-action="prev">#{prevHtml}</div><div class="datepicker--nav-title">#{title}</div><div class="datepicker--nav-action" data-action="next">#{nextHtml}</div>',
      i = '<div class="datepicker--buttons"></div>',
      s = '<span class="datepicker--button" data-action="#{action}">#{label}</span>',
      a = e.fn.datepicker,
      n = a.Constructor;
    a.Navigation = function (t, e) {
      this.d = t, this.opts = e, this.$buttonsContainer = "", this.init();
    }, a.Navigation.prototype = {
      init: function () {
        this._buildBaseHtml(), this._bindEvents();
      },
      _bindEvents: function () {
        this.d.$nav.on("click", ".datepicker--nav-action", e.proxy(this._onClickNavButton, this)), this.d.$nav.on("click", ".datepicker--nav-title", e.proxy(this._onClickNavTitle, this)), this.d.$datepicker.on("click", ".datepicker--button", e.proxy(this._onClickNavButton, this));
      },
      _buildBaseHtml: function () {
        this.opts.onlyTimepicker || this._render(), this._addButtonsIfNeed();
      },
      _addButtonsIfNeed: function () {
        this.opts.todayButton && this._addButton("today"), this.opts.clearButton && this._addButton("clear");
      },
      _render: function () {
        var i = this._getTitle(this.d.currentDate),
          s = n.template(t, e.extend({
            title: i
          }, this.opts));
        this.d.$nav.html(s), "years" == this.d.view && e(".datepicker--nav-title", this.d.$nav).addClass("-disabled-"), this.setNavStatus();
      },
      _getTitle: function (t) {
        return this.d.formatDate(this.opts.navTitles[this.d.view], t);
      },
      _addButton: function (t) {
        this.$buttonsContainer.length || this._addButtonsContainer();
        var i = {
            action: t,
            label: this.d.loc[t]
          },
          a = n.template(s, i);
        e("[data-action=" + t + "]", this.$buttonsContainer).length || this.$buttonsContainer.append(a);
      },
      _addButtonsContainer: function () {
        this.d.$datepicker.append(i), this.$buttonsContainer = e(".datepicker--buttons", this.d.$datepicker);
      },
      setNavStatus: function () {
        if ((this.opts.minDate || this.opts.maxDate) && this.opts.disableNavWhenOutOfRange) {
          var t = this.d.parsedDate,
            e = t.month,
            i = t.year,
            s = t.date;
          switch (this.d.view) {
            case "days":
              this.d._isInRange(new Date(i, e - 1, 1), "month") || this._disableNav("prev"), this.d._isInRange(new Date(i, e + 1, 1), "month") || this._disableNav("next");
              break;
            case "months":
              this.d._isInRange(new Date(i - 1, e, s), "year") || this._disableNav("prev"), this.d._isInRange(new Date(i + 1, e, s), "year") || this._disableNav("next");
              break;
            case "years":
              var a = n.getDecade(this.d.date);
              this.d._isInRange(new Date(a[0] - 1, 0, 1), "year") || this._disableNav("prev"), this.d._isInRange(new Date(a[1] + 1, 0, 1), "year") || this._disableNav("next");
          }
        }
      },
      _disableNav: function (t) {
        e('[data-action="' + t + '"]', this.d.$nav).addClass("-disabled-");
      },
      _activateNav: function (t) {
        e('[data-action="' + t + '"]', this.d.$nav).removeClass("-disabled-");
      },
      _onClickNavButton: function (t) {
        var i = e(t.target).closest("[data-action]"),
          s = i.data("action");
        this.d[s]();
      },
      _onClickNavTitle: function (t) {
        return e(t.target).hasClass("-disabled-") ? void 0 : "days" == this.d.view ? this.d.view = "months" : void (this.d.view = "years");
      }
    };
  }(), function () {
    var t = '<div class="datepicker--time"><div class="datepicker--time-current">   <span class="datepicker--time-current-hours">#{hourVisible}</span>   <span class="datepicker--time-current-colon">:</span>   <span class="datepicker--time-current-minutes">#{minValue}</span></div><div class="datepicker--time-sliders">   <div class="datepicker--time-row">      <input type="range" name="hours" value="#{hourValue}" min="#{hourMin}" max="#{hourMax}" step="#{hourStep}"/>   </div>   <div class="datepicker--time-row">      <input type="range" name="minutes" value="#{minValue}" min="#{minMin}" max="#{minMax}" step="#{minStep}"/>   </div></div></div>',
      i = e.fn.datepicker,
      s = i.Constructor;
    i.Timepicker = function (t, e) {
      this.d = t, this.opts = e, this.init();
    }, i.Timepicker.prototype = {
      init: function () {
        var t = "input";
        this._setTime(this.d.date), this._buildHTML(), navigator.userAgent.match(/trident/gi) && (t = "change"), this.d.$el.on("selectDate", this._onSelectDate.bind(this)), this.$ranges.on(t, this._onChangeRange.bind(this)), this.$ranges.on("mouseup", this._onMouseUpRange.bind(this)), this.$ranges.on("mousemove focus ", this._onMouseEnterRange.bind(this)), this.$ranges.on("mouseout blur", this._onMouseOutRange.bind(this));
      },
      _setTime: function (t) {
        var e = s.getParsedDate(t);
        this._handleDate(t), this.hours = e.hours < this.minHours ? this.minHours : e.hours, this.minutes = e.minutes < this.minMinutes ? this.minMinutes : e.minutes;
      },
      _setMinTimeFromDate: function (t) {
        this.minHours = t.getHours(), this.minMinutes = t.getMinutes(), this.d.lastSelectedDate && this.d.lastSelectedDate.getHours() > t.getHours() && (this.minMinutes = this.opts.minMinutes);
      },
      _setMaxTimeFromDate: function (t) {
        this.maxHours = t.getHours(), this.maxMinutes = t.getMinutes(), this.d.lastSelectedDate && this.d.lastSelectedDate.getHours() < t.getHours() && (this.maxMinutes = this.opts.maxMinutes);
      },
      _setDefaultMinMaxTime: function () {
        var t = 23,
          e = 59,
          i = this.opts;
        this.minHours = i.minHours < 0 || i.minHours > t ? 0 : i.minHours, this.minMinutes = i.minMinutes < 0 || i.minMinutes > e ? 0 : i.minMinutes, this.maxHours = i.maxHours < 0 || i.maxHours > t ? t : i.maxHours, this.maxMinutes = i.maxMinutes < 0 || i.maxMinutes > e ? e : i.maxMinutes;
      },
      _validateHoursMinutes: function (t) {
        this.hours < this.minHours ? this.hours = this.minHours : this.hours > this.maxHours && (this.hours = this.maxHours), this.minutes < this.minMinutes ? this.minutes = this.minMinutes : this.minutes > this.maxMinutes && (this.minutes = this.maxMinutes);
      },
      _buildHTML: function () {
        var i = s.getLeadingZeroNum,
          a = {
            hourMin: this.minHours,
            hourMax: i(this.maxHours),
            hourStep: this.opts.hoursStep,
            hourValue: this.hours,
            hourVisible: i(this.displayHours),
            minMin: this.minMinutes,
            minMax: i(this.maxMinutes),
            minStep: this.opts.minutesStep,
            minValue: i(this.minutes)
          },
          n = s.template(t, a);
        this.$timepicker = e(n).appendTo(this.d.$datepicker), this.$ranges = e('[type="range"]', this.$timepicker), this.$hours = e('[name="hours"]', this.$timepicker), this.$minutes = e('[name="minutes"]', this.$timepicker), this.$hoursText = e(".datepicker--time-current-hours", this.$timepicker), this.$minutesText = e(".datepicker--time-current-minutes", this.$timepicker), this.d.ampm && (this.$ampm = e('<span class="datepicker--time-current-ampm">').appendTo(e(".datepicker--time-current", this.$timepicker)).html(this.dayPeriod), this.$timepicker.addClass("-am-pm-"));
      },
      _updateCurrentTime: function () {
        var t = s.getLeadingZeroNum(this.displayHours),
          e = s.getLeadingZeroNum(this.minutes);
        this.$hoursText.html(t), this.$minutesText.html(e), this.d.ampm && this.$ampm.html(this.dayPeriod);
      },
      _updateRanges: function () {
        this.$hours.attr({
          min: this.minHours,
          max: this.maxHours
        }).val(this.hours), this.$minutes.attr({
          min: this.minMinutes,
          max: this.maxMinutes
        }).val(this.minutes);
      },
      _handleDate: function (t) {
        this._setDefaultMinMaxTime(), t && (s.isSame(t, this.d.opts.minDate) ? this._setMinTimeFromDate(this.d.opts.minDate) : s.isSame(t, this.d.opts.maxDate) && this._setMaxTimeFromDate(this.d.opts.maxDate)), this._validateHoursMinutes(t);
      },
      update: function () {
        this._updateRanges(), this._updateCurrentTime();
      },
      _getValidHoursFromDate: function (t, e) {
        var i = t,
          a = t;
        t instanceof Date && (i = s.getParsedDate(t), a = i.hours);
        var n = e || this.d.ampm,
          h = "am";
        if (n) switch (!0) {
          case 0 == a:
            a = 12;
            break;
          case 12 == a:
            h = "pm";
            break;
          case a > 11:
            a -= 12, h = "pm";
        }
        return {
          hours: a,
          dayPeriod: h
        };
      },
      set hours(t) {
        this._hours = t;
        var e = this._getValidHoursFromDate(t);
        this.displayHours = e.hours, this.dayPeriod = e.dayPeriod;
      },
      get hours() {
        return this._hours;
      },
      _onChangeRange: function (t) {
        var i = e(t.target),
          s = i.attr("name");
        this.d.timepickerIsActive = !0, this[s] = i.val(), this._updateCurrentTime(), this.d._trigger("timeChange", [this.hours, this.minutes]), this._handleDate(this.d.lastSelectedDate), this.update();
      },
      _onSelectDate: function (t, e) {
        this._handleDate(e), this.update();
      },
      _onMouseEnterRange: function (t) {
        var i = e(t.target).attr("name");
        e(".datepicker--time-current-" + i, this.$timepicker).addClass("-focus-");
      },
      _onMouseOutRange: function (t) {
        var i = e(t.target).attr("name");
        this.d.inFocus || e(".datepicker--time-current-" + i, this.$timepicker).removeClass("-focus-");
      },
      _onMouseUpRange: function (t) {
        this.d.timepickerIsActive = !1;
      }
    };
  }();
}(window, jQuery);
$(document).ready(function () {
  $.validator.addMethod("phoneUS", function (phone_number, element) {
    phone_number = phone_number.replace(/\s+/g, "");
    return this.optional(element) || phone_number.length > 9 && phone_number.match(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){11,14}(\s*)?$/);
  });
  $.validator.addMethod("phoneREG", function (phone_number, element) {
    phone_number = phone_number.replace(/\s+/g, "");
    return this.optional(element) || phone_number.length > 9 && phone_number.match(/^([- _():=]?\d[- _():=]?){10,14}(\s*)?$/);
  });
  $.validator.addMethod('imagedim', function (value, element, param) {
    var _URL = window.URL;
    var img;
    if (element = this.files[0]) {
      img = new Image();
      img.onload = function () {
        console.log("Width:" + this.width + "   Height: " + this.height); //this will give you image width and height and you can easily validate here....

        return this.width >= param;
      };
      img.src = _URL.createObjectURL(element);
    }
  });
  if ($("#aero_phone").length) {
    $("#aero_phone").inputmask('+7-999-999-99-99');
  }
  if ($('.mailing-form').length) {
    $('.mailing-form__btn').on('click', function () {
      $('.mailing-form').validate({
        rules: {
          email: {
            required: true,
            email: true
          },
          check: {
            required: true
          }
        },
        messages: {
          email: {
            required: 'Введите e-mail',
            email: 'Укажите правильный e-mail'
          },
          check: {
            required: ''
          }
        },
        errorClass: 'invalid'
      });
    });

    // // РїРѕРєР°Р·Р°С‚СЊ РЎРїР°СЃРёР±Рѕ Р·Р° РѕС‚РїСЂР°РІРєСѓ
    // //$('.mailing-inner__form').hide();
    // //$('.mailing-inner__thanks').show();

    // // СЃРєСЂС‹С‚СЊ РЎРїР°СЃРёР±Рѕ Р·Р° РѕС‚РїСЂР°РІРєСѓ Рё РїРѕРєР°Р·Р°С‚СЊ С„РѕСЂРјСѓ
    // $('.mailing-inner__thanks .mailing-form__btn').on('click', function(){
    //     $('.mailing-inner__form').show();
    //     $('.mailing-form__input input').val('');
    //     $('.mailing-inner__thanks').hide();
    // });
  }

  $("#send_talisman_draft").validate({
    rules: {
      pagetitle: {
        required: true
      },
      showcaseItemAuthorEmail: {
        required: true,
        email: true
      },
      showcaseItemAuthorFIO: {
        required: true
      },
      showcaseItemAuthorPhone: {
        required: true
      },
      agreed: {
        required: true
      },
      showcaseItemGallary: {
        required: true
      }
    },
    messages: {
      email: {
        required: "Это поле должно быть заполнено",
        email: "Введите корректный email"
      },
      agreed: {
        required: "Вы должны подтвердить"
      }
    }
  });
  $("#reject-reccurent-form").validate({
    rules: {
      email: {
        required: true,
        email: true
      },
      fio: {
        required: true
      },
      message: {
        required: true
      },
      agreed: {
        required: true
      }
    },
    messages: {
      email: {
        required: "Это поле должно быть заполнено",
        email: "Введите корректный email"
      },
      agreed: {
        required: "Вы должны подтвердить"
      }
    }
  });
  $("#become_vol_step1").validate({
    rules: {
      email: {
        required: true,
        email: true
      },
      fio: {
        required: true
      },
      phone: {
        required: true
      },
      agreed: {
        required: true
      }
    },
    messages: {
      email: {
        required: "Это поле должно быть заполнено",
        email: "Введите корректный email"
      },
      agreed: {
        required: "Вы должны подтвердить"
      }
    }
  });
  $("#add_aero_form").validate({
    rules: {
      name: {
        required: true
      },
      phone: {
        required: true
      },
      agreed: {
        required: true
      },
      ticket: {
        required: true
      }
    },
    messages: {
      agreed: {
        required: "Вы должны подтвердить"
      }
    }
  });
  $("#become_vol").validate({
    ignore: ":hidden",
    rules: {
      fullname: {
        required: true
      },
      dob: {
        required: true
      },
      user_dob_agreement: {
        required: true
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
        required: true
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
  $("#email_recovery_form").validate({
    rules: {
      username: {
        required: true,
        email: true
      }
    },
    messages: {
      username: {
        required: "Это поле должно быть заполнено",
        email: "Введите корректный email"
      }
    }
  });
  $("#office-auth-login").validate({
    rules: {
      username: {
        required: true,
        email: true
      }
    },
    messages: {
      username: {
        required: "Это поле должно быть заполнено",
        email: "Введите корректный email"
      }
    }
  });
  $("#office-auth-register").validate({
    rules: {
      email: {
        required: true,
        email: true
      },
      terms_ok: {
        required: true
      }
    },
    messages: {
      email: {
        required: "Это поле должно быть заполнено",
        email: "Введите корректный email"
      },
      terms_ok: {
        required: "Вы должны подтвердить"
      }
    }
  });
  $("#add_opinion_form").validate({
    rules: {
      about: {
        required: true
      },
      esse: {
        required: true
      }
    },
    messages: {
      about: {
        required: "Это поле должно быть заполнено"
      },
      esse: {
        required: "Это поле должно быть заполнено"
      }
    }
  });
  $("#add_feedback_form").validate({
    rules: {
      email: {
        required: true,
        email: true
      },
      fio: {
        required: true
      },
      agreed: {
        required: true
      }
    },
    messages: {
      email: {
        required: "Это поле должно быть заполнено",
        email: "Введите корректный email"
      },
      agreed: {
        required: "Вы должны подтвердить"
      }
    }
  });
  $("#add_feedback_partner_form").validate({
    rules: {
      email: {
        required: true,
        email: true
      },
      fio: {
        required: true
      },
      phone: {
        required: true
      },
      message: {
        required: true
      },
      company: {
        required: true
      }
    },
    messages: {
      email: {
        required: "Это поле должно быть заполнено",
        email: "Введите корректный email"
      },
      agreed: {
        required: "Вы должны подтвердить"
      }
    }
  });
  $("#add-showcase-step1").validate({
    ignore: [],
    rules: {
      pagetitle: {
        required: true
      },
      content: {
        required: true
      },
      direction: {
        required: true
      },
      showcaseGrant: {
        required: true
      },
      target_audience: {
        required: true
      },
      audience_actual: {
        required: true
      },
      target: {
        required: true
      },
      tasks: {
        required: true
      },
      soc_effects_kol: {
        required: true
      },
      soc_effects_kach: {
        required: true
      },
      ed_effects_kol: {
        required: true
      },
      ed_effects_kach: {
        required: true
      },
      ekonom_effects_pr: {
        required: true
      },
      ekonom_effects_kos: {
        required: true
      },
      showcaseItemEstimate: {
        required: true
      },
      idea_target_aud: {
        required: true
      },
      idea_actual: {
        required: true
      },
      idea_uniq: {
        required: true
      },
      idea_perspective: {
        required: true
      },
      idea_affect: {
        required: true
      }
    }
  });
  $("#add-showcase-step2").validate({
    rules: {
      ruk_name: {
        required: true
      },
      ruk_exp: {
        required: true
      },
      teammates: {
        required: true
      },
      teammates_exp: {
        required: true
      },
      org_name: {
        required: true
      },
      org_svidetelstvo: {
        required: true
      },
      org_svidetelstvo_n: {
        required: true
      },
      org_vypiska: {
        required: true
      },
      org_reks: {
        required: true
      },
      fiz_passport: {
        required: true
      },
      fiz_svidetelstvo: {
        required: true
      },
      idea_author: {
        required: true
      },
      author_exp: {
        required: true
      },
      author_ready: {
        required: true
      },
      showcaseItemAuthorEmail: {
        required: true
      },
      showcaseItemAuthorPhone: {
        required: true
      }
    }
  });
  $("#add-showcase-step3").validate({
    ignore: [],
    rules: {
      showcaseItemScale: {
        required: true
      },
      showcaseItemDateStart: {
        required: true
      },
      showcaseItemDateEnd: {
        required: true
      },
      showcaseItemUseful: {
        required: true
      },
      showcaseItemAudence: {
        required: true
      },
      showcaseItemHeritage: {
        required: true
      },
      showcaseItemEngagement: {
        required: true
      },
      showcaseItemInteraction: {
        required: true
      },
      showcaseItemAnalogs: {
        required: true
      },
      showcaseItemAnalogsDifference: {
        required: true
      },
      showcaseItemPrevProjects: {
        required: true
      },
      showcaseItemResources: {
        required: true
      },
      showcaseItemResult: {
        required: true
      },
      showcaseItemSteps: {
        required: true
      },
      showcaseItemIndicators: {
        required: true
      },
      showcaseItemBudget: {
        required: true
      },
      showcaseItemAvailability: {
        required: true
      },
      showcaseItemHowHelp: {
        required: true
      },
      showcaseItemEstimate: {
        required: true
      },
      agree1: {
        required: true
      },
      agree2: {
        required: true
      },
      agree3: {
        required: true
      }
    },
    messages: {
      agree1: {
        required: "Вы должны дать согласие"
      },
      agree2: {
        required: "Вы должны дать согласие"
      },
      agree3: {
        required: "Вы должны дать согласие"
      }
    }
  });
  $("#questionnaire-fund").validate({
    ignore: [],
    rules: {
      organization: {
        required: true
      },
      city: {
        required: true
      },
      address: {
        required: true
      },
      fio: {
        required: true
      },
      phone: {
        required: true,
        phoneUS: true
      },
      email: {
        required: true,
        email: true
      },
      site: {
        required: true,
        url: true
      },
      network: {
        required: true
      },
      nameAction: {
        required: true
      },
      purpose: {
        required: true
      },
      dateEnd: {
        required: true
      },
      description: {
        required: true
      },
      fileLogo: {
        required: true
      },
      fileCover: {
        required: true
      },
      agree1: {
        required: true
      }
    },
    messages: {
      organization: {
        required: "Это поле необходимо заполнить."
      },
      city: {
        required: "Это поле необходимо заполнить."
      },
      address: {
        required: "Это поле необходимо заполнить."
      },
      fio: {
        required: "Это поле необходимо заполнить."
      },
      phone: {
        required: "Это поле необходимо заполнить.",
        phoneUS: "Введите корректный телефон"
      },
      email: {
        required: "Это поле необходимо заполнить.",
        email: "Введите корректный email"
      },
      site: {
        required: "Это поле необходимо заполнить."
      },
      network: {
        required: "Это поле необходимо заполнить."
      },
      nameAction: {
        required: "Это поле необходимо заполнить."
      },
      purpose: {
        required: "Это поле необходимо заполнить."
      },
      dateEnd: {
        required: "Это поле необходимо заполнить."
      },
      goal: {
        required: "Это поле необходимо заполнить."
      },
      description: {
        required: "Это поле необходимо заполнить."
      },
      fileLogo: {
        required: "Это поле необходимо заполнить."
      },
      fileCover: {
        required: "Это поле необходимо заполнить."
      },
      agree1: {
        required: "Это поле необходимо заполнить."
      }
    }
  });
  $("#questionnaire-citizen").validate({
    ignore: [],
    rules: {
      fio: {
        required: true
      },
      phone: {
        required: true,
        phoneUS: true
      },
      email: {
        required: true,
        email: true
      },
      nameAction: {
        required: true
      },
      purpose: {
        required: true
      },
      dateEnd: {
        required: true
      },
      goal: {
        required: true
      },
      description: {
        required: true
      },
      cause: {
        required: true
      },
      fileCover: {
        required: true
      },
      agree2: {
        required: true
      }
    },
    messages: {
      fio: {
        required: "Это поле необходимо заполнить."
      },
      phone: {
        required: "Это поле необходимо заполнить.",
        phoneUS: "Введите корректный телефон"
      },
      email: {
        required: "Это поле необходимо заполнить.",
        email: "Введите корректный email"
      },
      nameAction: {
        required: "Это поле необходимо заполнить."
      },
      purpose: {
        required: "Это поле необходимо заполнить."
      },
      dateEnd: {
        required: "Это поле необходимо заполнить."
      },
      goal: {
        required: "Это поле необходимо заполнить."
      },
      description: {
        required: "Это поле необходимо заполнить."
      },
      cause: {
        required: "Это поле необходимо заполнить."
      },
      fileCover: {
        required: "Это поле необходимо заполнить."
      },
      agree2: {
        required: "Это поле необходимо заполнить."
      }
    }
  });
  $("#request-license").validate({
    ignore: [],
    rules: {
      organizationName: {
        required: true
      },
      director: {
        required: true
      },
      inn: {
        required: true
      },
      ogrn: {
        required: true
      },
      legalAddres: {
        required: true
      },
      actualAddres: {
        required: true
      },
      contactPerson: {
        required: true
      },
      contactPersonPhone: {
        required: true,
        phoneUS: true
      },
      contactPersonEmail: {
        required: true,
        email: true
      },
      phone: {
        required: true,
        phoneUS: true
      },
      email: {
        required: true,
        email: true
      },
      description: {
        required: true
      },
      agree: {
        required: true
      }
    },
    messages: {
      organizationName: {
        required: "Это поле необходимо заполнить."
      },
      director: {
        required: "Это поле необходимо заполнить."
      },
      inn: {
        required: "Это поле необходимо заполнить."
      },
      ogrn: {
        required: "Это поле необходимо заполнить."
      },
      legalAddres: {
        required: "Это поле необходимо заполнить."
      },
      actualAddres: {
        required: "Это поле необходимо заполнить."
      },
      contactPerson: {
        required: "Это поле необходимо заполнить."
      },
      contactPersonPhone: {
        required: "Это поле необходимо заполнить.",
        phoneUS: "Введите корректный телефон"
      },
      contactPersonEmail: {
        required: "Это поле необходимо заполнить.",
        email: "Введите корректный email"
      },
      phone: {
        required: "Это поле необходимо заполнить.",
        phoneUS: "Введите корректный телефон"
      },
      email: {
        required: "Это поле необходимо заполнить.",
        email: "Введите корректный email"
      },
      description: {
        required: "Это поле необходимо заполнить."
      },
      agree: {
        required: "Это поле необходимо заполнить."
      }
    }
  });
  $("#partner-feedback").validate({
    ignore: [],
    rules: {
      name: {
        required: true
      },
      surname: {
        required: true
      },
      organizationName: {
        required: true
      },
      phone: {
        required: true,
        phoneUS: true
      },
      email: {
        required: true,
        email: true
      },
      description: {
        required: true
      },
      agree: {
        required: true
      }
    },
    messages: {
      name: {
        required: "Это поле необходимо заполнить."
      },
      surname: {
        required: "Это поле необходимо заполнить."
      },
      organizationName: {
        required: "Это поле необходимо заполнить."
      },
      phone: {
        required: "Это поле необходимо заполнить.",
        phoneUS: "Введите корректный телефон"
      },
      email: {
        required: "Это поле необходимо заполнить.",
        email: "Введите корректный email"
      },
      description: {
        required: "Это поле необходимо заполнить."
      },
      agree: {
        required: "Это поле необходимо заполнить."
      }
    }
  });
  $("#fund-anketa-form").validate({
    ignore: [],
    rules: {
      name: {
        required: true
      },
      about: {
        required: true
      },
      target: {
        required: true
      },
      city: {
        required: true
      },
      adress: {
        required: true
      },
      help: {
        required: true
      },
      fio: {
        required: true
      },
      phone: {
        required: true
      },
      email: {
        required: true,
        email: true
      },
      inn: {
        required: true
      },
      uradress: {
        required: true
      },
      agree: {
        required: true
      },
      agree2: {
        required: true
      }
    },
    messages: {
      name: {
        required: "Это поле необходимо заполнить."
      },
      surname: {
        required: "Это поле необходимо заполнить."
      },
      organizationName: {
        required: "Это поле необходимо заполнить."
      },
      phone: {
        required: "Это поле необходимо заполнить.",
        phoneUS: "Введите корректный телефон"
      },
      email: {
        required: "Это поле необходимо заполнить.",
        email: "Введите корректный email"
      },
      description: {
        required: "Это поле необходимо заполнить."
      },
      agree: {
        required: "Это поле необходимо заполнить."
      },
      agree2: {
        required: "Это поле необходимо заполнить."
      }
    }
  });
});
$.extend($.validator.messages, {
  required: "Это поле необходимо заполнить.",
  remote: "Пожалуйста, введите правильное значение.",
  email: "Пожалуйста, введите корректный адрес электронной почты.",
  url: "Пожалуйста, введите корректный URL.",
  date: "Пожалуйста, введите корректную дату.",
  dateISO: "Пожалуйста, введите корректную дату в формате ISO.",
  number: "Пожалуйста, введите число.",
  digits: "Пожалуйста, вводите только цифры.",
  creditcard: "Пожалуйста, введите правильный номер кредитной карты.",
  equalTo: "Пожалуйста, введите такое же значение ещё раз.",
  extension: "Пожалуйста, выберите файл с правильным расширением.",
  maxlength: $.validator.format("Пожалуйста, введите не больше {0} символов."),
  minlength: $.validator.format("Пожалуйста, введите не меньше {0} символов."),
  rangelength: $.validator.format("Пожалуйста, введите значение длиной от {0} до {1} символов."),
  range: $.validator.format("Пожалуйста, введите число от {0} до {1}."),
  max: $.validator.format("Пожалуйста, введите число, меньшее или равное {0}."),
  min: $.validator.format("Пожалуйста, введите число, большее или равное {0}.")
});
$("form").submit(function (e) {

  // if ($(this).valid() == false) {
  //     e.preventDefault();
  // }
  // else {
  //     $(this).submit();
  // }
});
let forms = document.querySelectorAll("#become_vol_step1, #request-license, #partner-feedback");
forms && forms.forEach(function (form) {
  form.addEventListener('submit', function (e) {
    if ($(form).valid()) {
      var token = grecaptcha.getResponse();
      if (grecaptcha && typeof token == "string") {
        let recaptcha = $(form.querySelector('[name=recaptcha]'));
        if (!token) {
          // Мешаем отправке, т.к. надо сперва получить токен
          //console.error('Нужно получить токен: ', token);

          onSubmit = function (token) {
            if (!token || typeof token !== "string") {
              return;
            }
            let data = {
              "action": "recaptcha",
              "g-recaptcha-response": token
            };
            let type = "POST";
            $.ajax({
              type,
              data,
              success: function (response) {
                response = JSON.parse(response);
                if (response.success === true) {
                  //console.error(response.success);

                  recaptcha.val('Vy3EOiR');
                  $(form).submit();
                  recaptcha.val('');
                } else {
                  $(form).submit();
                }
              }
            });
          };
          grecaptcha.reset();
          grecaptcha.execute();
          e.stopPropagation();
          e.preventDefault();
        } else {
          // Отправляем
          //console.error('Отправляем', token);
          let data = {
            "action": "recaptcha",
            "g-recaptcha-response": token
          };
          let type = "POST";
          $.ajax({
            type,
            data,
            success: function (response) {
              response = JSON.parse(response);
              if (response.success === true) {
                //console.error(response.success);

                recaptcha.val('Vy3EOiR');
                $(form).submit();
                recaptcha.val('');
              } else {
                $(form).submit();
              }
            }
          });
        }
      } else {
        // Токен не строка => не объявлена функция
        //console.error('Seems like grecaptcha is not defined');
      }
    } else {
      // Форма невалидна
      //console.error('Форма невалидна');
    }
  }, true);
});
$(document).ready(function () {
  // $('input[name="phone"]').inputmask({"mask": "9(999) 999-99-99"});
  // $('input[name="passport_ser_num"]').inputmask({"mask": "9999 999999"});
  // $('input[name="user_dob_phone"]').inputmask({"mask": "9(999) 999-99-99"});

  $('.js-dob-calendar').datepicker({
    dateFormat: 'yyyy/mm/dd',
    view: 'years',
    // minDate: '0',
    // maxDate: "0",

    onSelect: function (dateText, inst) {
      // $(".js-dob-calendar").datepicker( "option", "dateFormat", "yyyy/mm/dd" );
      //$(".js-dob-calendar").datepicker({ dateFormat: 'yyyy/mm/dd' }).val();
      // day  = date.getDate(),
      // month = date.getMonth() + 1,
      // year =  date.getFullYear();
      //alert(day + '-' + month + '-' + year);

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

      // $('.upload__require-box-small_i').text(age);
      // $(".js-dob-calendar").datepicker( "option", "dateFormat", "dd.mm.yyyy" );
      //$(".js-dob-calendar").datepicker({ dateFormat: 'dd.mm.yyyy' }).val();
    }
  });

  $('input[name="other_languages"]').change(function () {
    if ($(this).val() == 'Другой') {
      $('.other_lang_spoiler').slideDown(300);
      $('.js-other_lang_spoiler').slideDown(300);
    } else {
      $('.other_lang_spoiler').slideUp(300);
      $('.js-other_lang_spoiler').slideDown(300);
    }
    if ($(this).val() == 'Не владею') {
      $('.js-other_lang_spoiler').slideUp(300);
    }
  });
  $('input[name="email"]').focusout(function () {
    // console.log('email focusout');

    var th_email = $(this).val();
    var data = {};

    // data = serializeForm($(this));
    data['nn_action'] = 'become_vol_check_email';
    data['email'] = th_email;
    $.ajax({
      url: [location.protocol, '//', location.host, location.pathname].join(''),
      data: data,
      type: 'post',
      dataType: 'json',
      success: function (response) {
        if (response.success) {
          console.log(response.th_check);
          PNotify.error('Волонтер с таким email уже подал свою анкету!', 'Ошибка');
          $('#become_vol .content-block__more').addClass('disabled');
          $('#become_vol .content-block__more .youshallnotpass2').remove();
          $('#become_vol .content-block__more').append('<span class="youshallnotpass2">К сожалению, вы не можете отправить анкету, так как волонтер с таким email уже зарегистрирован.</span>');
        } else {
          $('#become_vol .content-block__more').removeClass('disabled');
          $('#become_vol .content-block__more .youshallnotpass2').remove();
          console.log(response.th_check);
        }
      },
      error: function () {
        console.log('Что-то пошло не так 2');
        // PNotify.error('Что-то пошло не так', 'Ошибка')
      }
    });
  });
});

const cityNizhny = document.querySelector('.city-nizhny');
if (cityNizhny) {
  const cityAnother = document.querySelector('.city-another');
  cityNizhny.addEventListener('click', () => {
    const input = cityNizhny.querySelector('input');
    if (input.checked) {
      $('.js-city_area-spoiler').slideUp(300);
      $('.js-city_nizhny-spoiler').slideDown(300);
    }
  });
  cityAnother.addEventListener('click', () => {
    const input = cityAnother.querySelector('input');
    if (input.checked) {
      $('.js-city_nizhny-spoiler').slideUp(300);
      $('.js-city_area-spoiler').slideDown(300);
    }
  });
}

/***/ }),

/***/ "./src/js/functions/mobile-check.js":
/*!******************************************!*\
  !*** ./src/js/functions/mobile-check.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mobileCheck": () => (/* binding */ mobileCheck)
/* harmony export */ });
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars */ "./src/js/_vars.js");

const mobileCheck = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  if (/android/i.test(userAgent)) {
    _vars__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEl.classList.add('page--android');
    return "Android";
  }
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    _vars__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEl.classList.add('page--ios');
    return "iOS";
  }
  return "unknown";
};

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
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_vars */ "./src/js/_vars.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_functions */ "./src/js/_functions.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_components */ "./src/js/_components.js");




})();

/******/ })()
;
//# sourceMappingURL=main.js.map