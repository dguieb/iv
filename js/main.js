$(function() {
    $('.ui.dropdown').dropdown();
  
    $('.collapse-left').on('click', function() {
        $('.left-panel').toggleClass('collapse');
        $('.left-panel h2').fadeToggle();
    });
  
    $('.collapse-right').on('click', function() {
        $('.right-panel').toggleClass('collapse');
        $('.right-panel h2').fadeToggle();
    });
}); 