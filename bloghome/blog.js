current=1;
currentp=6;
currentimg=0;
function nextfunc()
{
    //for heading
    current=current+1;
    if(current>4){
        current=1;
    }   
    if(current==2 || current==3 || current==4){
        $("#introtext").children().eq(current-1).removeClass("showhead");
        $("#introtext").children().eq(current-1).addClass("hidehead");
    }
    else{
        $("#introtext").children().eq(4).removeClass("showhead");
        $("#introtext").children().eq(4).addClass("hidehead");
    }
    $("#introtext").children().eq(current).removeClass("hidehead");
    $("#introtext").children().eq(current).addClass("showhead");

    //for p
    currentp=currentp+1;
    if(currentp>9){
        currentp=6;
    }
    if(currentp==7 ||  currentp==8 || currentp==9){
        $("#introtext").children().eq(currentp-1).removeClass("showp");
        $("#introtext").children().eq(currentp-1).addClass("hidep");
    }
    else{
        $("#introtext").children().eq(9).removeClass("showp");
        $("#introtext").children().eq(9).addClass("hidep");
    }
    $("#introtext").children().eq(currentp).removeClass("hidep");
    $("#introtext").children().eq(currentp).addClass("showp");

    //for img
    currentimg=currentimg+1;
    if(currentimg>3){
        currentimg=0;
    }
    if(currentimg==1 ||  currentimg==2 || currentimg==3){
        $("#intro").children().eq(currentimg-1).removeClass("showimg");
        $("#intro").children().eq(currentimg-1).addClass("hideimg");
    }
    else{
        $("#intro").children().eq(3).removeClass("showimg");
        $("#intro").children().eq(3).addClass("hideimg");
    }
    $("#intro").children().eq(currentimg).removeClass("hideimg");
    $("#intro").children().eq(currentimg).addClass("showimg");
}
function prevfunc()
{
    //for heading(1-4)
    current=current-1;
    if(current<1){
        current=4;
    }
    if(current==1 || current==2 || current==3){
        $("#introtext").children().eq(current+1).removeClass("showhead");
        $("#introtext").children().eq(current+1).addClass("hidehead");
    }
    else{
        $("#introtext").children().eq(1).removeClass("showhead");
        $("#introtext").children().eq(1).addClass("hidehead");
    }
    $("#introtext").children().eq(current).removeClass("hidehead");
    $("#introtext").children().eq(current).addClass("showhead");

    //for p(6-9)
    currentp=currentp-1;
    if(currentp<6){
        currentp=9;
    }
    if(currentp==6 ||  currentp==7 || currentp==8){
        $("#introtext").children().eq(currentp+1).removeClass("showp");
        $("#introtext").children().eq(currentp+1).addClass("hidep");
    }
    else{
        $("#introtext").children().eq(6).removeClass("showp");
        $("#introtext").children().eq(6).addClass("hidep");
    }
    $("#introtext").children().eq(currentp).removeClass("hidep");
    $("#introtext").children().eq(currentp).addClass("showp");

    //for img(0-3)
    currentimg=currentimg-1;
    if(currentimg<0){
        currentimg=3;
    }
    if(currentimg==0 ||  currentimg==1 || currentimg==2){
        $("#intro").children().eq(currentimg+1).removeClass("showimg");
        $("#intro").children().eq(currentimg+1).addClass("hideimg");
    }
    else{
        $("#intro").children().eq(0).removeClass("showimg");
        $("#intro").children().eq(0).addClass("hideimg");
    }
    $("#intro").children().eq(currentimg).removeClass("hideimg");
    $("#intro").children().eq(currentimg).addClass("showimg");
}