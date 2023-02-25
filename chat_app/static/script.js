let messages = new Map();
let message_container = document.querySelector(".message_container");
let anchor = document.querySelector("#anchor");
let sendBtn = document.querySelector("#msgSubmit");
let submitForm = document.querySelector("form");
submitForm.addEventListener("submit", (e) => {
  e.preventDefault();
  prepareMsg();
});

function prepareMsg() {
  let messageContent = document.querySelector("#msgText");
  messages.set(Math.floor(Math.random() * 100), {
    user: "person",
    message: messageContent.value,
  });
  renderMsg({ user: "person", message: messageContent.value });
  sendMsg({ user: "person", message: messageContent.value });
  messageContent.value = "";
}
document.addEventListener("keyup", (e) => {
  if (e.key == "d") console.log(messages);
});

async function sendMsg(message) {
  // let response = await fetch(
  //   `https://dummyjson.com/products/${message.message}`
  // );
  let response = await fetch(`http://127.0.0.1:5000/${message.message}`);
  let data = await response.json();
  renderMsg({ user: "machine", message: data.message });
}
function renderMsg(message) {
  let message_holder = document.createElement("div");
  message_holder.classList.add("message_holder");

  let bubble = document.createElement("div");
  bubble.classList.add("bubble");
  if (message.user == "person") bubble.classList.add("user");
  bubble.textContent = message.message;

  message_holder.appendChild(bubble);
  message_container.insertBefore(message_holder, anchor);
}

// scroll to bottom
const config = { childList: true };
const callback = function (mutationList, observer) {
  console.log("somethin happening");
  for (let mutation of mutationList) {
    if (mutation.type == "childList") {
      message_container.scrollTo(0, document.body.scrollHeight);
    }
  }
};

const observer = new MutationObserver(callback);
observer.observe(message_container, config);
