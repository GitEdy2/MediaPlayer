import mediaPlayer from '@bijuushadowlink4/mediaplayer';
import AutoPlay from '@bijuushadowlink4/mediaplayer/lib/plugins/AutoPlay.js';
import AutoPause from '@bijuushadowlink4/mediaplayer/lib/plugins/AutoPause.js';
import Ads from '@bijuushadowlink4/mediaplayer/lib/plugins/Ads'

const video: HTMLElement = document.querySelector("video")
const buttonPlay: HTMLElement = document.querySelector("#Play")
const buttonMute: HTMLElement = document.querySelector("#Mute")

const player = new mediaPlayer({
    el: video, plugins: [ 
        new AutoPlay(),
        new AutoPause(),
        new Ads()
    ] 
});

buttonPlay.onclick = () => player.togglePlay();
buttonMute.onclick = () => player.toggleMute();

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message);
    })
}