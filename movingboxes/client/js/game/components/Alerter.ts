import {IComponent, GameEvent} from "typescript-game-engine-client";

export default class Alerter implements IComponent {

	static EVENT_ALERT_MESSAGE = "EVENT_ALERT_MESSAGE";

	alert(message: string) {
		console.log("NEW MESSAGE:"+ message);
		$("#alert").text("Alert: "+message);
		//window.alert("Alert! "+message);
	}

	loadState(entityData:any):void {
	}

	tick(delta:number, now:number):void {
	}

	receiveEvent(event: GameEvent): void {
		if (event.name == Alerter.EVENT_ALERT_MESSAGE) {
			this.alert(event.params[0]);
		}
	}

}