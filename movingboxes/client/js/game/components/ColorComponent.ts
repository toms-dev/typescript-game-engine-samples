import {Entity, IComponent, GameEvent, IGameEventReceiver} from "typescript-game-engine-client";

/**
 * This is a very basic component holding some business state (here a background and border color).
 * It can generate events when changed locally.
 */
export default class ColorComponent implements IComponent {

	public color: string;
	public borderColor: string = "black";
	public static EVENT_COLOR_CHANGE = "EVENT_COLOR_CHANGE";
	private entity: Entity;

	constructor(parent: Entity) {
		this.entity = parent;
	}

	loadState(entityData: any): void {
		this.color = entityData.colorName;
		this.borderColor = this.color;
	}

	tick(delta: number, now: number): void {
	}

	receiveEvent(event: GameEvent): void {
	}

	public changeColor(newColor: string): void {
		// The border color is changed immediately, while the background one is processed by the server.
		this.borderColor = newColor;
		console.debug("New border color is: " + newColor);

		// Generating an event
		var eventData = {newColor: newColor, targetEntityID: this.entity.guid};
		// TODO: remove the brackets around [eventData]
		var event = new GameEvent(ColorComponent.EVENT_COLOR_CHANGE, [eventData], this);
		event.propagate([this.entity.game]);
	}

}