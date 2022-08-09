const token = "...";

import {Session} from "@biscuitland/core";
import {GatewayIntents as Intents} from "@biscuitland/api-types";

const session = new Session({ token, intents: Intents.Guilds | Intents.GuildMessages | Intents.MessageContent });

session.events.on("ready", ready => console.info(ready.user.tag));
session.events.on("messageCreate", msg => {
    if (msg.content === "_ping")
        msg.reply({ content: "pong!" });
});

session.start();


































