/**
* jspsych-space-doll-stim
* Wouter Kool
*
* plugin for displaying a space and aliens version of the model-based/model-free 2-step task
*
**/

(function($) {
	jsPsych["space-doll-alien-stim"] = (function() {

		var plugin = {};
		
		var score = 0;
		
		var displayColor = '#0738db';
		var borderColor = '#197bff';
		var textColor = '#b8fff6';
		
		plugin.create = function(params) {

			params = jsPsych.pluginAPI.enforceArray(params, ['stimuli', 'choices']);
			
			var trials = new Array(params.nrtrials);
			
			for (var i = 0; i < trials.length; i++) {
				
				trials[i] = {};
				trials[i].choices = params.choices || [];
				trials[i].rews = params.rews;

				// timing parameters
				trials[i].feedback_time = params.feedback_time || 500;
				trials[i].ITI = params.ITI || 500;
				trials[i].points_time = params.points_time || 1500;
				trials[i].state_name = params.state_name || 'p_purple';
				trials[i].points_loop_time = params.points_loop_time || 200;
				trials[i].score_time = params.score_time || 1000;
				trials[i].mouse_friendly = params.mouse_friendly || false;
				
			}
			return trials;
			
		};
		
		plugin.trial = function(display_element, trial) {
			
			// if any trial variables are functions
			// this evaluates the function and replaces
			// it with the output of the function
			
			
			progress = jsPsych.progress();
			if (progress.current_trial_local == 0) {
				score = 0;
			}
			
			state_name = trial.state_name;
			if (state_name == 'p_purple') {
				var state_color = [115, 34, 130];
			}
			if (state_name == 'p_red') {
				var state_color = [211, 0, 0];
			}
			
			// store responses
			var setTimeoutHandlers = [];
			
			var keyboardListener = new Object;	
			
			var points_loop_counter = 0;
			
			var points_loop = function() {
				if (points_loop_counter < Math.abs(points)) {
					points_loop_counter = points_loop_counter + 1;
					display_stimuli(3);
					setTimeout(function () {
						points_loop();
					}, trial.points_loop_time);
				} else {
					end_trial();
				}
			}
			
			// function to end trial when it is time
			var end_trial = function() {
				
				kill_listeners();
				kill_timers();
				
				//jsPsych.data.write(trial_data);
				
				var handle_points = setTimeout(function() {
					// clear the display
					display_element.html('');
					$('.jspsych-display-element').css('background-image', '');

					// move on to the next trial
					var handle_ITI = setTimeout(function() {
						jsPsych.finishTrial();
					}, trial.ITI);
					setTimeoutHandlers.push(handle_ITI);
				}, trial.points_time);
				setTimeoutHandlers.push(handle_points);
				
			};

			// function to handle responses by the subject
			var after_response = function(info) {
				
				kill_listeners();
				kill_timers();

				points = trial.rews;					
				display_stimuli(2);
				var handle_feedback = setTimeout(function() {
					display_stimuli(3);
					var handle_scoretime = setTimeout(function() {
						points_loop();
					}, trial.score_time);
					setTimeoutHandlers.push(handle_scoretime);
				}, trial.feedback_time);
				setTimeoutHandlers.push(handle_feedback);
			}								

			
			var display_stimuli = function(stage){
				
				kill_timers();
				kill_listeners();
				
			//state_name = state_names[state];
			//state_color = state_colors[state];

			trial = jsPsych.pluginAPI.evaluateFunctionParameters(trial);
			if (stage==1) { // choice stage
				
				$('.jspsych-display-element').css('background-image', 'url("img/'+state_name+'_planet.png")');				
				display_element.append($('<div>', {
					id: 'jspsych-space-doll-top-stim-left',
				}));
				display_element.append($('<div>', {
					id: 'jspsych-space-doll-top-stim-middle',
				}));
				display_element.append($('<div>', {
					id: 'jspsych-space-doll-top-stim-right',
				}));
				display_element.append($('<div>', {
					style: 'clear:both',
				}));
				display_element.append($('<div>', {
					id: 'jspsych-space-doll-bottom-stim-left',
				}));
				display_element.append($('<div>', {
					style: 'background-image: url(img/'+state_name+'_stim.png)',
					id: 'jspsych-space-doll-bottom-stim-middle',
					click: function(e){var event = jQuery.Event("keydown");
							event.which = jsPsych.pluginAPI.convertKeyCharacterToKeyCode('space');
							$(this).trigger(event);
						}
				}));
				display_element.append($('<div>', {
					id: 'jspsych-space-doll-bottom-stim-right',
				}));

				if(trial.mouse_friendly && trial.choices.length > 0 &&
					JSON.stringify(trial.choices) != JSON.stringify(["none"]))
				{
					var nav_html = "<div class='jspsych-space-doll-nav'>";
					for(var x=0; x < trial.choices.length; x++)
					{
						nav_html += "<button class='jspsych-space-doll-nav' id='btn-key-" + trial.choices[x] +"'>" +  trial.choices[x] + "</button>";

					}
					nav_html +="</div>"
					console.log("build buttons");
				//alert(trial.choices.length);
				display_element.append(nav_html);
				for(var x=0; x < trial.choices.length; x++)
				{
					var event = jQuery.Event("keydown");
					event.which = jsPsych.pluginAPI.convertKeyCharacterToKeyCode(trial.choices[x]);
					$("#btn-key-" + trial.choices[x]).on('click', function(e)
					{

						console.log(event);
						$( document ).trigger(event);
					});
				}
			}

		}

			if (stage==2) { // feedback
				$('#jspsych-space-doll-bottom-stim-middle').addClass('jspsych-space-doll-bottom-stim-border');
				$('#jspsych-space-doll-bottom-stim-middle').css('border-color', 'rgba('+state_color[0]+','+state_color[1]+','+state_color[2]+', 1)');
			}

			if (stage==3) { // reward
				if (points==0) {
					$('#jspsych-space-doll-top-stim-middle').css('background-image', 'url(img/noreward.png)');
				} else {
					if (points>0) {
						$('#jspsych-space-doll-bottom-stim-middle').css('background-image', 'url(img/'+state_name+'_stim_happy.png)');
						$('#jspsych-space-doll-top-stim-middle').css('background-image', 'url(img/treasure_'+(points-points_loop_counter)+'.png)');
						extra_text = '+';
					}
					if (points<0) {
						$('#jspsych-space-doll-bottom-stim-middle').css('background-image', 'url(img/'+state_name+'_stim_sad.png)');
						$('#jspsych-space-doll-top-stim-middle').css('background-image', 'url(img/antimatter_'+((-1*points)-points_loop_counter)+'.png)');
						extra_text = '';
					}
					if (points_loop_counter==0) {
						text = '';
					} else {
						text = extra_text+(points_loop_counter)*Math.sign(points);
					}
					$('#jspsych-space-doll-top-stim-middle').html('<br><br><br>'+text);
					if (trial.practice == 0) {
						$('#sub-div-2').html('score: '+(score+points_loop_counter*Math.sign(points)));
					}
				}
				/*if (points>0) {
					$('#jspsych-space-doll-bottom-stim-middle').css('background-image', 'url(img/'+state_name+'_stim_happy.png)');
					$('#jspsych-space-doll-top-stim-middle').css('background-image', 'url(img/treasure_'+points+'.png)');
				}
				if (points<0) {
					$('#jspsych-space-doll-bottom-stim-middle').css('background-image', 'url(img/'+state_name+'_stim_sad.png)');
					$('#jspsych-space-doll-top-stim-middle').css('background-image', 'url(img/antimatter_'+(-1*points)+'.png)');
				}
				if (points==0) {
					$('#jspsych-space-doll-top-stim-middle').css('background-image', 'url(img/noreward.png)');
				}*/
			}

			
			

		}

		var start_response_listener = function(){
			if(JSON.stringify(trial.choices) != JSON.stringify(["none"])) {
				var keyboardListener = jsPsych.pluginAPI.getKeyboardResponse({
					callback_function: after_response,
					valid_responses: trial.choices,
					rt_method: 'date',
					persist: false,
					allow_held_key: false
				});
			}
		}

		var kill_timers = function(){
			for (var i = 0; i < setTimeoutHandlers.length; i++) {
				clearTimeout(setTimeoutHandlers[i]);
			}
		}

		var kill_listeners = function(){
			$('.jspsych-space-doll-nav').remove();
			// kill keyboard listeners
			if(typeof keyboardListener !== 'undefined'){
				jsPsych.pluginAPI.cancelAllKeyboardResponses();
				//jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener);
			}
		}

		var next_part = function(){

			kill_timers();
			kill_listeners();

			display_stimuli(1);

			start_response_listener();
		}							
		
		next_part();
	};		
	
	return plugin;
	
})();
})(jQuery);
