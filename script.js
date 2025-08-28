// Number of candles
const candleCount = 18;
const cake = document.getElementById("cake");

// Create candles
for (let i = 0; i < candleCount; i++) {
  const candle = document.createElement("div");
  candle.classList.add("candle");

  // Position candles evenly across cake width
  candle.style.left = `${(i + 1) * (280 / (candleCount + 1))}px`;

  // Add flame
  const flame = document.createElement("div");
  flame.classList.add("flame");
  candle.appendChild(flame);

  cake.appendChild(candle);
}

// 🎤 Microphone detection for blowing candles
async function enableMic() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const source = audioContext.createMediaStreamSource(stream);
    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 512;
    source.connect(analyser);

    const dataArray = new Uint8Array(analyser.frequencyBinCount);

    function detectBlow() {
      analyser.getByteFrequencyData(dataArray);
      co
