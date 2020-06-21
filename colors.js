let colorMaps = [
    "black",
    "white",
    "yellow",
    "orange",
    "rosa",
    "red",
    "purple",
    "blue",
    "green",
    "brown"
];

let isChrome = navigator.userAgent.indexOf("Chrome") > -1;

function createStylesheet(name) {
    var head = document.head;
    var link = document.createElement("link");
    link.type = "text/css";
    link.href = "goll-"+ name + ".css";
    link.rel = "stylesheet";
    link.id = "colorcss";

    head.appendChild(link);
}

function changeColor(index) {
    var video = document.getElementById('introvideo');
    var source = document.getElementById('source');

    document.getElementById("colorcss").remove();
    createStylesheet(colorMaps[index]);

    if(typeof video !== undefined) {
        if(source != null) {
            source.setAttribute("src", "assets/goll-"+ colorMaps[index] + (isChrome ? ".mp4" : ".webm"));
            source.setAttribute("type", "video/" + (isChrome ? "mp4": "webm"));
            console.log("Loaded " + (isChrome ? "mp4" : "webm"));
        }
        if(video != null) {
            video.load();
            video.play();
        }
    }

    console.log("Selected theme " + colorMaps[index]);

    localStorage.setItem("color-selection", index);
}

function loadColor() {
    var selectedcolor = localStorage.getItem("color-selection");
    if(selectedcolor == null ) {
        selectedcolor = 0;
    }
    
    if(selectedcolor !== undefined) {
        console.log("Save user selected theme " + selectedcolor);
        changeColor(selectedcolor);
    }
}

function initDefaults() {
    // always init game with sound on and music off
    localStorage.setItem("music", 0);
    localStorage.setItem("sound", 1);
    
}

function setState() {
    let musicEnabled = localStorage.getItem("music");
    if(musicEnabled == 1) {
        setMusicStateOn(["music1", "music2"]);
    }
    else {
        setMusicStateOff(["music1", "music2"]);
    }

    let soundEnabled = localStorage.getItem("sound");
    if(soundEnabled == 1 ) {
        setSoundStateOn(["sound1", "sound2"]);
    }
    else {
        setSoundStateOff(["sound1", "sound2"]);
    }

    console.log("Music is " + (musicEnabled == 0 ? "disabled" : "enabled"));
    console.log("Sound is " + (soundEnabled == 0 ? "disabled" : "enabled"));
}

function setMusicStateOn(buttons)
{
    for( let i = 0; i < buttons.length; i ++ ) {
        let elem = document.getElementById(buttons[i]);
        elem.classList.remove("music-off");
        elem.classList.add("music-on");
    }
}

function setMusicStateOff(buttons)
{
    for( let i = 0; i < buttons.length; i ++ ) {
        let elem = document.getElementById(buttons[i]);
        elem.classList.remove("music-on");
        elem.classList.add("music-off");
    }
}

function setSoundStateOn(buttons) 
{
    for( let i = 0; i < buttons.length; i ++ ) {
        let elem = document.getElementById(buttons[i]);
        elem.classList.remove("sound-off");
        elem.classList.add("sound-on");
    }
}

function setSoundStateOff(buttons) 
{
    for( let i = 0; i < buttons.length; i ++ ) {
        let elem = document.getElementById(buttons[i]);
        elem.classList.remove("sound-on");
        elem.classList.add("sound-off");
    }
}

function toggleMusic() {
    let musicEnabled = localStorage.getItem("music");
    let music = document.getElementById("intro-music");
    
    if(musicEnabled == 0 ) {
        musicEnabled = 1;
        setMusicStateOn(["music1", "music2"]);
        if(music != null)
            music.play();
    }
    else {
        musicEnabled = 0;
        setMusicStateOff(["music1", "music2"]);
        if(music != null)
            music.pause();
    }
    localStorage.setItem("music", musicEnabled);
}

function toggleSound() {
    let soundEnabled = localStorage.getItem("sound");
    
    if(soundEnabled == 0 ) {
        soundEnabled = 1;
        setSoundStateOn(["sound1","sound2"]);
    }
    else {
        soundEnabled = 0;
        setSoundStateOff(["sound1", "sound2"]);
    }
    localStorage.setItem("sound", soundEnabled);
}


function displayHighscore() {
    let elem = document.getElementById("highscore");
    if(elem != null) {
        let highscore = localStorage.getItem("highscore");
        if( highscore != null ) {
            elem.innerText = "Highscore: " + highscore;
        }
    }
}