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
    // Get the elements and store them in variables
    var $incrementBtn = $('.increment');
    var $decrementBtn = $('.decrement');
    var $counter = $('.counter');

    // Set the initial counter value to 0.00
    var counterValue = 1.0;

    // Add a click event listener to the increment button
    $incrementBtn.click(function() {
      counterValue += 1.0;
      $counter.text(counterValue.toFixed(1));
    });

    // Add a click event listener to the decrement button
    $decrementBtn.click(function() {
      if(counterValue > 1 ){
        counterValue -= 1.0;
      }else{
        alert('You can not decrease Product quantity less then 1 !!!!');
      }
      $counter.text(counterValue.toFixed(1));
    });
});