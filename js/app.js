var userAge = prompt("What is your age?")

console.log("You are " + userAge + " years old");

if(userAge < 18){
	alert("You can't drink");
} else if(userAge > 19 && userAge < 50){
	alert("You are an adult");
} else if(userAge > 99){
	alert("You are dead");
} else { 
	alert("★♥♬");
}