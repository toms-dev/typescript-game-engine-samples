import {Controller, CommandRequestJSON} from "typescript-game-engine-server";
import MyBox from "../entities/MyBox";
import ColorChanger from "../components/ColorChanger";
import ColoredComponent from "../components/ColoredComponent";
import NameComponent from "../components/NameComponent";

export default class BoxesGameplayController extends Controller {

	private joinTime: Date;
	private playerBox: MyBox;

	constructor(playerBox: MyBox) {
		super();
		this.playerBox = playerBox;
	}

	activate(now: number): void {
		this.joinTime = new Date(this.world.now);
	}

	deactivate(now: number): void {
		this.world.removeEntity(this.playerBox);
	}

	getWorldState(): any {
		// TODO: return real data?
		return {
			loggedIn: true,
			joinTime: this.joinTime.toLocaleString(),
			movingBoxesServerName: "LeDerp"
		}
	}

	receiveCommand(command: CommandRequestJSON): void {
		if (command.name == "COMMAND_CHANGE_COLOR") {
			var newColor = command.data.newColor;
			this.playerBox.getComponent(ColoredComponent).changeColor(newColor);
		}
		else if (command.name == "COMMAND_SET_NAME") {
			var boxName = command.data.newName;
			this.playerBox.getComponent(NameComponent).changeName(boxName);
		}
	}

}
