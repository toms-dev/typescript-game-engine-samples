import {Controller, CommandRequestJSON} from "typescript-game-engine-server";
import MyBox from "../entities/MyBox";
import ColorChanger from "../components/ColorChanger";
import ColoredComponent from "../components/ColoredComponent";
import BoxesGameplayController from "./BoxesGameplayController";
import NameComponent from "../components/NameComponent";

export default class BoxesMainController extends Controller {

	private inGame: boolean;

	activate(now: number): void {
		console.log("New box player connected!");
		this.inGame = false;
	}

	deactivate(now: number): void {
		// do nothing
	}

	getWorldState(): any  {

	}

	receiveCommand(command: CommandRequestJSON): void {
		if (command.name == "COMMAND_SET_NAME") {
			var boxName = command.data.newName;
			this.doJoinGame(boxName);
		}
	}

	private doJoinGame(boxName: string): void {
		if (this.inGame) {
			return;
		}
		this.inGame = true;

		console.log("Player chose the following name: "+boxName);

		// Create the player-controlled entity
		var playerBox = new MyBox("orange");
		playerBox.getComponent(NameComponent).changeName(boxName);
		this.world.addEntity(playerBox);

		var gameplayController = new BoxesGameplayController(playerBox);
		this.addChildController(gameplayController);
	}

}
