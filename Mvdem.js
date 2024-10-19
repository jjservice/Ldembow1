let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");
let wave = document.getElementById("wave");
let randomIcon = document.querySelector(".fa-random");
let curr_track = document.createElement("audio");

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

const music_list = [
    {
        name: "EL BOOMERANG",
        artist: "Mestizo Is Back",
        img: "MestizoBoomeranPic.jpg",
        music: "Mestizo Is Back  El Boomerang.mp3"
    },
    {
        name: "BALA",
        artist: "Ceky Viciny x Yaisel LM",
        img: "CekyYasielBalaPic.jpg",
        music: "Ceky Viciny x Yaisel LM - Bala.mp3"
    },
    {
        name: "KIKIA",
        artist: "Mestizo Is Back X Braulio Fogon",
        img: "MEZTIBRAULIOKIKIAPIC.jpg",
        music: "Mestizo Is Back, Braulio Fogon  KIKIA.mp3"
    },
    {
        name: "UN MUAH",
        artist: "Angel Dior",
        img: "ANGELDIORUNMUAHPIC.jpg",
        music: "Angel Dior - Un Muah.mp3"
    },
    {
        name: "PALO AJENO",
        artist: "Chimbala x Mestizo Is Back",
        img: "MestizoChimbalaPaloPic.jpg",
        music: "Chimbala - Mestizo Is Back - PALO AJENO.mp3"
    },
    {
        name: "FRENAME TU",
        artist: "Donaty",
        img: "DonatyFrenametuPic.jpg",
        music: "Donaty-Frename Tu.mp3"
    },
    {
        name: "MARON",
        artist: "Mestizo Is Back",
        img: "MestizoMaronPic.jpg",
        music: "Mestizo Is Back - Maron.mp3"
    },
    {
        name: "Gare",
        artist: "Flow 28",
        img: "Flow28GarePic.jpg",
        music: "Flow 28 ft. Leo RD - Gare.mp3"
    },
    {
        name: "DANDOLE",
        artist: "Donaty",
        img: "DonDanPic.jpg",
        music: "DONATY - DAN2LE.mp3"
    },
    {
        name: "DIME TU",
        artist: "J one x El Mayor Clasico",
        img: "JoneMayorDimetuPic.jpg",
        music: "J one x El Mayor Clasico-DIME TU.mp3"
    },
    {
        name: "MI BANDA",
        artist: "Mestizo Is Back",
        img: "MezMiBandaPic.jpg",
        music: "Mestizo Is Back  Mi Banda.mp3"
    },
    {
        name: "PISA PISA",
        artist: "EL SICOKARIO FT FLOW 28",
        img: "Flow28PisaPic.jpg",
        music: "EL SICOKARIO FT FLOW 28 - PISA PISA.mp3"
    },
    {
        name: "AY BEBE",
        artist: "Yasiel LM Ft. Lomiiel",
        img: "yasielLomiPic.jpg",
        music: "Yaisel LM - Ay Bebe ft Lomiiel.mp3"
    },
    {
        name: "DEJENME RULAY",
        artist: "ROCHY RD X DONATY",
        img: "RochyDonDrulayPic.jpg",
        music: "ROCHY RD X DONATY - DEJENME RULAY.mp3"
    },
    {
        name: "AGUANTALA",
        artist: "ROCHY RD , DONATY",
        img: "RocDONAGPIC.jpg",
        music: "ROCHY RD , DONATY  - AGUANTALA.mp3"
    },
    {
        name: "Me libere",
        artist: "La Insuperable",
        img: "lainsumeliberePic.jpg",
        music: "La Insuperable - Me libere(mp3).mp3"
    },
    {
        name: "HAY LUPITA",
        artist: "LOMIIEL",
        img: "lomielpiccc.jpg",
        music: "LOMIIEL - HAY LUPITA.mp3"
    },
    {
        name: "Se Puede Repeti",
        artist: "Mestizo Is Back",
        img: "MestizoSepuedePic.jpg",
        music: "Mestizo Is Back - Se Puede Repetí.mp3"
    },
    {
        name: "PARARARARA",
        artist: "El Alfa El Jefe x Chimbala",
        img: "elalfachimbalapiccc.jpg",
        music: "El Alfa El Jefe Ft. Chimbala - PARARARARA.mp3"
    },
    {
        name: "La Tranza",
        artist: "Bulin 47 x Myke Towers",
        img: "TRABULINMIKEPIC.jpg",
        music: "Bulin 47 x Myke Towers - La Tranza (Video Oficial).mp3"
    },
    {
        name: "ESTE",
        artist: "El Alfa El Jefe x Nfasis",
        img: "este_pic.jpg",
        music: "El Alfa El Jefe x Nfasis - ESTE (Video Oficial).mp3"
    },
    {
        name: "CON SONIDO",
        artist: "BULIN 47 X CEKY VICINY",
        img: "BULINCEKYPIC.jpg",
        music: "BULIN 47 X CEKY VICINY - CON SONIDO (PROD BREYCO).mp3"
    },
    {
        name: "EL SINGON (REMIX)",
        artist: "Yomel El Meloso x J One x Harrison x Mapa",
        img: "elsingonyomelremixpic.jpg",
        music: "YOMEL EL MELOSO - EL SINGON (REMIX).mp3"
    },
    {
        name: "CHE CHE",
        artist: "Chimbala",
        img: "chimbalapic111.jpg",
        music: "Chimbala - CHE CHE.mp3"
    },
    {
        name: "Ma Buena",
        artist: "Yaisel LM",
        img: "mabuenapic.jpg",
        music: "Yaisel LM - Ma Buena (Video Oficial).mp3"
    },
    {
        name: "Feliz",
        artist: "Chimbala",
        img: "chimbalapic111.jpg",
        music: "Chimbala - Feliz.mp3"
    },
    {
        name: "QUE LINDA",
        artist: "LOMIIEL FT DONATY Y PAPERA",
        img: "QUELINDAPIC.jpg",
        music: "LOMIIEL FT DONATY Y PAPERA - QUE LINDA.mp3"
    },
    {
        name: "EL CHAMAQUITO FUNDIO",
        artist: "YOMEL EL MELOSO X NFASIS",
        img: "NfasisYomelPic.jpg",
        music: "YOMEL EL MELOSO X NFASIS - EL CHAMAQUITO FUNDIO.mp3"
    },
    {
        name: "KICK CON EL BAJO",
        artist: "TIVI GUNZ",
        img: "TiviPic.jpg",
        music: "TIVI GUNZ - KICK CON EL BAJO.mp3"
    },
    {
        name: "EL DUEÑO DE LO CROKY",
        artist: "El Alfa El Jefe x Yaisel LM",
        img: "elalfayasielpic.jpg",
        music: "El Alfa El Jefe x Yaisel LM - EL DUEÑO DE LO CROKY.mp3"
    },
    {
        name: "Tuwi Tuwi",
        artist: "Jey One x Donaty",
        img: "jonedonatypiccc.jpg",
        music: "Jey One  Donaty - Tuwi Tuwi.mp3"
    },
    {
        name: "POMPOSO (Remix)",
        artist: "El Alfa El Jefe Ft. Zion, Jowell, Yomel El Meloso, Shadow Blow, Bulova ",
        img: "pomposoremixpic.jpg",
        music: "El Alfa El Jefe Ft. Zion, Jowell, Yomel El Meloso, Shadow Blow, Bulova - POMPOSO (Remix).mp3"
    },
    {
        name: "Pa Jamaica (Remix)",
        artist: "El Alfa x Farruko x Darell x Myke Towers x Big O",
        img: "pajamaicapic.jpg",
        music: "El Alfa x Farruko x Darell x Myke Towers x Big O - Pa Jamaica (Remix).mp3"
    },
    {
        name: "No Nos Parecemos",
        artist: "El Alfa El Jefe",
        img: "alfapic22.jpg",
        music: "El Alfa El Jefe - No Nos Parecemos.mp3"
    },
    {
        name: "Un Mono",
        artist: "Donaty X Angel Dior",
        img: "angeldonapic.jpg",
        music: "Donaty X Angel Dior - Un Mono.mp3"
    },
    {
        name: "Rico Feo",
        artist: "El Alfa El Jefe x Flow 28 x Polo Joa",
        img: "ricofeoalfapic.jpg",
        music: "El Alfa El Jefe x Flow 28 x Polo Joa - Rico Feo.mp3"
    },
    {
        name: "Me Arreglé",
        artist: "Bulin 47",
        img: "Bulin47Pic.jpg",
        music: "Bulin 47 - Me Arreglé.mp3"
    },
    {
        name: "CALORAZO",
        artist: "Bulin 47",
        img: "bulinPic2.jpg",
        music: "Bulin 47 - CALORAZO.mp3"
    },
    {
        name: "Po po po",
        artist: "Bulin 47 x Flow 28",
        img: "bulin28Pic.jpg",
        music: "Bulin 47 x Flow 28 - Po po po.mp3"
    },
    {
        name: "DORA",
        artist: "FARIANA x El Alfa ",
        img: "elalfadorapic.jpg",
        music: "FARIANA x El Alfa - DORA.mp3"
    },
    {
        name: "Tambora",
        artist: "Flow 28",
        img: "flow28tamborapic.jpg",
        music: "Flow 28 - Tambora.mp3"
    },
    {
        name: "500 KITIPO",
        artist: "Flow 28 x Zunna",
        img: "500kitipoPic.jpg",
        music: "Flow 28 x Zunna - 500 KITIPO.mp3"
    },
    {
        name: "SE COMENTA",
        artist: "Flow 28 x Ceky Viciny",
        img: "flow28cekiPic.jpg",
        music: "Flow 28 x Ceky Viciny - SE COMENTA.mp3"
    },
    {
        name: "Que Malo De Que",
        artist: "YOMEL EL MELOSO x Lomiiel x El Mayor Clasico",
        img: "qumalodequePic.png",
        music: "YOMEL EL MELOSO x Lomiiel x El Mayor Clasico - Que Malo De Que.mp3"
    },
    {
        name: "Mango piña",
        artist: "Braulio Fogon",
        img: "braulioPic.jpg",
        music: "Braulio Fogon - Mango piña.mp3"
    },
    {
        name: "Bagre",
        artist: "Braulio Fogon",
        img: "braulioPic.jpg",
        music: "Braulio Fogon - Bagre.mp3"
    },
    {
        name: "Un Selfie Con 3 Millones",
        artist: "El Alfa El Jefe x Angel Dior",
        img: "elalfaangelpic.jpg",
        music: "El Alfa El Jefe Ft. Angel Dior- Un Selfie Con 3 Millones.mp3"
    },
    {
        name: "Tengo Eso",
        artist: "Angel Dior x Papa Tyga",
        img: "angelpapPic.jpg",
        music: "ANGEL DIOR X PAPAA TYGA - Tengo Eso.mp3"
    },
    {
        name: "Arrebatao",
        artist: "El Alfa El Jefe",
        img: "alfapic11.jpg",
        music: "El Alfa El Jefe - Arrebatao (Video Oficial).mp3"
    },
    {
        name: "Vivela",
        artist: "Donaty",
        img: "donatypic111.jpg",
        music: "Donaty-Vivela.mp3"
    },
    {
        name: "TE LLENASTE",
        artist: "El Alfa El Jefe Ft. Yomel El Meloso, El Fother",
        img: "elalfatellenasteremixpic.jpg",
        music: "El Alfa El Jefe - TE LLENASTE (Ft. Yomel El Meloso, El Fother).mp3"
    },
];

