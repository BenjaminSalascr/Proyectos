window.onload=function(){
//Selecting button element
var btn = document.querySelector("#myBtn");
var btnclear = document.querySelector("#btnClear");
var userInput = document.querySelector("#user-input");
var container = document.querySelector("#container");
var body = document.querySelector("body");
var result = document.querySelector("#contresult");

var monday=["ECO3230","IFS353","MAN305","IFS362"];
var tuesday=["IFS353","MAN305"];
var wednesday=["IFS362","MAN303","ECO341"];
var thursday=["IFS353","MAN302","STATS302"];
var friday=["No class! YAY! :-)"];

//When hover over button change colour
function setHoverColor(){
    btn.style.background ="#DC143C";
}

//When no hovering restore to normal colour
function setNormalColor(){
    btn.style.background ="";
}

function limpiar(){
 // Removes an element from the document.
 // Get the parent and remove the element since it is a child of the parent
    if(btnclear.click()){
        var myobj = document.getElementById("contresult");
        myobj.remove();
    }
}

//Assigning event listeners to the button
btn.addEventListener("mouseover", setHoverColor);
btn.addEventListener("mouseout", setNormalColor);
btn.addEventListener("click", printTimetable);
btnclear.addEventListener("click", limpiar());

function printTimetable(){
    //Monday's timetable
    if(userInput.value=="Monday"){
        for (var index = 0; index < monday.length; index++) {
            var paraText = document.createElement("p");
            var paraNode = document.createTextNode(monday[index]);
            paraText.appendChild(paraNode);
            result.appendChild(paraText);
        }
    }
    //Tuesday's timetable
    if(userInput.value=="Tuesday"){
        for (var index = 0; index < tuesday.length; index++) {
            var paraText = document.createElement("p");
            var paraNode = document.createTextNode(tuesday[index]);
            paraText.appendChild(paraNode);
            result.appendChild(paraText);
        }
    }
    //Wednesday's timetable
    if(userInput.value=="Wednesday"){
        for (var index = 0; index < wednesday.length; index++) {
            var paraText = document.createElement("p");
            var paraNode = document.createTextNode(wednesday[index]);
            paraText.appendChild(paraNode);
            result.appendChild(paraText);
        }
    }
    //Thursday's timetable
    if(userInput.value=="Thursday"){
        for (var index = 0; index < thursday.length; index++) {
            var paraText = document.createElement("p");
            var paraNode = document.createTextNode(thursday[index]);
            paraText.appendChild(paraNode);
            result.appendChild(paraText);
        }
    }
    //Friday's timetable
    if(userInput.value=="Friday"){
        for (var index = 0; index < friday.length; index++) {
            var paraText = document.createElement("p");
            var paraNode = document.createTextNode(friday[index]);
            var img = document.createElement("img");
            img.src="Friday-meme.jpg";
            paraText.appendChild(paraNode);
            result.appendChild(paraText);
            paraText.style.cssText="font-size:24px;"
            body.appendChild(img);
        }
    }
}
}
