$(document).ready(function(){
	//오류 메시지
	$(".inputs").click(function(){
		$(".loginHelps span").show();
	});
	//오류 메시지 표시될 때 컨텐츠 높이 조정
	$(".inputs").click(function(){
		$("#loginPage").css("height", "300px");
	});
	//로그인
	var login = 0;
	$(".loginBtn").click(function(){
		login++;
		$(location).attr("href", "index-login.html");
	});
	//회원가입
	$(".loginHelps p:last").click(function(){
		$(location).attr("href", "signup.html");
	});
});