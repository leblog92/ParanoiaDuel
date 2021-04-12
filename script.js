/*jshint esversion:6*/
var mx,my;
var svg1=document.getElementById("svg1");
var rect=svg1.getBoundingClientRect();
var rect_left=rect.left;
var rect_top=rect.top;
var div1=document.getElementById("div1");
var div2=document.getElementById("div2");
var div3=document.getElementById("div3");
var player1=document.getElementById("player1");
var player2=document.getElementById("player2");
var bonus1=document.getElementById("bonus1");
var bonus2=document.getElementById("bonus2");
var bonus3=document.getElementById("bonus3");
var bonus4=document.getElementById("bonus4");
var bonus5=document.getElementById("bonus5");
var bonus6=document.getElementById("bonus6");
var bonus7=document.getElementById("bonus7");
var bonus8=document.getElementById("bonus8");
var bonus9=document.getElementById("bonus9");
var warp1=document.getElementById("warp1");
var warp2=document.getElementById("warp2");
var blue_p=document.getElementById("blue_p");
var orange_p=document.getElementById("orange_p");
var death=document.getElementById("death");
var end=document.getElementById("end");
var selector=document.getElementById("selector");
var reset_button=document.getElementById("reset_button");
var item=document.getElementById("item");
var gate=document.getElementById("gate");
var title=document.getElementById("title");
var left_door=document.getElementById("left_door");
var right_door=document.getElementById("right_door");
var start_title=document.getElementById("start_title");
var img_p1d1=document.getElementById("img_p1d1");
var img_p1d2=document.getElementById("img_p1d2");
var img_p2d1=document.getElementById("img_p2d1");
var img_p2d2=document.getElementById("img_p2d2");
var message=document.getElementById("message");
var p1_name=document.getElementById("p1_name");
var p2_name=document.getElementById("p2_name");
var p1d1,p1d2,p2d1,d2d2;
var audio_open = new Audio("sounds/open.mp3");
var audio_roll = new Audio("sounds/roll.mp3");
var space_name=["start","bonus1","bonus2","bonus3","bonus4","bonus5","bonus6","bonus7","bonus8","bonus9","warp1","warp2","blue_p","orange_p","death","end"];
var used_space=["0 0","0 0","0 0","0 0","0 0","0 0","0 0","0 0","0 0","0 0","0 0","0 0","0 0","0 0","0 0","90 90"];
var faces=["images/0.png","images/1.png","images/2.png","images/3.png","images/4.png","images/5.png","images/6.png"];
var coor=["10 10", "20 10", "30 10", "40 10", "50 10", "60 10", "70 10", "80 10", "90 10", "90 20",
 "80 20", "70 20", "60 20", "50 20", "40 20", "30 20", "20 20", "10 20", "10 30", "20 30", "30 30", "40 30", "50 30", "60 30", "70 30", "80 30", "90 30", "90 40", "80 40", "70 40", "60 40", "50 40", "40 40", "30 40", "20 40", "10 40", "10 50", "20 50", "30 50", "40 50", "50 50", "60 50", "70 50", "80 50", "90 50", "90 60", "80 60", "70 60", "60 60", "50 60", "40 60", "30 60", "20 60", "10 60", "10 70", "20 70", "30 70", "40 70", "50 70", "60 70", "70 70", "80 70", "90 70", "90 80", "80 80", "70 80", "60 80", "50 80", "40 80", "30 80", "20 80", "10 80", "10 90", "20 90", "30 90", "40 90", "50 90", "60 90", "70 90", "80 90", "90 90"];
var pos_start,pos_p1,pos_p2,pos_b1,pos_b2,pos_b3,pos_b4,pos_b5,pos_b6,pos_b7,pos_b8,pos_b9,pos_warp1,pos_warp2,pos_blue,pos_orange,pos_death;
var turn;
var p1_button_rolldice=document.getElementById("p1_button_rolldice");
var p2_button_rolldice=document.getElementById("p2_button_rolldice");

