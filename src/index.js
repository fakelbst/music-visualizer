import './fetch';
import BufferLoader from './bufferLoader';

export default class MV {
  constructor(song, artwork){
    this.song = song;
    this.artwork = artwork;
    this.isplaying = false;
    let AudioContext = window.AudioContext || window.webkitAudioContext;
    this.audioContext = new AudioContext();
  }

  getMusic() {
    fetch(this.song)
      .then(response => response.arrayBuffer())
      .then(arrayBuffer => this.audioContext.decodeAudioData(arrayBuffer))
      .then(audioBuffer => {
        // let sourceNode = this.audioContext.createBufferSource();
				// sourceNode.buffer = audioBuffer;
				// sourceNode.connect(this.audioContext.destination);
				// sourceNode.start();
      })
      .catch(e => console.error(e));
  }

  getAnalyser() {
    this.analyser = this.audioContext.createAnalyser();
  }

  play() {
    this.isplaying = true;
  }

  pause() {
    this.isplaying = false;
  }

  togglePlay() {
    this.isplaying = !this.isplaying;
  }
}
