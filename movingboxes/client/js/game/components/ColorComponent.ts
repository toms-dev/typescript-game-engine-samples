import {Entity, IComponent, GameEvent, IGameEventReceiver} from "typescript-game-engine-client";

export default class ColorComponent implements IComponent {

	public color: string;
	public borderColor: string = "black";
	public static EVENT_COLOR_CHANGE = "EVENT_COLOR_CHANGE";
	private parent: IGameEventReceiver;

	constructor(parent: IGameEventReceiver) {
		this.parent = parent;
	}

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

		// Generating an event
		var event = new GameEvent(ColorComponent.EVENT_COLOR_CHANGE, [newColor], this);
		event.propagate([this.parent]);
	}

}