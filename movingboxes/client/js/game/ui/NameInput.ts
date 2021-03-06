

import {Game, UIComponent, CommandSender, GameEvent} from 'typescript-game-engine-client';

/**
 * This is input will be used to provide a name to the box!
 */
export default class NameInput extends UIComponent {

	public static EVENT_CHANGED = "EVENT_INPUT_NAME_CHANGED";

	setup(): void {
		var $input = $("#boxName");
		$input.on("change", () => {
			var newName = $input.val();
			console.log("New name: ", newName);
			var params = {
				newName: newName
			};
			this.fireEvent(new GameEvent(NameInput.EVENT_CHANGED, [params], this));
		});
	}

	loadState(entityData: any): void {
	}

	tick(delta: number, now: number): void {
	}

	receiveEvent(event: GameEvent): void {
	}

}