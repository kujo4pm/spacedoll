var instructions_1a_text = function(){
	var instructions = ["<div align=center>Welcome to this HIT!<br><br>Please read all following instructions very carefully.<br><br>It takes some time, but otherwise you will not know what to do.</div>",
	"<div align=center>In this HIT, you will be taking a spaceship from your base planet<br> to look for space treasure on two other planets:<br><br><img style='margin:0px auto;display:block;height:200px' src='img/example_planets.png'/></div>", 
	"<div align=center>Each planet has one alien on it and each alien has its own space treasure mine.<br><br><img style='margin:0px auto;display:block;height:100px' src='img/example_aliens.png'/><br>Once you arrive to each planet, you will ask the alien for space treasure from its mine.</div>",
	"<div align=justify>When you ask the alien, you will find out whether you got space treasure, which looks like this:<br><br><img style='margin:0px auto;display:block' src='img/treasure_1.png'/><br>Sometimes, however, the alien's mine will dig up 'antimatter'. Antimatter is bad, because each piece will destroy a piece of space treasure, reducing the total amount of treasure that you have. Antimatter looks like this:<br><br><img style='margin:0px auto;display:block' src='img/antimatter_1.png'/><br>Sometimes, the alien will not bring up any treasure or antimatter and you'll see an empty circle:<br><br><img style='margin:0px auto;display:block' src='img/noreward.png'/></div>",
	"<div align=justify>If an alien has a good mine, it means it can easily dig up a lot of space treasure for you:<br><br><img style='margin:0px auto;display:block' src='img/treasure_5.png'/><br>Another alien might have a bad mine that gives a lot of antimatter:<br><br><img style='margin:0px auto;display:block' src='img/antimatter_4.png'/><br>The quality of each alien's mine will lie somewhere between these two extremes and will change during the game. Aliens with a good mine might get to a part of the mine that has more antimatter, and those with lots of antimatter might find more space treasure later on.<br><br>Changes in an alien's mine will happen slowly. So, you have to focus to get as much treasure as possible by finding the alien with the best mine at each point in time.</div>",
	"<div align=justify>At the end of each trial, the pieces of space treasure or antimatter that you earned will be converted to points.<br><Br>Each piece of space treasure will be worth one point, while each piece of antimatter will lose you one,  point.<br><br>For example, if you were to get 5 pieces of treasure, you would earn 5 points, but if you were to get 3 pieces of antimatter, you would lose 3 points.</div>",
	"<div align=justify>Each time you encounter an alien on a planet, you should press the SPACE key to ask it to mine. You will then see whether you got treasure or antimatter and how much you earned. Try practicing a few times.</div>"];
	return instructions
};
var instructions_1b_text = function(){
	var instructions = ["<div align=center>You may have noticed that this alien's mine started out good, and then became less good over time. The mines of other aliens will all follow a unique pattern.<br><br>To see this, you are going to ask another alien for treasure a few times.</div>"];
	return instructions
};
var instructions_1c_text = function(){
	var instructions = ["<div align=justify>Now that you know about the treasure and antimatter, you can learn how the travel to the planets works.<br><br>On each trial, you will travel from your base planet to one of two other planets, a purple planet and a red planet:<br><br><img style='margin:0px auto;display:block;height:200px' src='img/example_planets.png'/></div>",
	"<div align=justify>On each trial, you will choose which spaceship to take. Each time, you'll be choosing between two different spaceships:</div><div align=center style='font-size:35px'><br><br><img style='height:100px' src='img/earth_stim_"+mapping[0]+".png'/> <img style='height:100px' src='img/earth_stim_"+mapping[1]+".png'/> OR <img style='height:100px' src='img/earth_stim_"+mapping[2]+".png'/> <img style='height:100px' src='img/earth_stim_"+mapping[3]+".png'/></div><div align=justify><br>Sometimes, you'll be choosing between the two spaceships on the left, and sometimes you'll be choosing between the two spaceships on the right. You can choose the left spaceship by pressing the 'F' key and the right spaceship by pressing the 'J' key. <br><br>Each spaceship will fly to one of the two planets. For each pair, one spaceship will fly to the purple planet, and the other will fly to the red planet.</div>",
	"<div align=justify>Let's practice flying to the planets! First, try to pick the spaceships that will get you to the purple planet:<br><br><img style='margin:0px auto;display:block;height:200px' src='img/purple_planet.png'/></div>"];
	return instructions
};
var instructions_1d_text = function(){
	var instructions = ["<div align=center>Very good!<br><br>Now, try to pick the spaceships that will get you to the red planet:<br><br><br><img style='margin:0px auto;display:block;height:200px' src='img/red_planet.png'/></div>"];
	return instructions
};
var instructions_1e_text = function(){
	var instructions = ["<div align=center>You now know how to fly to the planets and how the space treasure and antimatter work, so you are ready to practice them together.<br><br>Each time, you will pick a spaceship to fly to a planet and then ask the alien to mine for you.<br><br>Your goal will be to get as much treasure and as little antimatter as possible.</div>",
	"<div align=justify>Hint #1:<br>Remember which aliens have treasure. How good a mine is changes slowly, so an alien that has a lot of treasure to share now will probably be able to share a lot in the near future.<br><br>Hint #2:<br>Remember, each alien has its own mine. Just because one alien has a bad mine, does not mean another has a good mine. Also, there are no funny patterns in how much treasure or antimatter an alien shares. The aliens are not tricking you.<br><br>Hint #3:<br>The spaceship you choose is important because often the alien on one planet is better than the ones on another planet. You can find more treasure and less antimatter by finding the spaceship that takes you to the right planet.</div>",
	"<div align=justify>In the real experiment, we are only going to give you 1.5 seconds for each response (1.5 seconds for the spaceships, and 1.5 seconds for the alien). At the beginning that won't seem like very much time and you may find the task difficult. Over time, as you learn to play, you will find that 1.5 seconds is enough time to make good decisions.<br><br>Our advice is to think carefully about your strategy, but also to trust your instincts. By concentrating you can increase the number of points you win by a lot. There is an element of chance, but a lot of room for skill as well.<br><br>Now, you will do 25 practice trials. These don't count, and have no time limit in order to help you learn.</div>"];
	return instructions
};

