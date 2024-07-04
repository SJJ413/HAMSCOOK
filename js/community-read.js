$(document).ready(function(){
    $(".actions img:first").click(function(){
        alert('아직 개발중인 기능입니다.');
	});
    $(".actions img:nth-child(2)").click(function(){
        $(location).attr("href", "community-delete.html");
	});
    var like = 0;
    $(".react img:first").click(function(){
        like++;
        if(like%2==1){
            $(this).attr("src", "images/likeOn.png");
        } else {
            $(this).attr("src", "images/likeOff.png");
        }
    });
    $(".react img:nth-child(2)").click(function(){
        alert('아직 개발중인 기능입니다.');
    })
    $(".leaveBtn").click(function(){
        alert('아직 개발중인 기능입니다.');
    })
    $(".commentActions span, .replyActions span").click(function(){
        alert('아직 개발중인 기능입니다.');
    })
});