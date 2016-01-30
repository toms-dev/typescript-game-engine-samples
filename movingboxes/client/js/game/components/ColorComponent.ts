import {Entity, IComponent, GameEvent} from "typescript-game-engine-client";

export default class ColorComponent implements IComponent {

	public color: string;
	public borderColor: string = "black";

	loadState(entityData: any): void {
		this.color = entityData.colorName;
	}

	tick(delta: number, now: number): void {
	}

	receiveEvent(event: GameEvent): void {
	}

	public changeColor(newColor: string): void {
		this.borderColor = newColor;
		console.debug("New border color is: " + newColor);
		// TODO: Generate event? :)
	}

}