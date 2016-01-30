
//import {Game, IComponent, Entity, MovementComponent, Command, CommandSender} from 'typescript-game-engine-client';
import {UIComponent, CommandSender, GameEvent} from 'typescript-game-engine-client';
import ChangeColorCommand from "./commands/ChangeColorCommand";


// TODO: ColorButton should maybe implement UIComponent to declare the setup() method.
export default class ColorButton extends UIComponent {

	private commandSender: CommandSender;

	constructor(commandSender: CommandSender) {
		super();
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

	receiveEvent(event: GameEvent): void {
	}

}