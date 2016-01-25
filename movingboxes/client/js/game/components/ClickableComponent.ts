
//import {IComponent} from "typescript-game-engine-client";
import {IComponent, Entity} from "typescript-game-engine-client";
import {MovementComponent} from "typescript-game-engine-client";

export default class ClickableComponent implements IComponent {

	private target: Entity;

	constructor(target:Entity) {
		this.target = target;
	}

	loadState(entityData:any):void {
	}

	tick(delta:number, now:number):void {
	}

	public onClick(): void {
		console.error("I was clicked!");
	}

}
