/**
* jspsych-space-doll-stim
* Wouter Kool
*
* plugin for displaying a space and aliens version of the model-based/model-free 2-step task
*
**/

(function($) {
	jsPsych["space-doll-rocket-stim"] = (function() {

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
				trials[i].practice = params.practice || 0;
				
				// timing parameters
				trials[i].feedback_time = params.feedback_time || 500;
				trials[i].planet_time = params.feedback_time || 2000;
				trials[i].ITI = params.ITI || 1000;
				trials[i].mapping = params.mapping;
				//trials[i].score_time = params.score_time || 1500;
				//trials[i].level2_time = params.level2_time || 1000;
				//trials[i].totalscore_time = params.totalscore_time || 2000;
				
			}
			return trials;
			
		};
		
		plugin.trial = function(display_element, trial) {
			
			// if any trial variables are functions
			// this evaluates the function and replaces
			// it with the output of the function
			
			trial = jsPsych.pluginAPI.evaluateFunctionParameters(trial);
						
			var part = 0;
			var state_names = ["earth","purple","red"];
			
			// store responses
			var setTimeoutHandlers = [];
			
			var keyboardListener = new Object;	
			
			var state = 0;
			
			var state_colors = [
				[5, 157, 190],
				[115, 34, 130],
				[211, 0, 0]
			];
			
			var stimsperstate = [trial.mapping[0],trial.mapping[1]];
			stimsperstate = [stimsperstate, [trial.mapping[2], trial.mapping[3]]];
			var state1 = Math.ceil(Math.random()*2);
			var stims = shuffle(stimsperstate[state1-1]);
			
			var response = new Array(2);
			for (var i = 0; i < 2; i++) {	
				response[i] = {rt: -1, key: -1};
			}
			
			var choices = ["F","J"];
			
			// function to end trial when it is time
			var end_trial = function() {
				
				kill_listeners();
				kill_timers();
				
				var trial_data = {
					"state2": state2,
				};
				
				jsPsych.data.write(trial_data);
				
				var handle_totalscore = setTimeout(function() {
					// clear the display
					display_element.html('');
					$('.jspsych-display-element').css('background-image', '');
				
					// move on to the next trial
					var handle_ITI = setTimeout(function() {
						jsPsych.finishTrial();
					}, trial.ITI);
					setTimeoutHandlers.push(handle_ITI);
				}, trial.totalscore_time);
				setTimeoutHandlers.push(handle_totalscore);
				
			};

			// function to handle responses by the subject
			var after_response = function(info) {
				
				kill_listeners();
				kill_timers();
				
				// only record the first response
				if (response[part].key == -1){
					response[part] = info;
				}
				
				display_stimuli(2); //feedback
				
				if (String.fromCharCode(response[part].key)==choices[0]) { // left response
					choice1 = stims[0];
				} else {
					choice1 = stims[1];						
				}
				if ((choice1 == trial.mapping[0]) || (choice1 == trial.mapping[2])) {
					state2 = 1;
				} else {
					state2 = 2;
				}					
				state = state2;
				
				var handle_feedback = setTimeout(function() {
					part = part + 1;
					display_stimuli(1);
					var handle_planet = setTimeout(function(){
						end_trial();
					}, trial.planet_time);
					setTimeoutHandlers.push(handle_planet);
				}, trial.feedback_time);
				setTimeoutHandlers.push(handle_feedback);
							
			};
			
			var display_stimuli = function(stage){
				
				kill_timers();
				kill_listeners();
				
				state_name = state_names[state];
				state_color = state_colors[state];
				
				if (stage==1) { // choice stage
					display_element.html('');

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
						id: 'jspsych-space-doll-bottom-stim-middle',
					}));
					display_element.append($('<div>', {
						id: 'jspsych-space-doll-bottom-stim-right',
					}));
						
					if (state == 0) {
						$('#jspsych-space-doll-bottom-stim-left').css('background-image', 'url(img/'+state_name+'_stim_'+stims[0]+'.png)');
						$('#jspsych-space-doll-bottom-stim-right').css('background-image', 'url(img/'+state_name+'_stim_'+stims[1]+'.png)');
						$('#jspsych-space-doll-bottom-stim-middle').css('width', '50px');
					}
					
				}
				
				if (stage==2) { // feedback
					if (state == 0) {
						if (String.fromCharCode(response[part].key)==choices[0]) { // left response
							$('#jspsych-space-doll-bottom-stim-right').css('background-image', 'url(img/'+state_name+'_stim_'+stims[1]+'_deact.png)');
							$('#jspsych-space-doll-bottom-stim-left').addClass('jspsych-space-doll-bottom-stim-border');
							$('#jspsych-space-doll-bottom-stim-left').css('border-color', 'rgba('+state_color[0]+','+state_color[1]+','+state_color[2]+', 1)');
						} else {
							$('#jspsych-space-doll-bottom-stim-left').css('background-image', 'url(img/'+state_name+'_stim_'+stims[0]+'_deact.png)');
							$('#jspsych-space-doll-bottom-stim-right').css('border-color', 'rgba('+state_color[0]+','+state_color[1]+','+state_color[2]+', 1)');
							$('#jspsych-space-doll-bottom-stim-right').addClass('jspsych-space-doll-bottom-stim-border');
						}
					}
					/*if (state == 0) {
						if (String.fromCharCode(response[part].key)==choices[0]) { // left response
							$('#jspsych-space-doll-bottom-stim-right').css('background-image', 'url(img/'+state_name+'_stim_'+stims[1]+'_deact.png)');
							$('#jspsych-space-doll-bottom-stim-left').addClass('jspsych-space-doll-bottom-stim-border');
							$('#jspsych-space-doll-bottom-stim-left').css('border-color', 'rgba('+state_color[0]+','+state_color[1]+','+state_color[2]+', 1)');
						} else {
							$('#jspsych-space-doll-bottom-stim-left').css('background-image', 'url(img/'+state_name+'_stim_'+stims[0]+'_deact.png)');
							$('#jspsych-space-doll-bottom-stim-right').css('border-color', 'rgba('+state_color[0]+','+state_color[1]+','+state_color[2]+', 1)');
							$('#jspsych-space-doll-bottom-stim-right').addClass('jspsych-space-doll-bottom-stim-border');
						}
					}*/
				}
				
			}
			
			var start_response_listener = function(){
				if(JSON.stringify(choices) != JSON.stringify(["none"])) {
					$('#jspsych-space-doll-bottom-stim-left').on('click', fake_keyboard_trigger('F'));
					$('#jspsych-space-doll-bottom-stim-right').on('click', fake_keyboard_trigger('J'));
					var keyboardListener = jsPsych.pluginAPI.getKeyboardResponse({
						callback_function: after_response,
						valid_responses: choices,
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
				// kill keyboard listeners
//				jsPsych.pluginAPI.cancelAllKeyboardResponses();
				if( keyboardListener !== 'undefined'){
					$('#jspsych-space-doll-bottom-stim-left').off('click');
					$('#jspsych-space-doll-bottom-stim-right').off('click');
					jsPsych.pluginAPI.cancelAllKeyboardResponses();
//					jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener);
				}
			}
			
			var next_part = function(){
				
				part = part + 1;
				
				kill_timers();
				kill_listeners();
				
				display_stimuli(1);
				
				start_response_listener();
				
			};			
			
			next_part();
			
			};
		
			return plugin;
		})();
	})(jQuery);
