let video = document.getElementById("video");
let onoff = document.getElementById("onoff");
let span = document.getElementById("fullyear");
let year = new Date().getFullYear();
span.innerHTML =  year;



onoff.onclick = function (e) {
  e.preventDefault();
  if (video.paused) {
    video.play();
    onoff.innerHTML = '<i class="fa-solid fa-video-slash"></i>';
  } else {
    video.pause();
    onoff.innerHTML = '<i class="fa-solid fa-video"></i>';
  }
};

// bootstrap 5 need validation js part

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
