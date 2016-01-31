
import {Game, UIComponent, CommandSender, GameEvent} from 'typescript-game-engine-client';

/**
 * That's a basic button that will simply listen to DOM event to trigger events.
 */
export default class SomeButton extends UIComponent {

	public static EVENT_CLICKED = "EVENT_MYBUTTON_CLICKED";

	/**
	 * The setup method is used to put your DOM binding into.
	 */
	setup(): void {
		$("#alertButton").click(() => {
			console.log("CLICK on Alert!");
			this.fireEvent(new GameEvent(SomeButton.EVENT_CLICKED, ["Hello, I'm the button!"], this));
		})
	}

	loadState(state: any): void {
		// do nothing
	}

	tick(delta: number, now: number): void {
		// do nothing
	}

	receiveEvent(event: GameEvent): void {
		// do nothing
	}

}