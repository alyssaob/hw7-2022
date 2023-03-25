var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

video = document.getElementById("player1");
video.removeAttribute("autoplay");
video.removeAttribute("loop");

document.getElementById("play").addEventListener("click", function(){
	video.play();
	document.getElementById("volume").innerHTML = document.getElementById("slider").value + "%";
})

document.getElementById("pause").addEventListener("click", function(){
	video.pause();
})

document.getElementById("slower").addEventListener("click", function(){
	let newSpeed = video.playbackRate * 0.9;
	video.playbackRate = newSpeed;
	console.log(video.playbackRate);
})

document.getElementById("faster").addEventListener("click", function(){
	let playbackrate = 100 / 90;
	let newSpeed = video.playbackRate * playbackrate;
	video.playbackRate = newSpeed;
	console.log(video.playbackRate);
})

document.getElementById("skip").addEventListener("click", function(){
	video.currentTime += 10;
	if(video.currentTime == video.duration){
		video.currentTime = 0;
	}
	console.log(video.currentTime);
})

document.getElementById("mute").addEventListener("click", function(){
	if(video.muted == true){
		video.muted = false;
		document.getElementById("mute").innerHTML = "Mute";
	}
	else{
		video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute";
	}
})

document.getElementById("slider").oninput = function(){
	video.volume = document.getElementById("slider").value * 0.01;
	document.getElementById("volume").innerHTML = document.getElementById("slider").value + "%";
}

document.getElementById("vintage").addEventListener("click", function(){
	video.className = "oldSchool";
})

document.getElementById("orig").addEventListener("click", function(){
	video.className = "video";
})