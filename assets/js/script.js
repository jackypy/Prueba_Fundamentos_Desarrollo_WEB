$(function () {
  $('[data-toggle="tooltip"]').tooltip();


  $("a").click(function(event){

    var hash = this.hash;

    $("html, body").animate({
    scrollTop: $(hash).offset().top
     }, 800, function(){
       window.location.hash = hash;
     });
    
  });

});
