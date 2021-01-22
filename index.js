$(window).on("scroll",function(){
    if($(window).scrollTop()>$('#intro').height()){
        $("header").addClass("act");
    }
    else{
       $("header").removeClass("act");
    }
});

/*var slideIndex=0;
showSlides();

function showSlides(){
  var i;
  var slides=document.getElementsByClassName("mySlides");
  for(i=0;i<slides.length;i++)
  {
    slides[i].style.display="none";
  }
  slideIndex++;
  if(slideIndex>slides.length){slideIndex=1}
  slides[slideIndex-1].style.display="block";
  setTimeout(showSlides,6000);
}*/