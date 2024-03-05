var SpeechRecognition = windows.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
    Textbox.innerHTML = "";
    recognition.start();
}
recognition.onresult = function (event) {


    console.log(event);
    var content = event.result[0][0].trascript;
    Tectbox.innerHTML = content;
    console.log(content);
    if(content == "Toma mi selfie")
    {
        console.log("tomando selfie --- ")
        speack();
    }

}
function speack() {
var synth = window.speechSynthesis;

speack_data = document.getElementById("textbox").innerHTML;
var utterThis = new SpeechSynthesisUtterance(speack_data)

synth.speak(utterThis);
Webcam.attach(camera);
}

camera = document.getElementById("camera")
webcam.set({
    width: 360
    height : 250
    image_format: "jpg",
    jpg.quality:90
});