$(document).ready(function(){
	$(".pageTitle a").click(function(){
		alert('아직 개발중인 기능입니다.');
    });
    $(".postTitle a").mouseover(function(){
        $(this).css("color", "#F8BA97");
    });
    $(".postTitle a").mouseout(function(){
        $(this).css("color", "#000");
    });
    $("#search img").click(function(){
		alert('아직 개발중인 기능입니다.');
	});
    $(".writeBtn").click(function(){
		$(location).attr("href", "community-write.html")
	});
    $(".postTitle a").click(function(){
		$(location).attr("href", "community-read.html")
	});
    $(".listPage a").click(function(){
		alert('아직 개발중인 기능입니다.');
	});
    $(".listPage img").click(function(){
		alert('아직 개발중인 기능입니다.');
	});
});