$(document).ready(function(){
	$(".verifyBtn").click(function(){
		$(".signupWrap span").css("display", "block");
	})
	$(".signupBtn").click(function(){
		$(location).attr("href", "signup-completed.html");
	});
	//오류 메시지 표시될 때 컨텐츠 높이 조정
	$(".verifyBtn").click(function(){
		$("#signupPage").css("height", "400px");
	});
});