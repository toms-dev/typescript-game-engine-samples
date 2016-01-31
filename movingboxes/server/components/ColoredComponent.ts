
import {Declare, Components, Entity} from "typescript-game-engine-server";

import IComponent = Components.IComponent;
import Component = Components.Component;
import ComponentBag = Components.ComponentBag;

@Declare.Component
export default class ColoredComponent extends Component {

	@Declare.Property
	public colorName: string;

	private entity: Entity;

	constructor(entity: Entity, initialColorName:string) {
		super();
		this.entity = entity;
		this.colorName = initialColorName;
	}

	tick(delta:number, now:number):void {
	}

	receiveEvent(eventName: string, eventData: any): void {
		if (eventName == "COMMAND_CHANGE_COLOR") {
			var newColor = eventData.newColor;
			var entityID = eventData.targetEntityID;
			console.log("Changing color to "+newColor+" of "+entityID+" from event!");

			// Check if entity matches the event target
			if (entityID == this.entity.getGUID()) {
				this.colorName = newColor;
			}
		}
	}

}