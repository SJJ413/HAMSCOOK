$(document).ready(function(){
    $("#rankList ul").mouseover(function(){
        $(".sort", this).css("background-color", "#F8BA97");
        $(this).css("background-color", "#FDF6EC");
    });
    $("#rankList ul").mouseout(function(){
        $(".sort", this).css("background-color", "#FDF6EC");
        $(this).css("background-color", "#fff");
    });
    $("#search img").click(function(){
		alert('아직 개발중인 기능입니다.');
	});
    $(".listPage a").click(function(){
		alert('아직 개발중인 기능입니다.');
	});
    $(".listPage img").click(function(){
		alert('아직 개발중인 기능입니다.');
	});
});