(function () {

    'use strict';
    const toggle = document.getElementById("menu-toggle");
    const nav = document.querySelector("nav");
    const overlay = document.getElementById("overlay");
  const icon = document.getElementById("menu-icon");

    window.onload = function () {
        instances();
        bindings();
    }

    function instances() {

    }

    function bindings() {
        toggle.addEventListener("click", () => {

            const isActive = nav.classList.contains('active'); 

            if(!isActive){
                 nav.classList.add("active");
                overlay.classList.add("active");
                      icon.src = "assets/images/icon-menu-close.svg"; // tu imagen X

            }else{
                  nav.classList.add("active");
                overlay.classList.add("active");
                icon.src = "assets/images/icon-menu.svg";
            }
           
        });

        overlay.addEventListener("click", () => {
            nav.classList.remove("active");
            overlay.classList.remove("active");
    icon.src = "assets/images/icon-menu.svg";
        });
    }
})();

