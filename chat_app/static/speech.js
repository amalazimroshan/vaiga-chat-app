const texts = document.querySelector('.texts');
const speechBtn = docuement.getElementById("speech-btn")

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');

recognition.addEventListener('result', (e)=>{
  texts.appendChild(p);
  const text = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');
    
  }
});


recognition.addEventListener('end', ()=>{
  recognition.start();
})

recognition.start();
