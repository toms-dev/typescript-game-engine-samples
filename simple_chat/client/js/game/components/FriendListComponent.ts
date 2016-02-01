
import {IComponent, GameEvent} from "typescript-game-engine-client";
import User from "../entities/User";


export default class SomePropertyComponent implements IComponent {

	public owner: User;
	public friends: User[];

	loadState(entityData: any): void {

	}

	tick(delta: number, now: number): void {
	}

	receiveEvent(event: GameEvent): void {
	}

}