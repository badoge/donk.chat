let session_id;
let chat = document.getElementById("chat");
function connect() {
  const socket = new WebSocket("wss://eventsub.wss.twitch.tv/ws");

  socket.addEventListener("close", (event) => {
    console.log("close");
    console.log(event);
  });

  socket.addEventListener("error", (event) => {
    console.log("error");
    console.log(event);
  });

  socket.addEventListener("message", (event) => {
    console.log("message");
    let data = JSON.parse(event.data);
    if (data?.metadata?.message_type == "session_welcome") {
      session_id = data.payload.session.id;
    }
    console.log(data);

    if (data?.metadata?.subscription_type == "channel.chat.message") {
      chat.appendChild(document.createTextNode(`${data.payload.event.chatter_user_name}: ${data.payload.event.message.text}`));
      chat.appendChild(document.createElement("br"));
      chat.scrollIntoView(false);
    }
  });

  socket.addEventListener("open", (event) => {
    console.log("open");
    console.log(event);
  });
}

async function eventsubSub() {
  if (!LOGIN?.access_token) {
    return;
  }
  if (!document.getElementById("channel").value.trim()) {
    return;
  }

  document.getElementById("channel").style.display = "none";
  document.getElementById("connect").style.display = "none";

  let myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${LOGIN.access_token}`);
  myHeaders.append("Client-Id", "skclrgbpcxovmezvzpx8yelb3jpn6q");
  myHeaders.append("Content-Type", "application/json");

  let body = JSON.stringify({
    type: "channel.chat.message",
    version: "1",
    condition: {
      broadcaster_user_id: document.getElementById("channel").value.trim(),
      user_id: LOGIN.userID,
    },
    transport: {
      method: "websocket",
      session_id: session_id,
    },
  });

  let requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: body,

    redirect: "follow",
  };

  try {
    let response = await fetch("https://api.twitch.tv/helix/eventsub/subscriptions", requestOptions);
    let result = await response.json();
    console.log(result);
  } catch (error) {
    console.log("error", error);
  }
}

let LOGIN;

function login() {
  window.open("/prompt.html", "loginWindow", "toolbar=0,status=0,scrollbars=0,width=500px,height=800px");
  return false;
}

function saveLogin() {
  setTimeout(() => {
    LOGIN = JSON.parse(localStorage.getItem("LOGIN"));
    if (LOGIN) {
      document.getElementById("login").style.display = "none";
      document.getElementById("loginInfo").innerHTML = `Logged in as ${LOGIN.username}`;
    }
  }, 5000);
}

function loadLocalStorage() {
  LOGIN = JSON.parse(localStorage.getItem("LOGIN"));
  if (LOGIN) {
    document.getElementById("login").style.display = "none";
    document.getElementById("loginInfo").innerHTML = `Logged in as ${LOGIN.username}`;
    connect();
  }
}

window.onload = function () {
  loadLocalStorage();
};
