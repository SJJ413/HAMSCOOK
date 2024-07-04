$(document).ready(function(){
	//홈 버튼
	$("header img").click(function(){
		$(location).attr("href", "index.html");
	}); 
	//헤더 메뉴
	$(".menuNotice").click(function(){
		$(location).attr("href", "notice.html");
	}); 
	$(".menuGuide").click(function(){
		$(location).attr("href", "guide.html");
	}); 
	$(".menuExplore").click(function(){
		$(location).attr("href", "explore.html");
	}); 
	$(".menuShop").click(function(){
		$(location).attr("href", "shop.html");
	}); 
	$(".menuCommunity").click(function(){
		$(location).attr("href", "community.html");
	}); 
	$(".menuRank").click(function(){
		$(location).attr("href", "rank.html");
	}); 
	$(".menuProfile").click(function(){
		$(location).attr("href", "profile.html");
	}); 
	$(".menuTeam").click(function(){
		$(location).attr("href", "team.html");
	}); 
	$(".menuService").click(function(){
		$(location).attr("href", "service.html");
	}); 
	//헤더 로그인
	$(".login").click(function(){
		$(location).attr("href", "login.html");
	}); 
	//푸터 메뉴
	$(".footerCenterTop a, .footerCenterBottom a").click(function(){
		alert('아직 개발중인 기능입니다.');
	});
});