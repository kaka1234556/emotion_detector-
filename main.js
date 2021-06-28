prediction1="";
prediction2="";

Webcam.set({
width:350,
height:300,
image_format:'png',
png_quality:90
});

camera=document.getElementById("camera");
Webcam.attach("#camera");

function take_snapshot(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML=

'<img Id="captured_image" src="  '+data_uri+  '"/>';

});
}

console.log('ml5.version',ml5.version);

image_classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Xmv3s6rLs/model.json',modelLoaded);

function modelLoaded(){
console.log("your model is loaded");
}

function speak(){
speech=window.speechSynthesis;
data="The first pridiction is "+prediction1+"And the second pridiction is "+prediction2;
utter_this=new SpeechSynthesisUtterance(data);
speech.speak(utter_this);

}

function check()
{
img=document.getElementById("captured_image");
image_classifier.classify(img,get_result);
}

function get_result(error,results){

 if(error){
console.log(error);
 }
 else{
console.log(results);
document.getElementById("result_emotion_name").innerHTML=results[0].label;
document.getElementById("result_emotion_name2").innerHTML=results[1].label;

prediction1=results[0].label;
prediction2=results[0].label;

speak()

if(results[0].label=="Happy")
{
document.getElementById("update_emoji").innerHTML="&#128522;";
}

if(results[0].label=="Sad")
{
document.getElementById("update_emoji").innerHTML="&#128532;";
}

if(results[0].label=="laugh")
{
document.getElementById("update_emoji").innerHTML="&#128512;";
}
if(results[0].label=="Angry")
{
document.getElementById("update_emoji").innerHTML="&#128545;";
}

if(results[1].label=="Happy")
{
document.getElementById("update_emoji2").innerHTML="&#128522;";
}

if(results[1].label=="Sad")
{
document.getElementById("update_emoji2").innerHTML="&#128532;";
}

if(results[1].label=="laugh")
{
document.getElementById("update_emoji2").innerHTML="&#128512;";
}
if(results[1].label=="Angry")
{
document.getElementById("update_emoji2").innerHTML="&#128545;";
}
 }
}



































