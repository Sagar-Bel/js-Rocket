var timer = null;
var changeState = function (state) {
	document.body.className = "body-state"+state;
	clearInterval(timer);

	if(state == 2){
		document.getElementById('countdown').innerHTML = 10;
		timer = setInterval(function () {
			document.getElementById('countdown').innerHTML -= 1; 
			if(document.getElementById('countdown').innerHTML <= 0){
				changeState(3);
			}
		}, 1000);
	}else if(state == 3){
		var success = setTimeout(function(){
			var randomNumber = Math.round(Math.random()*10);

			console.log('randomNumber: '+randomNumber);

			if(randomNumber > 5){
				changeState(4); //Success!
			}else{
				changeState(5);//Oh No!
			}
		},2000)
	}
}