var instructions_2_text = function(){
	if (condition == 0) {
		var instructions = ["<div align=justify>Great job! There's one more thing you need to learn before you can start the real experiment.</div>",
		"<div align=center>For every piece of space treasure you collect during this HIT you will get 1 dollar cent in bonus payment (if you get a negative score, you simply won't be given a bonus payment).<br><br>At the end of the experiment, a carrier spaceship with your treasure will first have to fly back to earth before you get your money.<br><br>The planets in this experiment are many lightyears away from earth, but fortunately there is a wormhole that it can use to arrive back on earth today. This means that you will get your bonus payment TODAY (5/20/2016).<br><br><img style='margin:0px auto;display:block;width:600px' src='img/today.png'/></div>",
		"<div align=center>Please know that we are not trying to trick you.<br><br>You will really get the bonus payment for this HIT today.</div>"];
	} else {
		var instructions = ["<div align=justify>Great job! There's one more thing you need to learn before you can start the real experiment.</div>",
		"<div align=center>For every piece of space treasure you collect during this HIT you will get 1 dollar cent in bonus payment (if you get a negative score, you simply won't be given a bonus payment).<br><br>However, at the end of the experiment, a carrier spaceship with your treasure will first have to fly back to earth before you get your money.<br><br>The planets in this experiment are many lightyears away from earth. This means that therefore you will have to wait 3 MONTHS until you get your bonus payment (8/20/2016).<br><br><img style='margin:0px auto;display:block;width:600px' src='img/3months.png'/></div>",
		"<div align=center>Please know that we are not trying to trick you.<br><br>You will really get the bonus payment for this HIT in 3 months.</div>"];	
	}
	return instructions
}

var instructions_2b_text = function(){
	if (condition == 0) {
		var instructions = ["<div align=justify>You answered that question incorrectly. Please read the following text carefully:<br><br>For every piece of space treasure you collect during this HIT you will get 1 dollar cent in bonus payment (if you get a negative score, you simply won't be given a bonus payment).<br><br>At the end of the experiment, a carrier spaceship with your treasure will first have to fly back to earth before you get your money.<br><br>The planets in this experiment are many lightyears away from earth, but fortunately there is a wormhole that it can use to arrive back on earth in one day. This means that you will get your bonus payment TODAY (5/20/2016).<br><br><img style='margin:0px auto;display:block;width:600px' src='img/today.png'/></div>",
		"<div align=center>Please know that we are not trying to trick you.<br><br>You will really get the bonus payment for this HIT today (5/20/2016).</div>"];			
	} else {
		var instructions = ["<div align=justify>You answered that question incorrectly. Please read the following text carefully:<br><br>For every piece of space treasure you collect during this HIT you will get 1 dollar cent in bonus payment (if you get a negative score, you simply won't be given a bonus payment).<br><br>However, at the end of the experiment, a carrier spaceship with your treasure will first have to fly back to earth before you get your money.<br><br>The planets in this experiment are many lightyears away from earth. This means that therefore you will have to wait 3 MONTHS until you get your bonus payment (8/20/2016).<br><br><img style='margin:0px auto;display:block;width:600px' src='img/3months.png'/></div>",
		"<div align=center>Please know that we are not trying to trick you.<br><br>You will really get the bonus payment for this HIT in 3 months (8/20/2016).</div>"];			
	}
	return instructions
}

