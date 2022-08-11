/* Measures */ //===============================================================
// Scale Labels
var scale1 = ["Not at All", "Extremely"]
var scale2 = ["Strongly Disagree", "Strongly Agree"]

// Oosterhof and Todorov (2008) - 9 point scale (Not at all to Extremely)
var items = [
    "The face looked real to me",
    "The face looked attractive to me",
    "The face looked confident to me",
    "The face looked approachable to me",
    "The face looked familiar to me",
    "The face looked trustworthy to me",
    "The face looked sociable to me",
    "The face looked similar to me",
    // "How weird is the face you saw?",   // include eeriness as well? (cf uncanny valley effect)
    // "How dominant is the face you saw?",
    //"How musculine/feminine is the face you saw?",
    // "How emotionally stable is the face you saw?",
    // "How mean is the face you saw?",
    // "How boring is the face you saw?",
    // "How intelligent is the face you saw?",
    // "How caring is the face you saw?",
    // "How egoistic is the face you saw?",
    // "How responsible is the face you saw?",
]

var dimensions = [
    "Real",
    "Attractiveness",
    "Confidence",
    "Approachability",
    "Familiarity",   // Familiarity (van vugt et al., 2010)
    "Trustworthiness",
    "Sociability",
    "Similarity"
]

// var items2 = [
//     "<b>Approachable</b>",
//     "<b>Familiar</b>",
//     "<b>Trustworthy</b>",
//     "<b>Sociable</b>",
//     "<b>Similar</b>"
// ]

// var dimensions2 = [
//     "Approachability",
//     "Familiarity",   // Familiarity (van vugt et al., 2010)
//     "Trustworthiness",
//     "Sociability",
//     "Similarity"  //Similarity (Van Vugt et al., 2006)
// ]

// Mini IPIP scale
var IPIP = [
    "I am the life of the party<br>",
    "I sympathize with others' feelings<br>",
    "I get chores done right away<br>",
    "I have frequent mood swings<br>",
    "I have a vivid imagination<br>",
    "I feel entitled to more of everything<br",
    "I do not talk a lot<br>",
    "I am not interested in other people's problems<br>",
    "I have difficulty understanding abstract ideas<br>",
    "I like order<br>",
    "I make a mess of things<br>",
    "I deserve more things in life<br>",
    "I do not have a good imagination<br>",
    "I feel other's emotions<br>",
    "I am relaxed most of the time<br>",
    "I get upset easily<br>",
    "I seldom feel blue<br>",
    "I would like to be seen driving around in a very expensive car<br>",
    "I keep in the background<br>",
    "I am not really interested in others<br>",
    "I am not interested in abstract ideas<br>",
    "I often forget to put things back in their proper place<br>",
    "I talk to a lot of different people at parties<br>",
    "I would get a lot of pleasure from owning expensive luxury goods<br>",
]

var IPIP_dim = [
    "Extraversion_1",
    "Agreeableness_2",
    "Conscientiousness_3",
    "Neuroticism_4",
    "Openness_5",
    "HonestyHumility_6_R",
    "Extraversion_7_R",
    "Agreeableness_8_R",
    "Openness_9_R",
    "Conscientiousness_10",
    "Conscientiousness_11_R",
    "HonestyHumility_12_R",
    "Openness_13_R",
    "Agreeableness_14",
    "Neuroticism_15_R",
    "Neuroticism_16",
    "Neuroticism_17_R",
    "HonestyHumility_18_R",
    "Extraversion_19_R",
    "Agreeableness_20_R",
    "Openness_21_R",
    "Conscientiousness_22_R",
    "Extraversion_23",
    "HonestyHumility_24_R",
]

