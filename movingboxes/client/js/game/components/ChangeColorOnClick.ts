
import {Entity, IComponent, GameEvent} from "typescript-game-engine-client";
import EntityClickAdapter from "./EntityClickAdapter";
import ColorComponent from "./ColorComponent";

export default class ChangeColorOnClick implements IComponent {

	private entity: Entity;
	private colors: string[];
	private colorID: number;

	constructor(entity: Entity) {
		this.entity = entity;
		this.colors = ["pink", "green", "yellow"];
		this.colorID = 0;
	}

	receiveEvent(event: GameEvent): void {
		// Bind the event
		if (event.name == EntityClickAdapter.EVENT_CLICK) {
			console.debug("Triggering color change on target component!");
			this.changeColor();
		}
	}

	private getNextColor(): string {
		var color = this.colors[this.colorID];
		this.colorID = (this.colorID + 1) % this.colors.length;
		return color;
	}

	private changeColor(): void {
		// TODO: this is not optimal, see https://github.com/toms-dev/typescript-game-engine-client/issues/2
		this.entity.getComponent(ColorComponent).changeColor(this.getNextColor());
	}

	loadState(entityData: any): void {
	}

	tick(delta: number, now: number): void {
	}


}