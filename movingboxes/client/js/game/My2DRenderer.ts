
import {
	Game, UIComponent, Entity, MovementComponent,
	Math
} from 'typescript-game-engine-client';
//import {Vector3} from 'typescript-game-engine-client/lib/math';

export default class My2DRenderer extends UIComponent {

	private game: Game;
	private $canvas: JQuery;

	public static EVENT_CLICK_PX = "click";
	public static EVENT_CLICK_COORDS = "click_coords";
	public static EVENT_CLICK_ENTITY = "click_entity";

	private scale = 30;

	constructor(game:Game) {
		super();
		this.game = game;

		this.setup();
	}

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
			this.eventEmitter.emit(My2DRenderer.EVENT_CLICK_PX, x, y);

			var worldX = x / this.scale;
			var worldY = y / this.scale;
			var worldZ = 0;

			var coords = Math.Vector3.create(worldX, worldY, worldZ);
			this.eventEmitter.emit(My2DRenderer.EVENT_CLICK_COORDS, coords);

			var entityArray = this.game.world.getEntitiesAt(coords).slice(0,1);
			if (entityArray.length > 0) {
				var entity = entityArray[0];
				this.eventEmitter.emit(My2DRenderer.EVENT_CLICK_ENTITY, entity);
			}
		});
	}

	loadState(entityData: any): void {

	}

	tick(delta: number, now: number): void {
		var canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById('gameView');
		var ctx = canvas.getContext('2d');
		ctx.clearRect(0,0, canvas.width, canvas.height);

		var scale = this.scale;

		this.game.world.getEntities().forEach((ent: Entity) => {
			console.warn("Warning: Renderer is using debugRawData in entity!");
			// TODO: should not use debugRawData but movement component instead. There is a problem
			// in the state loading system.
			/*var movement = ent.getComponent(MovementComponent);
			var pos = movement.getPosition().toJSON();*/
			var raw = (<any> ent).debugRawData;
			var pos = raw.position;

			var color = raw.colorName;
			ctx.fillStyle = color ? color: "red";
			ctx.fillRect(pos.x * scale, pos.y * scale, 50, 50);
		});
	}

}
