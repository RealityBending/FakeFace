/* Measures */ //===============================================================
// Scale Labels
var scale1 = ["Not at All", "Extremely"]
var scale2 = ["Strongly Disagree", "Strongly Agree"]

// Oosterhof and Todorov (2008) - 9 point scale (Not at all to Extremely)
var items = [
    //"The face looked real to me",
    "How attractive do you find this person?",
    // "Would you find this person approachable?",
    "How much would you trust this person?",
    "How much does this person remind you of someone you know?",
    // "How much does this face look like yours?",
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
    //"Real",
    "Attractiveness",
    // "Approachability",
    "Trustworthiness",
    "Familiarity",   // Familiarity (van vugt et al., 2010)
    // "Similarity"
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
    "<b>I am the life of the party</b><br>",
    "<b>I sympathize with others' feelings</b><br>",
    "<b>I get chores done right away</b><br>",
    "<b>I have frequent mood swings</b><br>",
    "<b>I have a vivid imagination</b><br>",
    "<b>I feel entitled to more of everything</b><br>",
    "<b>I do not talk a lot</b><br>",
    "<b>I am not interested in other people's problems</b><br>",
    "<b>I have difficulty understanding abstract ideas</b><br>",
    "<b>I like order</b><br>",
    "<b>I make a mess of things</b><br>",
    "<b>I deserve more things in life</b><br>",
    "<b>I do not have a good imagination</b><br>",
    "<b>I feel other's emotions</b><br>",
    "<b>I am relaxed most of the time</b><br>",
    "<b>I get upset easily</b><br>",
    "<b>I seldom feel blue</b><br>",
    "<b>I would like to be seen driving around in a very expensive car</b><br>",
    "<b>I keep in the background</b><br>",
    "<b>I am not really interested in others</b><br>",
    "<b>I am not interested in abstract ideas</b><br>",
    "<b>I often forget to put things back in their proper place</b><br>",
    "<b>I talk to a lot of different people at parties</b><br>",
    "<b>I would get a lot of pleasure from owning expensive luxury goods</b><br>",
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

// Social Interaction Anxiety Scale (SIAS)
var SIAS_SF = [
    "<b>I have difficulty making eye-contact with others </b><br>",
    "<b>I find it difficult mixing comfortably with the people I work with </b><br>",
    //"<b>I have been paying attention this whole time</b><br>",
    "<b>I tense up if I meet an acquaintance on the street </b><br>",
    "<b>I feel tense if I am alone with just one person </b><br>",
    "<b>I have difficulty talking with other people </b><br>",
    "<b>I find it difficult to disagree with another's point of view </b><br>"
]

var SIAS_dim = [
    "SIAS_1",
    "SIAS_2",
    // "Attention_Check_1",
    "SIAS_3",
    "SIAS_4",
    "SIAS_5",
    "SIAS_6"
]

// Social Phobia Scale (SPS)
var SPS_SF = [
    "<b>I get nervous that people are staring at me as I walk down the street </b><br>",
    "<b>I worry about shaking or trembling when I'm watched by other people </b><br>",
    "<b>I would get tense if I had to sit facing other people on a bus or a train </b><br>",
    "<b>I worry I might do something to attract the attention of other people </b><br>",
    "<b>When in an elevator, I am tense if people look at me </b><br>",
    "<b>I can feel conspicuous standing in a line </b><br>"
]

// Five Factor Narcissism Inventory - Brief Form (Jauk et al., 2022)
var FFNI_BF = [
    "<b>I aspire for greatness</b><br>",
    "<b>Others say I brag too much, but everything I say is true</b><br>",
    "<b>I am comfortable taking on positions of authority</b><br>",
    "<b>When someone does something nice for me, I wonder what they want from me</b><br>",
    "<b>It may seem unfair, but I deserve extra (i.e., attention, privileges, rewards)</b><br>",
    "<b>I like being noticed by others</b><br>",
    "<b>Sometimes to succeed you need to use other people</b><br>",
    "<b>I often fantasize about someday being famous</b><br>",
    "<b>When people judge me, I just don't care</b><br>",
    "<b>I don't generally pay much attention to the woes of others</b><br>",
    "<b>I'm pretty good at manipulating people</b><br>",
    "<b>I often feel as if I need compliments from others in order to be sure of myself</b><br>",
    "<b>I have at times gone into a rage when not treated rightly</b><br>",
    "<b>I feel ashamed when people judge me</b><br>",
    "<b>I would risk injury to do something exciting</b><br>",
    "<b>I am driven to succeed</b><br>",
    "<b>I do not waste my time hanging out with people who are beneath me</b><br>",
    "<b>I tend to take charge of most situations</b><br>",
    "<b>I often think that others aren't telling me the whole truth</b><br>",
    "<b>I believe I am entitled to special accommodations</b><br>",
    //    "<b>Please select 'Strongly Agree' to demonstrate your attention</b><br>",
    "<b>I like being the most popular person at a party</b><br>",
    "<b>I'm willing to exploit others to further my own goals</b><br>",
    "<b>I often fantasize about having lots of success and power</b><br>",
    "<b>Others' opinions of me are of little concern to me</b><br>",
    "<b>I don't get upset with the suffering of others</b><br>",
    "<b>I can talk my way into and out of anything</b><br>",
    "<b>I wish I didn't care so much about what others think of me</b><br>",
    "<b>It really makes me angry when I don't get what I deserve</b><br>",
    "<b>I feel foolish when I make a mistake in front of others</b><br>",
    "<b>I like doing things that are risky or dangerous</b><br>"
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
    //    "Attention_Check_2",
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
var R_GPTS = [
    "<b>I spent time thinking about friends gossiping about me</b><br>",
    "<b>I often heard people referring to me</b><br>",
    "<b>I have been upset by friends and colleagues judging me critically</b><br>",
    "<b>People definitely laughed at me behind my back</b><br>",
    "<b>I have been thinking a lot about people avoiding me</b><br>",
    "<b>People have been dropping hints for me</b><br>",
    "<b>I believed that certain people were not what they seemed</b><br>",
    "<b>People talking about me behind my back upset me</b><br>",
    "<b>Certain individuals have had it in for me</b><br> (i.e., Certain individuals have bad intentions towards me)<br>",
    "<b>People wanted me to feel threatened, so they stared at me</b><br>",
    "<b>I was certain people did things in order to annoy me</b><br>",
    "<b>I was convinced there was a conspiracy against me</b><br>",
    "<b>I was sure someone wanted to hurt me</b><br>",
    "<b>I couldn't stop thinking about people wanting to confuse me</b><br>",
    "<b>I was distressed by being persecuted</b><br>",
    "<b>It was difficult to stop thinking about people wanting to make me feel bad</b><br>",
    "<b>People have been hostile towards me on purpose</b><br>",
    "<b>I was angry that someone wanted to hurt me</b><br>",
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
    "<b>My beliefs about myself often conflict with one another</b><br>",  //(R)
    "<b>On one day I might have one opinion of myself and on another day I might have a different opinion</b><br>",  //(R)
    "<b>I spend a lot of time wondering about what kind of person I really am</b><br>",  //(R)
    "<b>Sometimes I feel that I am not really the person that I appear to be</b><br>",     //(R)
    "<b>When I think about the kind of person I have been in the past, I'm not sure what I was really like</b><br>",  //(R)
    //    "<b>I have been distracted throughout the task</b><br>",
    "<b>I seldom experience conflict between the different aspects of my personality</b><br>",
    "<b>Sometimes I think I know other people better than I know myself</b><br>",    //(R)
    "<b>My beliefs about myself seem to change very frequently</b><br>", //(R)
    "<b>If I were asked to describe my personality, my description might end up being different from one day to another day</b><br>",  //(R)
    "<b>Even if I wanted to, I don't think I could tell someone what I'm really like</b><br>",  //(R)
    "<b>In general, I have a clear sense of who I am and what I am</b><br>",
    "<b>It is often hard for me to make up my mind about things because I don't really know what I want</b><br>"  //(R)
]

var SCC_dim = [
    "SCC_1_R",
    "SCC_2_R",
    "SCC_3_R",
    "SCC_4_R",
    "SCC_5_R",
    //    "Attention_Check_4",
    "SCC_6",
    "SCC_7_R",
    "SCC_8_R",
    "SCC_9_R",
    "SCC_10_R",
    "SCC_11",
    "SCC_12_R"]

// Illusory Beliefs Inventory (Kingdon, et al., 2011)
var IBI_kingdon = [
    "I use prayer to ward off misfortune</b><br>",
    "I have sometimes changed my plans because I had a bad feeling</b><br>",
    "The soul does not continue to exist after death</b><br>", // (R)
    "I believe in magic</b><br>",
    "I sometimes perform special rituals for protection</b><br>",
    "If I think too much about something bad, it will happen</b><br>",
    "Magical forces have impacted on my life</b><br>",
    "It is just a matter of time until science can explain everything</b><br>",  // (R)
    "I do something special to prevent bad luck</b><br>",
    "Sometimes I get a feeling that something is going to happen before it happens</b><br>",
    "It is not possible to cast a magical spell</b><br>",  //(R)
    "Magic causes miracles to happen</b><br>",
    "Life is nothing more than a series of random events</b><br>",  //(R)
    "Good luck charms do not work</b><br>",  //(R)
    "If I think too much about something, it will happen</b><br>",
    "I avoid unlucky numbers</b><br>",
    "Most things that happen to us are the result of fate</b><br>",
    "I believe guardian angels or other spiritual forces protect me</b><br>",
    "Science is the key to understanding how things happen</b><br>",  //(R)
    "My thoughts alone can alter reality</b><br>",
    "There is an invisible force guiding us all</b><br>",
    "You should never tempt fate</b><br>",
    "I do not believe in a spiritual presence</b><br>",  //(R)
    "I believe in a higher power or God</b><br>"
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
    "<b>I feel upset </b><br>",
    "<b>I feel frightened </b><br>",
    //"<b>I am distracted right now </b><br>",
    "<b>I feel nervous </b><br>",
    "<b>I am jittery </b><br>",
    "<b>I feel confused </b><br>"
]

var STAIS_S_dim = [
    "State_Anxiety_1",
    "State_anxiety_2",
    "State_Anxiety_3",
    //"Attention_Check_3",
    "State_Anxiety_4",
    "State_Anxiety_5",]

var STAIS_T = [
    "<b>I feel that difficulties are piling up so that I cannot overcome them </b><br>",
    "<b>I worry too much over something that really doesn't matter </b><br>",
    "<b>Some unimportant thoughts run through my mind and bothers me </b><br>",
    //    "<b>Please select 'Strongly Disagree' to demonstrate your attention</b><br>",
    "<b>I take disappointment so keenly that I can't put them out of my mind </b><br>",
    "<b>I get in a state of tension or turmoil as I think over my recent concerns and interests </b><br>"
]


// Intolerance of Uncertainty (Carleton et al., 2007)
var IUS = [
    "<b>Unforeseen events upset me greatly</b><br>",
    "<b>It frustrates me not having all the information I need</b><br>",
    "<b>One should always look ahead so as to avoid surprises</b><br>",
    "<b>A small unforeseen event can ruin everything, even with the best of planning</b><br>",
    "<b>I always want to know what the future has in store for me</b><br>",
    "<b>I can't stand being taken by surprise</b><br>",
    "<b>I should be able to organize everything in advance</b><br>",
    "<b>Uncertainty keeps me from living a full life</b><br>",
    "<b>When its time to act, uncertainty paralyses me</b><br>",
    "<b>When I am uncertain, I can't function very well</b><br>",
    "<b>The smallest doubt can stop me from acting</b><br>",
    "<b>I must get away from all uncertain situations</b><br>"
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

var GAAIS = [
    "<b>I think current Artificial Intelligence algorithms can generate very realistic images</b><br>",
    "<b>Organisations use Artificial Intelligence unethically</b><br>",
    "<b>I think videos generated by Artificial Intelligence are impossible to distinguish from real videos</b><br>",
    "<b>I am interested in using artificially intelligent systems in my daily life</b><br>",
    "<b>I think Computer-Generated Imagery (CGI) software is capable of perfectly imitating reality</b><br>",
    "<b>I think Artificial Intelligence is dangerous</b><br>",
    "<b>I think current Artificial Intelligence algorithms can generate very realistic videos</b><br>",
    "<b>Artificial Intelligence is exciting</b><br>",
    "<b>There are many beneficial applications of Artificial Intelligence</b><br>",
    "<b>Images of faces or people generated by Artificial Intelligence will contain errors</b><br>"
]

var GAAIS_dim = [
    "GAAIS_1",
    "GAAIS_2_R",
    "GAAIS_3",
    "GAAIS_4",
    "GAAIS_5",
    "GAAIS_6_R",
    "GAAIS_7",
    "GAAIS_8",
    "GAAIS_9",
    "GAAIS_10_R",
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

