


import {Declare, Components, Entity} from "typescript-game-engine-server";
import Component from "typescript-game-engine-server/lib/components/Component"; //= Components.Component;

/**
 * This server-side components makes a colored component change color on user input.
 */
@Declare.Component
export default class NameComponent extends Component {

	@Declare.Property
	private name: string;

	constructor(name: string) {
		super();
		this.name = name;
	}

	tick(delta: number, now: number): void {
	}

	changeName(name: string): void {
		this.name = name;
		// TODO: fire event
	}

}