// Five Factor Narcissism Inventory - Brief Form (Jauk et al., 2022)
var FFNI_BF = [
    "I aspire for greatness<br>",
    "Others say I brag too much, but everything I say is true<br>",
    "I am comfortable taking on positions of authority<br>",
    "When someone does something nice for me, I wonder what they want from me<br>",
    "It may seem unfair, but I deserve extra (i.e., attention, privileges, rewards)<br>",
    "I like being noticed by others<br>",
    "Sometimes to succeed you need to use other people<br>",
    "I often fantasize about someday being famous<br>",
    "When people judge me, I just don't care<br>",
    "I don't generally pay much attention to the woes of others<br>",
    "I'm pretty good at manipulating people<br>",
    "I often feel as if I need compliments from others in order to be sure of myself<br>",
    "I have at times gone into a rage when not treated rightly<br>",
    "I feel ashamed when people judge me<br>",
    "I would risk injury to do something exciting<br>",
    "I am driven to succeed<br>",
    "I do not waste my time hanging out with people who are beneath me<br>",
    "I tend to take charge of most situations<br>",
    "I often think that others aren't telling me the whole truth<br>",
    "I believe I am entitled to special accommodations<br>",
    "I like being the most popular person at a party<br>",
    "I'm willing to exploit others to further my own goals<br>",
    "I often fantasize about having lots of success and power<br>",
    "Others' opinions of me are of little concern to me<br>",
    "I don't get upset with the suffering of others<br>",
    "I can talk my way into and out of anything<br>",
    "I wish I didn't care so much about what others think of me<br>",
    "It really makes me angry when I don't get what I deserve<br>",
    "I feel foolish when I make a mistake in front of others<br>",
    "I like doing things that are risky or dangerous<br>"
]

var FFNI_dim = [
    "Acclaim_Seeking_1",
    "Arrogance_2",
    "Authoritativeness_3",
    "Distrust_4",
    "Entitlement_5",
    "Exhibitionism_6",
    "Exploitativeness_7",
    "Grandiose_Fantasies_8",
    "Indifference_9_R",
    "Lack_of_Empathy_10",
    "Manipulativeness_11",
    "Need_for_Admiration_12",
    "Reactive_Anger_13",
    "Shame_14",
    "Thrill_Seeking_15",
    "Acclaim_Seeking_16",
    "Arrogance_17",
    "Authoritativeness_18",
    "Distrust_19",
    "Entitlement_20",
    "Exhibitionism_21",
    "Exploitativeness_22",
    "Grandiose_Fantasies_23",
    "Indifference_24_R",
    "Lack_of_Empathy_25",
    "Manipulativeness_26",
    "Need_for_Admiration_27",
    "Reactive_Anger_28",
    "Shame_29",
    "Thrill_Seeking_30"
]

// Paranoia: R-GPTS (Freeman et al., 2019)
var R_GPTS =[
    "I spent time thinking about friends gossiping about me<br>",
    "I often heard people referring to me<br>",
    "I have been upset by friends and colleagues judging me critically<br>",
    "People definitely laughed at me behind my back<br>",
    "I have been thinking a lot about people avoiding me<br>",
    "People have been dropping hints for me<br>",
    "I believed that certain people were not what they seemed<br>",
    "People talking about me behind my back upset me<br>",
    "Certain individuals have had it in for me<br>",
    "People wanted me to feel threatened, so they stared at me<br>",
    "I was certain people did things in order to annoy me<br>",
    "I was convinced there was a conspiracy against me<br>",
    "I was sure someone wanted to hurt me<br>",
    "I couldn't stop thinking about people wanting to confuse me<br>",
    "I was distressed by being persecuted<br>",
    "It was difficult to stop thinking about people wanting to make me feel bad<br>",
    "People have been hostile towards me on purpose<br>",
    "I was angry that someone wanted to hurt me<br>",
]

var GPTS_dim = [
    "Reference_1",
    "Reference_2",
    "Reference_3",
    "Reference_4",
    "Reference_5",
    "Reference_6",
    "Reference_7",
    "Reference_8",
    "Persecution_9",
    "Persecution_10",
    "Persecution_11",
    "Persecution_12",
    "Persecution_13",
    "Persecution_14",
    "Persecution_15",
    "Persecution_16",
    "Persecution_17",
    "Persecution_18",
]

