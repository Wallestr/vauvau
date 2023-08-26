const header = document.getElementsByTagName('header');
// add remove class when page is offset
window.onscroll = function() {
  if(window.pageYOffset > 50) {
    header[0].classList.add('background');
  } else {
    header[0].classList.remove('background');
  }
}