function greet(){
	var storach=prompt("What is your naem?");
	alert("Hi "+storach);
}
function odd_or_even(){
	var usernum=prompt("entr a number");
	if (usernum %2==0){
		alert("even");
	}
	else if (usernum %2==1) {
		alert("oudd");
	}
	else{
		alert("you did not entr a number");
	}
}	

function the_missing_angle(){
	var usernum=prompt("the two angle are 100% and 30%. What is the missing angle ");
	if (usernum ==50){
	    alert("Correct");	
	}
	else {
		alert("Tey Again");
    }
}