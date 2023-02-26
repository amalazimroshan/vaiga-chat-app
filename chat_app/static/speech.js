const speechBtn = document.getElementById("start-speech");

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = "ml-IN";
//recognition.continuous = true;

let query = "";
recognition.addEventListener("result", (e) => {
  const text = Array.from(e.results)
<<<<<<< HEAD
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');
   // console.log(text);
    query = text; 
});

recognition.addEventListener('end', ()=>{
  sendMsg(query);
=======
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");
  // console.log(text);
  query = text;
});

recognition.addEventListener("end", () => {
  console.log(query);
  submitForm.querySelector("input").value = query.toLowerCase();
  //recognition.start();
>>>>>>> 48822069514896f484b232ba2d1a380be0fc4ff3
});

speechBtn.addEventListener("click", (e) => {
  e.preventDefault();
  recognition.start();
});
<<<<<<< HEAD


async function sendMsg(message) {
  
  let response = await fetch(`http://127.0.0.1:5000/${message}`);
  let data = response.ok
    ? await response.json()
    : { message: "there is some issue on our end" };

  console.log({ message: data.message });
}
=======
>>>>>>> 48822069514896f484b232ba2d1a380be0fc4ff3
