const music = document.querySelector("audio"); //audio will be get through audio tag
const play = document.getElementById("play"); //instance of play button

const img = document.querySelector("img"); // instance of img through img tag
const artist = document.getElementById("artist");
const title = document.getElementById("title");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const songs = [
  {
    name: "music1",
    title: "Jab Tak..", //0
    artist: "Armaan Malik",
  },
  {
    name: "music2",
    title: "Main Rahoon", //1
    artist: "Armaan Malik",
  },
  {
    name: "music3",
    title: "O Sathi", //2
    artist: "Atif Aslam",
  },
];

let isplaying = false;

//play
const playmusic = () => {
  console.log("play clicked");
  music.play();
  isplaying = true;
  play.classList.replace("fa-play", "fa-pause");
  img.classList.add("anime");
  //when play button is clicked , on music which is instance of our audio , on this music a method called .play() will run
  //.play can be used only for audio instances
  img.classList.add("anime");
  //anime class will also be added and all props given to an9me class specifically animations will get applied.
};

//pause
const pausemusic = () => {
  console.log("pause clicked");
  music.pause();
  isplaying = false;
  play.classList.replace("fa-pause", "fa-play");
  //when play button is clicked , on music which is instance of our audio , on this music a method called .play() will run
  //.play can be used only for audio instances
  img.classList.remove("anime");
  //anime class will also be added and all props given to an9me class specifically animations will get applied.
};

play.addEventListener("click", () => {
  // if (isplaying == false) {
  //   playfn();
  // } else {
  //   pausemusic();
  // }
  isplaying ? pausemusic() : playmusic();
});

//Changing music data
const loadSong = (songs) => {
  title.textContent = songs.title; //instance got through id
  artist.textContent = songs.artist; //instance got through id
  music.src = "music/" + songs.name + ".mp3"; //instance got through tag
  img.src = songs.name + ".jpg";
};

//loadSong(songs[2]); //here what we have passed is songs object
songIndex = 0;
const nextSong = () => {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songs[songIndex]);
  playmusic();
};
const prevSong = () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong(songs[songIndex]);
  playmusic();
};

next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);

// const artistlist=document.getElementById('artist-list');
// const titlelist=document.getElementById('title-list');

const songslist1 = [
  {
    name: "music1",
    title: "Jab Tak..", //0
    artist: "Armaan Malik",
  },
  {
    name: "music2",
    title: "Main Rahoon", //1
    artist: "Armaan Malik",
  },
  {
    name: "music3",
    title: "O Sathi", //2
    artist: "Atif Aslam",
  },
  {
    name: "music8",
    title: "Hamdard..", //3
    artist: "Arijit Singh",
  },
  {
    name: "music5",
    title: "Jab Tak..", //4
    artist: "Armaan Malik",
  },
  {
    name: "music6",
    title: "Main Rahoon", //5
    artist: "Armaan Malik",
  },
  {
    name: "music8",
    title: "O Sathi", //6
    artist: "Atif Aslam",
  },
  {
    name: "music9",
    title: "Hamdard..", //7
    artist: "Arijit Singh",
  },
  {
    name: "music3",
    title: "Hamdard..", //8
    artist: "Arijit Singh",
  },
  {
    name: "music1",
    title: "Jab Tak..", //0
    artist: "Armaan Malik",
  },
  {
    name: "music2",
    title: "Main Rahoon", //1
    artist: "Armaan Malik",
  },
  {
    name: "music3",
    title: "O Sathi", //2
    artist: "Atif Aslam",
  },
  {
    name: "music4",
    title: "Hamdard..", //3
    artist: "Arijit Singh",
  },
  {
    name: "music5",
    title: "Jab Tak..", //4
    artist: "Armaan Malik",
  },
  {
    name: "music6",
    title: "Main Rahoon", //5
    artist: "Armaan Malik",
  },
  {
    name: "music8",
    title: "O Sathi", //6
    artist: "Atif Aslam",
  },
  {
    name: "music9",
    title: "Hamdard..", //7
    artist: "Arijit Singh",
  },
  {
    name: "music3",
    title: "Hamdard..", //8
    artist: "Arijit Singh",
  },
];

let listitems = document.querySelectorAll(".listitem");
console.log(listitems);

let innerHTML = `<div class="list-item-cont nom">
       <h2 id = "title-list" > Song-name </h2>
        <h3 id="artist-list"> singer </h3>
        <div class="imagecontainer-list">
          <img src=" music1.jpg " class="list-image/>
        </div>
        <audio src=" music1.mp3 "></audio>

        <div class="music_controls-list">
          <i class="fas fa-backward" id="prev-list" title="previous"></i>
          <i class="fas fa-play main-button" id="play-list" title="Play"></i>
          <i class="fas fa-forward" id="next-list" title="Next"></i>
        </div> 
        </div>`;

         
