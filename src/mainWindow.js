
//import play function
let playFunc = require('./playFunction');

window.onload = () => {
	//need interval id to stop interval
	let intervalID;

	//populating grid with li's
	const grid = document.getElementById("grid");
	for(let i=1; i<=900; i++){
		let li = document.createElement('li');
		li.className = "g" + i;
		grid.appendChild(li);
	}

	init();
}	

function init(){
	//seeding grid with random squares activated 1/6
	for(let i=1; i<=900; i++){
		if(Math.floor(Math.random()*6)===1){
			let classNum = "g" + i;
			let li = document.getElementsByClassName(classNum)[0];
			li.className = classNum + " " + "activated";
		}
	}
	//delays and sets delay
	//also sets up interval id for reseeding
	setTimeout(function(){intervalID = setInterval(function(){playFunc.play()}, 150)},80);
}

function reInit(){
	//clearing and removing activated class
	clearInterval(intervalID);
	for(let i=1; i<=900; i++){
		let classNum = "g" + i;
		let li = document.getElementsByClassName(classNum)[0];
		li.classList.remove('activated');
	}
	//delay before reinitializing
	setTimeout(function(){init();},100);
}

