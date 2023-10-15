function connect() {
  let username = document.getElementById("username")?.value?.trim()?.toLowerCase();

  if (!username) {
    return;
  }

  document.getElementById("username").style.display = "none";
  document.getElementById("connect").style.display = "none";
  let chat = document.getElementById("chat");

  let options = {
    options: {
      clientId: "skclrgbpcxovmezvzpx8yelb3jpn6q",
      debug: false,
    },
    connection: {
      secure: true,
      reconnect: true,
    },
    channels: [username],
  };
  let client = new tmi.client(options);

  client.on("message", async (target, context, msg, self) => {
    chat.appendChild(document.createTextNode(`${context["display-name"]}: ${msg}`));
    chat.appendChild(document.createElement("br"));
    chat.scrollIntoView(false);
  }); //message

  client.on("timeout", (channel, username, reason, duration, userstate) => {
    chat.appendChild(document.createTextNode(`${username} got timed out for ${duration}s`));
    chat.appendChild(document.createElement("br"));
    chat.scrollIntoView(false);
  }); //timeout

  client.on("connected", async (address, port) => {
    chat.appendChild(document.createTextNode(`Connected to ${address}:${port}`));
    chat.appendChild(document.createElement("br"));
    chat.scrollIntoView(false);
  }); //connected

  client.on("disconnected", (reason) => {
    chat.appendChild(document.createTextNode(`Disconnected: ${reason}`));
    chat.appendChild(document.createElement("br"));
    chat.scrollIntoView(false);
  }); //disconnected

  client.on("notice", (channel, msgid, message) => {
    chat.appendChild(document.createTextNode(`Disconnected: ${channel} - ${msgid} - ${message}`));
    chat.appendChild(document.createElement("br"));
    chat.scrollIntoView(false);
  }); //notice

  client.connect().catch(console.error);
}
