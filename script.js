function greet(){
	var storach=prompt("What is your naem?");
	alert("Hi "+storach);
}

function Odd_and_Even(){
	var usernum=prompt("entr a number that is amalibal of 13");
	for(let i=0;i<4;i++){
	if (usernum %13==0){
		alert("good");
	}
	
	else {
		usernum= prompt("wromg tray agam");
	}
	}
}	

function the_missing_angle(){
  var usernum=prompt("the two angle are 100% and 30%. What is the missing angle ");
  while(usernum != 50){
      usernum=prompt("Try Again");
  }
	if (usernum ==50){
	  alert("Correct");
    }
}

function test(){	
	var sum=0;
	var number=1;
	while(number<=50){
		sum+=number;		
		number++;		
	}
	alert("sum = " + sum);
}

function What_year(){
	let year= parseInt(prompt ("what year?"));
    let century= parseInt((year) / 100) + 1;
    alert("the ecentaey is "+ century);
}

function password_check(){
  let userName= prompt("usarnaem");
  let userPassword= prompt("paswrd");
  userLower = userName.toLowerCase();
  if(userLower == "ranem" && userPassword == "123"){
    alert("welcome");
  }else{
    alert("Hack someone else");
  }
}

function up_low(){
  let msg=prompt("ente a masge")
   let msg2=msg.toLowerCase();
	for(let i=0;i<msg.length;i++){
		if (i%2==0){
			msg2+=msg[i].toUpperCase();
  		}
  		else {
  			msg2+=msg[i]
  		}
  	}
  alert(msg)
}

function encrypt(){
var chars ={'a':'c','b':'e','c':'d','d':'u','e':'v','f':'q','g':'t','h':'b','i':'g','j':'w','k':'f','l':'x','m':'p','n':'l','o':'h','p':'a','q':'i','r':'y','s':'o','t':'z','u':'j','v':'k','w':'s','x':'r','y':'n','z':'m'};
var test = prompt('Enter Your Message [type in small letterd]');
text = test.replace(/[abcdefghijklmnopqrstuvwxyz]/g, m => chars[m]);
document.getElementById("inc").innerHTML=text;
}

function  D_encrypt(){
var chars ={'c':'a','e':'b','d':'c','u':'d','v':'e','q':'f','t':'g','b':'h','g':'i','w':'j','f':'k','x':'l','p':'m','l':'n','h':'o','a':'p','i':'q','y':'r','o':'s','z':'t','j':'u','k':'v','s':'w','r':'x','n':'y','m':'z'};
var test = prompt('copy the above and paste it here');
text = test.replace(/[abcdefghijklmnopqrstuvwxyz]/g, m => chars[m]);
document.getElementById("true").innerHTML=text;
}