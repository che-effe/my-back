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
	
var logSpace = new Raphael(document.getElementById('log'), 588, 588),
	goodPos = logSpace.circle(300, 300, 40),
	goodPosSize = 280,
	PoorPos = logSpace.circle(300, 300, 60),
	PoorPosSize = 2;

 // creating Raphael log
	
	badPosT = logSpace.text(100, 90,'Poor Posture: ' +  60 + '%');	
	badPosT.attr({fill: '#ffffff', 'font-size':20});
	logSpace.path("M20 105 L180 105").attr({stroke:'#ffffff', 'stroke-width' : 2});

	GoodPosT = logSpace.text(450, 50,'Good Posture: ' +  40 + '%');
	GoodPosT.attr({fill: '#ffffff', 'font-size':20 });
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

	
	
	jQuery('#chartBtn').click(enterChart);
	jQuery('#coachBtn').click(enterCoach);
	jQuery('#skipBtn').click(tutorialGo);
	jQuery('#directionsBtn').click(enterDir);
	
	// Functions for the app
			function tutorialGo(){
			alert('myBack is designed to be a guide for maintining proper posture and healthy habits to keep your back injury free. Please contact your physician before using myBack to make sure that it’s a good fit for you.');
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
                PoorPosSize = .60 * goodPosSize ;
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
                console.log('coach class removed');
            }
});