// Self-Concept Clarity (Campbell et al., 1996)
var SCC = [
    "My beliefs about myself often conflict with one another<br>",  //(R)
    "On one day I might have one opinion of myself and on another day I might have a different opinion<br>",  //(R)
    "I spend a lot of time wondering about what kind of person I really am<br>",  //(R)
    "Sometimes I feel that I am not really the person that I appear to be<br>",     //(R)
    "When I think about the kind of person I have been in the past, I'm not sure what I was really like<br>",  //(R)
    "I seldom experience conflict between the different aspects of my personality<br>",
    "Sometimes I think I know other people better than I know myself<br>",    //(R)
    "My beliefs about myself seem to change very frequently<br>", //(R)
    "If I were asked to describe my personality, my description might end up being different from one day to another day<br>",  //(R)
    "Even if I wanted to, I don't think I could tell someone what I'm really like<br>",  //(R)
    "In general, I have a clear sense of who I am and what I am<br>",
    "It is often hard for me to make up my mind about things because I don't really know what I want<br>"  //(R)
]

var SCC_dim = [
    "SCC_1R",
    "SCC_2R",
    "SCC_3R",
    "SCC_4R",
    "SCC_5R",
    "SCC_6",
    "SCC_7R",
    "SCC_8R",
    "SCC_9R",
    "SCC_10R",
    "SCC_11",
    "SCC_12R"]

// Illusory Beliefs Inventory (Kingdon, et al., 2011)
var IBI_kingdon = [
    "I use prayer to ward off misfortune<br>",
    "I have sometimes changed my plans because I had a bad feeling<br>",
    "The soul does not continue to exist after death<br>", // (R)
    "I believe in magic<br>",
    "I sometimes perform special rituals for protection<br>",
    "If I think too much about something bad, it will happen<br>",
    "Magical forces have impacted on my life<br>",
    "It is just a matter of time until science can explain everything<br>",  // (R)
    "I do something special to prevent bad luck<br>",
    "Sometimes I get a feeling that something is going to happen before it happens<br>",
    "It is not possible to cast a magical spell<br>",  //(R)
    "Magic causes miracles to happen<br>",
    "Life is nothing more than a series of random events<br>",  //(R)
    "Good luck charms do not work<br>",  //(R)
    "If I think too much about something, it will happen<br>",
    "I avoid unlucky numbers<br>",
    "Most things that happen to us are the result of fate<br>",
    "I believe guardian angels or other spiritual forces protect me<br>",
    "Science is the key to understanding how things happen<br>",  //(R)
    "My thoughts alone can alter reality<br>",
    "There is an invisible force guiding us all<br>",
    "You should never tempt fate<br>",
    "I do not believe in a spiritual presence<br>",  //(R)
    "I believe in a higher power or God<br>"
    ]

var IBI_dim = [
    "Spirituality_1",
    "Internal_State_2",
    "Spirituality_3_R",
    "Magical_Beliefs_4",
    "Magical_Beliefs_5",
    "Internal_State_6",
    "Magical_Beliefs_7",
    "Spirituality_8_R",
    "Internal_State_9",
    "Internal_State_10",
    "Magical_Beliefs_11_R",
    "Magical_Beliefs_12",
    "Spirituality_13_R",
    "Magical_Beliefs_14_R",
    "Internal_State_15",
    "Internal_State_16",
    "Internal_State_17",
    "Spirituality_18",
    "Spirituality_19_R",
    "Internal_State_20",
    "Spirituality_21",
    "Spirituality_22",
    "Spirituality_23_R",
    "Spirituality_24"]


// State and Trait Anxiety Index - Short (Zsido et al., 2020)
var STAIS_S = [
    "I feel upset",
    "I feel frightened",
    "I feel nervous",
    "I am jittery",
    "I feel confused"
]

var STAIS_T = [
    "I feel that difficulties are piling up so that I cannot overcome them",
    "I worry too much over something that really doesn't matter",
    "Some unimportant thoughts run through my mind and bothers me",
    "I take disappointment so keenly that I can't put them out of my mind",
    "I get in a state of tension or turmoil as I think over my recent concerns and interests"
]

