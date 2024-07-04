$(document).ready(function(){
    $(".story1").mouseover(function(){
        $(".story1>h6").css("display", "block");
    }).mouseout(function(){
        $(".story1>h6").css("display", "none");
    });
    $(".story2").mouseover(function(){
        $(".story2>h6").css("display", "block");
    }).mouseout(function(){
        $(".story2>h6").css("display", "none");
    });
    $(".story3").mouseover(function(){
        $(".story3>h6").css("display", "block");
    }).mouseout(function(){
        $(".story3>h6").css("display", "none");
    });
    $(".characterCard>div").mouseover(function(){
        $(this).children("span").css("display", "block");
    }).mouseout(function(){
        $(this).children("span").css("display", "none");
    });
});