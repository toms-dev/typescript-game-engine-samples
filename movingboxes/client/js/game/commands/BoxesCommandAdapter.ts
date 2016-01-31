import {CommandAdapter} from "typescript-game-engine-client";
import ColorComponent from "../components/ColorComponent";

var BoxesCommands = {
	"CHANGE_COLOR": "COMMAND_CHANGE_COLOR"
};

/**
 * This class is in charge of routing the local business events to server commands.
 */
export default class BoxesCommandAdapter extends CommandAdapter {

	setupBindings(): void {
		this.addBinding(ColorComponent.EVENT_COLOR_CHANGE, BoxesCommands.CHANGE_COLOR);
	}

}