var instructions_3_text = function(){
	if (condition == 1) {
		var instructions = ["<div align=justify>OK, you are ready to start the HIT.<br><br>In the real game, you will find new aliens with new mines on the two planets, but everything else will be the same.<br><br>Let's review everything we've learned and then begin playing.<br><br>Remember, you want to find as much space treasure and the least antimatter as you can by flying to planets and asking an alien to mine for you. How much treasure or antimatter comes out of each alien's mine changes slowly over time, so you need to concentrate and be flexible to keep track of which spaceships and aliens are good right now.</div>",
		"<div align=justify>Because the carrier spaceship has to travel all the way from the base planet to earth, you will get your bonus payment for this HIT in 3 MONTHS (8/20/2016).<br><br><img style='margin:0px auto;display:block;width:600px' src='img/3months.png'/></div>",
		"<div align=justify>The rocket ships will always be on screen for 1.5 seconds, even after you already made a decision. Because of this, you will not be able to finish the experiment faster by making your decisions more quickly. Every MTurk worker will complete the HIT in exactly the same time, so use the time you have for each decision to your advantage!<br><br>However, if you time out, you will be given a penalty of -4 points.<br><br>You will get a bonus payment of 1 dollar cent for every point you earn. On average people win about $1.00, and some have won more than $2.50.<br><br>The game lasts for 200 trials and you will have 1.5 seconds for each choice, and that takes about 20 minutes.<br><br>You will be given the opportunity for a break in the middle of the HIT.<br><br>The HIT will start after you press 'next', make sure you have your fingers on the 'F' and the 'J' keys! Good luck!</div>"];
	} else {
		var instructions = ["<div align=justify>OK, you are ready to start the HIT.<br><br>In the real game, you will find new aliens with new mines on the two planets, but everything else will be the same.<br><br>Let's review everything we've learned and then begin playing.<br><br>Remember, you want to find as much space treasure and the least antimatter as you can by flying to planets and asking an alien to mine for you. How much treasure or antimatter comes out of each alien's mine changes slowly over time, so you need to concentrate and be flexible to keep track of which spaceships and aliens are good right now.</div>",
		"<div align=justify>Because the carrier spaceship can travel from the base planet back to earth through a worm hole, you will get your bonus payment for this HIT TODAY (5/20/2016).<br><br><img style='margin:0px auto;display:block;width:600px' src='img/today.png'/></div>",
		"<div align=justify>The rocket ships will always be on screen for 1.5 seconds, even after you already made a decision. Because of this, you will not be able to finish the experiment faster by making your decisions more quickly. Every MTurk worker will complete the HIT in exactly the same time, so use the time you have for each decision to your advantage!<br><br>However, if you time out, you will be given a penalty of -4 points.<br><br>You will get a bonus payment of 1 dollar cent for every point you earn. On average people win about $1.00, and some have won more than $2.50.<br><br>The game lasts for 200 trials and you will have 1.5 seconds for each choice, and that takes about 20 minutes.<br><br>You will be given the opportunity for a break in the middle of the HIT.<br><br>The HIT will start after you press 'next', make sure you have your fingers on the 'F' and the 'J' keys! Good luck!</div>"];
	}
	return instructions
}


var generate_itc_verify_options = function(){
	if (Math.random()<0.5) {
		var options = [["3 months","today"]];
	} else {
		var options = [["today","3 months"]];
	}
	return options
}
	
var itc_final_text = function(){
	if (score < 0) {
		var instructions = ["<div align=center>You did not earn any bonus payment in this HIT.</div>"];		
	} else {
	if (condition == 0) {
		var instructions = ["<div align=justify>You earned "+score+" points, and therefore $"+soonerreward+" in bonus payment, which you will receive in 1 DAY.</div>",
		"<div align=center>UPDATE!<br><br>IMPORTANT NEW INFORMATION INCOMING</div>",
		"<div align=justify>UPDATE: New research shows that traveling through wormholes reduces the quality of space treasure.<br><br>To preserve the quality of the treasure, the carrier spaceship can fly back to earth without using the wormhole in 3 MONTHS.<br><br><br><img style='margin:0px auto;display:block;width:600px' src='img/3months.png'/><br>While this process will take 3 months, the value of the treasure will increase, getting you a bonus payment of $"+largerreward+", instead of $"+soonerreward+".<br><br>However, because of the delayed trip, you would receive the bonus payment of $"+largerreward+" in 3 months.<br><br>It will be up to you to decide whether the carrier should use the wormhole.</div>"];
	} else {
		var instructions = ["<div align=justify>You earned "+score+" points, and therefore $"+largerreward+" in bonus payment, which you will receive in 3 MONTHS.</div>",
		"<div align=center>UPDATE!<br><br>IMPORTANT NEW INFORMATION INCOMING</div>",
		"<div align=justify>UPDATE: It turns out that there is a wormhole nearby the base planet, which lets the carrier spaceship transport your treasure back to earth TODAY.<br><br><br><img style='margin:0px auto;display:block;width:600px' src='img/today.png'/><br>Research shows that this form of travel will reduce the quality of treasure, getting you a bonus payment of $"+soonerreward+", instead of $"+largerreward+".<br><br>However, you would receive the bonus payment of $"+soonerreward+" TODAY.<br><br>It will be up to you to decide whether the carrier should use the wormhole.</div>"];
	}
	}
	return instructions
}

