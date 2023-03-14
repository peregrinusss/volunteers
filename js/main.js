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

/***/ "./src/js/components/ex.js":
/*!*********************************!*\
  !*** ./src/js/components/ex.js ***!
  \*********************************/
/***/ (() => {

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
/* harmony import */ var _vendor_datatables_ru_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor/datatables-ru.json */ "./src/js/vendor/datatables-ru.json");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_components */ "./src/js/_components.js");
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
  language: _vendor_datatables_ru_json__WEBPACK_IMPORTED_MODULE_0__
});
var testTable = $('#test-table').DataTable({
  responsive: true,
  language: _vendor_datatables_ru_json__WEBPACK_IMPORTED_MODULE_0__,
  "ordering": false,
  paging: false,
  "searching": false
});

// $('.js-change-answer-ball').click(function(){
//   var th_parent = $(this).parents('.vt_td2');

//   var ball_prev = th_parent.find('.vol_ball_cur').text();
//   var ball_new = th_parent.find('.txt_i').val();

//   if( ball_new == ball_prev || !ball_new || ball_new =='' ){
//       th_parent.find('.txt_i').addClass('error');
//       return;
//   } else {
//       var data = {};
//       data['nn_action'] = 'volhandling_change_answer_ball';
//       data['anketa'] = th_parent.find('.js-change-answer-ball').attr('data-anketaid');
//       data['idx'] = th_parent.find('.js-change-answer-ball').attr('data-idx');
//       data['new_ball'] =  ball_new;

//       $.ajax({
//           url: [
//               location.protocol,
//               '//',
//               location.host,
//               location.pathname
//           ].join(''),
//           data: data,
//           type: 'post',
//           dataType: 'json',
//           beforeSend: function(){
//              // $('#send_talisman_draft').addClass('disabled');
//           },
//           success: function (response) {
//               if (response.success) {
//                   PNotify.success('Сохранили');

//                  // setTimeout(function(){document.location.reload(true);},1000);
//                  $('.volh_ball_change_hidden').removeClass('active');
//                  th_parent.find('.vol_ball_cur').text(ball_new);

//                   $('.pp').removeClass('show');
//                   $('html,body').removeClass('noscroll');

//                   } else {
//                       PNotify.error('К сожалению, произошла ошибка при загрузке данных =( Пожалуйста, обратитесь к администрацие сайта ')
//               }
//           },
//           error: function () {
//               PNotify.error('К сожалению, произошла ошибка при загрузке данных =( Пожалуйста, обратитесь к администрацие сайта ')
//           },
//           complete: function(){
//             //  $('#send_talisman_draft').removeClass('disabled');

//           }
//       });

//   }

// });

//Balls change END

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