// function greet(){
// 	var storach=prompt("What is your naem?");
// 	alert("Hi "+storach);
// }

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

// function the_missing_angle(){
//   var usernum=prompt("the two angle are 100% and 30%. What is the missing angle ");
//   while(usernum != 50){
//       usernum=prompt("Try Again");
//   }
// 	if (usernum ==50){
// 	  alert("Correct");
//     }
// }

// function test(){	
// 	var sum=0;
// 	var number=1;
// 	while(number<=50){
// 		sum+=number;		
// 		number++;		
// 	}
// 	alert("sum = " + sum);
// }

// function What_year(){
// 	let year= parseInt(prompt ("what year?"));
//     let century= parseInt((year) / 100) + 1;
//     alert("the ecentaey is "+ century);
// }