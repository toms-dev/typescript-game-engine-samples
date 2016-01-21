
import {Command} from 'typescript-game-engine-client';

export default class ChangeColorCommand extends Command {

	constructor(colorName: string) {
		super("ChangeColor", [colorName]);
	}

}
