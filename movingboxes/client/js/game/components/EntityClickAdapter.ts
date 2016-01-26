import {Entity, IComponent, EventAdapter} from "typescript-game-engine-client";
import My2DRenderer from "../My2DRenderer";

/**
 * This class adapt all UI events to Entity click.
 */
export default class EntityClickAdapter extends EventAdapter {

	static EVENT_CLICK = "EVENT_ENTITY_CLICK";

	constructor(entity: Entity) {
		super(entity);
	}

	loadState(entityData: any): void {
	}

	tick(delta: number, now: number): void {
	}

	registerEvents(): void {
		this.mapEvent(My2DRenderer.EVENT_CLICK_ENTITY, EntityClickAdapter.EVENT_CLICK);
	}

}
