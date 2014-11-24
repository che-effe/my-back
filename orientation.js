jQuery(document).ready(function() {	
	// checking for orientation support

	


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
	if (tiltLR > 20 || tiltLR < -20){
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
		

	  		
});	  		

		