//assignment
let y = 50;
let x = 10 + y;
function assign(){
	document.getElementById("value").innerHTML= x;
}

//The += operator


 let e = 10;
 e += 5;

function addi()
{
	document.getElementById("bar").innerHTML= e;
}

//The -=operator

let s = 20;
s -= 10;

function subtract(){
	document.getElementById("sub").innerHTML = s;
}

//The *=operator

let m = 20;
m *= 10;

function multi(){
	document.getElementById("mul").innerHTML = m;
}

//The /= Operator
let d = 20;
d /= 10;

function div(){
	document.getElementById("divison").innerHTML = d;
}

//string operator

let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';

function strin(){
document.getElementById("str").innerHTML =
answer1 + "<br>" + 
answer2 + "<br>" + 
answer3;

}

//boolean opeator
let g = 5;
let h = 5;
let i = 6;

function bolean(){
document.getElementById("bolen").innerHTML =
(g == h) + "<br>" + (g == i);

}

//aray operator
const cars = ["Saab","Volvo","BMW"];
function arrayi(){
	   document.getElementById("ara").innerHTML = cars[1];
}

     

