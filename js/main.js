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
  
  $('.right-panel').resizable({
      handles: 'n,w,s,e',
      minWidth: 400,
      maxWidth: 1200
  });
  
  $('.close-panel').on('click', function() {
      var panelWidth = $('.right-panel').width();
      $('.right-panel').addClass('closed');
      
      $('.close-panel').hide();
      $('.open-panel').show();
    
      $('.open-panel').on('click', function() {
          $('.close-panel').show();
          $('.open-panel').hide();
          $('.right-panel').removeClass('closed').css('width', panelWidth);     
      });
  });
  
  $('.right-panel .menu .item').tab();

  replyFunction();
  
  function replyFunction() {
    $('.reply').on('click', function() {
      $(this).parent().siblings('.feed-actions').toggle();
    });  
  }
  
  
$('.send-button').on('click', function() {
    var message = $('.prompt').val();
  
    var feed = '<div class="event"><div class="label"><img src="https://semantic-ui.com/images/avatar/small/justen.jpg"></div><div class="content"><div class="summary"><a class="user">Daryl Guieb</a><div class="date">Now</div></div><div class="extra text">' + message + '</div><div class="meta"><a class="reply">Reply</a><a class="share">Share</a></div><div class="feed-actions" style="display: none;"><div class="ui form"><div class="ui icon input"><input type="text" name="first-name" placeholder="reply"><i class="paper plane icon"></i></div></div></div></div></div>';
  
  if (message === '') {
    console.log('empty comment');
  } else {
    $('.alert-tab .ui.feed').prepend(feed);  
  }
  
  replyFunction();
  
  function replyFunction() {
    $('.reply').on('click', function() {
      $(this).parent().siblings('.feed-actions').toggle();
    });  
  }
});
  
  $('.search-button').on('click', function() {
    // $('.input .prompt').toggle();
    $('.input .icon.paperclip').toggle();
    $('.actions .send-button').toggle();
    $('.input .search').toggleClass('active').focus();
  });
  
}); 