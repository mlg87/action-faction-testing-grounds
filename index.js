const { WebClient } = require("@slack/web-api");
require("dotenv").config();
const web = new WebClient(process.env.SLACK_BOT_TOKEN);

const conversationId = "G01922M7EG4";

(async () => {
  // See: https://api.slack.com/methods/chat.postMessage
  // const res = await web.chat.postMessage({
  //   channel: conversationId,
  //   text: `Hello there <@UMK3ZJMLN>`,
  // });

  // // `res` contains information about the posted message
  // console.log("Message sent: ", res);

  // const reactionRes = await web.reactions.add({
  //   channel: conversationId,
  //   timestamp: res.ts,
  //   name: "thumbsup",
  // });
  const res = await web.reactions.get({
    channel: conversationId,
    timestamp: "1597439544.023300",
  });
  console.log("res.message.reactions", res.message.reactions);
})();
