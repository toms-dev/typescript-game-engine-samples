
import {
	Game, UIComponent, Entity, MovementComponent,
	GameEvent,
	Math
} from 'typescript-game-engine-client';
import ColorComponent from "./components/ColorComponent";
//import {Vector3} from 'typescript-game-engine-client/lib/math';

export default class My2DRenderer extends UIComponent {

	private $canvas: JQuery;

	public static EVENT_CLICK_PX = "click";
	public static EVENT_CLICK_COORDS = "click_coords";
	public static EVENT_CLICK_ENTITY = "click_entity";

	private scale = 30;

	private debug_warned: boolean = false;

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

	}

	receiveEvent(event: GameEvent): void {

	}

	tick(delta: number, now: number): void {
		var canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById('gameView');
		var ctx = canvas.getContext('2d');
		ctx.clearRect(0,0, canvas.width, canvas.height);

		var scale = this.scale;

		this.game.world.getEntities().forEach((ent: Entity) => {
			if (!this.debug_warned) {
				this.debug_warned = true;
				console.warn("Warning: Renderer is using debugRawData in entity!");
			}

			var pos = ent.getComponent(MovementComponent).getPosition();
			var id = ent.guid;

			var colorComp = ent.getComponent(ColorComponent);
			var color = colorComp.color; //raw.colorName;
			var borderColor = colorComp.borderColor;
			ctx.fillStyle = color ? color: "orange";
			ctx.strokeStyle = borderColor;
			ctx.lineWidth = 4;

			ctx.strokeRect(pos.x * scale, pos.y * scale, 50, 50);
			ctx.fillRect(pos.x * scale, pos.y * scale, 50, 50);

			ctx.strokeStyle = "black";
			ctx.lineWidth = 1;
			ctx.textAlign = "center";
			var text = ent.toString();
			ctx.strokeText(text, pos.x * scale + 25, pos.y * scale + 25, 50);

		});
	}

}
