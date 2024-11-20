const songs = [
    {
        id: 1,
        name: "TETA",
        artist: "Angel Dior x @MestizoIsBack  ",
        img: "AngelDiorMeztizoTetaPic.jpg",
        music: "Angel Dior X @MestizoIsBack  - TETA.mp3"
    },
    {
        id: 2,
        name: "Un Te",
        artist: "Yomel El Meloso x Tivi Gunz x Jhonathan",
        img: "YomelExitosPic.jpg",
        music: "Yomel El Meloso x Tivi Gunz x Jhonathan - Un Te.mp3"
    }, 
    {
        id: 3,
        name: "EL BOOMERANG",
        artist: "Mestizo Is Back",
        img: "MestizoBoomeranPic.jpg",
        music: "Mestizo Is Back  El Boomerang.mp3"
    },
    {
        id: 4,
        name: "Superior",
        artist: "El Fother",
        img: "ElFotherPic.jpg",
        music: "El Fother - Superior.mp3"
    },
    {
        id: 5,
        name: "CONTRARIO",
        artist: "El Yala x La Greña",
        img: "YalaPic.jpg",
        music: "El Yala - CONTRARIO Ft. La Greña.mp3"
    },
    {
        id: 6,
        name: "BALA",
        artist: "Ceky Viciny x Yaisel LM",
        img: "CekyYasielBalaPic.jpg",
        music: "Ceky Viciny x Yaisel LM - Bala.mp3"
    },
    {
        id: 7,
        name: "KIKIA",
        artist: "Mestizo Is Back X Braulio Fogon",
        img: "MEZTIBRAULIOKIKIAPIC.jpg",
        music: "Mestizo Is Back, Braulio Fogon  KIKIA.mp3"
    },
    {
        id: 8,
        name: "UN MUAH",
        artist: "Angel Dior",
        img: "ANGELDIORUNMUAHPIC.jpg",
        music: "Angel Dior - Un Muah.mp3"
    },
    {
        id: 9,
        name: "PALO AJENO",
        artist: "Chimbala x Mestizo Is Back",
        img: "MestizoChimbalaPaloPic.jpg",
        music: "Chimbala - Mestizo Is Back - PALO AJENO.mp3"
    },
    {
        id: 10,
        name: "FRENAME TU",
        artist: "Donaty",
        img: "DonatyFrenametuPic.jpg",
        music: "Donaty-Frename Tu.mp3"
    },
    {
        id: 11,
        name: "MARON",
        artist: "Mestizo Is Back",
        img: "MestizoMaronPic.jpg",
        music: "Mestizo Is Back - Maron.mp3"
    },
    {
        id: 12,
        name: "Gare",
        artist: "Flow 28",
        img: "Flow28GarePic.jpg",
        music: "Flow 28 ft. Leo RD - Gare.mp3"
    },
    {
        id: 13,
        name: "DANDOLE",
        artist: "Donaty",
        img: "DonDanPic.jpg",
        music: "DONATY - DAN2LE.mp3"
    },
    {
        id: 14,
        name: "Domingo De Circuito",
        artist: "Yomel El Meloso X Leandro",
        img: "YomelDomingoDecicuitoPic.jpg",
        music: "Yomel El Meloso X El Panamera X La Greña - Domingo De Circuito.mp3"
    },
    {
        id: 15,
        name: "MI BANDA",
        artist: "Mestizo Is Back",
        img: "MezMiBandaPic.jpg",
        music: "Mestizo Is Back  Mi Banda.mp3"
    },
    {
        id: 16,
        name: "PISA PISA",
        artist: "EL SICOKARIO FT FLOW 28",
        img: "Flow28PisaPic.jpg",
        music: "EL SICOKARIO FT FLOW 28 - PISA PISA.mp3"
    },
    {
        id: 17,
        name: "AY BEBE",
        artist: "Yasiel LM Ft. Lomiiel",
        img: "yasielLomiPic.jpg",
        music: "Yaisel LM - Ay Bebe ft Lomiiel.mp3"
    },
    {
        id: 18,
        name: "DEJENME RULAY",
        artist: "ROCHY RD X DONATY",
        img: "RochyDonDrulayPic.jpg",
        music: "ROCHY RD X DONATY - DEJENME RULAY.mp3"
    },
    {
        id: 19,
        name: "AGUANTALA",
        artist: "ROCHY RD , DONATY",
        img: "RocDONAGPIC.jpg",
        music: "ROCHY RD , DONATY  - AGUANTALA.mp3"
    },
    {
        id: 20,
        name: "Me libere",
        artist: "La Insuperable",
        img: "lainsumeliberePic.jpg",
        music: "La Insuperable - Me libere(mp3).mp3"
    },
    {
        id: 21,
        name: "HAY LUPITA",
        artist: "LOMIIEL",
        img: "lomielpiccc.jpg",
        music: "LOMIIEL - HAY LUPITA.mp3"
    },
    {
        id: 22,
        name: "Se Puede Repeti",
        artist: "Mestizo Is Back",
        img: "MestizoSepuedePic.jpg",
        music: "Mestizo Is Back - Se Puede Repetí.mp3"
    },
    {
        id: 23,
        name: "PARARARARA",
        artist: "El Alfa El Jefe x Chimbala",
        img: "elalfachimbalapiccc.jpg",
        music: "El Alfa El Jefe Ft. Chimbala - PARARARARA.mp3"
    },
    {
        id: 24,
        name: "La Tranza",
        artist: "Bulin 47 x Myke Towers",
        img: "TRABULINMIKEPIC.jpg",
        music: "Bulin 47 x Myke Towers - La Tranza (Video Oficial).mp3"
    },
    {
        id: 25,
        name: "ESTE",
        artist: "El Alfa El Jefe x Nfasis",
        img: "este_pic.jpg",
        music: "El Alfa El Jefe x Nfasis - ESTE (Video Oficial).mp3"
    },
    {
        id: 26,
        name: "CON SONIDO",
        artist: "BULIN 47 X CEKY VICINY",
        img: "BULINCEKYPIC.jpg",
        music: "BULIN 47 X CEKY VICINY - CON SONIDO (PROD BREYCO).mp3"
    },
    {
        id: 27,
        name: "EL SINGON (REMIX)",
        artist: "Yomel El Meloso x J One x Harrison x Mapa",
        img: "elsingonyomelremixpic.jpg",
        music: "YOMEL EL MELOSO - EL SINGON (REMIX).mp3"
    },
    {
        id: 28,
        name: "CHE CHE",
        artist: "Chimbala",
        img: "chimbalapic111.jpg",
        music: "Chimbala - CHE CHE.mp3"
    },
    {
        id: 29,
        name: "Ma Buena",
        artist: "Yaisel LM",
        img: "mabuenapic.jpg",
        music: "Yaisel LM - Ma Buena (Video Oficial).mp3"
    },
    {
        id: 30,
        name: "Feliz",
        artist: "Chimbala",
        img: "chimbalapic111.jpg",
        music: "Chimbala - Feliz.mp3"
    },
    {
        id: 31,
        name: "QUE LINDA",
        artist: "LOMIIEL FT DONATY Y PAPERA",
        img: "QUELINDAPIC.jpg",
        music: "LOMIIEL FT DONATY Y PAPERA - QUE LINDA.mp3"
    },
    {
        id: 32,
        name: "EL CHAMAQUITO FUNDIO",
        artist: "YOMEL EL MELOSO X NFASIS",
        img: "NfasisYomelPic.jpg",
        music: "YOMEL EL MELOSO X NFASIS - EL CHAMAQUITO FUNDIO.mp3"
    },
    {
        id: 33,
        name: "KICK CON EL BAJO",
        artist: "TIVI GUNZ",
        img: "TiviPic.jpg",
        music: "TIVI GUNZ - KICK CON EL BAJO.mp3"
    },
    {
        id: 34,
        name: "EL DUEÑO DE LO CROKY",
        artist: "El Alfa El Jefe x Yaisel LM",
        img: "elalfayasielpic.jpg",
        music: "El Alfa El Jefe x Yaisel LM - EL DUEÑO DE LO CROKY.mp3"
    },
    {
        id: 35,
        name: "Tuwi Tuwi",
        artist: "Jey One x Donaty",
        img: "jonedonatypiccc.jpg",
        music: "Jey One  Donaty - Tuwi Tuwi.mp3"
    },
    {
        id: 36,
        name: "POMPOSO (Remix)",
        artist: "El Alfa El Jefe Ft. Zion, Jowell, Yomel El Meloso, Shadow Blow, Bulova ",
        img: "pomposoremixpic.jpg",
        music: "El Alfa El Jefe Ft. Zion, Jowell, Yomel El Meloso, Shadow Blow, Bulova - POMPOSO (Remix).mp3"
    },
    {
        id: 37,
        name: "Pa Jamaica (Remix)",
        artist: "El Alfa x Farruko x Darell x Myke Towers x Big O",
        img: "pajamaicapic.jpg",
        music: "El Alfa x Farruko x Darell x Myke Towers x Big O - Pa Jamaica (Remix).mp3"
    },
    {
        id: 38,
        name: "No Nos Parecemos",
        artist: "El Alfa El Jefe",
        img: "alfapic22.jpg",
        music: "El Alfa El Jefe - No Nos Parecemos.mp3"
    },
    {
        id: 39,
        name: "Un Mono",
        artist: "Donaty X Angel Dior",
        img: "angeldonapic.jpg",
        music: "Donaty X Angel Dior - Un Mono.mp3"
    },
    {
        id: 40,
        name: "Rico Feo",
        artist: "El Alfa El Jefe x Flow 28 x Polo Joa",
        img: "ricofeoalfapic.jpg",
        music: "El Alfa El Jefe x Flow 28 x Polo Joa - Rico Feo.mp3"
    },
    {
        id: 41,
        name: "Me Arreglé",
        artist: "Bulin 47",
        img: "Bulin47Pic.jpg",
        music: "Bulin 47 - Me Arreglé.mp3"
    },
    {
        id: 42,
        name: "CALORAZO",
        artist: "Bulin 47",
        img: "bulinPic2.jpg",
        music: "Bulin 47 - CALORAZO.mp3"
    },
    {
        id: 43,
        name: "Po po po",
        artist: "Bulin 47 x Flow 28",
        img: "bulin28Pic.jpg",
        music: "Bulin 47 x Flow 28 - Po po po.mp3"
    },
    {
        id: 44,
        name: "DORA",
        artist: "FARIANA x El Alfa ",
        img: "elalfadorapic.jpg",
        music: "FARIANA x El Alfa - DORA.mp3"
    },
    {
        id: 45,
        name: "Tambora",
        artist: "Flow 28",
        img: "flow28tamborapic.jpg",
        music: "Flow 28 - Tambora.mp3"
    },
    {
        id: 46,
        name: "500 KITIPO",
        artist: "Flow 28 x Zunna",
        img: "500kitipoPic.jpg",
        music: "Flow 28 x Zunna - 500 KITIPO.mp3"
    },
    {
        id: 47,
        name: "SE COMENTA",
        artist: "Flow 28 x Ceky Viciny",
        img: "flow28cekiPic.jpg",
        music: "Flow 28 x Ceky Viciny - SE COMENTA.mp3"
    },
    {
        id: 48,
        name: "Que Malo De Que",
        artist: "YOMEL EL MELOSO x Lomiiel x El Mayor Clasico",
        img: "qumalodequePic.png",
        music: "YOMEL EL MELOSO x Lomiiel x El Mayor Clasico - Que Malo De Que.mp3"
    },
    {
        id: 49,
        name: "Mango piña",
        artist: "Braulio Fogon",
        img: "braulioPic.jpg",
        music: "Braulio Fogon - Mango piña.mp3"
    },
    {
        id: 50,
        name: "Bagre",
        artist: "Braulio Fogon",
        img: "braulioPic.jpg",
        music: "Braulio Fogon - Bagre.mp3"
    },
    {
        id: 51,
        name: "Un Selfie Con 3 Millones",
        artist: "El Alfa El Jefe x Angel Dior",
        img: "elalfaangelpic.jpg",
        music: "El Alfa El Jefe Ft. Angel Dior- Un Selfie Con 3 Millones.mp3"
    },
    {
        id: 52,
        name: "Tengo Eso",
        artist: "Angel Dior x Papa Tyga",
        img: "angelpapPic.jpg",
        music: "ANGEL DIOR X PAPAA TYGA - Tengo Eso.mp3"
    },
    {
        id: 53,
        name: "Arrebatao",
        artist: "El Alfa El Jefe",
        img: "alfapic11.jpg",
        music: "El Alfa El Jefe - Arrebatao (Video Oficial).mp3"
    },
    {
        id: 54,
        name: "Vivela",
        artist: "Donaty",
        img: "donatypic111.jpg",
        music: "Donaty-Vivela.mp3"
    },
    {
        id: 55,
        name: "TE LLENASTE",
        artist: "El Alfa El Jefe Ft. Yomel El Meloso, El Fother",
        img: "elalfatellenasteremixpic.jpg",
        music: "El Alfa El Jefe - TE LLENASTE (Ft. Yomel El Meloso, El Fother).mp3"
    },
    {
        id: 56,
        name: "DIME TU",
        artist: "J one x El Mayor Clasico",
        img: "JoneMayorDimetuPic.jpg",
        music: "J one x El Mayor Clasico-DIME TU.mp3"
    },
    {
        id: 57,
        name: "Un Teke",
        artist: "Bigoblin",
        img: "BigoblinUnTekePic.jpg",
        music: "BIGOBLIN - Un Teke.mp3"
    }
    
 ];
 
 const searchInput = document.getElementById("search-input");
 const songList = document.getElementById("song-list");
 const audioPlayer = document.getElementById("audio-player");
 const audioSource = document.getElementById("audio-source");
 const prevButton = document.getElementById("prev-button");
 const nextButton = document.getElementById("next-button");
 const randomButton = document.getElementById("random-button");
 const playPauseButton = document.getElementById("play-pause-button");
 const progressBar = document.getElementById("progress-bar");
 const volumeSlider = document.getElementById("volume-slider");
 const muteButton = document.getElementById("mute-button");
 
 let isPlaying = false;
 let currentSongId = null;
 let isMuted = false;
 
 function renderSongs(filteredSongs = songs) {
     songList.innerHTML = "";
 
     filteredSongs.forEach(song => {
         const songItem = document.createElement("div");
         songItem.classList.add("song-item");
         songItem.dataset.songId = song.id;
         songItem.innerHTML = `
             <img src="${song.img}" alt="${song.name}">
             <span>${song.name} - ${song.artist}</span>
             <button class="play-button"><i class="fas fa-play"></i></button>
         `;
 
         const playButton = songItem.querySelector(".play-button");
         playButton.addEventListener("click", () => {
             playOrPauseSong(song, playButton);
         });
 
         songList.appendChild(songItem);
     });
 }
 
 function playOrPauseSong(song, button) {
     if (isPlaying && currentSongId === song.id) {
         audioPlayer.pause();
         button.querySelector("i").classList.replace("fa-pause", "fa-play");
         playPauseButton.querySelector("i").classList.replace("fa-pause", "fa-play");
         isPlaying = false;
     } else {
         audioSource.src = song.music;
         audioSource.dataset.songId = song.id;
         audioPlayer.load();
         audioPlayer.play();
         button.querySelector("i").classList.replace("fa-play", "fa-pause");
         playPauseButton.querySelector("i").classList.replace("fa-play", "fa-pause");
         isPlaying = true;
         currentSongId = song.id;
     }
 }
 
 audioPlayer.addEventListener("ended", function() {
     const currentSongIndex = songs.findIndex(song => song.id === parseInt(audioSource.dataset.songId));
     const nextSongIndex = (currentSongIndex + 1) % songs.length;
     playOrPauseSong(songs[nextSongIndex], document.querySelector(`[data-song-id="${songs[nextSongIndex].id}"] .play-button`));
 });
 
 function playNextSong() {
     const currentSongIndex = songs.findIndex(song => song.id === parseInt(audioSource.dataset.songId));
     const nextSongIndex = (currentSongIndex + 1) % songs.length;
     playOrPauseSong(songs[nextSongIndex], document.querySelector(`[data-song-id="${songs[nextSongIndex].id}"] .play-button`));
 }
 
 function playPrevSong() {
     const currentSongIndex = songs.findIndex(song => song.id === parseInt(audioSource.dataset.songId));
     const prevSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
     playOrPauseSong(songs[prevSongIndex], document.querySelector(`[data-song-id="${songs[prevSongIndex].id}"] .play-button`));
 }
 
 function playRandomSong() {
     const randomIndex = Math.floor(Math.random() * songs.length);
     playOrPauseSong(songs[randomIndex], document.querySelector(`[data-song-id="${songs[randomIndex].id}"] .play-button`));
 }
 
 prevButton.addEventListener("click", playPrevSong);
 nextButton.addEventListener("click", playNextSong);
 randomButton.addEventListener("click", playRandomSong);
 
 // Handle play/pause button toggle
 playPauseButton.addEventListener("click", () => {
     if (isPlaying) {
         audioPlayer.pause();
         playPauseButton.querySelector("i").classList.replace("fa-pause", "fa-play");
         isPlaying = false;
     } else {
         if (currentSongId === null) {
             // If no song is playing, start the first song
             playOrPauseSong(songs[0], document.querySelector(`[data-song-id="${songs[0].id}"] .play-button`));
         } else {
             audioPlayer.play();
             playPauseButton.querySelector("i").classList.replace("fa-play", "fa-pause");
             isPlaying = true;
         }
     }
 });
 
 // Progress Bar update
 audioPlayer.addEventListener("timeupdate", () => {
     if (audioPlayer.duration) {
         const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
         progressBar.value = progress;
     }
 });
 
 // Seek functionality
 progressBar.addEventListener("click", (event) => {
     const seekTime = (event.offsetX / progressBar.offsetWidth) * audioPlayer.duration;
     audioPlayer.currentTime = seekTime;
 });
 
 // Handle volume control slider
 volumeSlider.addEventListener("input", (event) => {
     audioPlayer.volume = event.target.value;
 });
 
 // Handle mute/unmute button
 muteButton.addEventListener("click", () => {
     if (isMuted) {
         audioPlayer.muted = false;
         volumeSlider.value = audioPlayer.volume;
         muteButton.querySelector("i").classList.replace("fa-volume-mute", "fa-volume-up");
     } else {
         audioPlayer.muted = true;
         muteButton.querySelector("i").classList.replace("fa-volume-up", "fa-volume-mute");
     }
     isMuted = !isMuted;
 });
 
 audioPlayer.addEventListener("play", () => {
     playPauseButton.querySelector("i").classList.replace("fa-play", "fa-pause");
     isPlaying = true;
 });
 
 audioPlayer.addEventListener("pause", () => {
     playPauseButton.querySelector("i").classList.replace("fa-pause", "fa-play");
     isPlaying = false;
 });
 
 renderSongs();
 
 searchInput.addEventListener("input", function() {
     const searchQuery = searchInput.value.toLowerCase();
 
     const filteredSongs = songs.filter(song =>
         song.name.toLowerCase().includes(searchQuery) ||
         song.artist.toLowerCase().includes(searchQuery)
     );
 
     renderSongs(filteredSongs);
 });
 // Lights Section //////////////////////////////////
function toggleClassPlayer(){

    const body = document.querySelector('body');
    body.classList.toggle('lightPlayer');
    
    }