$(document).ready(function(){
	//로그인
	var cnt = 0;
	$(".login").click(function(){
		$(location).attr("href", "login.html")
	});
	//메인비디오 소리
	var sound = 0;
	$(".mainVideo span").click(function(){
		sound++;
	if(sound%2==1) {
		$(".mainVideo span img").attr('src', "images/soundOn.png");
		$(".mainVideo video").prop('muted', false);
	} else {
		$(".mainVideo span img").attr('src', "images/soundOff.png");
		$(".mainVideo video").prop('muted', true);
	}
	});
	//노티스 탭
	$(".notice>section:gt(0)>ul").hide();
	$(".notice>section>h4>a").click(function(){
		$(this).parent().parent().addClass("active").siblings().removeClass("active");
		$(this).parent().parent().find("ul").show().siblings().find("ul").hide();
	});
	$("#news>h4>a").click(function(){
		$("#news>ul").parent().addClass("active").siblings().removeClass("active");
		$("#news>ul").show().parent().siblings().find("ul").hide();
	});
	$("#updates>h4>a").click(function(){
		$("#updates").addClass("active").siblings().removeClass("active");
		$("#updates>ul").show().parent().siblings().find("ul").hide();
	});
	$("#events>h4>a").click(function(){
		$("#events").addClass("active").siblings().removeClass("active");
		$("#events>ul").show().parent().siblings().find("ul").hide();
	});
	//노티스 탭 더보기
	$(".notice .more").click(function(){
		$(location).attr("href", "notice.html");
	});
	//노티스 상세페이지로 이동 
	$(".notice img, .notice .subtitle li:first-child").click(function(){
		$(location).attr("href", "notice-detail.html");
	});
	//커뮤니티 탭
	$(".community>section:gt(0)>ul").hide();
	$(".community>section>h4>a").click(function(){
		$(this).parent().parent().addClass("active").siblings().removeClass("active");
		$(this).parent().parent().find("ul").show().siblings().find("ul").hide();
	});
	$("#walkthrough>h4>a").click(function(){
		$("#walkthrough>ul").parent().addClass("active").siblings().removeClass("active");
		$("#walkthrough>ul").show().parent().siblings().find("ul").hide();
	});
	$("#free>h4>a").click(function(){
		$("#free>ul").parent().addClass("active").siblings().removeClass("active");
		$("#free>ul").show().parent().siblings().find("ul").hide();
	});
	//커뮤니티 탭 더보기
	$(".community .more").click(function(){
		$(location).attr("href", "community.html");
	});
	//커뮤니티 상세페이지로 이동 
	$(".community .subtitle li:first-child").click(function(){
		$(location).attr("href", "community-read.html");
	});
	//샵
	$(".shop li").click(function(){
		$(location).attr("href", "shop-product.html");
	});
	//샵 더보기
	$(".shopmore").click(function(){
		$(location).attr("href", "shop.html");
	});
	//익스플로어 배너
	$(".exploreBanner").click(function(){
		$(location).attr("href", "explore.html");
	});
	//랭크 더보기
	$(".rank .more").click(function(){
		$(location).attr("href", "rank.html");
	});
	//광고 배너
	$(".adBanner").click(function(){
		alert('아직 개발중인 기능입니다.');
	});
	//모바일 메뉴 여닫기
	$(".menuM_up, .menuM>ul").hide();
	$(".menuM_down").click(function(){
		$(".menuM_down").hide();
		$(".menuM_up, .menuM>ul").show();
		$(".menuM").css("height", "180px");
	});
	$(".menuM_up").click(function(){
		$(".menuM_up, .menuM>ul").hide();
		$(".menuM_down").show();
		$(".menuM").css("height", "40px");
	});
});

/*
창 크기가 변할 때마다 영역 높이를 변경하는 코드
window.addEventListener("resize", function(){
	let shop = this.document.getElementsByClassName("shop")[0];
	if(this.innerWidth <= 480){
		let imageHeight = this.document.getElementById("item").clientHeight;
		shop.style.height = imageHeight + 90 + "px";
	}
});
*/