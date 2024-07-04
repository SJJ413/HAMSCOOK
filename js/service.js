$(document).ready(function(){
    //FAQ
    $(".category").click(function(){
		alert('아직 개발중인 기능입니다.');
	});
    $(".question").click(function(){
		alert('아직 개발중인 기능입니다.');
	});
	//이미지 첨부
	$(".reportImageOut span").click(function(){
        $(".reportImageOut").hide();
		$(".reportImageIn").show();
	});
    //이미지 삭제
    $(".reportImageIn em").click(function(){
        $(".reportImageIn").hide();
		$(".reportImageOut").show();
	});
    //리포트 전송
    $(".sendBtn").click(function(){
        $(location).attr("href", "service-report-completed.html")
    });
});