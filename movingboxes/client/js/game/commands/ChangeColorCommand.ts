
import {Command, Entity} from 'typescript-game-engine-client';

// TODO: migrate ChangeColorCommand to a definition instead of an explicit instance?
// because there is not code, only data
export default class ChangeColorCommand extends Command {

	public static NAME = "COMMAND_CHANGE_COLOR";

	constructor(colorName: string, entity: Entity) {
		super("ChangeColor", {newColor: colorName, targetEntityID: entity.guid});
	}

}
