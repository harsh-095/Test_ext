var b=document.getElementById("Start Test Button Id");
// To enter fullscreen mode
b.addEventListener("click",()=>{
    
        var c = confirm("Fullscreen mode?");
        var d = document.documentElement;
        if (c == true) {
            if (d.requestFullscreen) {
                d.requestFullscreen();
            }
            else if (d.mozRequestFullScreen) {
                d.mozRequestFullScreen();
            }
            else if (d.webkitRequestFullScreen) {
                d.webkitRequestFullScreen();
            }
            else if (d.msRequestFullscreen) {
                d.msRequestFullscreen();
            }
        }
    
})
// Disable right click on web page
$("html").on("contextmenu",function(e){
    return false;
});
// Disable cut, copy and paste on web page
$('html').bind('cut copy paste', function (e) {
     e.preventDefault();
});
//To alert before refreshing or leaving the page
window.onbeforeunload = function() {
    alert("Are you sure you want to leave the page, the test may get submitted");
}
// To access camera and microphone
function getLocalStream() {
    navigator.mediaDevices
      .getUserMedia({ video: false, audio: true })
      .then((stream) => {
        window.localStream = stream;
        window.localAudio.srcObject = stream;
        window.localAudio.autoplay = true;
      })
      .catch((err) => {
        console.error(`you got an error: ${err}`);
      });
  }
  
  getLocalStream();
//Gives an alert if internet gets interrupted
  window.addEventListener('offline', () => {
    alert("Check your internet connection")
  });
// To exit full screen
var end=document.getElementById("End test button id");
end.addEventListener("click",()=>{
    var c = confirm("Exit Fullscreen mode?");
        var d = document.documentElement;
        if (c == true) {
        if (d.exitFullscreen) {
          d.exitFullscreen();
        } else if (d.webkitExitFullscreen) { /* Safari */
          d.webkitExitFullscreen();
        } else if (d.msExitFullscreen) { /* IE11 */
          d.msExitFullscreen();
        }
    }
})