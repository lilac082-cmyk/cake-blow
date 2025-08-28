// Select the cake and message container
const cake = document.querySelector(".cake");
const message = document.getElementById("message");

// Create 18 candles
for (let i = 0; i < 18; i++) {
  let candle = document.createElement("div");
  candle.classList.add("candle");

  let flame = document.createElement("div");
  flame.classList.add("flame");

  candle.appendChild(flame);
  cake.appendChild(candle);
}

// Microphone setup for blowing detection
navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const analyser = audioContext.createAnalyser();
  const source = audioContext.createMediaStreamSource(stream);
  source.connect(analyser);

  const dataArray = new Uint8Array(analyser.frequencyBinCount);

  function detectBlow() {
    analyser.getByteFreq
