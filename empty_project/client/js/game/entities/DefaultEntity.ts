import {Declare, Entity, EntityTyping, Game} from "typescript-game-engine-client";
import SomePropertyComponent from "../components/SomePropertyComponent";

@Declare.Entity
@Declare.EntityTyping(new EntityTyping.Named("DefaultEntity"))	// "MyBox" is the server-side name.
export default class DefaultEntity extends Entity {

	constructor(game: Game) {
		super(game);

		console.log("Created DefaultEntity!");
		this.addComponent(new SomePropertyComponent());
	}
}