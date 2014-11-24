	/// checking for orientation support
			init2();
		function init() {
			if (window.DeviceMotionEvent) {
				console.log("DeviceMotionEvent supported");
			} else if ('listenForDeviceMovement' in window) {
				console.log("DeviceMotionEvent supported [listenForDeviceMovement]");
			}
		}
		
		function init2() {
			if ((window.DeviceMotionEvent) || ('listenForDeviceMovement' in window)) {
				window.addEventListener('devicemotion', deviceMotionHandler3, false);
				
			} 
		}
		function deviceMotionHandler3(eventData) {
		var appStartTime = 0,
	goodPostureTime = 0,
	badPostureTime = 0,
	appTimePercentage = 0,
	goodPosturePercentage = 0,
	badPosturePercentage = 0;

var logSpace = new Raphael(document.getElementById('log'), 588, 588),
	goodPos = logSpace.circle(300, 300, 70),
	goodPosSize = 2,
	PoorPos = logSpace.circle(300, 300, 30),
	PoorPosSize = 2;
	var badPostureToggle = false;


    

setInterval(startTimers, 500);

function startTimers() {
	appStart();
	//goodPosture();
	//badPosture();
	setPercentages();
	if (posture > 20 || posture < -20){
	badPostureTime += 1;
	}
	else{
		goodPostureTime += 1;
	}
	}

function appStart() {
	appStartTime += 1;
}



function setPercentages() {

	appTimePercentage = (appStartTime/appStartTime)/.01,
	goodPosturePercentage = (goodPostureTime/appStartTime)/.01,
	badPosturePercentage = (badPostureTime/appStartTime)/.01;

	console.log('App Runtime Percentage: ' +  appTimePercentage + '%');
	console.log('Good Posture Percentage: ' +  Math.round(goodPosturePercentage) + '%');
	console.log('Bad Posture Percentage: ' +  Math.round(badPosturePercentage) + '%');
	
}

function onBadPosture() {
	badPostureToggle = true;
}

function onGoodPosture() {
	badPostureToggle = false;
}

    
    // creating Raphael log
	
		badPosT = logSpace.text(100, 90,'Poor Posture: ' +  Math.round(badPosturePercentage) + '%');	
		badPosT.attr({fill: '#ffffff', 'font-size':20, 'font-family':'Monaco'});
		logSpace.path("M20 105 L180 105").attr({stroke:'#ffffff', 'stroke-width' : 1});

		GoodPosT = logSpace.text(450, 50,'Good Posture: ' +  Math.round(goodPosturePercentage) + '%');
		GoodPosT.attr({fill: '#ffffff', 'font-size':20, 'font-family':'Monaco'});
		logSpace.path("M420 65 L600 65").attr({stroke:'#ffffff', 'stroke-width' : 1});
		logSpace.circle(500, 75, 10).attr({fill: '#ffffff', stroke: 'none'});
		logSpace.path("M500 75 L500 120").attr({stroke:'#ffffff', 'stroke-width' : 1});
		logSpace.circle(500, 120, 10).attr({fill: '#ffffff', stroke: 'none'});
		
		BadLine = logSpace.path("M100 200 L300 300");
		BadLine.attr({stroke:'#ffffff', 'stroke-width' : 1});
		logSpace.circle(300, 300, 10).attr({fill: '#ffffff', stroke: 'none'});
		logSpace.circle(100, 200, 10).attr({fill: '#ffffff', stroke: 'none'});
		logSpace.path("M100 200 L100 115").attr({stroke:'#ffffff', 'stroke-width' : 1});
		logSpace.circle(100, 115, 10).attr({fill: '#ffffff', stroke: 'none'});
		PoorPos.attr({fill: 'r(0.3, 0.3)#5ac0ee-#2f5287:60-#173158', stroke: 'none'});
		goodPos.attr({fill: 'r#925024-#c0692f:70-#cd9b54', stroke: 'none'});
	
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
 
    //setTimeout("playAudio();",20000); //any call to playAudio will make the audio play after a click

 
		document.onclick = function(){
    	document.getElementById("player").load();
		}
 
		function playAudio(){
   		 document.getElementById("player").play();
		}
			if (tiltLR > 20 || tiltLR < -20)
			{
		
			buzzer.play();
	
			
			}
			
			// Apply the transform to the image
			document.getElementById("coachBall").style.webkitTransform = "rotate(" + 
  			tiltLR + "deg)";
			document.getElementById("coachBall").style.MozTransform = "rotate(" + tiltLR + "deg)";
			document.getElementById("coachBall").style.transform = "rotate(" + tiltLR + "deg)";
			
		
			
			
		}
		document.body.addEventListener('touchmove', function(e) {e.preventdefault();} )
		document.body.addEventListener('touchstart', function(e){e.preventdefault();} )
		document.ontouchmove = function(e){ e.preventDefault(); };
		

	  		
	  		

		