$(function(){

	var myswiper=new Swiper(".swiper-container",{
		pagination:".swiper-pagination",//声明分页
		paginationClickable:true,//分页可点击
		centeredSlides:true,//当前的slide的居中
		direction:"vertical",//设置方向垂直
		slidesPerView:"auto",
		 /* 初始化animate */
        onInit: function(swiper){  //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper);  //隐藏动画元素
            // setInterval(function(){ //2s后开始运行动画（移动端总是没加载完图片就开始动画了。。。。。）
                swiperAnimate(swiper); //初始化完成开始动画
            // },3000)
        },
        onSlideChangeEnd: function(swiper){
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
            if(swiper.activeIndex==2){
            	$(".container-li3-img").addClass("li3-img")
            }else {
            	$(".container-li3-img").removeClass("li3-img");
            }
            // if(swiper.activeIndex==3){
            // 	$(".container-li4").addClass("state")
            // }else {
            // 	$(".container-li4").removeClass("state");
            // }
        }
	});
	$(".play").click(function(){
		var audio = $("audio")[0];
		if(audio!==null){
		   	//检测播放是否已暂停.audio.paused 在播放器播放时返回false
		    // alert(audio.paused);
			if(audio.paused){
			    audio.play();//audio.play();// 这个就是播放
			}else{
				audio.pause();// 这个就是暂停
			}
		}
	});
	// console.log($(".container-li4-text"))
	// $(".container-li4-text").click(function(){
	// 	$(this).css("animation-play-state","paused");
	// });
	// $(".container-li4-text").mouseout(function(){
	// 	console.log(000)
	// 	$(this).css("animation-play-state","running")
	// });
	var play = $(".play")[0],
    pause = $("img")[0],
    box = $("img")[0],a=1;
    pause.addEventListener('click', function() {
	    if(a%2!=0){
			a++;
		    box.className = 'pause play pq';
    	}else{
		    box.className = 'play pq';
		    a++;
		}
    });



});
// window.onload=function(){
// 	console.log(document.getElementsByTagName("span")[2])
//     // document.getElementsByTagName("span")[2].setAttribute("color", "red");
//     var a = document.getElementsByTagName("span")[2];
//     // a.setAttribute("color","red");
//     a.style.color="red";
// }
