console.log("Welcome to Spotify");

let songIndex = 0;
let audioElement = new Audio('Songs/song1.mp3');
let masterPlay = document.getElementById('masterPlay');
let progressbar = document.getElementById('progressbar');
let gif = document.getElementById('gif');


let songs = [
    { songName: "Softly Karan Aujla", filePath: "Songs/song1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Ve Kamleya Arijit Singh", filePath: "Songs/song2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Wavy Karan Aujla", filePath: "Songs/song3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Agency Talha Anjum", filePath: "Songs/song4.mp3", coverPath: "covers/4.jpg" },
    { songName: "You and Me Shubh", filePath: "Songs/song5.mp3", coverPath: "covers/5.jpg" }
];


masterPlay.addEventListener('click', () => {
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause(); // <-- corrected this line
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity = 0;
    }
});

    





progressbar.addEventListener('timeupdate' , ()=>{
  console.log('timeupdate')
})