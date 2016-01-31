import {Entity, IComponent, EventAdapter, IGameEventEmitter} from "typescript-game-engine-client";
import My2DRenderer from "../My2DRenderer";
import ColorButton from "../SomeButton";
import Alerter from "./Alerter";

/**
 * The AlertAdapter listen to various kind of business events and triggers new events to enrich the user experience.
 */
export default class AlertAdapter extends EventAdapter {

	loadState(entityData: any): void {
	}

	tick(delta: number, now: number): void {
	}

	registerEvents(): void {
		// util function
		var roundCoord = function(value: number) {
			return Math.round(value*10)/10
		};

		// Basic event mapping: when a the event ColorButton.EVENT_CLICKED occurs, the event Alerter.EVENT_ALERT_MESSAGE
		// will be triggered with the same parameters.
		this.mapEvent(ColorButton.EVENT_CLICKED, Alerter.EVENT_ALERT_MESSAGE);

		// A bit more advanced, there is a parameter processor passed as a 3rd argument. It's purpose is to make the
		// data correspond in order to match the target component.
		this.mapEvent(My2DRenderer.EVENT_CLICK_COORDS, Alerter.EVENT_ALERT_MESSAGE, (params: any[]) => {
			var coords = params[0];
			return ["Clicked somewhere: "+roundCoord(coords.x)+", "+roundCoord(coords.y)+", "+roundCoord(coords.z)];
		});
		// The same thing here
		this.mapEvent(My2DRenderer.EVENT_CLICK_ENTITY, Alerter.EVENT_ALERT_MESSAGE, (params: any[]) => {
			return ["Click on entity : "+params[0].guid];
		});
	}

}
