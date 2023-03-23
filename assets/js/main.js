let searchWrapper = document.querySelector('.search-wrapper'),
    searchInput = document.querySelector('.search-input');

document.addEventListener('click', (e) => {
  if (~e.target.className.indexOf('search')) {
    searchWrapper.classList.add('focused');
    searchInput.focus();
  } else {
    searchWrapper.classList.remove('focused');
  }
})

$(document).ready(function(){
    $('#left-side-arrow').click(function(){
        $('#left-sidebar').css('left', '0');
    });
    $('#dismiss-btn').click(function(){
        $('#left-sidebar').css('left', '-300px');
    });
    $('#right-side-arrow').click(function(){
        $('.right-side').css('right', '0');
    });
    $('#right-side-arrow-close').click(function(){
        $('.right-side').css('right', '-280px');
    });
});