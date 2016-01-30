import {IComponent, GameEvent} from "typescript-game-engine-client";

export default class Alerter implements IComponent {

	alert(message: string) {
		$("#alert").text("Alert: "+message);
		//window.alert("Alert! "+message);
	}

	loadState(entityData:any):void {
	}

	tick(delta:number, now:number):void {
	}

	receiveEvent(event: GameEvent): void {
	}

}