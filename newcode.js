var btn1 = {
    x: 100,
    y: 1   vcx00,
    width: 150,
    height: 50
    };

    var btn2 = {
    x: 100,
    y: 200,
    width: 150,
    height: 50
    };
    var drawButton = function(btn, btntext) {
    background(255, 255, 255);
    fill(0, 234, 255);
    rect(btn.x, btn.y, btn.width, btn.height, 5);
    fill(0, 0, 0);
    textSize(19);
    textAlign(LEFT, TOP);
    text(btntext, btn.x+10, btn.y+btn.height/4);
    };
    var currentScene;
	//intro scenes
	
	var name = document.getElementById("name")
	
	var drawScene1 = function() {
    background(173, 239, 255);
    fill(7, 14, 145);
    image(getImage("creatures/BabyWinston"), width/2, height/2);
	drawButton(btn1, "Next");
    currentScene = 1;
    
	drawScene1();
	
    var drawScene2 = function() {
    background(173, 239, 255);
    fill(7, 14, 145);
    text("It's a special day today. What day is it today?", 10, 100);
    image(getImage("creatures/BabyWinston"), width/2, height/2);
    currentScene = 2;
    drawButton(btn1, "It's my birthday!");
   
    };
	
	var drawScene3 = function() {
    background(173, 239, 255);
    fill(7, 14, 145);
    text("Right, it's your birthday", 10, 100);
    image(getImage("creatures/BabyWinston"), width/2, height/2);
    currentScene = 3;
    drawButton(btn1, "Next");
    };
	
	
	var drawScene4 = function() {
    background(173, 239, 255);
    fill(7, 14, 145);
    text("Today, as you have come of age you can finally inherit the kingdom", 10, 100);
    image(getImage("creatures/BabyWinston"), width/2, height/2);
    currentScene = 4;
    drawButton(btn1, "Next");
	
	var drawScene5 = function() {
    background(173, 239, 255);
    fill(7, 14, 145);
    text("You walk to the temple where you and all your ancestors have always been crowned", 10, 100);
    image(getImage("creatures/BabyWinston"), width/2, height/2);
    currentScene = 5;
    drawButton(btn1, "Next");
	
	var drawScene6 = function() {
    background(173, 239, 255);
    fill(7, 14, 145);
    text("The high priest of the kingdom gingerly holds out the crown. You feel that something is wrong. What will you do?", 10, 100);
    image(getImage("creatures/BabyWinston"), width/2, height/2);
    currentScene = 6;
    drawButton(btn1, "Take the crown");
    drawButton(btn2, "Don't take the crown");
	
	//didn't take crown
	var drawScene7 = function() {
    background(173, 239, 255);
    fill(7, 14, 145);
    text("You pause. You never wanted to rule anyway. You always wanted to be...", 10, 100);
    image(getImage("creatures/BabyWinston"), width/2, height/2);
    currentScene = 7;
    drawButton(btn1, "Next");
    
	var drawScene8 = function() {
    background(173, 239, 255);
    fill(7, 14, 145);
    text("A baker", 10, 100);
    image(getImage("creatures/BabyWinston"), width/2, height/2);
    currentScene = 8;
    drawButton(btn1, "Next");
	
	var drawScene9 = function() {
    background(173, 239, 255);
    fill(7, 14, 145);
    text("You ran out of the palace", 10, 100);
    image(getImage("creatures/BabyWinston"), width/2, height/2);
    currentScene = 9;
    drawButton(btn1, "Ask a peasant how to achieve your dreams");
    drawButton(btn2, "Go into the dark and forbidding forest");
	
	//spoke to peasant
	var drawScene10 = function() {
    background(173, 239, 255);
    fill(7, 14, 145);
    text("The peasant explains that living in a feudal society he has no advice to offer on self-actualization. He suggests going into the dark and forbidding forest.", 10, 100);
    image(getImage("creatures/BabyWinston"), width/2, height/2);
    currentScene = 10;
    drawButton(btn1, "Go into the dark and forbidding forest");
   //in forest
	var drawScene11 = function() {
    background(173, 239, 255);
    fill(7, 14, 145);
    text("It seems you judged the forest too readily. The forest is actually quite bright and full of life.", 10, 100);
    image(getImage("creatures/BabyWinston"), width/2, height/2);
    currentScene = 11;
    drawButton(btn1, "Next");
	//forest hermit
	var drawScene12 = function() {
    background(173, 239, 255);
    fill(7, 14, 145);
    text("Suddenly, a forest hermit appears", 10, 100);
    image(getImage("creatures/BabyWinston"), width/2, height/2);
    currentScene = 12;
    drawButton(btn1, "Ask the forest hermit how to become a baker");
	
    var drawScene13 = function() {
    background(173, 239, 255);
    fill(7, 14, 145);
    text("The forest hermit is silent. You can't tell if it's a meditative silence or if he fell asleep, so you turn to leave. Then he says 'why do you want to be a baker?' ", 10, 100);
    image(getImage("creatures/BabyWinston"), width/2, height/2);
    currentScene = 13;
    drawButton(btn1, "Think");

	var drawScene14 = function() {
    background(173, 239, 255);
    fill(7, 14, 145);
    text("I wanted to be something else than king, you say", 10, 100);
    image(getImage("creatures/BabyWinston"), width/2, height/2);
    currentScene = 14;
    drawButton(btn1, "Next");
 
	var drawScene15 = function() {
    background(173, 239, 255);
    fill(7, 14, 145);
    text("Why didn't you want to be king?", 10, 100);
    image(getImage("creatures/BabyWinston"), width/2, height/2);
    currentScene = 15;
    drawButton(btn1, "It's too much responsibility");
    drawButton(btn2, "I'm not ready to be king");	
	
    //not ready
	var drawScene16 = function() {
    background(173, 239, 255);
    fill(7, 14, 145);
    text("You are ready, the hermit says. Kings who rule benevolently and wisely are not those who pretend to have all the answers,	but those who constantly ponder their decisions and consult their subjects", 10, 100);
    image(getImage("creatures/BabyWinston"), width/2, height/2);
    currentScene = 16;
    drawButton(btn1, "Return");
    drawButton(btn2, "Meditate more in the forest");
	
	//too much responsibility
	var drawScene17 = function() {
    background(173, 239, 255);
    fill(7, 14, 145);
    text("Why didn't you want to be king?", 10, 100);
    image(getImage("creatures/BabyWinston"), width/2, height/2);
    currentScene = 17;
    drawButton(btn1, "Return");
    drawButton(btn2, "Meditate more in the forest");	
	
	//meditate more 
	var drawScene18 = function() {
    background(173, 239, 255);
    fill(7, 14, 145);
    text("You meditate more in the forest, seeking more knowledge, but no more is come. Perhaps complete knowledge is unattainable", 10, 100);
    image(getImage("creatures/BabyWinston"), width/2, height/2);
    currentScene = 18;
    drawButton(btn1, "Return to society");

	
	//return
	var drawScene19 = function() {
    background(173, 239, 255);
    fill(7, 14, 145);
    text("You emerge from the forest, and immediately notice that the village you passed earlier is now abandoned, with only one light still on in a dilapidated hut. ", 10, 100);
    image(getImage("creatures/BabyWinston"), width/2, height/2);
    currentScene = 19;
    drawButton(btn1, "Speak to the person in the hut");
 
	//return good, there is drought
	var drawScene20 = function() {
    background(173, 239, 255);
    fill(7, 14, 145);
    text("The person in the hut looks like the peasant you spoke to earlier, but he looks older and gaunt", 10, 100);
    image(getImage("creatures/BabyWinston"), width/2, height/2);
    currentScene = 20;
    drawButton(btn1, "It's too much responsibility");
    drawButton(btn2, "I'm not ready to be king");	
	
	//return good there is drought 2
	var drawScene21 = function() {
    background(173, 239, 255);
    fill(7, 14, 145);
    text("Ever since the prince disappeared into the forest ten years ago, there has been civil war.", 10, 100);
    image(getImage("creatures/BabyWinston"), width/2, height/2);
    currentScene = 21;
    drawButton(btn1, "Return to the capital");
	
	//return good there is drought 3
	var drawScene22 = function() {
    background(173, 239, 255);
    fill(7, 14, 145);
    text("Why didn't you want to be king?", 10, 100);
    image(getImage("creatures/BabyWinston"), width/2, height/2);
    currentScene = 22;
    drawButton(btn1, "Order the armies to lay down their arms");
    drawButton(btn2, "I'm not ready to be king");	
	
	//return good there is drought 4
	var drawScene23 = function() {
    background(173, 239, 255);
    fill(7, 14, 145);
    text("Lay down your arms rebels. I am the lost prince of old, and I have come to restore order and peace", 10, 100);
    image(getImage("creatures/BabyWinston"), width/2, height/2);
    currentScene = 23;
    drawButton(btn1, "It's too much responsibility");
	
	//return good ending
	var drawScene24 = function() {
    background(173, 239, 255);
    fill(7, 14, 145);
    text("Stunned, the rebels all lay down their arms. What will you do?", 10, 100);
    image(getImage("creatures/BabyWinston"), width/2, height/2);
    currentScene = 24;
    drawButton(btn1, "Offer the rebels clemency");
    drawButton(btn2, "Execute the rebels");	
	
	var drawScene25 = function() {
    background(173, 239, 255);
    fill(7, 14, 145);
    text("...And so king " + name + " reigned for 100 years. He reigned wisely, and mercifully. What happened after he passed? Why, that's another story.", 10, 100);
    image(getImage("creatures/BabyWinston"), width/2, height/2);
    currentScene = 25;
    drawButton(btn1, "End");
	
	var drawScene26 = function() {
    background(173, 239, 255);
    fill(7, 14, 145);
    text("...And so king " + name + " reigned for 100 years. He reigned wisely, but judiciously. What happened after he passed? Why, that's another story.", 10, 100);
    image(getImage("creatures/BabyWinston"), width/2, height/2);
    currentScene = 26;
    drawButton(btn1, "End");
	
	//return bad 
	var drawScene27 = function() {
    background(173, 239, 255);
    fill(7, 14, 145);
    text("Stunned, the rebels all lay down their arms. What will you do?", 10, 100);
    image(getImage("creatures/BabyWinston"), width/2, height/2);
    currentScene = 27;
    drawButton(btn2, "Execute the rebels");	
	
	//return bad 2
	var drawScene27 = function() {
    background(173, 239, 255);
    fill(7, 14, 145);
    text("...And so king " + name + " reigned for 100 years. His reign was marked by hedonism and excess, and it was a dark age for the entire kingdom. What happened after he passed? Why, that's another story.", 10, 100);
    image(getImage("creatures/BabyWinston"), width/2, height/2);
    currentScene = 27;
    drawButton(btn1, "End");
	
	//stolen crown 14 scenes
	var drawScene28 = function() {
    background(173, 239, 255);
    fill(7, 14, 145);
    text("You take the crown, and realize what's wrong. In your hands is the crown of a prince, not that of a full fledged monarch", 10, 100);
    image(getImage("creatures/BabyWinston"), width/2, height/2);
    currentScene = 28;
    drawButton(btn1, "Demand an explanation");
	
	var drawScene29 = function() {
    background(173, 239, 255);
    fill(7, 14, 145);
    text("The high priest coughs. The regent, your uncle, thought that since the kingdom has gotten used to his reign, it might be better if he remained king", 10, 100);
    image(getImage("creatures/BabyWinston"), width/2, height/2);
    currentScene = 29;
    drawButton(btn1, "Protest");
    drawButton(btn2, "Accept the decision");	
	
	var drawScene30 = function() {
    background(173, 239, 255);
    fill(7, 14, 145);
    text("You open your mouth to protest, but the high priest says 'The Royal Guards, the Army, and the other members of the court all support this decision as well'", 10, 100);
    image(getImage("creatures/BabyWinston"), width/2, height/2);
    currentScene = 30;
    drawButton(btn1, "Accept the decision");
   
	var drawScene31 = function() {
    background(173, 239, 255);
    fill(7, 14, 145);
    text("You go back to your room. ", 10, 100);
    image(getImage("creatures/BabyWinston"), width/2, height/2);
    currentScene = 31;
    drawButton(btn1, "Leave the palace to secure support");
	
	var drawScene32 = function() {
    background(173, 239, 255);
    fill(7, 14, 145);
    text("You leave the palace and go into town to seek supporters", 10, 100);
    image(getImage("creatures/BabyWinston"), width/2, height/2);
    currentScene = 32;
    drawButton(btn1, "Ask random peasant for support");	
	
	var drawScene33 = function() {
    background(173, 239, 255);
    fill(7, 14, 145);
    text("I am the rightful monarch of this land, but the position has been usurped by my uncle. You, as my loyal subject, should help me regain my rightful place", 10, 100);
    image(getImage("creatures/BabyWinston"), width/2, height/2);
    currentScene = 33;
    drawButton(btn1, "Next");	

	var drawScene34 = function() {
    background(173, 239, 255);
    fill(7, 14, 145);
    text("The peasant stares blankly at you. 'I don't know if what you're saying is true, but even so we don't concern ourselves with what happens in that palace. Kings come and go, and all they do is take taxes. What is the difference to me?", 10, 100);
    image(getImage("creatures/BabyWinston"), width/2, height/2);
    currentScene = 11;
    drawButton(btn1, "Next");	
	
	var drawScene35 = function() {
    background(173, 239, 255);
    fill(7, 14, 145);
    text("You don't have a good answer. You wander around the town, asking others for support, and they all ask the same question. Then you see it.", 10, 100);
    image(getImage("creatures/BabyWinston"), width/2, height/2);
    currentScene = 35;
    drawButton(btn1, "Next");	
	
	var drawScene35 = function() {
    background(173, 239, 255);
    fill(7, 14, 145);
    text("A stand in the market, selling magic potions", 10, 100);
    image(getImage("creatures/BabyWinston"), width/2, height/2);
    currentScene = 35;
    drawButton(btn1, "Next");	
	
	var drawScene36 = function() {
    background(173, 239, 255);
    fill(7, 14, 145);
    text("Hello, do you have a potion that could make me king? You ask. The woman laughs. 'We sell simple things here. Love potions. If you seek consultation on your destiny, go find the mage in the forest who makes the potions for me.'", 10, 100);
    image(getImage("creatures/BabyWinston"), width/2, height/2);
    currentScene = 37;
    drawButton(btn1, "Go to the forest");
	
	var drawScene38 = function() {
    background(173, 239, 255);
    fill(7, 14, 145);
    text("You arrive in the forest. It is bright and full of life. It occurs to you that you weren't told where in the forest to find a destiny determining mage.", 10, 100);
    image(getImage("creatures/BabyWinston"), width/2, height/2);
    currentScene = 38;
    drawButton(btn1, "Loudly ask the forest where the mage is");
    drawButton(btn2, "Wander around and look for occult symbols");
	
	var drawScene39 = function() {
    background(173, 239, 255);
    fill(7, 14, 145);
    text("You found a four leaf clover, a horseshoe, and an upside down cross all in a neat path leading to a hollowed out tree stump", 10, 100);
    image(getImage("creatures/BabyWinston"), width/2, height/2);
    currentScene = 39;
    drawButton(btn1, "Enter the stump");
	
	var drawScene40 = function() {
    background(173, 239, 255);
    fill(7, 14, 145);
    text("You walk in, and immediately you see an old woman sitting in the center, wearing all white", 10, 100);
    image(getImage("creatures/BabyWinston"), width/2, height/2);
    currentScene = 40;
    drawButton(btn1, "Ask if she's the mage");
	
	var drawScene41 = function() {
    background(173, 239, 255);
    fill(7, 14, 145);
    text("She ignores that question. 'You're here to ask about becoming king, aren't you' she says", 10, 100);
    image(getImage("creatures/BabyWinston"), width/2, height/2);
    currentScene = 41;
    drawButton(btn1, "Nod hestitantly");	
	
	var drawScene42 = function() {
    background(173, 239, 255);
    fill(7, 14, 145);
    text("If you want to become king, you need to rally the people to support you. The people don't presently support you? Then change that.", 10, 100);
    image(getImage("creatures/BabyWinston"), width/2, height/2);
    currentScene = 42;
    drawButton(btn1, "Loudly ask the forest where the mage is");

	var drawScene43 = function() {
    background(173, 239, 255);
    fill(7, 14, 145);
    text("The most powerful rulers command obedience through one of two ways. Fear, or love. I can give you the power to be the most fearsome being in the world, or to be loved like no other. Which do you choose?", 10, 100);
    image(getImage("creatures/BabyWinston"), width/2, height/2);
    currentScene = 43;
    drawButton(btn1, "Rule through fear");
    drawButton(btn2, "Rule through love");
	
	var drawScene44 = function() {
    background(173, 239, 255);
    fill(7, 14, 145);
    text("Interesting. In exchange for that power, you will give, or rather have given me, ten years.", 10, 100);
    image(getImage("creatures/BabyWinston"), width/2, height/2);
    currentScene = 44;
    drawButton(btn1, "What?");
	
	var drawScene45 = function() {
    background(173, 239, 255);
    fill(7, 14, 145);
    text("This conversation took ten years. That's the price you paid. Now go", 10, 100);
    image(getImage("creatures/BabyWinston"), width/2, height/2);
    currentScene = 45;
    drawButton(btn1, "Leave the forest");
    
	//fear path
	var drawScene46 = function() {
    background(173, 239, 255);
    fill(7, 14, 145);
    text("You leave the forest and go back to town. Arriving at the town square, you decide it is time to use the powers granted to you by the mage.", 10, 100);
    image(getImage("creatures/BabyWinston"), width/2, height/2);
    currentScene = 46;
    drawButton(btn1, "Rule through fear");
    
	var drawScene47 = function() {
    background(173, 239, 255);
    fill(7, 14, 145);
    text("My loyal subjects, I am none other than the prince (input), lost for ten years after being wrongfully displaced from my throne. Now I am returned to seize my birthright, and I will punish all who do not join me.", 10, 100);
    image(getImage("creatures/BabyWinston"), width/2, height/2);
    currentScene = 47;
    drawButton(btn1, "Next");
    
	
	var drawScene48 = function() {
    background(173, 239, 255);
    fill(7, 14, 145);
    text("The peasants, all gripped with fear, take up weapons and march upon the castle with you. The guards sent to intercept you melt away until you have captured your uncle. What will you do with him?", 10, 100);
    image(getImage("creatures/BabyWinston"), width/2, height/2);
    currentScene = 48;
    drawButton(btn1, "Rule through fear");
    
	var drawScene49 = function() {
    background(173, 239, 255);
    fill(7, 14, 145);
    text("And so " + name + " had his uncle executed, and ruled for another 100 years. His reign was marked by fear and oppression, and it was a dark age for the kingdom. What happened after? Why, that's another story.", 10, 100);
    image(getImage("creatures/BabyWinston"), width/2, height/2);
    currentScene = 49;
    drawButton(btn1, "End");
    
	//rule through love
	var drawScene50 = function() {
    background(173, 239, 255);
    fill(7, 14, 145);
    text("You leave the forest and go back to town. Arriving at the town square, you decide it is time to use the powers granted to you by the mage.", 10, 100);
    image(getImage("creatures/BabyWinston"), width/2, height/2);
    currentScene = 50;
    drawButton(btn1, "Rule through fear");
    
	var drawScene51 = function() {
    background(173, 239, 255);
    fill(7, 14, 145);
    text("My loyal subjects, I am none other than the prince " + name ", lost for ten years after being wrongfully displaced from my throne. Now I am returned to seize my birthright, and I promise once installed to reduce taxes and provide for you.", 10, 100);
    image(getImage("creatures/BabyWinston"), width/2, height/2);
    currentScene = 51;
    drawButton(btn1, "Next");
    
	
	var drawScene52 = function() {
    background(173, 239, 255);
    fill(7, 14, 145);
    text("The peasants, all inspired to support you, take up weapons and march upon the castle with you. The guards sent to intercept your force melt away until you have captured your uncle. What will you do with him?", 10, 100);
    image(getImage("creatures/BabyWinston"), width/2, height/2);
    currentScene = 52;
    drawButton(btn1, "Rule through love");
    
	var drawScene53 = function() {
    background(173, 239, 255);
    fill(7, 14, 145);
    text("And so " + name " pardoned his uncle, and ruled for another 100 years. His reign was marked by peace, and it was a golden age for the kingdom. What happened after? Why, that's another story.", 10, 100);
    image(getImage("creatures/BabyWinston"), width/2, height/2);
    currentScene = 53;
    drawButton(btn1, "End");
	
	var drawScene54 = function() {
    background(173, 239, 255);
    fill(7, 14, 145);
    text("Interesting. In exchange for that power, you will give, or rather have given me, ten years.", 10, 100);
    image(getImage("creatures/BabyWinston"), width/2, height/2);
    currentScene = 54;
    drawButton(btn1, "What?");
	
	var drawScene55 = function() {
    background(173, 239, 255);
    fill(7, 14, 145);
    text("This conversation took ten years. That's the price you paid. Now go", 10, 100);
    image(getImage("creatures/BabyWinston"), width/2, height/2);
    currentScene = 55;
    drawButton(btn1, "Leave the forest");
    
	
    var isMouseInside = function(btn) {
    return (mouseX >= btn.x & &
            mouseX <= (btn.x+btn.width) &&
            mouseY >= btn.y &&
            mouseY <= (btn.y+btn.height));

	mouseClicked = function() {
    if (currentScene === 1) {
        drawScene2();
    } else if (currentScene === 2) {
        drawScene3();
    } else if (currentScene === 3) {
        drawScene4();
    }  else if (currentScene === 4) {
        drawScene5();
    } else if (currentScene === 5) {
        drawScene6();
    }
	};
	
	if currentScene == 6 {
       mouseClicked = function() {
		if (isMouseInside(btn1))     {
		drawScene28();
	   } else if (isMouseInside(btn2))     {
		drawScene7();
		}
        }
        };
	
	mouseClicked = function() {
    if (currentScene === 7) {
        drawScene8();
    } else if (currentScene === 8) {
        drawScene9();
    } else if (currentScene === ) {
        drawScene4();
    } 
	};
	
	if currentScene == 9 {
       mouseClicked = function() {
		if (isMouseInside(btn1))     {
		drawScene10();
	   } else if (isMouseInside(btn2))     {
		drawScene11();
		}
        }
        };
	
	mouseClicked = function() {
    if (currentScene === 10) {
        drawScene11();
    } else if (currentScene === 11) {
        drawScene12();
    } else if (currentScene === 12) {
        drawScene13();
    }  else if (currentScene === 13) {
        drawScene14();
    } else if (currentScene === 14) {
        drawScene15();
    }
    drawButton();
	};

	if currentScene == 15 {
       mouseClicked = function() {
		if (isMouseInside(btn1))     {
		drawScene17();
	   } else if (isMouseInside(btn2))     {
		drawScene16();
		}
        }
        };
		
		if currentScene == 16 || currentScene == 17 {
       mouseClicked = function() {
		if (isMouseInside(btn1))     {
		drawScene19();
	   } else if (isMouseInside(btn2))     {
		drawScene18();
		}
        }
        };
		
		mouseClicked = function() {
    if (currentScene === 18) {
        drawScene19();
    } else if (currentScene === 19) {
        drawScene20();
    } else if (currentScene === 20) {
        drawScene21();
    }  else if (currentScene === 21) {
        drawScene22();
    } else if (currentScene === 22) {
        drawScene23();
    }
    drawButton();
	};
	
	if currentScene == 23 {
			mouseClicked = function() {
			if (isMouseInside(btn1)) && setScene ==1      {
			drawScene27();
			} 	else if (isMouseInside(btn1))     {
		drawScene24();
		}
        }
        };
		
		if currentScene == 24 {
       mouseClicked = function() {
		if (isMouseInside(btn1))     {
		drawScene25();
	   } else if (isMouseInside(btn2))     {
		drawScene26();
		}
        }
        };
		
		mouseClicked = function() {
    if (currentScene === 28) {
        drawScene29();
    } 
		
		if currentScene == 29 {
       mouseClicked = function() {
		if (isMouseInside(btn1))     {
		drawScene30();
	   } else if (isMouseInside(btn2))     {
		drawScene31();
		}
        }
        };
		
		mouseClicked = function() {
    if (currentScene === 31) {
        drawScene32();
    } else if (currentScene === 32) {
        drawScene33();
    } else if (currentScene === 33) {
        drawScene34();
    }  else if (currentScene === 34) {
        drawScene35();
    } else if (currentScene === 35) {
        drawScene36();
    } else if (currentScene === 36) {
        drawScene38();
    } else if (currentScene === 38) {
        drawScene39();
    }  else if (currentScene === 39) {
        drawScene40();
    } else if (currentScene === 40) {
        drawScene41();
    } else if (currentScene === 41) {
        drawScene42();
    } else if (currentScene === 42) {
        drawScene43();
	};
		
		if currentScene == 43 {
       mouseClicked = function() {
		if (isMouseInside(btn1))     {
		drawScene44();
	   } else if (isMouseInside(btn2))     {
		drawScene54();
		}
        }
        };
	
	mouseClicked = function() {
    if (currentScene === 54) {
        drawScene55();
    } else if (currentScene === 55 {
        drawScene50();
    } else if (currentScene === 50) {
        drawScene51();
    }  else if (currentScene === 51) {
        drawScene52();
    } else if (currentScene === 52 {
        drawScene53();
    } else if (currentScene === 44) {
        drawScene45();
    } else if (currentScene === 45) {
        drawScene46();
    }  else if (currentScene === 46) {
        drawScene47();
    } else if (currentScene === 47 {
        drawScene48();
    } else if (currentScene === 48) {
        drawScene49();
	};