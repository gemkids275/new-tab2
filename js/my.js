
$(document).ready(function(){
	var audio = document.getElementById("myAudio");
	var myMarquee  = document.getElementById("myMarquee");
	var myText = document.getElementById("greetings");
	// returns a number between 1 and 10
	$(".navbar-brand").click(function(){
		var link = $(this).data("click-url");
		window.location.href=link;
	})
	//thiết lập âm thanh của audio
	audio.volume = 0.5;
	//thiết lập chữ chạy
	myText.onmouseover = function() {mouseOver()};
	myText.onmouseout = function() {mouseOut()};
	//di chuột vào thì dừng
	function mouseOver() {
    myMarquee.stop();
	}
	//bỏ ra thì lại chạy
	function mouseOut() {
    myMarquee.start();
	}
})