loadTrack(track_index);

function loadTrack(track_index) {
  clearInterval(updateTimer);
  reset();

  curr_track.src = music_list[track_index].music;
  curr_track.load();

  track_art.style.backgroundImage = "url(" + music_list[track_index].img + ")";
  track_name.textContent = music_list[track_index].name;
  track_artist.textContent = music_list[track_index].artist;

  now_playing.textContent =(track_index + 1) + " of " + music_list.length;
  updateTimer = setInterval(setUpdate, 1000);
  curr_track.addEventListener("ended", nextTrack);
}

function reset() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}
function randomTrack() {
  isRandom ? pauseRandom() : playRandom();
}

function playRandom() {
  isRandom = true;
  randomIcon.classList.add("randomActive");
}
function pauseRandom() {
  isRandom = false;
  randomIcon.classList.remove("randomActive");
}
function repeatTrack() {
  let current_index = track_index;
  loadTrack(current_index);
  playTrack();
}
function playpauseTrack() {
  isPlaying ? pauseTrack() : playTrack();
}

function playTrack() {
  curr_track.play();
  isPlaying = true;
  track_art.classList.add("rotate");
  wave.classList.add("loader");
  playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}
function pauseTrack() {
  curr_track.pause();
  isPlaying = false;
  track_art.classList.remove("rotate");
  wave.classList.remove("loader");
  playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}

