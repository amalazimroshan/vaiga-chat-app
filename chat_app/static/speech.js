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
  sendMsg(query);
});

speechBtn.addEventListener("click",()=> {
  recognition.start();
});


async function sendMsg(message) {
  
  let response = await fetch(`http://127.0.0.1:5000/${message}`);
  let data = response.ok
    ? await response.json()
    : { message: "there is some issue on our end" };

  console.log({ message: data.message });
}
