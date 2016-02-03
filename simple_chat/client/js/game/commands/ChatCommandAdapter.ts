import {CommandAdapter} from "typescript-game-engine-client";

import NameInput from "../ui/NameInput";

import ChatCommands from "../../../../shared/ChatCommands";

/**
 * This class is in charge of routing the local business events to server commands.
 */
export default class ChatCommandAdapter extends CommandAdapter {

	setupBindings(): void {
		this.addBinding(NameInput.EVENT_CHANGED, ChatCommands.SET_NAME);
	}

}
