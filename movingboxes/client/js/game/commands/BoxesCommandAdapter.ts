import {CommandAdapter} from "typescript-game-engine-client";
import ColorComponent from "../components/ColorComponent";
import NameInput from "../ui/NameInput";

var BoxesCommands = {
	"CHANGE_COLOR": "COMMAND_CHANGE_COLOR",
	"SET_NAME": "COMMAND_SET_NAME"
};

/**
 * This class is in charge of routing the local business events to server commands.
 */
export default class BoxesCommandAdapter extends CommandAdapter {

	setupBindings(): void {
		this.addBinding(ColorComponent.EVENT_COLOR_CHANGE, BoxesCommands.CHANGE_COLOR);
		this.addBinding(NameInput.EVENT_CHANGED, BoxesCommands.SET_NAME);
	}

}
