
import {Controller, CommandRequestJSON} from "typescript-game-engine-server";

export default class BoxesMainController extends Controller {

	protected activate(now: number): void {
	}

	protected deactivate(now: number): void {
	}

	protected receiveCommand(command: CommandRequestJSON): void {
		if (command.name == "COMMAND_SAY_HELLO") {
			throw "Not implemented.";
		}
	}

	getWorldState(): any {
		return {
			worldStatus: "loaded"
		}
	}

}