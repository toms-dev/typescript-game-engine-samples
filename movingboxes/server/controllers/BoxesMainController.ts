import {Controller, CommandRequestJSON} from "typescript-game-engine-server";
import MyBox from "../entities/MyBox";
import ColorChanger from "../components/ColorChanger";
import ColoredComponent from "../components/ColoredComponent";

export default class BoxesMainController extends Controller {

	private loginTime: Date;
	private playerBox: MyBox;

	activate(now: number): void {
		this.loginTime = new Date(now);
		this.playerBox = new MyBox("orange");
		this.world.addEntity(this.playerBox);
	}
	deactivate(now: number): void {
		this.world.removeEntity(this.playerBox);
	}

	getWorldState(): any {
		// TODO: return real data?
		return {
			loggedIn: true,
			loginTime: this.loginTime.toLocaleString(),
			movingBoxesServerName: "LeDerp"
		}
	}

	receiveCommand(command: CommandRequestJSON): void {
		if (command.name == "COMMAND_CHANGE_COLOR") {
			var newColor = command.data.newColor;
			this.playerBox.getComponent(ColoredComponent).changeColor(newColor);
		}
	}

}
