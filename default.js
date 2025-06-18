let swiper = null;

function prev(){
    swiper.slidePrev();
}

function next(){
    swiper.slideNext();
}

window.addEventListener('load', function () {
    
    swiper = new Swiper('.swiper', {
        
         keyboard: {
            enabled: true,
            onlyInViewport: false,
          },
          
    });

});    

/* ------------------------------------------------------------------ */
   const THEME = true;
/* ------------------------------------------------------------------ */

function applyTheme(dark) {
   let body = document.body, html = document.getElementsByTagName('html')[0];
   if (dark) {
      body.classList.add('dark-mode');
      html.classList.add('dark-mode');
   } else {
      body.classList.remove('dark-mode');
      html.classList.remove('dark-mode');
   }
   return dark;
}

function saveTheme(dark) {
   localStorage.setItem("dark-mode", dark ? "enabled" : null);
}

function darkMode(){
   return (localStorage.getItem("dark-mode") == "enabled");
}

function setTheme() {
   if (!THEME) return;
   applyTheme(darkMode());
}

function switchTheme() {
   saveTheme(applyTheme(!darkMode()));
}

/* ------------------------------------------------------------------ */