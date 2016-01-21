
import {Game, IComponent, Entity, MovementComponent, Command, CommandSender} from 'typescript-game-engine-client';
import ChangeColorCommand from "./commands/ChangeColorCommand";


// TODO: ColorButton should maybe implement UIComponent to declare the setup() method.
export default class ColorButton implements IComponent {

	private commandSender: CommandSender;

	constructor(commandSender: CommandSender) {
		this.commandSender = commandSender;

		this.setup();
	}

	setup(): void {
		$("#colorButton").click(() => {
			this.commandSender.add(new ChangeColorCommand("pink"));
		})
	}

	loadState(state: any): void {
		// do nothing
	}

	tick(delta: number, now: number): void {
		// do nothing
	}

}