function nextTrack() {
  if (track_index < music_list.length - 1 && isRandom === false) {
    track_index += 1;
  } else if (track_index < music_list.length - 1 && isRandom === true) {
    let random_index = Number.parseInt(Math.random() * music_list.length);
    track_index = random_index;
  } else {
    track_index = 0;
  }
  loadTrack(track_index);
  playTrack();
}

function prevTrack() {
  if (track_index > 0) {
    track_index -= 1;
  } else {
    track_index = music_list.length - 1;
  }
  loadTrack(track_index);
  playTrack();
}

function seekTo() {
  let seekTo = curr_track.duration * (seek_slider.value / 100);
  curr_track.currentTime = seekTo;
}

function setVolume() {
  curr_track.volume = volume_slider.value / 100;
}

function setUpdate() {
  let seekPosition = 0;
  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);
    seek_slider.value = seekPosition;

    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(
      curr_track.currentTime - currentMinutes * 60
    );

    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(
      (curr_track.duration - durationMinutes * 60)
    );

    if (currentSeconds < 10) {
      currentSeconds = "0" + currentSeconds;
    }
    if (durationSeconds < 10) {
      durationSeconds = "0" + durationSeconds;
    }
    if (currentMinutes < 10) {
      currentMinutes = "0" + currentMinutes;
    }
    if (durationMinutes < 10) {
      durationMinutes = "0" + durationMinutes;
    }

    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}