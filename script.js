let button = document.querySelector(".burger");
let menu = document.querySelector(".main-menu")
  if (button) {
    button.addEventListener("click", (e) => {
      if (button.classList.contains("checked")) {
        button.classList.remove('checked');
        menu.classList.remove('checked');
      } else {
        button.classList.add('checked');
        menu.classList.add('checked');
      }
    });
  }


  document.querySelectorAll('.but').forEach(b => {
    b.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Возврат к началу страницы с плавным скроллом
    });
  });
   

    let $owl = $('.carousel-2');
    $owl.children().each( function( index ) {
    $(this).attr( 'data-position', index );
});
$(document).on('click', '.owl-item>div', function() {
    let $speed = 300;
    $owl.trigger('to.owl.carousel', [$(this).data( 'position' ), $speed] );
});    
$owl.owlCarousel({
    loop:true,
    center: true,
    stagePadding: 70,
    nav: true,
    dots: false,
    navText: ['&lsaquo;', '&rsaquo;'],
    responsive:{
        0:{items:1},
        600:{items:2},
        992:{items:3},
        1200:{items:4},
        1600:{items:5}            
    }
});

$(function(){
  $('.one form .btn').on('click',function(){ 
     $(this).parents('.one').animate({
          top : '-500px'
        },500);
    
                                          $(this).parents('.one').siblings('.two').
     animate({
          top : '0px'
        },500);
    return false;
  });

$('.two .close').on('click',function(){
  $(this).parent().animate({
   top : '-500px'
  },500);
  
  $(this).parent().siblings('.one').animate({
   top : '0px'
  },500);
  return false;
 });
});