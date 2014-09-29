/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 1
   Review Assignment

   Function List:
   randomInteger()
      Used to reverse the order of characters in a text string
*/

function randomInteger(size) {
   return Math.floor((size+1)*Math.random());
}

//Create an array with 5 random numbers between 0 to 9 -- Using an array outside of the for loop stops the randomIntegers from changing with each iteration. 
var numbers = [randomInteger(9),randomInteger(9),randomInteger(9),randomInteger(9),randomInteger(9)]; // 

//Create images that correspond with the numbers array
for(var i = 0; i < 5; i++){    

	var img = document.createElement("img");
	var display = document.getElementById('images');

	//using the for loop, add the numbers array value into the image source.
	img.src = "../images/"+numbers[i]+".jpg";
	display.appendChild(img);

}

function validate(){
	//The user will type into the captcha field
	var captcha = document.getElementById("captcha");

	// form logic: if the captcha value, equals the numbers array joined together, then success. Else throw an error.
	if(captcha.value === numbers.join("")){
		return true;
	}else{
		//Error, also prevent the form from submitting if the code doesn't match
		alert("Invalid Captcha Code. Please try again or refresh to get a new code.");
		return false;
	}

}
