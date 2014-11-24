//start app when the DOM is fully loaded
jQuery(document).ready(function() {


	
	
//create system variables
var tutorial = document.getElementById("tutorial"),
	coach = document.getElementById("coach"),
	threshgo = document.getElementById("threshold"),
	chart = document.getElementById("log"),
	buzzer = document.getElementById("player"),
	chartBtn = document.getElementById("chartBtn"),
	coachBtn = document.getElementById("coachBtn"),
	directionsBtn = document.getElementById("directionsBtn"),
	skipBtn = document.getElementById("skipBtn");


	
	
	jQuery('#chartBtn').click(enterChart);
	jQuery('#coachBtn').click(enterCoach);
	jQuery('#skipBtn').click(tutorialGo);
	jQuery('#directionsBtn').click(enterDir);
	
	// Functions for the app
			function tutorialGo(){
			 	buzzer.play();
			 	tutorial.className = '';
				tutorial.className = 'clear';
				console.log('clear class added');
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
                console.log('coach class added');
                goodPos.animate({r: goodPosSize}, 500, '<>');
                PoorPos.animate({r: PoorPosSize}, 500, '<>');
                }
            function enterChart(){
            	tutorial.className = '';
				tutorial.className = 'clear';
            	threshgo.className = '';
            	coach.className = '';
				chart.className = 'shoo';
                console.log('Chart class added');
                goodPosSize = 280;
                PoorPosSize = badPosturePercentage * goodPosSize ;
                //alert(badPosturePercentage);
                //PoorPosSize = 150;
                goodPos.animate({r: goodPosSize}, 1000, '<>');
				PoorPos.animate({r: PoorPosSize}, 1200, '<>');
				drawChart();
                }
            function enterDir(){
            	threshgo.className = '';
            	tutorial.className = '';
            	chart.className = '';
            	tutorial.className = 'appear';
            	coach.className = '';
                console.log('coach class removed');
            }
});

