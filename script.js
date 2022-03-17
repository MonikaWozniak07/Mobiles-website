const loginBtn = document.querySelectorAll("[data-modal='loginForm']");
const modal = document.querySelector('#loginForm');
const exits = modal.querySelectorAll(".modal-exit");

  loginBtn.forEach(function(trigger) {
    trigger.addEventListener("click", function() {
        history.pushState(null, null, "#loginForm");
        modal.classList.add("open");
        exits.forEach(function(exit) {
            exit.addEventListener("click", function() {
                modal.classList.remove("open");
                history.pushState("", document.title, window.location.pathname + window.location.search);
            });
        });
        window.onhashchange = function() {
            modal.classList.remove("open");
            history.pushState("", document.title, window.location.pathname + window.location.search);
        }
    });
});


if (window.location.hash.indexOf("loginForm") !== -1) {
        console.log(window.location.hash);
        modal.classList.add("open");
    exits.forEach(function(exit) {
        exit.addEventListener("click", function() {
            modal.classList.remove("open");
            history.pushState("", document.title, window.location.pathname + window.location.search);
        });
    });
    window.onhashchange = function() {
        modal.classList.remove("open");
        history.pushState("", document.title, window.location.pathname + window.location.search);
    }
}

document.getElementById('go-back').addEventListener('click', () => {
    history.back();
  });

// lines in form
const inputs = document.querySelectorAll("input");
const input = document.querySelector("input");
const value = inputs.value;
const formWrapper = document.querySelector(".wrapper");

[].forEach.call(inputs, function (input) {
  input.addEventListener("change", function () {
    let inputValue = "";
    inputValue = input.value;
    if (inputValue.length === 0) {
      formWrapper.addEventListener("change", function () {
        input.classList.add("line");
        input.classList.remove("noLine");
      });
    } else {
      formWrapper.addEventListener("change", function () {
        input.classList.add("noLine");
        input.classList.remove("line");
      });
    }
  });
});

// hamburger
const hamburgerClose = document.querySelector('.xmark')
const hamburgerIcon = document.querySelector('.bars')
const nav = document.querySelector('nav')

hamburgerIcon.addEventListener('click', () => {
  hamburgerClose.classList.add('open')
  hamburgerIcon.classList.add('displayNone');
  nav.classList.add('open');
})

hamburgerClose.addEventListener('click', () => {
  hamburgerClose.classList.remove('open')
  hamburgerIcon.classList.remove('displayNone');
  nav.classList.remove('open');
})


