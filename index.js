$(window).on("scroll",function(){
    if($(window).scrollTop()>320) {
        $("header").addClass("active");
    }
    else{
       $("header").removeClass("active");
    }
});