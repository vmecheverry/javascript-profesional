import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
const video = document.querySelector("video"); //Obtengo el elemento video.
const tooglePlay = document.querySelector("#tooglePlay");
const toogleMute = document.querySelector("#toogleMute");
const player = new MediaPlayer({el: video, plugins: [new AutoPlay()]});
tooglePlay.onclick = ()=>player.tooglePlay();
toogleMute.onclick = ()=>player.toogleMute();