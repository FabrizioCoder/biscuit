import type { Model } from "./Base.ts";
import type { Snowflake } from "../util/Snowflake.ts";
import type { Session } from "../session/Session.ts";
import type { DiscordChannel } from "../vendor/external.ts";
import Channel from "./Channel.ts";
import * as Routes from "../util/Routes.ts";

export abstract class GuildChannel extends Channel implements Model {
    constructor(session: Session, data: DiscordChannel, guildId: Snowflake) {
        super(session, data);
        this.guildId = guildId;
        this.position = data.position;
        data.topic ? this.topic = data.topic : null;
        data.parent_id ? this.parentId = data.parent_id : undefined;
    }

    guildId: Snowflake;
    topic?: string;
    position?: number;
    parentId?: Snowflake;

    async delete(reason?: string) {
        await this.session.rest.runMethod<DiscordChannel>(
            this.session.rest,
            "DELETE",
            Routes.CHANNEL(this.id),
            {
                reason,
            },
        );
    }
}

export default GuildChannel;