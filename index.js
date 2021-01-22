$(window).on("scroll",function(){
    if($(window).scrollTop()>$('#intro').height()){
        $("header").addClass("active");
    }
    else{
       $("header").removeClass("active");
    }
});