// Intolerance of Uncertainty (Carleton et al., 2007)
var IUS = [
    "Unforeseen events upset me greatly<br>",
    "It frustrates me not having all the information I need<br>",
    "One should always look ahead so as to avoid surprises<br>",
    "A small unforeseen event can ruin everything, even with the best of planning<br>",
    "I always want to know what the future has in store for me<br>",
    "I can't stand being taken by surprise<br>",
    "I should be able to organize everything in advance<br>",
    "Uncertainty keeps me from sleeping soundly<br>",
    "When its time to act, uncertainty paralyses me<br>",
    "When I am uncertain, I can't function very well<br>",
    "The smallest doubt can stop me from acting<br>",
    "I must get away from all uncertain situations<br>"
]

var IUS_dim = [
    "Prospective_Anxiety_1",
    "Prospective_Anxiety_2",
    "Prospective_Anxiety_3",
    "Prospective_Anxiety_4",
    "Prospective_Anxiety_5",
    "Prospective_Anxiety_6",
    "Prospective_Anxiety_7",
    "Inhibitory_Anxiety_8",
    "Inhibitory_Anxiety_9",
    "Inhibitory_Anxiety_10",
    "Inhibitory_Anxiety_11",
    "Inhibitory_Anxiety_12"
]

var SIAS_6a = [
"I have difficulty making eye-contact with others",
"I find it difficult mixing comfortably with the people I work with",
"I tense up if I meet an acquaintance on the street",
"I feel tense if I am alone with just one person",
"I have difficulty talking with other people",
"I find it difficult to disagree with another's point of view"
]

var SIAS_dim = [
    "SIAS_1",
    "SIAS_2",
    "SIAS_3",
    "SIAS_4",
    "SIAS_5",
    "SIAS_6"
]

var SPS_6a =[
    "I get nervous that people are staring at me as I walk down the street",
    "I worry about shaking or trembling when I'm watched by other people",
    "I would get tense if I had to sit facing other people on a bus or a train",
    "I worry I might do something to attract the attention of other people",
    "When in an elevator, I am tense if people look at me",
    "I can feel conspicuous standing in a line"
]

/*===============================================================*/
// Internal Utility Functions
/*===============================================================*/

// Merge survey responses without overwriting
// const merge = (...arguments) => {

//     // create a new object
//     let target = {};

//     // deep merge the object into the target object
//     const merger = (obj) => {
//         for (let prop in obj) {
//             if (obj.hasOwnProperty(prop)) {
//                 if (Object.prototype.toString.call(obj[prop]) === '[object Object]') {
//                     // if the property is a nested object
//                     target[prop] = merge(target[prop], obj[prop]);
//                 } else {
//                     // for regular property
//                     target[prop] = obj[prop];
//                 }
//             }
//         }
//     };

//     // iterate through all objects and
//     // deep merge them with target
//     for (let i = 0; i < arguments.length; i++) {
//         merger(arguments[i]);
//     }

//     return target;
// };





// Paranormal Belief Scale (Tobacyk,2004)
// var paranormal =[
//     "The soul continues to exist though the body may die",
//     "Some individuals are able to levitate (lift) objects through mental forces",
//     "Black magic really exists",
//     "Black cats can bring bad luck",
//     "Your mind or soul can leave your body and travel (astral projection)",
//     "The abominable snowman of Tibet exists",
//     "Astrology is a way to accurately predict the future",
//     "There is a devil",
//     "Psychokinesis, the movement of objects through psychic powers, does exist",
//     "Witches do exist",
//     "If you break a mirror, you will have bad luck",
//     "During altered states, such as sleep or trances, the spirit can leave the body",
//     "The Loch Ness monster of Scotland exists",
//     "The horoscope accurately tells a person’s future",
//     "I believe in God",
//     "A person’s thoughts can influence the movement of a physical object",
//     "Through the use of formulas and incantations, it is possible to cast spells on persons",
//     "The number “13” is unlucky",
//     "Reincarnation does occur",
//     "There is life on other planets",
//     "Some psychics can accurately predict the future",
//     "There is a heaven and a hell",
//     "Mind reading is not possible",
//     "There are actual cases of witchcraft",
//     "It is possible to communicate with the dead",
//     "Some people have an unexplained ability to predict the future",
// ]



