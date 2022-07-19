/* SAVING DATA FUNCTION ================== */

function commitToRepo(jsonData, path) {
    const url = ".netlify/functions/api"

    // Example:
    const response = fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({
            path: path,
            data: JSON.stringify(jsonData)
        }) // body data type must match "Content-Type" header
    }).then((response) => {
        console.log(response)
    });
}

/* INFO ================== */



var datetime = new Date()
var timezone = -1 * (datetime.getTimezoneOffset() / 60)
var date = format_digit(datetime.getFullYear()) + format_digit(datetime.getMonth() + 1) + format_digit(datetime.getDate())
var time = format_digit(datetime.getHours()) + format_digit(datetime.getMinutes()) + format_digit(datetime.getSeconds())
var participant_id = date + "_" + time + "_" + jsPsych.randomization.randomID(5)  // generate a random subject ID with 15 characters
var time_start = performance.now()

var session_info = {
    participant_id: participant_id,
    experiment_version: '0.0.1',
    datetime: datetime.toLocaleDateString("fr-FR") + " " + datetime.toLocaleTimeString("fr-FR"),
    date: date,
    time: time,
    date_timezone: timezone
}



/* START ================== */


// Informed consent and session info
var welcome_screen = {
    type: "html-button-response",
    choices: ["I agree.", "I disagree."],
    stimulus: "\
    <p><b>Welcome to the experiment! Please read the information below.</b></p> \
    <hr> \
    <p><i>Here are the terms and conditions. Blabla something something.</i><p> \
    <p><i>Another paragraph blabla something else.</i><p>",
    on_finish: function (data) {
        // Quit if echap
        if (data.button_pressed == 1) {
            jsPsych.endExperiment('The experiment was ended.')
        }
    },
    // Saving of important information like participant's details and system info
    data: Object.assign({ screen: 'session_info' }, session_info, systemInfo())
}

// Participant information
var participant_info_general = {
    type: 'survey-text',
    questions: [
        { prompt: "Enter your birthday", name: 'Age', placeholder: "example: '13121991' for 13/12/1991" },
        { prompt: "Enter your initials", name: 'Initials', placeholder: "example: 'DM'" }
    ],
    data: { screen: 'participant_info_general' }
}


var participant_info_session = {
    type: 'survey-multi-choice',
    questions: [
        {
            prompt: "<p><b>Did you already played this game?</b></p>" +
                "<p><i>This is important for us to know to study the effect of repetition :)</i></p>",
            name: 'AlreadyPlayed',
            options: ["No", "Yes"],
            required: true
        }
    ],
    data: { screen: 'participant_info_session' }
}


var instructions = {
    type: "html-button-response",
    choices: ["Let's start!"],
    stimulus: "\
    <p>In this experiment, a circle will appear in the center of the screen.</p> \
    <p>If the circle is <strong>blue</strong>, press the left arrow key on the keyboard as fast as you can.</p> \
    <p>If the circle is <strong>orange</strong>, press the right arrow key as fast as you can.</p> \
    <div style='width: 100%;'> \
        <div style='float: left;'> \
            <img src='img/blue.png'></img> \
            <p class='small'><strong>Press the left arrow key</strong></p> \
        </div> \
        <div class='float: right;'> \
            <img src='img/orange.png'></img> \
            <p class='small'><strong>Press the right arrow key</strong></p> \
        </div> \
    </div> \
    <br><p>Are you ready?</p>"
}


/* STIMULI ================== */

// Stimuli timeline
// data_stimuli = read_json_from_url('https://raw.githubusercontent.com/DominiqueMakowski/jsPsychTemplate/main/stimuli/stimuli.json')
// console.log(data_stimuli)

var fixation_cross = {
    type: 'html-keyboard-response',
    stimulus: "<div style='font-size:5em'>+</div>",
    choices: jsPsych.NO_KEYS,
    trial_duration: function () { return randomInteger(250, 750) },
    data: { screen: 'fixation_cross' }
}



var timeline_stimuli = [
    {
        stimulus: "stimuli/blue.png",
        data: {
            screen: "stimulus",
            correct_key: 'arrowleft',
        }
    },
    {
        stimulus: "stimuli/orange.png",
        data: {
            screen: "stimulus",
            correct_key: 'arrowright',
        }
    }
]

// Create array of images for preload
var list_images = [...timeline_stimuli] // Copy
var i = 1
for (i in range(timeline_stimuli.length)) {
    list_images[i] = timeline_stimuli[i]["stimulus"]
}

/* TRIALS ================== */
// Screens
var trial_number = 1