//mpdify this html before appnding to solve the problem
//let imghtml = ``;
//Converting html into array
//      let wordarray=innerHTML.split(' ');
//      console.log(wordarray);

//getting index of strings we want to change
//     const sng= wordarray.indexOf('Song-name');
//     const arti= wordarray.indexOf('singer');
//     console.log(`song:${sng},arti:${arti}`);

//Chnaging these indices
//     const newarray=wordarray.splice(sng,1,"adu");
//    const newarray2=wordarray.splice(arti,1,"padu");
//    console.log(newarray);
//     console.log(wordarray);

//convert array back to string to pass in fn

//     let newHTML=wordarray.toString();
// innerHTML=innerHTML.replace("Song-name","Adu");
// innerHTML=innerHTML.replace("singer","padu");
// console.log(newHTML);
let index = 0;
listitems.forEach((listitem) => {

  innerHTML = innerHTML.replace("Song-name", songslist1[index].title);
  innerHTML = innerHTML.replace("singer", songslist1[index].artist);
  innerHTML = innerHTML.replace(
    "music1.jpg",
    songslist1[index].name + ".jpg"
  );
  innerHTML = innerHTML.replace(
    "music1.mp3",
     songslist1[index].name + ".mp3"
  );
  console.log(listitem);
  listitem.insertAdjacentHTML("afterbegin", innerHTML);
  innerHTML = innerHTML.replace(songslist1[index].title, "Song-name");
  innerHTML = innerHTML.replace(songslist1[index].artist, "singer");
  innerHTML = innerHTML.replace(
    songslist1[index].name + ".jpg",
    "music1.jpg"
  );
  innerHTML = innerHTML.replace(
     songslist1[index].name + ".mp3",
    "music1.mp3"
  );
 
  index = index + 1;
});

var rootElement = document.documentElement;
let listanime=document.querySelector('.list-item-cont');
  
let main=document.getElementById('main');
listitems.forEach((listitem) => {
  let i = 0;
  listitem.addEventListener("click", () => {
  
    while (listitems[i] != listitem) {
      i++;
    }
    console.log(i);
    console.log(listitem.textContent);
    title.textContent = songslist1[i].title;
    artist.textContent = songslist1[i].artist;
    music.src =  songslist1[i].name + ".mp3"; //instance got through tag
    img.src = songslist1[i].name + ".jpg";
    main.style.transform="rotate(360deg)";
    music.pause();
    isplaying = false;
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove("anime");
    main.style.transform="rotate(360deg)";
    // rootElement.scrollTo({
    //   top:0,behavior:"smooth"
    // });
    function scroll(){
    rootElement.scrollTo(100, 110);
    main.style.transform="rotate(360deg)";
    }
    scroll();
  });
});
const alertmsg = () => {
  alert("Sign in to get new fresh songs.");
};

setInterval(alertmsg, 50000);



let progress = document.getElementById("progress");
let current_time = document.getElementById("current_time");
const durationplayer = document.getElementById("duration");
//progress js work
music.addEventListener("timeupdate", (event) => {
  //console.log(event);
  //in event in src section you see that there is currentTime named prperty and duration named property
  const { currentTime, duration } = event.srcElement; //to fetch values from srcElement part displayed in console which has currentTime and duration variable in it
  console.log(currentTime);
  console.log(duration);
  let progess = document.querySelector(".progress");
  let progress_time = (currentTime / duration) * 100;

  progress.style.width = `${progress_time}%`;

  //music duration update
  let Dminutes = Math.floor(duration / 60);

  let Dseconds = Math.floor(duration % 60);

  if (duration) {
    durationplayer.textContent = `${Dminutes}:${Dseconds}`;
  }

  //music currenttime update
  let Cminutes = Math.floor(currentTime / 60);

  let Cseconds = Math.floor(currentTime % 60);
  if (Cseconds < 10) {
    Cseconds = `0${Cseconds}`;
  }
  if (currentTime) {
    current_time.textContent = `${Cminutes}:${Cseconds}`;
  }
});

//To take the song and progress bar at place we want
//We simply need to update the sound value since our width value of progress bar is directly dependent on it

const progress_div = document.getElementById("progress_div");
progress_div.addEventListener("click", (event) => {
  console.log(event);
  const { duration } = music;
  let move_progress =
    (event.offsetX / event.srcElement.clientWidth) * duration;
  console.log("duration: " + duration);

  console.log("progress: " + move_progress);

  music.currentTime = move_progress;
});

//if one swong over next song starts
music.addEventListener("ended", nextSong);

let playlistball=document.getElementById('playlistball');
playlistball.addEventListener('click',()=>
{
  rootElement.scrollTo(0,900);
});

let topper=document.getElementById('topper');
topper.addEventListener('click',()=>{
  rootElement.scrollTo(100,20);
})