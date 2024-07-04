$(document).ready(function(){
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
});