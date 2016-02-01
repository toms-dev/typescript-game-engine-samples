
import {IComponent, GameEvent} from "typescript-game-engine-client";


export default class SomePropertyComponent implements IComponent {

	public somePropertyValue: string;

	loadState(entityData: any): void {
		this.somePropertyValue = entityData.someProperty;
	}

	tick(delta: number, now: number): void {
	}

	receiveEvent(event: GameEvent): void {
	}

}