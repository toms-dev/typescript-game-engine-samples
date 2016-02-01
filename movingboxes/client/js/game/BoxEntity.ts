import {Declare, Game, Entity, EntityTyping, MovementComponent} from "typescript-game-engine-client";
import ColorComponent from "./components/ColorComponent";
import EntityClickAdapter from "./components/EntityClickAdapter";
import ChangeColorOnClick from "./components/ChangeColorOnClick";
import SimpleEntityRenderer from "./components/SimpleEntityRenderer";

@Declare.Entity
@Declare.EntityTyping(new EntityTyping.Named("MyBox"))	// "MyBox" is the server-side name.
export default class BoxEntity extends Entity {

	constructor(game: Game) {
		super(game);

		var movement = new MovementComponent(this);
		movement.radius = 3;
		this.addComponent(movement);
		var color = new ColorComponent(this);
		this.addComponent(color);
		this.addComponent(new EntityClickAdapter(this));
		this.addComponent(new ChangeColorOnClick(this));
		this.addComponent(new SimpleEntityRenderer(this, movement, color));
	}

}

