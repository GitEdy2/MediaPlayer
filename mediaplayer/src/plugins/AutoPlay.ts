import MediaPlayer from '../MediaPlayer';
class AutoPLay {
    constructor() { }
    run(player: MediaPlayer) {
        if (!player.media.muted) {
            player.media.muted = false;
        }
        player.play();
    }
}


export default AutoPLay;