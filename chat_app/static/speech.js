const speechBtn = document.getElementById("start-speech");
const speakBtn = document.getElementById("speak-btn");
// const lastBubble = document.querySelectorAll(".robot-aligner");




const synth = window.speechSynthesis;
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = "ml-IN";


let query = "";
recognition.addEventListener("result", (e) => {
  const text = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');
    query = text; 
});

recognition.addEventListener("end", () => {
  console.log(query);
  submitForm.querySelector("input").value = query.toLowerCase();
});

speechBtn.addEventListener("click", (e) => {
  e.preventDefault();
  //recognition.start();
  
});


function speak(text) {

  const utterance = new SpeechSynthesisUtterance(text);

  // Set the speech settings for Malayalam language
  utterance.lang = 'ml-IN'; // Malayalam (India) language code
  utterance.pitch = 1.0;
  utterance.rate = 1.0;
  utterance.volume = 1.0;

  // Set the Malayalam voice
  const malayalamVoice = synth.getVoices().find(voice => voice.lang === 'ml-IN');
  if (malayalamVoice) {
    utterance.voice = malayalamVoice;
  }

  synth.speak(utterance);
}



document.body.addEventListener("keyup",function(e){

  if(e.key == 'o'){

    speak("നമസ്കാരം");
  }
});