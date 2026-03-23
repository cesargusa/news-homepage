(function () {
  'use strict';

  const toggle = document.getElementById('menu-toggle');
  const nav    = document.querySelector('nav');
  const overlay = document.getElementById('overlay');
  const icon   = document.getElementById('menu-icon');

  toggle.style.position = 'relative';
  toggle.style.zIndex   = '1000';   

  window.onload = function () {
    instances();
    bindings();
  };

  function instances() {}

  function bindings() {
    toggle.addEventListener('click', function () {
      const isOpen = nav.classList.contains('active');

      if (isOpen) {
        nav.classList.remove('active');
        overlay.classList.remove('active');
        icon.src = 'assets/images/icon-menu.svg';      
      } else {
        nav.classList.add('active');
        overlay.classList.add('active');
        icon.src = 'assets/images/icon-menu-close.svg'; 
      }
    });

    overlay.addEventListener('click', function () {
      nav.classList.remove('active');
      overlay.classList.remove('active');
      icon.src = 'assets/images/icon-menu.svg';      
    });
  }
})();
