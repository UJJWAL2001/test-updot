// FNA Section

$('.qna').click(function(){
    $(this).toggleClass('active');
    
    if( $(this).children('.btn').html() == '<span>-</span>' )
        $(this).children('.btn').html('<span>+</span>');
    else
        $(this).children('.btn').html('<span>-</span>');
})

// Carousel Section

const indicate = function(){
  
  
}

$.fn.commentCards = function(){

    return this.each(function(){
  
      var $this = $(this),
          $cards = $this.find('.card'),
          $current = $cards.filter('.card--current'),
          $next;
  
      $cards.on('click',function(){
        if ( !$current.is(this) ) {
          $cards.removeClass('card--current card--out card--next');
          $current.addClass('card--out');
          $current = $(this).addClass('card--current');
          $next = $current.next();
          $next = $next.length ? $next : $cards.first();
          $next.addClass('card--next');
        }
      });
  
      if ( !$current.length ) {
        $current = $cards.last();
        $cards.first().trigger('click');
      }
  
      $this.addClass('cards--active');
  
    })
  
  };
  
  $('.cards').commentCards();