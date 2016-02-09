
import {Declare, Entity, Components} from "typescript-game-engine-server";
import {NamedEntityType} from "typescript-game-engine-server";

import ColoredComponent from "../components/ColoredComponent";
import ColorChanger from "../components/ColorChanger";
import PathComponent from "../components/PathComponent";

import {Vector3} from "typescript-game-engine-server/lib/math/";
import NameComponent from "../components/NameComponent";	// TODO: fix include path?

@Declare.Entity
export default class MyBox extends Entity {

	@Declare.Property
	public derp = "lol";

	constructor(boxColor:string) {
		super(new NamedEntityType("MyBox"));
		var colorComponent = new ColoredComponent(this, boxColor);
		this.addComponent(colorComponent);
		var movement = new Components.Generic.Movement();
		movement.setPosition(Vector3.create(Math.random()*3, Math.random()*3,0));
		this.addComponent(movement);
		this.addComponent(new PathComponent(movement));
		this.addComponent(new NameComponent("DefaultServerName"));
		//this.addComponent(new ColorChanger(colorComponent));

		//console.warn("Making box "+this+" move!");
		//this.getComponent(Components.Generic.Movement).moveTo(Vector3.create(1,1,1));
	}

	public setup() {
		//this.addComponent(new Components.Generic.Movement()); // this component is both used on server and client sides
		this.addComponent(new Components.Generic.Drawable("box")); // this is mainly a client-side component
	}

	//@Declare.Entity.Property
	public someMethod(): number {
		return 42;
	}


	tick(delta: number, now: number): void {
		super.tick(delta, now);
	}
}
