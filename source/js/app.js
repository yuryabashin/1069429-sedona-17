/*
 * Навигация мобильной версии сайта
 */

var mainNavigation = document.querySelector(".main-nav");

var mainNvaigationItems = mainNavigation.querySelector(".main-nav__list");
var btnOpenNavigation = mainNavigation.querySelector(".main-nav__btn-open");
var btnCloseNavigation = mainNavigation.querySelector(".main-nav__btn-close");

mainNavigation.classList.remove("main-nav--nojs");


btnOpenNavigation.addEventListener("click", function() {

  if (mainNvaigationItems.classList.contains("hidden")) {

    mainNvaigationItems.classList.remove("hidden");

    btnOpenNavigation.classList.add("hidden");
    btnCloseNavigation.classList.remove("hidden");
  }
});


btnCloseNavigation.addEventListener("click", function() {

  if (!mainNvaigationItems.classList.contains("hidden")) {

    mainNvaigationItems.classList.add("hidden");

    btnOpenNavigation.classList.remove("hidden");
    btnCloseNavigation.classList.add("hidden");
  }
});

/*
 * Всплывающие дилоговые окна
 */

var recallForm = document.querySelector(".recall-form");

if (recallForm) {

    var submitButton = recallForm.querySelector("input[type=submit]");

    var failureDialog = document.querySelector(".modal-dialog--failure");
    var successDialog = document.querySelector(".modal-dialog--success");

    submitButton.addEventListener("click", function(event) {
      event.preventDefault();

      if (recallForm.checkValidity()) {
          // Форма валидна
          successDialog.classList.add("modal-dialog--show");

      } else {
          // Форма заполнена с ошибками
          failureDialog.classList.add("modal-dialog--show");
      }
    });

    var failureDialogOkBtn = failureDialog.querySelector(".modal-dialog__btn-ok");

    failureDialogOkBtn.addEventListener("click", function(event) {
        event.preventDefault();

        failureDialog.classList.remove("modal-dialog--show");
    })

    var successDialogCancelBtn = successDialog.querySelector(".modal-dialog__btn-cancel");

    successDialogCancelBtn.addEventListener("click", function(event) {
        event.preventDefault();

        successDialog.classList.remove("modal-dialog--show");
    })
}

/*
 * Интерактивная карта на главной странице
 */

var locationMapFrame = document.querySelector(".location__map-frame");
  locationMapFrame.classList.remove("location__map-frame--nojs");
