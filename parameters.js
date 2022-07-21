/* Measures */ //===============================================================
// Scale Labels
var scale1 = ["Not at All", "Extremely"]
var scale2 = ["Strongly Disagree", "Strongly Agree"]

// Oosterhof and Todorov (2008) - 9 point scale (Not at all to Extremely)
var items = [
    "<b>Attractive</b>",
    "<b>Confident</b>",
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
    "Attractiveness",
    "Confidence"
    // "Weirdness",
    // "Dominance",
]

var items2 = [
    "<b>Approachable</b>",
    "<b>Familiar</b>",
    "<b>Trustworthy</b>",
    "<b>Sociable</b>",
    "<b>Similar</b>"
]

var dimensions2 = [
    "Approachability",
    "Familiarity",   // Familiarity (van vugt et al., 2010)
    "Trustworthiness",
    "Sociability",
    "Similarity"  //Similarity (Van Vugt et al., 2006)
]

var Mini_IPIP = [
    "Am the life of the party",
    "Sympathize with others' feelings",
    "Get chores done right away",
    "Have frequent mood swings",
    "Have a vivid imagination",
    "Do not talk a lot",
    "Am not interested in other people's problems",
    "Often forget to put things back in their proper place",
    "Am relaxed most of the time",
    "Am not interested in abstract ideas",
    "Talk to a lot of different people at parties",
    "Feel others' emotions",
    "Like order",
    "Get upset easily",
    "Have difficulty understanding abstract ideas",
    "Keep in the background",
    "Am not really interested in others",
    "Make a mess of things",
    "Seldom feel blue",
    "Do not have a good imagination"
]

var IPIP_Dim = [
    "Ext_1", "Agr_2", "Con_3", "Neu_4", "Int_5",
    "Ext_6", "Agr_7", "Con_8", "Neu_9", "Int_10",
    "Ext_11", "Agr_12", "Con_13", "Neu_14", "Int_15",
    "Ext_16", "Agr_17", "Con_18", "Neu_19", "Int_20"
]

// Five Factor Narcissism Inventory - Brief Form (Jauk et al., 2022)
var FFNI_BF = [
    "I aspire for greatness.",
    "Others say I brag too much, but everything I say is true.",
    "I am comfortable taking on positions of authority.",
    "When someone does something nice for me, I wonder what they want from me",
    "It may seem unfair, but I deserve extra (i.e., attention, privileges, rewards).",
    "I like being noticed by others.",
    "Sometimes to succeed you need to use other people.",
    "I often fantasize about someday being famous.",
    "When people judge me, I just don't care.",
    "I'm pretty good at manipulating people.",
    "I often feel as if I need compliments from others in order to be sure of myself.",
    // "I have at times gone into a rage when not treated rightly.",
    "I feel ashamed when people judge me.",
    // "I would risk injury to do something exciting.",
    "I am driven to succeed.",
    "I do not waste my time hanging out with people who are beneath me.",
    "I tend to take charge of most situations.",
    "I often think that others aren't telling me the whole truth.",
    "I believe I am entitled to special accommodations.",
    "I like being the most popular person at a party.",
    "I'm willing to exploit others to further my own goals.",
    "I often fantasize about having lots of success and power.",
    "Others' opinions of me are of little concern to me.",
    "I don't get upset with the suffering of others.",
    "I can talk my way into and out of anything.",
    "I wish I didn't care so much about what others think of me.",
    // "It really makes me angry when I don’t get what I deserve.",
    "I feel foolish when I make a mistake in front of others."
    // "I like doing things that are risky or dangerous."
]

var FFNI_Dim = [
    "Accl_1", "Arrog_2", "Author_3", "Distrust_4", "Ent_5",
    "Exh_6", "Expl_7", "GF_8", "Indiff(R)_9", "LOE_10",
    "Man_11", "Admir_12", "Shame_13", "Accl_14", "Arrog_15",
    "Author_16", "Distrust_17", "Ent_18", "Exh_19", "Expl_20",
    "GF_21", "Indiff(R)_22", "LOE_23", "Man_24", "Admir_25", "Shame_26"
]  // reactive anger and thrill-seeking subscales have been excluded

// Paranoia: R-GPTS (Freeman et al., 2019)
var R_GPTS =[
    "I spent time thinking about friends gossiping about me",
    "I often heard people referring to me",
    "I have been upset by friends and colleagues judging me critically",
    "People definitely laughed at me behind my back",
    "People have been dropping hints for me",
    "I believed that certain people were not what they seemed",
    "People talking about me behind my back upset me",
    "Certain individuals have had it in for me",
    "People wanted me to feel threatened, so they stared at me",
    "I was certain people did things in order to annoy me",
    "I was convinced there was a conspiracy against me",
    "I was sure someone wanted to hurt me",
    "I couldn't stop thinking about people wanting to confuse me",
    "I was distressed by being persecuted",
    "It was difficult to stop thinking about people wanting to make me feel bad",
    "People have been hostile towards me on purpose",
    "I was angry that someone wanted to hurt me",
]

