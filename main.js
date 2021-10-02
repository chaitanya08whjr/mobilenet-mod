Webcam.set({
    height:300,
    width:300,
    image_format:'png',
    png_quality:90,
    constraints:{
        facingMode:"environment"
    }
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML='<img id="captured_img" src="'+ data_uri+ '"/>';
    }
        
    );
}

console.log("ml5version",ml5.version);

classifier = ml5.imageClassifier('MobileNet',modelLoaded);

function modelLoaded(){
    console.log("modelloaded");
}

function predict_image(){
    img = document.getElementById("captured_img");
    classifier.classify(img,gotResult);
}

function gotResult(error,Rel){
    if (error){
        console.error(error);
    }
    else{
        console.log(Rel);
        document.getElementById("object_name").innerHTML=Rel[0].label;
    }
}