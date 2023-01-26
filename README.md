# Test_ext
## Contents:
- [Description](#description)
- [ManifestJSON](#manifest-json)
- [ContentScript](#contentscript)
- [Author](#author)
## Description
### Extension For Test Site
This extension helps to efficiently conduct  various tests and exams through internet.
### Features:
- Fullscreen Mode
- Tab swtich detection
- Refresh detection
- Prevents Cut , Copy and Paste
- Access camera , microphone
- Checks internet connection
## Manifest JSON
-Enter your url in test url
-Add permissions if needed
```js
"name":"Test_ext",
    "description":"Test Support Extension",
    "version":"1.0",
    "permissions":["tabs"],
    "content_scripts":[
        {
            "matches":["testurl"],
            "js":["contentScript.js"]
        }
    ],
    
    "manifest_version":3
```
## ContentScript

### Start test and enter full screen mode

- Enter id of start test button
- Operation:
  - When button is clicked
  - Popup Displays Fullscreen ?
  - On confirmin Fullscreen mode is turned on

```js
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
```
### Prevent cut copy paste on website
```js
// Disable right click on web page
$("html").on("contextmenu",function(e){
    return false;
});
// Disable cut, copy and paste on web page
$('html').bind('cut copy paste', function (e) {
     e.preventDefault();
});
```
###  Prevent page refresh or tab switch
```js
//To alert before refreshing or leaving the page
window.onbeforeunload = function() {
    alert("Are you sure you want to leave the page, the test may get submitted");
}
```
### Check for camera , microphone and internet connection
```js
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
```

### Exit the fullscreen mode after ending test
- Enter end test button link
```js
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
```
## Author
- [@harsh-095](https://github.com/harsh-095)























