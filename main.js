$(function() {
  // Add the hover() method for #language-wrapper
  $('#Dropdown').hover(
    function(){
      $('.header-list').fadeIn(300);
    },
    function(){
      $('.header-list').fadeOut(100);
    }

);
});
