import {Entity, IComponent, EventAdapter, IGameEventEmitter} from "typescript-game-engine-client";
import My2DRenderer from "../My2DRenderer";
import ColorButton from "../SomeButton";
import Alerter from "./Alerter";

export default class AlertAdapter extends EventAdapter {

	loadState(entityData: any): void {
	}

	tick(delta: number, now: number): void {
	}

	registerEvents(): void {
		this.mapEvent(ColorButton.EVENT_CLICKED, Alerter.EVENT_ALERT_MESSAGE);
		this.mapEvent(My2DRenderer.EVENT_CLICK_COORDS, Alerter.EVENT_ALERT_MESSAGE, (params: any[]) => {
			return [JSON.stringify(params[0])];
		});
		this.mapEvent(My2DRenderer.EVENT_CLICK_ENTITY, Alerter.EVENT_ALERT_MESSAGE, (params: any[]) => {
			return ["Click on entity : "+params[0].guid];
		});
	}

}
