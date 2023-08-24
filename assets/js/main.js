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

    // Add a click event listener to the increment button
    $incrementBtn.click(function() {
      var counter = $(this).closest('div').find('.counter').text();
      var counterValue = parseFloat(counter);
      counterValue += 1.0;
      $(this).closest('div').find('.counter').text(counterValue.toFixed(1));
      // alert($(this).closest('div').find('.counter').text());
    });

    // Add a click event listener to the decrement button
    $decrementBtn.click(function() {
      var counter = $(this).closest('div').find('.counter').text();
      var counterValue = parseFloat(counter);
      if(counterValue > 1 ){
        counterValue -= 1.0;
      }else{
        alert('You can not decrease Product quantity less then 1 !!!!');
      }
      $(this).closest('div').find('.counter').text(counterValue.toFixed(1));
    });
    


// Bind the togglePosition function to a click event on a button or some other trigger element
$('.bottom-section .top-arrow').on('click', function(){
  $(this).parent('.bottom-section').toggleClass('active');
});

});
$(document).ready(function() {
  $('.return-alert').click(function(){
    $('.alert-modal-overlay').show();
  });
  $('.btn-close-alert').click(function(){
    $('.alert-modal-overlay').hide();
  })
  $('.subcategory-menu').hide();
  $('#category-menu li a').on('click', function(e) {
    e.preventDefault();
    $('#category-menu li .subcategory-menu').slideUp(); 
    $(this).parent().children('.subcategory-menu').slideToggle();
  });
  
  $('li.category-li').find('a').on('click', function(){
        	
        $(this).parent('.category-li').siblings().children('ul').slideUp('fast');
        $(this).parent('.category-li').siblings().removeClass('active');
        $(this).parent('.category-li').children('ul').slideToggle('fast');
        $(this).parent('.category-li').toggleClass('active');

    });
    $('li.category-li > ul > li > a').on('click', function(e){
    e.preventDefault();
    $('li.category-li > ul > li > a').removeClass('active');
    $(this).addClass('active');
    });

    markAll();
});

// For Check box
function markAll(){
  $('#checkall').change(function(){
    var checked = $(this).is(':checked');

    if(checked){
      $('.mark-check').each(function(){
        $(this).prop('checked', true);
      })
    }else{
      $('.mark-check').each(function(){
        $(this).prop('checked', false);
      })
    }
  })

  $('.mark-check').change(function(){
    if($('input.mark-check:checkbox').length == $('input.mark-check:checked').length){
      $('#checkall').prop('checked', true);
    }else{
      $('#checkall').prop('checked', false);
    }
  })
}

