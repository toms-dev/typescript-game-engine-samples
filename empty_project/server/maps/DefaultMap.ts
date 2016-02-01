
import {Declare, Map, World} from "typescript-game-engine-server";
import DefaultEntity from "../entities/DefaultEntity";

@Declare.Map
export default class DefaultMap extends Map {

	setup(world: World): void {
		world.addEntity(new DefaultEntity(world, "RandomName"));
		console.log("Map setup done.");
	}

}