let button = document.getElementById('submit');
let button1 = document.getElementById('reset');
let CMC = document.getElementById("CMC");
let Dalvin = document.getElementById("Dalvin");
let Zeke = document.getElementById("Zeke");
let Kamara = document.getElementById("Kamara");
let Thomas = document.getElementById("thomas");
let Golladay = document.getElementById("Golladay");
let Godwin = document.getElementById("Godwin");
let Julio = document.getElementById("Julio");
let Lamar = document.getElementById("lamar");
let Dak = document.getElementById("dak");
let Wilson = document.getElementById("wilson");
let Winston = document.getElementById("winston");
let Kittle = document.getElementById("kittle");
let Kelce = document.getElementById("kelce");
let Andrews = document.getElementById("andrews");
let Waller = document.getElementById("waller");


//checking if correct answer for TE
function TEanswer() {
    
  		if (Kittle.checked) {
			return(Kittle.value);
		}
		else if(Kelce.checked){
			return(Kelce.value);
		}
		else if(Andrews.checked){
			return(Andrews.value);
		}
		else if(Waller.checked){
			return(Waller.value);
		}
		}

//adding points to TE
function tepoints() {
	if(Kelce.checked){
		return(1);
	}
	else {
		return(0);
	}
}


//checking if correct answer for QB
function qbanswer() {
    
  		if (Lamar.checked) {
			return(Lamar.value);
		}
		else if(Dak.checked){
			return(Dak.value);
		}
		else if(Wilson.checked){
			return(Wilson.value);
		}
		else if(Winston.checked){
			return(Winston.value);
		}
		}

//adding points to QB
function qbpoints() {
	if(Lamar.checked){
		return(1);
	}
	else {
		return(0);
	}
}

//checking if correct answer is selected for WR
function wranswer() {
    
  		if (Thomas.checked) {
			return(Thomas.value);
		}
		else if(Golladay.checked){
			return(Golladay.value);
		}
		else if(Godwin.checked){
			return(Godwin.value);
		}
		else if(Julio.checked){
			return(Julio.value);
		}
		}

//adding points to WR
function wrpoints() {
	if(Thomas.checked){
		return(1);
	}
	else {
		return(0);
	}
}



//checking if correct answer is selected for running backs 

function rbanswer() {
 
  		if (CMC.checked) {
			return(CMC.value);
		}
		else if(Dalvin.checked){
			return(Dalvin.value);
		}
		else if(Zeke.checked){
			return(Zeke.value);
		}
		else if(Kamara.checked){
			return(Kamara.value);
		}
		}



//checkig and adding point to the right one selected 
function rbpoints() {
	if(CMC.checked){
		return(1);
	}
	else {
		return(0);
	}
}


//total points 
const adding = () => {
	return(rbpoints()+wrpoints()+qbpoints()+tepoints());

}

// const message = () => {
// 	if(adding()>4){
// 		alert("great job");
// 	}
// 	else if (adding() < 4){
// 		alert("you can do better, try again!");
// 	}
// }

//creating final score
const finalcheck = () => {
 input = document.getElementsByTagName("input");
 var h2 = document.createElement("h2");
 h2.appendChild(document.createTextNode("your score is:"+ adding()));
 document.body.appendChild(h2);
 
 }


//select if inputs are selected in each radio section use loops through form
	



//reset button

function reset () {

// let CMC = document.getElementById("CMC").checked=false;
// let Dalvin = document.getElementById("Dalvin").checked=false;
// let Zeke = document.getElementById("Zeke").checked=false;
// let Kamara = document.getElementById("Kamara").checked=false;
// let Thomas = document.getElementById("thomas").checked=false;
// let Golladay = document.getElementById("Golladay").checked=false;
// let Godwin = document.getElementById("Godwin").checked=false;
// let Julio = document.getElementById("Julio").checked=false;
// let Lamar = document.getElementById("lamar").checked=false;
// let Dak = document.getElementById("dak").checked=false;
// let Wilson = document.getElementById("wilson").checked=false;
// let Winston = document.getElementById("winston").checked=false;
// let Kittle = document.getElementById("kittle").checked=false;
// let Kelce = document.getElementById("kelce").checked=false;
// let Andrews = document.getElementById("andrews").checked=false;
// let Waller = document.getElementById("waller").checked=false;

location.reload();
}









//show score 



//show message for correct answer 




//show message for wrong answer 






button.addEventListener('click', finalcheck);
button1.addEventListener('click', reset);



