
import {Game, UIComponent, Entity, MovementComponent} from 'typescript-game-engine-client';

export default class My2DRenderer extends UIComponent {

	private game: Game;
	private $canvas: JQuery;

	public static EVENT_CLICK = "click";

	constructor(game:Game) {
		super();
		this.game = game;

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

			this.eventEmitter.emit("click", x, y);
			// Stream event to others components? To parent entity?
		});
	}

	loadState(entityData: any): void {

	}

	tick(delta: number, now: number): void {
		var canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById('gameView');
		var ctx = canvas.getContext('2d');
		ctx.clearRect(0,0, canvas.width, canvas.height);

		var scale = 30;

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
