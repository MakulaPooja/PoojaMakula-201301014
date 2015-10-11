var array = ['అ','ఆ','ఇ','ఈ','ఉ','ఊ','ఋ','ఎ','ఏ','ఐ','ఒ','ఓ','ఖ','గ','ఘ','ఙ','చ','ఛ','జ','ఞ','ట','ఠ','డ','ఢ','ణ','త','థ','ద','ధ','న','ప','ఫ','బ','భ','మ','య','ర','ఱ','ల','ళ','వ','శ','ష','స','హ'];

var points=0;
var d= ['తరవండి','తెలుగు','ఆది','నమస్కారము','శెలవు','దయ','చేస','నేను','ఇది'];
var random1, random2, random3, random4, random5;
var randomArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

console.log(array);
//sets array variables to random numbers
function CreateLottoValues() {
  for (var i=0; i<randomArray.length; i++) {
    randomArray[i] = array[Math.floor(Math.random() * array.length)]; 
  }
}

//create table
function UpdateTable() {
	var random = document.getElementById('result');
  CreateLottoValues();
  for (var i=0; i<randomArray.length; i++) {
    tmp = 'cell'+(i+1);
    document.getElementById(tmp).innerHTML = randomArray[i]; 
    document.getElementById(tmp).value = randomArray[i]; 
    console.log(document.getElementById(tmp).value);
    random.innerHTML="";
  }
}
var word = "";


function haha(objButton) 
{
	
	var random = document.getElementById('result');
	random.innerHTML += objButton.value;

	word = word+ objButton.value;
	console.log(word);

}

function Check(){

		if (d.indexOf(word) > -1){
				points += 5;
				document.getElementById('result1').innerHTML = 'You collected ' + points + ' points.';
	}

		else{
			document.getElementById('result1').innerHTML = 'Word not found';
		}
}