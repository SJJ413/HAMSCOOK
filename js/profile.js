$(document).ready(function(){
	$(".profileRight p:nth-child(2) span:last-child").click(function(){
		alert('아직 개발중인 기능입니다.');
	});
	$(".deleteAccount").click(function(){
		$(location).attr("href", "profile-delete.html");
	});
});