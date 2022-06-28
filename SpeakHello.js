
SpeakHello.js

Sakoona, [28/06/2022 15:03]
var helloSpeaker = {};

(function () { 
    var speakWord = "Hello";    
    helloSpeaker.speak = function (name) {
        console.log(speakWord + " " + name);
    }   
})();
