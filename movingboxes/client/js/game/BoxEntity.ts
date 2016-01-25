
import {Declare, Entity, EntityTyping, MovementComponent} from "typescript-game-engine-client";
import ClickableComponent from "./components/ClickableComponent";

@Declare.Entity
@Declare.EntityTyping(new EntityTyping.Named("MyBox"))	// "MyBox" is the server-side name.
export default class BoxEntity extends Entity {

	constructor() {
		super();

		this.addComponent(new MovementComponent());
		this.addComponent(new ClickableComponent(this));
	}

}

