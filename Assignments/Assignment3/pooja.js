var array = ['अ','आ','इ','ई','उ','ऊ','ए','ऐ','ओ','औ','क','ख','ग','घ','ङ','च','छ','ज','झ','ञ','ट','ठ','ड','ढ','ण','त','थ','द','ध','न','प','फ','ब','भ','म','य','र','ल','व','श','ष','स','ह','ा','ि','ी','ु','ू','ृ',' ॄ','ॅ','े','ै','ॉ','ो','ौ'];
var points=0;
var d=['अमरीकन','अलमारी','अलमारी','आदमी','आप','आशा','और','एक','कमरा','कुरसी','ख़ाली','खिड़की','गाड़ी','गुजराती','चाचा','छोटा','जनवरी','चिड़िया' ,'छोटा','जनवरी','ज़रूर','जर्मन','जापानी','जी',
'नहीं','हाँ','ठीक','तीन','तु म','तू','दादी','दूसरा','दो','दोनों','नमस्ते','नहीं','पंखा','पंजाबी','पत्थर','पलंग','पाकिस्तानी','पिता','पुराना','प्रति','बग़ीचा','बच्चा','बड़ा','बहुत','बहू','बूढ़ा','भारतीय','भाषा','मकान','माता','मानव','मारुति','मूर्ति','मेज़','मैं','यह','यहाँ','ये','रविवार','राजा','रूसी','लड़का','लड़की','लाल','लोग','वह','वे','शुक्रिया ','सफ़ेद','साइकिल'];
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

function check(){
	for(var k=0;k<d.length;k++)
	{
		if(word==d[k])
		{
			points+=3;
			document.getElementById("ult1");
		}
	}
	word='';
}