function reset(){
pos_start=0;
used_space=Object.assign([],used_space,{[0]:coor[pos_start]});

pos_p1=0;player1.setAttribute("transform", "translate("+coor[pos_p1]+")");
pos_p2=0;player2.setAttribute("transform", "translate("+coor[pos_p2]+")");

pos_b1=Math.round(Math.random()*7)+1;
bonus1.setAttribute("transform", "translate("+coor[pos_b1]+")");
used_space=Object.assign([],used_space,{[1]:coor[pos_b1]});

pos_b2=Math.round(Math.random()*8)+9;
bonus2.setAttribute("transform", "translate("+coor[pos_b2]+")");
used_space=Object.assign([],used_space,{[2]:coor[pos_b2]});

pos_b3=Math.round(Math.random()*8)+18;
bonus3.setAttribute("transform", "translate("+coor[pos_b3]+")");
used_space=Object.assign([],used_space,{[3]:coor[pos_b3]});

pos_b4=Math.round(Math.random()*8)+27;
bonus4.setAttribute("transform", "translate("+coor[pos_b4]+")");
used_space=Object.assign([],used_space,{[4]:coor[pos_b4]});

pos_b5=Math.round(Math.random()*8)+36;
while(pos_b5==40){pos_b5=Math.round(Math.random()*8)+36;}
bonus5.setAttribute("transform", "translate("+coor[pos_b5]+")");
used_space=Object.assign([],used_space,{[5]:coor[pos_b5]});

pos_b6=Math.round(Math.random()*8)+45;
bonus6.setAttribute("transform", "translate("+coor[pos_b6]+")");
used_space=Object.assign([],used_space,{[6]:coor[pos_b6]});

pos_b7=Math.round(Math.random()*8)+54;
bonus7.setAttribute("transform", "translate("+coor[pos_b7]+")");
used_space=Object.assign([],used_space,{[7]:coor[pos_b7]});

pos_b8=Math.round(Math.random()*8)+63;
bonus8.setAttribute("transform", "translate("+coor[pos_b8]+")");
used_space=Object.assign([],used_space,{[8]:coor[pos_b8]});

pos_b9=Math.round(Math.random()*6)+72;
bonus9.setAttribute("transform", "translate("+coor[pos_b9]+")");
used_space=Object.assign([],used_space,{[9]:coor[pos_b9]});

pos_warp1=40;warp1.setAttribute("transform", "translate("+coor[pos_warp1]+")");
used_space=Object.assign([],used_space,{[10]:coor[pos_warp1]});

pos_warp2=79;warp2.setAttribute("transform", "translate("+coor[pos_warp2]+")");
used_space=Object.assign([],used_space,{[11]:coor[pos_warp2]});

pos_blue=Math.round(Math.random()*38)+1;
while(used_space.includes(coor[pos_blue])==true){pos_blue=Math.round(Math.random()*38)+1;}
blue_p.setAttribute("transform", "translate("+coor[pos_blue]+")");
used_space=Object.assign([],used_space,{[12]:coor[pos_blue]});

pos_orange=Math.round(Math.random()*38)+41;
while(used_space.includes(coor[pos_orange])==true){pos_orange=Math.round(Math.random()*38)+41;}
orange_p.setAttribute("transform", "translate("+coor[pos_orange]+")");
used_space=Object.assign([],used_space,{[13]:coor[pos_orange]});

pos_death=Math.round(Math.random()*(coor.length-1));
while(used_space.includes(coor[pos_death])==true){pos_death=Math.round(Math.random()*(coor.length-1));}
death.setAttribute("transform", "translate("+coor[pos_death]+")");
used_space=Object.assign([],used_space,{[14]:coor[pos_death]});
}
reset();
reset_button.addEventListener("click",reset);

function open(){
gate.removeEventListener("click",open);
audio_open.play();
left_door.setAttribute("transform", "translate(-50 0)");
right_door.setAttribute("transform", "translate(50 0)");
title.setAttribute("transform", "translate(0 -100)");
start_title.setAttribute("transform", "translate(0 30)");
turn="p1";
start_turn();
}
gate.addEventListener("click",open);


function showCoords(event){
mx=(Math.round(((event.clientX-rect_left)/5)/10)*10);
if(mx<10){mx=10;}
if(mx>90){mx=90;}
my=(Math.round(((event.clientY-rect_top)/5)/10)*10);
if(my<10){my=10;}
if(my>90){my=90;}
selector.setAttribute("transform", "translate("+mx+" "+my+")");
}
svg1.addEventListener("mousemove", event => {
showCoords(event);
});

function rollDice(){
if(turn=="p1"){
	audio_roll.play();
	p1d1=Math.round(Math.random()*5)+1;
	p1d2=Math.round(Math.random()*5)+1;
	img_p1d1.setAttribute("src",faces[p1d1]);
	img_p1d2.setAttribute("src",faces[p1d2]);
}else if(turn=="p2"){
	audio_roll.play();
	p2d1=Math.round(Math.random()*5)+1;
	p2d2=Math.round(Math.random()*5)+1;
	img_p2d1.setAttribute("src",faces[p2d1]);
	img_p2d2.setAttribute("src",faces[p2d2]);
}else{
	img_p1d1.setAttribute("src",faces[0]);
	img_p1d2.setAttribute("src",faces[0]);
	img_p2d1.setAttribute("src",faces[0]);
	img_p2d2.setAttribute("src",faces[0]);
}
}

function start_turn(){
	if(turn=="p1"){
		message.innerHTML=p1_name.innerHTML+"'s turn";
		p1_button_rolldice.style.opacity="1";
		p2_button_rolldice.style.opacity="0.4";
		p1_button_rolldice.addEventListener("click",p1play);
		p2_button_rolldice.removeEventListener("click",p2play);
	}else if(turn=="p2"){
		message.innerHTML=p2_name.innerHTML+"'s turn";
		p1_button_rolldice.style.opacity="0.4";
		p2_button_rolldice.style.opacity="1";
		p1_button_rolldice.removeEventListener("click",p1play);
		p2_button_rolldice.addEventListener("click",p2play);
	}else{
		p1_button_rolldice.style.opacity="0.4";
		p2_button_rolldice.style.opacity="0.4";
		p1_button_rolldice.removeEventListener("click",p1play);
		p2_button_rolldice.removeEventListener("click",p2play);
		img_p1d1.setAttribute("src",faces[0]);
		img_p1d2.setAttribute("src",faces[0]);
		img_p2d1.setAttribute("src",faces[0]);
		img_p2d2.setAttribute("src",faces[0]);
	}
}

function p1play(){
	rollDice();
	img_p2d1.setAttribute("src",faces[0]);
	img_p2d2.setAttribute("src",faces[0]);
	turn="p2";
	start_turn();
}
function p2play(){
	rollDice();
	img_p1d1.setAttribute("src",faces[0]);
	img_p1d2.setAttribute("src",faces[0]);
	turn="p1";
	start_turn();
}