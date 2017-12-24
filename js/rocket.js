var timer = null;
var changeState = function (state) {
	document.body.className = "body-state"+state;
	clearInterval(timer);
	document.getElementById('nervous').className = 'nervous';
	document.getElementById('cant-wait').className = 'cant-wait';

	if(state == 2){
		document.getElementById('countdown').innerHTML = 10;
		timer = setInterval(function () {
			document.getElementById('countdown').innerHTML -= 1;
			if(document.getElementById('countdown').innerHTML == 6){
				document.getElementById('nervous').className = 'nervous show';
			}else if(document.getElementById('countdown').innerHTML == 3){
				document.getElementById('nervous').className = 'nervous';
				document.getElementById('cant-wait').className = 'cant-wait show';
			}
			if(document.getElementById('countdown').innerHTML <= 0){
				document.getElementById('cant-wait').className = 'cant-wait';				
				changeState(3);
			}
		}, 1000);
	}else if(state == 3){
		var success = setTimeout(function(){
			var randomNumber = Math.round(Math.random()*10);

			console.log('randomNumber: '+randomNumber);

			if(randomNumber > 3){
				changeState(4); //Success!
			}else{
				changeState(5);//Oh No!
			}
		},2000)
	}
}