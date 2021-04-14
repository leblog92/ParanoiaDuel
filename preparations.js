function rollDice(){
if(turn=="p1"){
	audio_roll.play();
	// p1d1=Math.round(Math.random()*5)+1;
	p1d1=1;
	p1d2=Math.round(Math.random()*5)+1;
	p1_money=p1_money+p1d1+p1d2;
	p1_td_money.innerHTML=p1_money;
	img_p1d1.setAttribute("src",faces[p1d1]);
	img_p1d2.setAttribute("src",faces[p1d2]);
}else if(turn=="p2"){
	audio_roll.play();
	p2d1=Math.round(Math.random()*5)+1;
	p2d2=Math.round(Math.random()*5)+1;
	p2_money=p2_money+p2d1+p2d2;
	p2_td_money.innerHTML=p2_money;
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
		message.innerHTML=p1_name.innerHTML+"'s turn. Push 'Roll Dice' button.";
		p1_button_rolldice.style.opacity="1";
		p2_button_rolldice.style.opacity="0.4";
		p1_button_rolldice.addEventListener("click",p1play);
		p2_button_rolldice.removeEventListener("click",p2play);
	}else if(turn=="p2"){
		message.innerHTML=p2_name.innerHTML+"'s turn. Push 'Roll Dice' button.";
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
	if(p1d1==1||p1d2==1){movedeath();
	}else{
	p2d1==0;p2d2==0;
	img_p2d1.setAttribute("src",faces[0]);
	img_p2d2.setAttribute("src",faces[0]);
	turn="p2";
	start_turn();
	}
}
function p2play(){
	rollDice();
	if(p1d1==1||p1d2==1){movedeath();}
	p1d1==0;p1d2==0;
	img_p1d1.setAttribute("src",faces[0]);
	img_p1d2.setAttribute("src",faces[0]);
	turn="p1";
	start_turn();
}
function movedeath(){
	audio_death.play();
	if(pos_p1>pos_p2){pos_target=pos_p1;
	}else if(pos_p2>pos_p1){pos_target=pos_p2;
	}else{pos_target=pos_p1;}
	dc0.setAttribute("transform", "translate("+coor[pos_target]+")");
	dc1.setAttribute("transform", "translate("+coor[pos_target+1]+")");
	dc2.setAttribute("transform", "translate("+coor[pos_target+2]+")");
	dc3.setAttribute("transform", "translate("+coor[pos_target+3]+")");
	dc4.setAttribute("transform", "translate("+coor[pos_target+4]+")");
	dc5.setAttribute("transform", "translate("+coor[pos_target+5]+")");
	dc6.setAttribute("transform", "translate("+coor[pos_target+6]+")");	
	pos_death=pos_target+Math.round(Math.random()*6);
	while(used_space.includes(coor[pos_death])==true){pos_death=pos_target+Math.round(Math.random()*6);}
	used_space=Object.assign([],used_space,{[14]:coor[pos_death]});
	skull.setAttribute("font-size", "10px");
	death.setAttribute("transform", "translate("+coor[pos_death]+")");
	setTimeout(function() {
        skull.setAttribute("font-size", "4px");
    },600);
	if(turn=="p1"){
		turn="p2";
		start_turn();
	}else if(turn=="p2"){
		turn="p1";
		start_turn();
	}
}