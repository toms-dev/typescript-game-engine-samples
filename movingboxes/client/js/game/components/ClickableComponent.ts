
//import {IComponent} from "typescript-game-engine-client";
import {IComponent, Entity} from "typescript-game-engine-client";
import {MovementComponent} from "typescript-game-engine-client";

interface ClickCallback {
	() : void;
}

/**
 * @deprecated
 */
export default class ClickableComponent implements IComponent {

	private target: Entity;
	private callback: ClickCallback;

	constructor(target:Entity, clickCallback: ClickCallback) {
		this.target = target;
		this.callback = clickCallback;

		// TODO: maybe the ClickableComponent could listen to some special kind of event.
	}

	loadState(entityData:any):void {
	}

	tick(delta:number, now:number):void {
	}

	receiveEvent(eventName: string, args: any[]): void {
	}

	public onClick(): void {
		console.error("I was clicked!");
		this.callback();
	}

}
