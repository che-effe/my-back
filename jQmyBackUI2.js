//function canvasMovement(){
		//if (window.DeviceOrientationEvent){
			//console.log('DeviceOrientation is supported');
			//window.addEventListener('deviceorientation', function(eventData) {
			//LR = eventData.gamma;
			//UD = eventData.beta;
			//DIR = eventData.alpha;
			//deviceOrientationHandler(LR, UD, DIR);
			//}, false);
			//} else {
			//	alert('OH NOES!! Looks like you are not using an iOs device. This site can not run outside of safari for iOs devices. Sorry.');
		//}
	//}
	//canvasMovement();
//start app when the DOM is fully loaded
//create system variables
//

// enable vibration support
navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;

var tutorial = document.getElementById("tutorial");
var coach = document.getElementById("coach");
var threshgo = document.getElementById("threshold");
var chart = document.getElementById("log");
var buzzer = document.getElementById("player");
var chartBtn = document.getElementById("chartBtn");
var coachBtn = document.getElementById("coachBtn");
var directionsBtn = document.getElementById("directionsBtn");
var skipBtn = document.getElementById("skipBtn");
var appStartTime = 0;
var goodPostureTime = 0;
var badPostureTime = 0;
var appTimePercentage = 0;
var goodPosturePercentage = 0;
var badPosturePercentage = 0;
var badPostureBall=0;
buzzer.load();
buzzer.play();




function playAudio(){
	if (navigator.vibrate) {
		navigator.vibrate(10000);
	} else {
		document.getElementById("player").play();
	}
}

