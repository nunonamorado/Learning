$(function(){
  $('#submitbutton').click(function(){
      var text = $('#comments').val();
      var commentelement = $('<div class="comment"><img src="https://static.publico.pt/files/homepage/img/avatar_74x74.png" alt="avatar"/><div class="comment-content"><label>José</label><p>'+ text +'</p></div></div>');

      var commentslist = $('.comments-container');
      commentslist.append(commentelement);
      $('#comments').val('');
  });
});
