import {Entity, IComponent, GameEvent, MovementComponent} from "typescript-game-engine-client";
import ColorComponent from "./ColorComponent";

/**
 * This class acts as an adapter between the entity state and its visual representation.
 */
export default class Simple2DEntityRenderer implements IComponent {

	private entity: Entity;
	private movement: MovementComponent;
	private color: ColorComponent;

	constructor(entity: Entity, movement: MovementComponent, color: ColorComponent) {
		this.entity = entity;
		this.movement = movement;
		this.color = color;
	}

	loadState(entityData: any): void {
	}

	tick(delta: number, now: number): void {
	}

	receiveEvent(event: GameEvent): void {
	}

	draw(ctx: CanvasRenderingContext2D, scale: number): void {
		var pos = this.movement.getPosition();

		var colorComp = this.color;
		var color = colorComp.color;
		var borderColor = colorComp.borderColor;

		//Build the shape from the business data
		ctx.fillStyle = color ? color: "orange";
		ctx.strokeStyle = borderColor;
		ctx.lineWidth = 4;

		ctx.strokeRect(pos.x * scale, pos.y * scale, 50, 50);
		ctx.fillRect(pos.x * scale, pos.y * scale, 50, 50);

		// Display their name
		ctx.strokeStyle = "black";
		ctx.lineWidth = 1;
		ctx.textAlign = "center";
		var text = this.entity.toString();
		ctx.strokeText(text, pos.x * scale + 25, pos.y * scale + 25, 50);
	}

}
