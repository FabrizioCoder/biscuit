import type { Snowflake } from "../../util/Snowflake.ts";
import type { Session } from "../../session/Session.ts";
import type { ChannelTypes, DiscordChannel } from "../../vendor/external.ts";
import BaseVoiceChannel from "./BaseVoiceChannel.ts";
import TextChannel from "./TextChannel.ts";

export class VoiceChannel extends BaseVoiceChannel {
    constructor(session: Session, data: DiscordChannel, guildId: Snowflake) {
        super(session, data, guildId);
        this.type = data.type as number;
    }
    override type: ChannelTypes.GuildVoice;
}

export interface VoiceChannel extends TextChannel, BaseVoiceChannel {}

TextChannel.applyTo(VoiceChannel);

export default VoiceChannel;