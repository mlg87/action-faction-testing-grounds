const { WebClient } = require("@slack/web-api");
const web = new WebClient(
  "xoxb-16231298692-1274697475249-Sal7SKXRr3aWetiJEUiocqv4"
);

const conversationId = "G01922M7EG4";

(async () => {
  // See: https://api.slack.com/methods/chat.postMessage
  const res = await web.chat.postMessage({
    channel: conversationId,
    text: `Hello there <@UMK3ZJMLN>`,
  });

  // `res` contains information about the posted message
  console.log("Message sent: ", res);

  const reactionRes = await web.reactions.add({
    channel: conversationId,
    timestamp: res.ts,
    name: "thumbsup",
  });
})();
