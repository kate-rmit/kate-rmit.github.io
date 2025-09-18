/*find elements want to interact
*/
const videoElement = document.querySelector("#mediaPlayer");
const playPauseButton = document.querySelector("#playPauseButton");
const timeline = document.querySelector("#timelineProgression");
const playPause = document.querySelector("#playPause");
videoElement.removeAttribute("controls");
/*

if not playing - click:begin the playback
if playing- click:pause the playback

feedback:
toggle icon based on the playing state
curser change on hover
*/
function plyPause(){
  if(videoElement.paused || videoElement.ended){
    videoElement.play();
    playPauseButton.textContent = "℈";
  } else{
    videoElement.pause();
     playPauseButton.textContent = "ℑ";
  }
}

playPauseButton.addEventListener("click", playPause)

/*
timeline behaviour
*/
function updateTimeline(){
console.log(videoElement.currentTime);
let timePercent = (videoElement.currentTime/ videoElement.duration);
console.log(timePercent);
}

videoElement.addEventListener("timeupdate", updateTimeline)