jQuery(document).ready(function() {
	init2();
	function init() {
	   if (window.DeviceMotionEvent) {
		   //console.log("DeviceMotionEvent supported");
	   } else if ('listenForDeviceMovement' in window) {
		  // console.log("DeviceMotionEvent supported [listenForDeviceMovement]");
	   }
	}
	function init2() {
	   if ((window.DeviceMotionEvent) || ('listenForDeviceMovement' in window)) {
		   window.addEventListener('devicemotion', deviceMotionHandler3, false);

	   }
	}
	function deviceMotionHandler3(eventData) {
	// Grab the acceleration including gravity from the results
		var acceleration = eventData.accelerationIncludingGravity;

		// Display the raw acceleration data
		var rawAcceleration = "[" + Math.round(acceleration.x) + ", " + Math.round(acceleration.y) + ", " + Math.round(acceleration.z) + "]";


		// Z is the acceleration in the Z axis, and tells us if the device is facing up, or down
		var facingUp = -1;
		if (acceleration.z > 0) {
			facingUp = +1;
		}

		// Convert the value from acceleration to degress
		//   acceleration.x|y is the acceleration according to gravity, we'll assume we're on Earth and divide
		//   by 9.81 (earth gravity) to get a percentage value, and then multiply that by 90 to convert to degrees.
		var tiltLR = Math.round(((acceleration.x) / 9.81) * -90);
		var buzzer = document.getElementById("player");

		// Display the acceleration and calculated values
		document.getElementById("moAccel").innerHTML = rawAcceleration;
		document.getElementById("moCalcTiltLR").value = tiltLR;



		// Apply the transform to the image
		document.getElementById("coachBall").style.webkitTransform = "rotate(" +
		tiltLR + "deg)";
		document.getElementById("coachBall").style.MozTransform = "rotate(" + tiltLR + "deg)";
		document.getElementById("coachBall").style.transform = "rotate(" + tiltLR + "deg)";
		 if (tiltLR > 20 || tiltLR < -20) {
			playAudio();
			}
		// Functions for the app
		setInterval(startTimers, 500);
		function startTimers() {
			appStart();
		}

		function appStart() {
		   appStartTime += 1;
		   if (tiltLR > 20 || tiltLR < -20){

				badPostureTime += 1;
			}else{

				goodPostureTime += 1;
			}
			appTimePercentage = (appStartTime/appStartTime)/.01;
		   goodPosturePercentage = (goodPostureTime/appStartTime)/.01;
		   badPostureBall = (badPostureTime/appStartTime);
		   badPosturePercentage = (badPostureTime/appStartTime)/.01;

		  // console.log('App Runtime Percentage: ' +  appTimePercentage + '%');
		  // console.log('Good Posture Percentage: ' +  Math.round(goodPosturePercentage) + '%');
		  // console.log('Bad Posture Percentage: ' +  Math.round(badPosturePercentage) + '%');

		}




	}

		jQuery('#chartBtn').click(enterChart);
		jQuery('#coachBtn').click(enterCoach);
		jQuery('#skipBtn').click(tutorialGo);
		jQuery('#directionsBtn').click(enterDir);


		function tutorialGo(){
		//alert('myBack is designed to be a guide for maintining proper posture and healthy habits to keep your back injury free. Please contact your physician before using myBack to make sure that it’s a good fit for you.');
			playAudio();
			tutorial.className = '';
			tutorial.className = 'goAway';
			//console.log('clear class added');
			enterCoach();

		}
		function enterCoach(){
			goodPosSize = 2;
			PoorPosSize = 2;
			tutorial.className = '';
			tutorial.className = 'clear';
			chart.className = '';
			coach.className = 'move';
			threshgo.className = 'go';
			//console.log('coach class added');
			goodPos.animate({r: goodPosSize}, 500, '<>');
			PoorPos.animate({r: PoorPosSize}, 500, '<>');
			}
		function enterChart(){
			buzzer.pause();
			tutorial.className = '';
			tutorial.className = 'clear';
			threshgo.className = '';
			coach.className = '';
			chart.className = 'shoo';
			//console.log('Chart class added');
			goodPosSize = 280;
			PoorPosSize = badPostureBall * goodPosSize ;
			//alert(badPosturePercentage);
			//PoorPosSize = 150;
			goodPos.animate({r: goodPosSize}, 1000, '<>');
			PoorPos.animate({r: PoorPosSize}, 1200, '<>');
			}
		function enterDir(){
			threshgo.className = '';
			tutorial.className = '';
			chart.className = '';
			tutorial.className = 'appear';
			coach.className = '';
			//console.log('coach class removed');
		}

     // creating Raphael log
	var logSpace = new Raphael(document.getElementById('log'), 588, 588),
	goodPos = logSpace.circle(300, 300, 40),
	goodPosSize = 280,
	PoorPos = logSpace.circle(300, 300, 60),
	PoorPosSize = 2;
	badPosT = logSpace.text(100, 80,'Poor Posture ');
	badPosT.attr({fill: '#ffffff', 'font-size':30});
	logSpace.path("M20 105 L180 105").attr({stroke:'#ffffff', 'stroke-width' : 2});

	GoodPosT = logSpace.text(450, 40,'Good Posture');
	GoodPosT.attr({fill: '#ffffff', 'font-size':30 });
	logSpace.path("M365 65 L520 65").attr({stroke:'#ffffff', 'stroke-width' : 2});
	logSpace.circle(500, 75, 10).attr({fill: '#ffffff', stroke: 'none'});
	logSpace.path("M500 75 L500 120").attr({stroke:'#ffffff', 'stroke-width' : 2});
	logSpace.circle(500, 120, 10).attr({fill: '#ffffff', stroke: 'none'});

	BadLine = logSpace.path("M100 200 L300 300");
	BadLine.attr({stroke:'#ffffff', 'stroke-width' : 2});
	logSpace.circle(300, 300, 10).attr({fill: '#ffffff', stroke: 'none'});
	logSpace.circle(100, 200, 10).attr({fill: '#ffffff', stroke: 'none'});
	logSpace.path("M100 200 L100 115").attr({stroke:'#ffffff', 'stroke-width' : 2});
	logSpace.circle(100, 115, 10).attr({fill: '#ffffff', stroke: 'none'});
	PoorPos.attr({fill: 'r(0.3, 0.3)#5ac0ee-#2f5287:60-#173158', stroke: 'none'});
	goodPos.attr({fill: 'r#925024-#c0692f:70-#cd9b54', stroke: 'none'});
});
