/*function profilescroll(){
	var hei = $(window).scrollTop();
    if (hei > 1) {
		$(".Office_Services_list dl").eq(0).animate({"opacity":"1"},800)
		setTimeout(function(){
			$(".Office_Services_list dl").eq(1).animate({"opacity":"1"},800)
		},200)
		setTimeout(function(){
			$(".Office_Services_list dl").eq(2).animate({"opacity":"1"},800)
		},400)

	}
}*/


jQuery(function($){
$(".pic").hover(function(){
	$(this).addClass('pic_hover');
	},function(){
	$(this).removeClass('pic_hover');
	});	

});

$(document).ready(function() {

                        $(window).scroll(function() {
                            if ($(window).scrollTop() > 300) {
                                $('#jump li:eq(0)').fadeIn(800);
                            } else {
                                $('#jump li:eq(0)').fadeOut(800);
                            }
                        });
                        $("#top").click(function() {
                            $('body,html').animate({
                                    scrollTop: 0
                                },
                                1000);
                            return false;
                        });
                    })


$(function(){
		   
	//直接显示遮罩效果开始
	$(".con-two").hover(function(){
		$(this).find(".txt-two").css("display","block");
		},function(){
			$(this).find(".txt-two").css("display","none");
	})
	//直接显示遮罩效果结束		   

}); 

$(function(){
		   
	//直接显示遮罩效果开始
	$(".con-two2").hover(function(){
		$(this).find(".txt-two2").css("display","block");
		},function(){
			$(this).find(".txt-two2").css("display","none");
	})
	//直接显示遮罩效果结束		   

}); 

$(function(){
		   
	//直接显示遮罩效果开始
	$(".con-two3").hover(function(){
		$(this).find(".txt-two3").css("display","block");
		},function(){
			$(this).find(".txt-two3").css("display","none");
	})
	//直接显示遮罩效果结束		   

}); 


$(function(){
		   
	  $(".Office_Services_list dl").eq(0).animate({"opacity":"1"},800)
		setTimeout(function(){
			$(".Office_Services_list dl").eq(1).animate({"opacity":"1"},800)
		},200)
		setTimeout(function(){
			$(".Office_Services_list dl").eq(2).animate({"opacity":"1"},800)
		},400)	
		
	$(".page_banner_box .new_banner_yw").stop().animate({"opacity":"1","margin-top":"0px"},1200)
	$(".page_banner_box .new_banner_zw").stop().animate({"opacity":"1","margin-top":"0px"},1200)   

}); 
		   