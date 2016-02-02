import {Declare, Entity, EntityTyping, Game} from "typescript-game-engine-client";
import SomePropertyComponent from "../components/FriendListComponent";

@Declare.Entity
@Declare.EntityTyping(new EntityTyping.Named("User"))
export default class User extends Entity {

	constructor(game: Game) {
		super(game);

		console.log("Instantiated user!");
		this.addComponent(new SomePropertyComponent());
		$()
	}
}