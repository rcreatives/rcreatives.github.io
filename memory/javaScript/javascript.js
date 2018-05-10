var arr = [];
var arrey = ["0C","0D","0H","0S","2C","2D","2H","2S","3C","3D","3H","3S","4C","4D","4H","4S","5C","5D","5H","5S","6C","6D","6H","6S","7C","7D","7H","7S","8C","8D","8H","8S","9C", "9D","9H","9S","AC", "AD","AH","AS","JC", "JD","JH","JS","KC", "KD","KH","KS","QC", "QD","QH","QS"];
var i = 0;
var start = document.getElementById("start"); 
var cards = document.getElementById("cards"); 
var end = document.getElementById("end"); 
var ball;
var butStart = document.getElementById("StartGame"); 
var again = document.getElementById("again");
var points = document.getElementById("points");
var pointEnd = document.getElementById("point");
var restart = document.getElementById("restart");
butStart.addEventListener('click', startGame);
again.addEventListener('click', startGame);

function isArr(){ 
	function randomInteger(min, max) {
	    var rand = min + Math.random() * (max + 1 - min);
	    rand = Math.floor(rand);
	    return rand;
  	}
  	function compareRandom(a, b) {
		return Math.random() - 0.5;
	}
	arr.sort(compareRandom);
	if(i < 9){
		var ran = randomInteger(0, arrey.length);
		for(var j = 0; j < arr.length; j++){
		if(arr[j] === arrey[ran]){
			return isArr();
		}
	}
	arr.push(arrey[ran]);
	arr.push(arrey[ran]);
	i++;
	isArr();	
	}
	return;
}

function noneCard(){
	var img = game.querySelectorAll('img');
	for(var i = 0; i<img.length; i++){
		img[i].classList.add("noneCard");
	}
	cards.onclick = onlue;
	restart.onclick = startGame;

}
function startGame(event){
	start.classList.add('none');
	game.classList.remove('none');
	end.classList.add('none');
	i = 0;
	arr = [];
	isArr();
	DellImg();
	createDiv();
	ball = 0;
	points.innerHTML = 0;
	restart.onclick = null;
	setTimeout(noneCard, 100);
	}

function endGame(){
	start.classList.add('none');
	game.classList.add('none');
	end.classList.remove('none');
	pointEnd.innerHTML = ball;
}
var elem = '';
function onlue(e){
	var card = cards.getElementsByClassName("card");
	function removeCard(){
		elem.parentNode.remove();
		e.target.parentNode.remove();
		elem = '';
		if(card.length == 0){
			endGame();
		}
	}
	if(elem === ''){ 
		elem = e.target;
		e.target.classList.remove('noneCard');
	}else if(elem === e.target){
		return false;
	}
	else if(elem.src == e.target.src){
			e.target.classList.remove('noneCard');
			cards.onclick = null;
			setTimeout(removeCard, 5150);
			consider(card.length/2, 1);
	}else if(elem.src != e.target.src){
		e.target.classList.remove('noneCard');
		cards.onclick = null;
		setTimeout(noneCard, 2500);
		elem = '';
		consider((18-card.length)/2, -1);
	}
}
function createDiv(){ 
	for(var i = 0; i < arr.length; i++){
		var div = document.createElement('div');
		var img = document.createElement('img');
		div.classList.add('card'+i, 'card');
		div.setAttribute('data-tid', "Card-flipped");
		img.classList.add('img'+i);
		img.setAttribute('data-tid',"Card")
		img.src = "images/Cards/"+arr[i]+".png";
		div.appendChild(img);
		cards.appendChild(div);
	}
}

function consider(a, b){
	ball = ball+((a*42)*b);
	if(ball<0){
		ball=0;
		points.innerHTML = 0;
	}else{
		points.innerHTML = ball;
	}
}

function DellImg(){
	if(cards.childNodes.length>1){
		var ball = 0;
		points.innerHTML = ball;
		var i = 0;
		while (cards.childNodes.length  != 0) {
			cards.childNodes[i].remove();
		}
	}else{
		return;
	}	
}