// Psychosis of participant
    // var scale4 = ["Never", "Sometimes", "Often", "Nearly always"];
    // var scale5 = ["Not distressed", "A bit distressed", "Quite distressed", "Very distressed"]
    // var CAPE42 = {
    //     type: jsPsychSurveyLikert,
    //     questions: [
    //         {prompt: "1. Do you ever feel sad?", required: true, labels: scale4},
    //         {prompt: "If you selected never, please go to the next question.  If you selected sometimes, often or nearly always please indicate how distressed you are by this experience", required: false, labels: scale5},
    //         {prompt: "2. Do you ever feel as if people seem to drop hints about you or say things with a double meaning?", required: true, labels: scale4},
    //         {prompt: "If you selected never, please go to the next question.  If you selected sometimes, often or nearly always please indicate how distressed you are by this experience", required: false, labels: scale5},
    //         {prompt: "3. Do you ever feel that you are not a very animated person?", required: true, labels: scale4},
    //         {prompt: "If you selected never, please go to the next question.  If you selected sometimes, often or nearly always please indicate how distressed you are by this experience", required: false, labels: scale5},

    //         {prompt: "4. Do you ever feel that you are not much of a talker when you are conversing with other people?", required: true, labels: scale4},
    //         {prompt: "If you selected never, please go to the next question.  If you selected sometimes, often or nearly always please indicate how distressed you are by this experience", required: false, labels: scale5},

    //         {prompt: "5. Do you ever feel as if things in magazines or on TV were written especially for you?", required: true, labels: scale4},
    //         {prompt: "If you selected never, please go to the next question.  If you selected sometimes, often or nearly always please indicate how distressed you are by this experience", required: false, labels: scale5},

    //         {prompt: "6. Do you ever feel as if some people are not what they seem to be?", required: true, labels: scale4},
    //         {prompt: "If you selected never, please go to the next question.  If you selected sometimes, often or nearly always please indicate how distressed you are by this experience", required: false, labels: scale5},

    //         {prompt: "7. Do you ever feel as if you are being persecuted in some way?", required: true, labels: scale4},
    //         {prompt: "If you selected never, please go to the next question.  If you selected sometimes, often or nearly always please indicate how distressed you are by this experience", required: false, labels: scale5},

    //         {prompt: "8. Do you ever feel that you experience few or no emotions at important events?", required: true, labels: scale4},
    //         {prompt: "If you selected never, please go to the next question.  If you selected sometimes, often or nearly always please indicate how distressed you are by this experience", required: false, labels: scale5},

    //         {prompt: "9. Do you ever feel pessimistic about everything?", required: true, labels: scale4},
    //         {prompt: "If you selected never, please go to the next question.  If you selected sometimes, often or nearly always please indicate how distressed you are by this experience", required: false, labels: scale5},

    //         {prompt: "10. Do you ever feel as if there is a conspiracy against you?", required: true, labels: scale4},
    //         {prompt: "If you selected never, please go to the next question.  If you selected sometimes, often or nearly always please indicate how distressed you are by this experience", required: false, labels: scale5},

    //         {prompt: "11. Do you ever feel as if you are destined to be someone very important?", required: true, labels: scale4},
    //         {prompt: "If you selected never, please go to the next question.  If you selected sometimes, often or nearly always please indicate how distressed you are by this experience", required: false, labels: scale5},

    //         {prompt: "12. Do you ever feel as if there is no future for you?", required: true, labels: scale4},
    //         {prompt: "If you selected never, please go to the next question.  If you selected sometimes, often or nearly always please indicate how distressed you are by this experience", required: false, labels: scale5},

    //         {prompt: "13. Do you ever feel that you are a very special or unusual person?", required: true, labels: scale4},
    //         {prompt: "If you selected never, please go to the next question.  If you selected sometimes, often or nearly always please indicate how distressed you are by this experience", required: false, labels: scale5},

    //         {prompt: "14. Do you ever feel as if you do not want to live anymore?", required: true, labels: scale4},
    //         {prompt: "If you selected never, please go to the next question.  If you selected sometimes, often or nearly always please indicate how distressed you are by this experience", required: false, labels: scale5},

    //         {prompt: "15. Do you ever think that people can communicate telepathically?", required: true, labels: scale4},
    //         {prompt: "If you selected never, please go to the next question.  If you selected sometimes, often or nearly always please indicate how distressed you are by this experience", required: false, labels: scale5},

    //         {prompt: "16. Do you ever feel that you have no interest to be with other people?", required: true, labels: scale4},
    //         {prompt: "If you selected never, please go to the next question.  If you selected sometimes, often or nearly always please indicate how distressed you are by this experience", required: false, labels: scale5},

    //         {prompt: "17. Do you ever feel as if electrical devices such as computers can influence the way you think?", required: true, labels: scale4},
    //         {prompt: "If you selected never, please go to the next question.  If you selected sometimes, often or nearly always please indicate how distressed you are by this experience", required: false, labels: scale5},

    //         {prompt: "18. Do you ever feel that you are lacking in motivation to do things?", required: true, labels: scale4},
    //         {prompt: "If you selected never, please go to the next question.  If you selected sometimes, often or nearly always please indicate how distressed you are by this experience", required: false, labels: scale5},

    //         {prompt: "19. Do you ever cry about nothing?", required: true, labels: scale4},
    //         {prompt: "If you selected never, please go to the next question.  If you selected sometimes, often or nearly always please indicate how distressed you are by this experience", required: false, labels: scale5},

    //         {prompt: "20. Do you believe in the power of witchcraft, voodoo or the occult?", required: true, labels: scale4},
    //         {prompt: "If you selected never, please go to the next question.  If you selected sometimes, often or nearly always please indicate how distressed you are by this experience", required: false, labels: scale5},

    //         {prompt: "21. Do you ever feel that you are lacking in energy?", required: true, labels: scale4},
    //         {prompt: "If you selected never, please go to the next question.  If you selected sometimes, often or nearly always please indicate how distressed you are by this experience", required: false, labels: scale5},

    //         {prompt: "22. Do you ever feel that people look at you oddly because of your appearance?", required: true, labels: scale4},
    //         {prompt: "If you selected never, please go to the next question.  If you selected sometimes, often or nearly always please indicate how distressed you are by this experience", required: false, labels: scale5},

    //         {prompt: "23. Do you ever feel that your mind is empty?", required: true, labels: scale4},
    //         {prompt: "If you selected never, please go to the next question.  If you selected sometimes, often or nearly always please indicate how distressed you are by this experience", required: false, labels: scale5},

    //         {prompt: "24. Do you ever feel as if the thoughts in your head are being taken away from you?", required: true, labels: scale4},
    //         {prompt: "If you selected never, please go to the next question.  If you selected sometimes, often or nearly always please indicate how distressed you are by this experience", required: false, labels: scale5},

    //         {prompt: "25. Do you ever feel that you are spending all your days doing nothing?", required: true, labels: scale4},
    //         {prompt: "If you selected never, please go to the next question.  If you selected sometimes, often or nearly always please indicate how distressed you are by this experience", required: false, labels: scale5},

    //         {prompt: "26. Do you ever feel as if the thoughts in your head are not your own?", required: true, labels: scale4},
    //         {prompt: "If you selected never, please go to the next question.  If you selected sometimes, often or nearly always please indicate how distressed you are by this experience", required: false, labels: scale5},

    //         {prompt: "27. Do you ever feel that your feelings are lacking in intensity?", required: true, labels: scale4},
    //         {prompt: "If you selected never, please go to the next question.  If you selected sometimes, often or nearly always please indicate how distressed you are by this experience", required: false, labels: scale5},

    //         {prompt: "28. Have your thoughts ever been so vivid that you were worried other people would hear them?", required: true, labels: scale4},
    //         {prompt: "If you selected never, please go to the next question.  If you selected sometimes, often or nearly always please indicate how distressed you are by this experience", required: false, labels: scale5},

    //         {prompt: "29. Do you ever feel that you are lacking in spontaneity?", required: true, labels: scale4},
    //         {prompt: "If you selected never, please go to the next question.  If you selected sometimes, often or nearly always please indicate how distressed you are by this experience", required: false, labels: scale5},

    //         {prompt: "30. Do you ever hear your own thoughts being echoed back to you?", required: true, labels: scale4},
    //         {prompt: "If you selected never, please go to the next question.  If you selected sometimes, often or nearly always please indicate how distressed you are by this experience", required: false, labels: scale5},

    //         {prompt: "31. Do you ever feel as if you are under the control of some force or power other than yourself?", required: true, labels: scale4},
    //         {prompt: "If you selected never, please go to the next question.  If you selected sometimes, often or nearly always please indicate how distressed you are by this experience", required: false, labels: scale5},

    //         {prompt: "32. Do you ever feel that your emotions are blunted?", required: true, labels: scale4},
    //         {prompt: "If you selected never, please go to the next question.  If you selected sometimes, often or nearly always please indicate how distressed you are by this experience", required: false, labels: scale5},

    //         {prompt: "33. Do you ever hear voices when you are alone?", required: true, labels: scale4},
    //         {prompt: "If you selected never, please go to the next question.  If you selected sometimes, often or nearly always please indicate how distressed you are by this experience", required: false, labels: scale5},

    //         {prompt: "34. Do you ever hear voices talking to each other when you are alone?", required: true, labels: scale4},
    //         {prompt: "If you selected never, please go to the next question.  If you selected sometimes, often or nearly always please indicate how distressed you are by this experience", required: false, labels: scale5},

    //         {prompt: "35. Do you ever feel that you are neglecting your appearance or personal hygiene?", required: true, labels: scale4},
    //         {prompt: "If you selected never, please go to the next question.  If you selected sometimes, often or nearly always please indicate how distressed you are by this experience", required: false, labels: scale5},

    //         {prompt: "36. Do you ever feel that you can never get things done?", required: true, labels: scale4},
    //         {prompt: "If you selected never, please go to the next question.  If you selected sometimes, often or nearly always please indicate how distressed you are by this experience", required: false, labels: scale5},

    //         {prompt: "37. Do you ever feel that you have only few hobbies or interests?", required: true, labels: scale4},
    //         {prompt: "If you selected never, please go to the next question.  If you selected sometimes, often or nearly always please indicate how distressed you are by this experience", required: false, labels: scale5},

    //         {prompt: "38. Do you ever feel guilty?", required: true, labels: scale4},
    //         {prompt: "If you selected never, please go to the next question.  If you selected sometimes, often or nearly always please indicate how distressed you are by this experience", required: false, labels: scale5},

    //         {prompt: "39. Do you ever feel like a failure?", required: true, labels: scale4},
    //         {prompt: "If you selected never, please go to the next question.  If you selected sometimes, often or nearly always please indicate how distressed you are by this experience", required: false, labels: scale5},

    //         {prompt: "40. Do you ever feel tense?", required: true, labels: scale4},
    //         {prompt: "If you selected never, please go to the next question.  If you selected sometimes, often or nearly always please indicate how distressed you are by this experience", required: false, labels: scale5},

    //         {prompt: "41. Do you ever feel as if a double has taken the place of a family member, friend or acquaintance?", required: true, labels: scale4},
    //         {prompt: "If you selected never, please go to the next question.  If you selected sometimes, often or nearly always please indicate how distressed you are by this experience", required: false, labels: scale5},

    //         {prompt: "42. Do you ever see objects, people or animals that other people cannot see? ", required: true, labels: scale4},
    //         {prompt: "If you selected never, please go to the next question.  If you selected sometimes, often or nearly always please indicate how distressed you are by this experience", required: false, labels: scale5},


    //     ],
    //     randomize_question_order: false,
    //     scale_width: 1200,
    //     save_trial_parameters: {
    //         choices: true,
    //         prompt: true
    //     }
    // }
    // //   timeline.push(Personality_intro, BFI10, CAPE42);

