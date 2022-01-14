function amir() {
	document.getElementById('keyboard').style.display="flex";
	console.log("amir");
}
function amir2() {
	document.getElementById('keyboard').style.display="none";
	console.log("amir2");
}
function myFunction(val) {
	var text= document.getElementById("kk");
	 text.value+=val;
  // document.getElementById("kk").value = val;
 	console.log(val);
//  	var input = document. getElementById("kk");

// input. onclick = function() {

// var key = event. keyCode || event. charCode;

// if( key == 8 ){
//  ⌫

// }

// }
}
function earse()
         {
         	document.getElementById("kk").value =kk.value.substring(kk.value.length - 1,0)
         }
         function log() {
    var txtArea ;

    txtArea = document.getElementById("kk") ;
    txtArea.value +=   '\r\n';
}
function caps() {
    var txtArea ;

    txtArea = document.getElementById("kk") ;
    txtArea.value.toUpperCase();
}
// function speak() {
// var speak = document.getElementById('speak');
//     var textarea = document.getElementById('textarea');
//     var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//     var recognition = new SpeechRecognition();
//     speak.addEventListener('click', function () {
//         recognition.start();
//         textarea.innerHTML = '...speaking';
//     })
//     recognition.onresult = function (e) {
//         var transcript = e.results[0][0].transcript;
//         textarea.innerHTML = transcript;
//     }
// }