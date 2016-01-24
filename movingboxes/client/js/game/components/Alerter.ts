
import {IComponent} from "typescript-game-engine-client";

export default class Alerter implements IComponent {

	alert(message: string) {
		window.alert("Alert! "+message);
	}

	loadState(entityData:any):void {
	}

	tick(delta:number, now:number):void {
	}

}