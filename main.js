function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/znO_IbqZq/', modelReady);
}

function modeReady(){
    classifier.classify(gotResults);
}