
import {
	Game, UIComponent, Entity, MovementComponent,
	GameEvent,
	Math
} from 'typescript-game-engine-client';
import ColorComponent from "./components/ColorComponent";
import SimpleEntityRenderer from "./components/Simple2DEntityRenderer";

/**
 * This is a UI component that is in charge of performing a simple 2D rendering on a canvas. It uses game state on
 * each tick.
 */
export default class My2DRenderer extends UIComponent {

	private $canvas: JQuery;

	public static EVENT_CLICK_PX = "click";
	public static EVENT_CLICK_COORDS = "click_coords";
	public static EVENT_CLICK_ENTITY = "click_entity";

	private scale = 30;

	private debug_warned: boolean = false;

	/**
	 * Here we have to listen on the canvas for some clicks.
	 */
	public setup(): void {
		this.$canvas = $("#gameView");
		this.$canvas.on('click', (e: MouseEvent) => {
			// TODO: reuse camera stuff from piratefight?
			var x: number;
			var y: number;
			if (e.pageX || e.pageY) {
				x = e.pageX;
				y = e.pageY;
			}
			else {
				x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
				y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
			}
			x -= this.$canvas.offset().left;
			y -= this.$canvas.offset().top;

			// TODO: Stream event to others components? To parent entity? or just keep this event ?
			this.fireEvent(new GameEvent(My2DRenderer.EVENT_CLICK_PX, [x, y], this));

			var worldX = x / this.scale;
			var worldY = y / this.scale;
			var worldZ = 0;

			var coords = Math.Vector3.create(worldX, worldY, worldZ);
			this.fireEvent(new GameEvent(My2DRenderer.EVENT_CLICK_COORDS, [coords], this));

			var entityArray = this.game.world.getEntitiesAt(coords).slice(0,1);
			if (entityArray.length > 0) {
				var entity = entityArray[0];
				this.fireEvent(new GameEvent(My2DRenderer.EVENT_CLICK_ENTITY, [entity], this));
			}
		});
	}

	loadState(entityData: any): void {
		// do nothing
	}

	receiveEvent(event: GameEvent): void {
		// do nothing
	}

	/**
	 * That's were all the rendering magic happens
	 * @param delta
	 * @param now
	 */
	tick(delta: number, now: number): void {
		var canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById('gameView');
		var ctx = canvas.getContext('2d');
		ctx.clearRect(0,0, canvas.width, canvas.height);

		var scale = this.scale;

		// Iterate over the entities to draw them.
		this.game.world.getEntities().forEach((ent: Entity) => {
			// TODO: instead of getting explicitly the SimpleEntityRenderer, we should be able to retrieve all the
			// entity renderers available in the Entity that were designed to work with My2DRenderer.
			var entityRendering = ent.getComponent(SimpleEntityRenderer);
			if (entityRendering) {
				entityRendering.draw(ctx, scale);
			}
		});
	}

}
