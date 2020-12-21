$( document ).ready(function() {
  $(".tog").hide();
  $("#showless").hide();
  $("#showmore").click(function(){
    $(".tog").slideToggle("slow",function(){
  $("#showmore").hide();
  $("#showless").show();
    });
  });
  $("#showless").click(function(){
    $(".tog").slideToggle("slow",function(){
  $("#showless").hide();
  $("#showmore").show();
});
});
});
