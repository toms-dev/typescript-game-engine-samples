import {Game, IComponent, Entity, MovementComponent, GameEvent} from 'typescript-game-engine-client';

/**
 * In the same way as My2DRenderer, this text renderer updates information in the GUI.
 */
export default class MyTextRenderer implements IComponent {

	private game: Game;
	private debug_warned: boolean = false;

	constructor(game: Game) {
		this.game = game;
	}

	loadState(entityData: any): void {
		// do nothing
	}

	receiveEvent(event: GameEvent): void {
		// do nothing
	}

	tick(delta: number, now: number): void {
		$("#log").empty();

		this.game.world.getEntities().forEach((ent: Entity) => {
			// Retrieve the position from the component
			var pos = ent.getComponent(MovementComponent).getPosition();
			// and display its value
			$("<div>").text("Position:" + JSON.stringify(pos)).appendTo("#log");
		});
	}

}
