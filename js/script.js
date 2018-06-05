(function() {
  "use strict";
  const form = document.querySelector("#survey-form");
  const newFormBtn = document.querySelector("#newForm");
  const modalWindow = document.querySelector(".modal");

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    modalWindow.style.display = "flex";
  });

  newFormBtn.addEventListener("click", function(e) {
    e.preventDefault();
    modalWindow.style.display = "none";
    window.location.reload();
  });

}());
