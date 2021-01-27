$(window).on("scroll",function(){
    if($(window).scrollTop()>$('#intro').height()){
        $("header").addClass("act");
    }
    else{
       $("header").removeClass("act");
    }
});
