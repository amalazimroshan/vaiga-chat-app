const speechBtn = document.getElementById("start-speech");

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
//recognition.continuous = true;

let query = '';
recognition.addEventListener('result', (e)=>{
  const text = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');
   // console.log(text);
    query = text;
  
});


recognition.addEventListener('end', ()=>{
  console.log(query);
  //recognition.start();
});

speechBtn.addEventListener("click",()=> {
  recognition.start();
});





