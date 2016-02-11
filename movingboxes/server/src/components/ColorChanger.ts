
import {Declare, Components, Entity} from "typescript-game-engine-server";
import Component = Components.Component;

import ColoredComponent from "./ColoredComponent";

/**
 * This server-side components makes a colored component change color on user input.
 */
@Declare.Component
export default class ColorChanger extends Component {

	public target: ColoredComponent;
	public EVENT_COLOR_CHANGE = "COMMAND_COLOR_CHANGE";

	constructor(target: ColoredComponent) {
		super();
		this.target = target;
	}

	switchColor(): void {
		if (this.target.colorName == "red") {
			this.target.colorName = "blue";
		} else {
			this.target.colorName = "red";
		}
		console.log("New color for "+this.parent+" = "+this.target.colorName);
	}

	tick(delta:number, now:number):void {
		this.switchColor();
	}

}
