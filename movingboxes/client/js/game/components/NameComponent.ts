
import {Entity, IComponent, GameEvent, IGameEventReceiver} from "typescript-game-engine-client";

/**
 * This is a very basic component holding some business state (here a background and border color).
 * It can generate events when changed locally.
 */
export default class NameComponent implements IComponent {

	private name: string;

	constructor(name: string) {
		this.name = name;
	}

	loadState(entityData: any): void {
		this.name = entityData.name;
	}

	tick(delta: number, now: number): void {
	}

	receiveEvent(event: GameEvent): void {
	}

	getName(): string {
		return this.name;
	}
}