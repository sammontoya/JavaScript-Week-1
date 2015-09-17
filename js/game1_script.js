$(document).ready(function() {
  $("button#cat").click(function(){
    $("#dog").toggle();
    $("#walrus").toggle();
    $("#cat_convo").show();
  });

  // $("button#submit_cat form").click(function(){
  //   var catGreeting=$("input#cat_greeting").val();
  //
  //   // $("#cat_question_one").toggle();
  //   $("#human_part").text(catGreeting);
  //
  // });
  $("#cat_convo form").submit(function(event){
    var catGreeting = $("input#cat_greeting").val();
    $("#firstConvo").prepend(catGreeting);
    $("#cat_first_response").delay(650).fadeIn();
    $("#human_greeting").toggle();
    $("#cat_question_session").delay(800).fadeIn();
    event.preventDefault();
  });
  $("#pet_cat").click(function(){
    $("#cat_question_session").remove();
    $("#CatConversation").remove();
    $("#pet_response").delay(800).fadeIn();
  });

});
