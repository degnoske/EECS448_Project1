


$(document).ready(function(){
$('#clickMe').click(function(){
init();});







                                         //variables
	var canvas = $("#canvas")[0];
	var w = $("#canvas").width();
	var h = $("#canvas").height();
	var ctx = canvas.getContext("2d");
	var mode;
	var hour;
	var minute;
	var second;
	var secDis;
	var minDis;
	var hourDis;
	var ampm;
	var boolampm;
	var valid1;
	var altcolor;
	var textcolor;
	var textbool=true;
/**
 * Checks that inputs are valid
 */
function valid(){
	valid1=true;
	if (mode=="12Hr"){
		if(hour>12||minute>59||second>59){
		valid1=false;
		}
	}
	if (mode=="24Hr"){
	if(hour>24||minute>59||second>59){
		valid1=false;
		}
	}	
}
/**
 * Initializes clock variables and calls paint function
 */
function init(){
	create_elements();
	mode=document.getElementById("mode").value;
	 hour=document.getElementById("hour").value;
	 minute=document.getElementById("minute").value;
	 second=document.getElementById("second").value;
	 ampm=document.getElementById("ampm").value;
	if(ampm=="am"){boolampm=true;}
	else{boolampm=false;}


		valid();

		if(typeof loop != "undefined") clearInterval(loop);
		loop = setInterval(paint, 1000);
		
	}
	/**
 * creates canvas variable cty
 */
	
function create_elements(){
	var c = document.getElementById("canvas");
		 cty = c.getContext("2d");

	}
/**
 * creates canvas that displays the clock
 */
function paint(){
//Canvas
time();

if(valid1==true){
textbool=true;}
else{textbool=!textbool;}
if(textbool==true){
textcolor="red";
}
else{textcolor="black";}

		ctx.fillStyle = 'black';
		ctx.fillRect(0, 0, w, h);
		ctx.strokeStyle = '#993300';
		ctx.strokeRect(0, 0, w, h);
		ctx.lineWidth=30;	
//Display

if(valid1==true){



		cty.fillStyle=textcolor;
		cty.font = "150px Garamond";
		
		cty.fillText(hourDis + ":" + minDis,20,160);
		cty.font="60px Garamond";
		cty.fillText(secDis,350,160);
		if(mode=="12Hr"){
		cty.fillText(ampm,350,100);
		}}
		
else{  
		cty.fillStyle=textcolor;
		cty.font = "150px Garamond";

		cty.fillText("12" + ":" + "00",20,160);
		cty.font="60px Garamond";
		cty.fillText("00",350,160);
		if(mode=="12Hr"){
		cty.fillText(ampm,350,100);
	
}}
	second++;	
	
	}
	/**
 * calculates when to change clock properties and adjusts hours/minutes/seconds
 */
function time(){

if (second%60==0&&second!=0){ //second reset
	second=0;
	minute++;}
	if (minute%60==0&& minute!=0){ //minute reset
	minute=0;
	hour++;}
	
	
	 if(second<10){         //Display Correction
		secDis="0"+second;}
		else{secDis=second;}
	if(minute<10){
		minDis="0"+minute;}
		else{minDis=minute;}
	if(hour<10){
		hourDis="0"+hour;}
		else{hourDis=hour;}
		
if(hour==12&&minute==0&&second==0){   // am/pm switch
		boolampm=!boolampm;
		}
	if(boolampm==false){
	ampm="pm";
	}
	else{ampm="am";}
if(mode=="12Hr"){              //12 Hr Mode
	if(hour>12){
		hour=1;
	} 
	}	
	else if(mode=="24Hr"){ 	   //24 Hr mode
	if(hour>24){
		hour=1;
	} 
	
	 if(second<10){         //Display Correction
		secDis="0"+second;}
		else{secDis=second;}
	if(minute<10){
		minDis="0"+minute;}
		else{minDis=minute;}
	if(hour<10){
		hourDis="0"+hour;}
		else{hourDis=hour;}
	}
	}	











})