var GPTS_Dim = [
    "Ref_1", "Ref_2", "Ref_3", "Ref_4",
    "Ref_5", "Ref_6", "Ref_7", "Ref_8",
    "Pers_1", "Pers_2", "Pers_3", "Pers_4",
    "Pers_5", "Pers_6", "Pers_7","Pers_8",
    "Pers_9", "Pers_10",
]

// Self-Concept Clarity (Campbell et al., 1996)
var SCC = [
    "My beliefs about myself often conflict with one another.",  //(R)
    "On one day I might have one opinion of myself and on another day I might have a different opinion.",  //(R)
    "I spend a lot of time wondering about what kind of person I really am",  //(R)
    "Sometimes I feel that I am not really the person that I appear to be",     //(R)
    "When I think about the kind of person I have been in the past, I'm not sure what I was really like",  //(R)
    "I seldom experience conflict between the different aspects of my personality",
    "Sometimes I think I know other people better than I know myself.",    //(R)
    "My beliefs about myself seem to change very frequently", //(R)
    "If I were asked to describe my personality, my description might end up being different from one day to another day.",  //(R)
    "Even ill wanted to, I don't think I could tell someone what I'm really like",  //(R)
    "In general, I have a clear sense of who I am and what I am.",
    "It is often hard for me to make up my mind about things because I don't really know what I want."  //(R)
]

// Illusory Beliefs Inventory (Kingdon, et al., 2011)
var IBI = [
    "I use prayer to ward off misfortune",
    "I have sometimes changed my plans because I had a bad feeling",
    "The soul does not continue to exist after death", // (R)
    "I believe in magic",
    "I sometimes perform special rituals for protection",
    "If I think too much about something bad, it will happen",
    "Magical forces have impacted on my life",
    "It is just a matter of time until science can explain everything",  // (R)
    "I do something special to prevent bad luck",
    "Sometimes I get a feeling that something is going to happen before it happens",
    "It is not possible to cast a magical spell",  //(R)
    "Magic causes miracles to happen",
    "Life is nothing more than a series of random events",  //(R)
    "Good luck charms do not work",  //(R)
    "If I think too much about something, it will happen",
    "I avoid unlucky numbers",
    "Most things that happen to us are the result of fate",
    "I believe guardian angels or other spiritual forces protect me",
    "Science is the key to understanding how things happen",  //(R)
    "My thoughts alone can alter reality",
    "There is an invisible force guiding us all",
    "You should never tempt fate",
    "I do not believe in a spiritual presence",  //(R)
    "I believe in a higher power or God"
    ]

var IBI_Dim = [
    "Spirit_1", "Int_2", "Spirit_3",
    "Magic_4", "Magic_5", "Int_6",
    "Magic_7", "Spirit_8", "Int_9",
    "Int_10", "Magic_11", "Magic_12",
    "Spirit_13", "Magic_14", "Int_15",
    "Int_16", "Int_17", "Spirit_18",
    "Spirit_19", "Int_20", "Spirit_21",
    "Spirit_22", "Spirit_23", "Spirit_24"]



// State Trait Anxiety Index - Short (Zsido et al., 2020)
var STAIS = [
    "I feel upset",
    "I feel frightened",
    "I feel nervous",
    "I am jittery",
    "I feel confused"
]

var STAIT = [
    "I feel that difficulties are piling up so that I cannot overcome them",
    "I worry too much over something that really doesn't matter",
    "Some unimportant thoughts run through my mind and bothers me",
    "I take disappointment so keenly that I can't put them out of my mind",
    "I get in a state of tension or turmoil as I think over my recent concerns and interests"
]




/*===============================================================*/
// Internal Utility Functions
/*===============================================================*/

// Merge survey responses without overwriting
const merge = (...arguments) => {

    // create a new object
    let target = {};

    // deep merge the object into the target object
    const merger = (obj) => {
        for (let prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                if (Object.prototype.toString.call(obj[prop]) === '[object Object]') {
                    // if the property is a nested object
                    target[prop] = merge(target[prop], obj[prop]);
                } else {
                    // for regular property
                    target[prop] = obj[prop];
                }
            }
        }
    };

    // iterate through all objects and
    // deep merge them with target
    for (let i = 0; i < arguments.length; i++) {
        merger(arguments[i]);
    }

    return target;
};





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



