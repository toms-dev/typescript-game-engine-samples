import {CommandAdapter} from "typescript-game-engine-client";
import ColorComponent from "../components/ColorComponent";
import ChangeColorCommand from "./ChangeColorCommand";

export default class BoxesCommandAdapter extends CommandAdapter {

	setupBindings(): void {
		this.addBinding(ColorComponent.EVENT_COLOR_CHANGE, ChangeColorCommand.NAME);
	}

}
