const string = "Hello";

function shout(string) {
    return string.toUpperCase();
}

function whisper(string){
    return string.toLowerCase();
}

function logShout(string){
    return console.log(string.toUpperCase());
}

function logWhisper(string){
    return console.log(string.toLowerCase());
}


function sayHiToHeadphonedRoommate(string){ 
    if (string.toLowerCase() === string){
        console.log("I can't hear you!");
    }

    if (string.toUpperCase() === string){
        console.log("YES INDEED!");
    }

    if (string === "Let's have dinner together!") {
        console.log("I would love to!");
    }
}