
import {Controller, CommandRequestJSON} from "typescript-game-engine-server";

export default class BoxesMainController extends Controller {

	protected activate(now: number): void {
	}

	protected deactivate(now: number): void {
	}

	protected receiveCommand(command: CommandRequestJSON): void {
	}

	getWorldState(): any {
		return {
			worldStatus: "loaded"
		}
	}

}