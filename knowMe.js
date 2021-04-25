var readline = require('readline-sync');
var userName = readline.question("What's your name...?\n");
console.log(`Hello ${userName}, Nice to see you here, Let's see how much do you know about me.`);
score = 0;
var qusObj = [
    {
        qus: "What's my DOB...?",
        options: ['10th June', '8th July', '2nd Feb', '7th July'],
        ans: "7th July"
    },
    {
        qus: "What do I like most...?",
        options: ['Mountains', 'Beaches', 'Cities', 'lakes'],
        ans: 'Mountains'
    },
    {
        qus: "What do I love to do...?",
        options: ['Fishing & Trackig', 'Movies & Games', 'Coding & Gaming', 'Singing & Dancing'],
        ans: "Coding & Gaming"
    },
    {
        qus: "How is my favourite Marvel superhero...?",
        options: ['Iron Man', 'Captain America', 'Balck Panther', 'Thor'],
        ans: "Captain America"
    },
    {
        qus: "How is my favourite DC superhero...?",
        options: ['BatMan', 'SuperMan', 'AquaMan', 'Wonder Woman'],
        ans: "BatMan"
    }
]
function play(qus, ans, opt) {
    var userAns = opt[readline.keyInSelect(opt, qus)];
    if (userAns === ans) {
        console.log("Right!\n");
        score++;
    }
    else {
        console.log("Wrong!\n");
    }
    console.log("\t----------------------")
}
for (let i = 0; i < qusObj.length; i++) {
    play(qusObj[i].qus, qusObj[i].ans, qusObj[i].options);
}
console.log(`\nYour Overall Score is ${score}.`)
