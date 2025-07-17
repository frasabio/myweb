

 var trigger_toggle_sidebar = document.querySelector('.trigger-menu-sidebar')
 var show_toggle_sidebar = document.querySelector('.show-menu-sidebar')
 var sidebar_toggle_overlay = document.querySelector('.menu__overlay')

trigger_toggle_sidebar.addEventListener('click', function() {
  show_toggle_sidebar.classList.toggle('active')
})
sidebar_toggle_overlay.addEventListener('click', function() {
  show_toggle_sidebar.classList.remove('active')
})

    
// Using JavaScript to open the page in fullscreen mode
const elem = document.documentElement;
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  }
}
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  }
}