var generate_itc_options = function(){
	if (Math.random()<0.5) {
		var options = [["No, give me <b>$"+largerreward+"</b> in <b>3 MONTHS</b> (8/20/2016)","Yes, give me <b>$"+soonerreward+" TODAY</b> (5/20/2016)"]]
	} else {
		var options = [["Yes, give me <b>$"+soonerreward+" TODAY</b> (5/20/2016)","No, give me <b>$"+largerreward+"</b> in <b>3 MONTHS</b> (8/20/2016)"]]
	}
	return options
}

function createMemberInNormalDistribution(mean,std_dev){
	return mean + (gaussRandom()*std_dev);
}
/*
* Returns random number in normal distribution centering on 0.
* ~95% of numbers returned should fall between -2 and 2
*/
function gaussRandom() {
	var u = 2*Math.random()-1;
	var v = 2*Math.random()-1;
	var r = u*u + v*v;
	/*if outside interval [0,1] start over*/
	if(r == 0 || r > 1) return gaussRandom();

	var c = Math.sqrt(-2*Math.log(r)/r);
	return u*c;

	/* todo: optimize this algorithm by caching (v*c) 
	* and returning next time gaussRandom() is called.
	* left out for simplicity */
}

function shuffle(o){
	for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
}

var images = ['img/antimatter_0.png',
'img/antimatter_1.png',
'img/antimatter_2.png',
'img/antimatter_3.png',
'img/antimatter_4.png',
'img/antimatter_5.png',
'img/earth_planet.png',
'img/earth_stim_1_deact.png',
'img/earth_stim_1.png',
'img/earth_stim_2_deact.png',
'img/earth_stim_2.png',
'img/earth_stim_3_deact.png',
'img/earth_stim_3.png',
'img/earth_stim_4_deact.png',
'img/earth_stim_4.png',
'img/example_aliens.png',
'img/example_planets.png',
'img/example_rockets.png',
'img/example_values_2.png',
'img/example_values.png',
'img/noreward.png',
'img/p_purple_planet.png',
'img/p_purple_stim_deact.png',
'img/p_purple_stim_happy.png',
'img/p_purple_stim_sad.png',
'img/p_purple_stim.png',
'img/p_red_planet.png',
'img/p_red_stim_deact.png',
'img/p_red_stim_happy.png',
'img/p_red_stim_sad.png',
'img/p_red_stim.png',
'img/purple_planet.png',
'img/purple_stim_deact.png',
'img/purple_stim_happy.png',
'img/purple_stim_sad.png',
'img/purple_stim.png',
'img/red_planet.png',
'img/red_stim_deact.png',
'img/red_stim_happy.png',
'img/red_stim_sad.png',
'img/red_stim.png',
'img/treasure_0.png',
'img/treasure_1.png',
'img/treasure_2.png',
'img/treasure_3.png',
'img/treasure_4.png',
'img/treasure_5.png',
'img/today.png',
'img/3months.png',
];

function save_data(data,table_name){
	
for (i = 0; i < data.length; i++) {
	delete data[i].internal_chunk_id;
	delete data[i].trial_index_global;
	delete data[i].trial_type;
	/*if (table_name == "space_mult_subinfo") {
		delete data[i].key_press;
		delete data[i].rt;
		delete data[i].trial_index;
		}*/
	}
		
	$.ajax({
		type:'post',
		cache: false,
		url: 'savedata.php', // change this to point to your php file.
		// opt_data is to add additional values to every row, like a subject ID
		// replace 'key' with the column name, and 'value' with the value.
		data: {
			table: table_name,
			json: JSON.stringify(data),
		},
		success: function(){
			console.log("hieperdepiep");
		}// write the result to javascript console
		//success: function(output) { console.log(output); } // write the result to javascript console
	});
}

function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}