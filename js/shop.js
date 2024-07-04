$(document).ready(function(){
    //샵 메인 배너
    $(".shopBanner").click(function(){
		alert('아직 개발중인 기능입니다.');
	});
    //상단 검색
    $(".search img").click(function(){
		alert('아직 개발중인 기능입니다.');
	});
    //상단 버튼
    $(".shopBtns img:first-child").click(function(){
        $(location).attr("href", "shop-wishlist.html");
	});
    $(".shopBtns img:nth-child(2)").click(function(){
        $(location).attr("href", "shop-cart.html");
	});
    //상품 필터 탭
    $("#filter li").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
    });
    //상품 호버링 스타일
    $(".productCard>a").mouseover(function(){
        $(this).parent().css("opacity", "0.5");
    });
    $(".productCard>a").mouseout(function(){
        $(this).parent().css("opacity", "1");
    });
    //상품 페이지로 이동
    $(".productCard>a>img, .productCard p").click(function(){
        $(location).attr("href", "shop-product.html");
	});
    //카트로 이동
    $(".productBtns img:nth-child(2)").click(function(){
        $(location).attr("href", "shop-cart.html");
	});
    //찜하기
    $(".productBtns img:first-child").click(function(){
        var src = $(this).attr("src");
        if(src=="images/wishlistOff.png"){
            $(this).attr("src", "images/wishlistOn.png");
        } else {
            $(this).attr("src", "images/wishlistOff.png");
        }
    });
    //페이지 넘김
    $(".listPage a").click(function(){
		alert('아직 개발중인 기능입니다.');
	});
    $(".listPage img").click(function(){
		alert('아직 개발중인 기능입니다.');
	});
});