var stimulus = {
    type: "image-keyboardmouse-response",
    stimulus: jsPsych.timelineVariable('stimulus'),  // Use the 'stimulus' value from the timeline
    choices: ['arrowleft', 'arrowright', 'esc'], // keyboard choices
    // margin_horizontal: '2em',  // Separation between buttons
    // button_html: ['<button class="jspsych-btn" style = "position:absolute; bottom: 1em, font-size: 3em">%choice%</button>', '<button class="jspsych-btn" style = "position:absolute; bottom: 1em, font-size: 3em">%choice%</button>'],
    data: jsPsych.timelineVariable('data'), // Add the 'data' dict to the data of that trial
    on_finish: function (data) {
        data.prestimulus_duration = jsPsych.data.get().last(2).values()[0].time_elapsed - jsPsych.data.get().last(3).values()[0].time_elapsed
        data.trial_number = trial_number
        trial_number += 1
        // Score the response as correct or incorrect.
        if (data.response != -1) {
            if (jsPsych.pluginAPI.compareKeys(data.response, data.correct_key)) {
                data.correct = true;
            } else {
                data.correct = false;
            }
        } else {
            // code mouse clicks as correct or wrong (not in the instructions, but putting this here to remember for later)
            if (data.click_x < 150) {
                data.response = 'arrowleft' // code response as left arrow key if left part of image is clicked
            } else {
                data.response = 'arrowright' // code response as right arrow key if right part of image is clicked
            }
            if (jsPsych.pluginAPI.compareKeys(data.response, data.correct_key)) {
                data.correct = true;
            } else {
                data.correct = false;
            }
        }
        // Quit if echap
        if (data.answer == 'esc') {
            jsPsych.endExperiment('The experiment was ended.')
        }
    }
}


var feedback = {
    type: "html-keyboard-response",
    stimulus: function () {
        if (jsPsych.data.get().last(1).values()[0].correct) {
            var last_trial_correct = "<p style='color:green; font-size:2em'><b>Correct!</b></p>"
        } else {
            var last_trial_correct = "<p style='color:red; font-size:2em'><b>Wrong.</b></p>"
        }
        var last_rt = jsPsych.data.get().last(1).values()[0].rt
        return last_trial_correct + "<p>RT: " + round_digits(last_rt) + " ms</p>"
    },
    choices: jsPsych.NO_KEYS,
    trial_duration: 500
}

var trials = {
    timeline: [fixation_cross, stimulus, feedback],
    timeline_variables: timeline_stimuli,
    randomize_order: true,
    repetitions: 2
}



var questionnaire = {
    type: 'html-slider-response',
    stimulus: '<p><b>Overall, did you find this task easy?</b></p>',
    labels: ['Not at all', 'Absolutely'],
    data: {
        screen: 'question_difficulty',
        experiment_duration: function () { return performance.now() - time_start }
    },
    on_finish: function (data) {
        // This should be done at at the last "trial" / phase, before the feedback screen (to prevent quitting before)
        data.interactions = jsPsych.data.getInteractionData().json(true)  // Add interaction data
        commitToRepo(jsPsych.data.get().json(true), "data/" + participant_id + ".json")  // Send data to Netlify function
    }
}


var end_screen = {
    type: "html-button-response",
    choices: ["Close."],
    stimulus: function () {

        // Debriefing with feedback
        var trials = jsPsych.data.get().filter({ screen: 'stimulus' })
        var correct_trials = trials.filter({ correct: true })

        var accuracy = "<p style='color:rgb(76,175,80);'>You responded correctly on <b>" +
            round_digits(correct_trials.count() / trials.count() * 100) + "" +
            "%</b> of the trials.</p>"

        if (correct_trials.count() > 0) {
            var rt = correct_trials.select('rt').mean()
            rt = "<p style='color:rgb(233,30,99);'>Your average response time was <b>" + round_digits(rt) + "</b> ms.</p>"
        } else {
            var rt = ""
        }

        return "<p><b>Thank you for participating!</b> Here are your results:</p><hr>" +
            accuracy + rt +
            "<hr><p> Don't hesitate to spread the word and share this experiment, science appreciates :)</p>"
    },
    on_finish: function () {
        jsPsych.endExperiment('The experiment was ended. You can close the window or press refresh it to start again.')
    }
}

/* START ================== */

jsPsych.init({
    preload_images: list_images,
    show_progress_bar: true,
    message_progress_bar: 'Completion',
    timeline: [
        welcome_screen,
        participant_info_general,
        participant_info_session,
        instructions,
        trials,
        questionnaire,
        end_screen
    ]
    // on_finish: function () {
    //     jsPsych.data.displayData()
    // }
})


