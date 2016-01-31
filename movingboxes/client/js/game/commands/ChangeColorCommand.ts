
import {Command} from 'typescript-game-engine-client';

// TODO: migrate this to a definition instead of an explicit instance?
export default class ChangeColorCommand extends Command {

	public static NAME = "COMMAND_ChangeColor";

	constructor(colorName: string) {
		super("ChangeColor", [colorName]);
	}

}
