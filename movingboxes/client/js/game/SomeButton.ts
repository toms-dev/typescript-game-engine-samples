
import {Game, UIComponent, CommandSender, GameEvent} from 'typescript-game-engine-client';

export default class SomeButton extends UIComponent {

	public static EVENT_CLICKED = "EVENT_MYBUTTON_CLICKED";

	setup(): void {
		$("#alertButton").click(() => {
			console.log("CLICK on Alert!");
			var event = new GameEvent(SomeButton.EVENT_CLICKED, ["Hello, I'm the button!"], this);
			event.propagate([this.game]);
		})
	}

	loadState(state: any): void {
		// do nothing
	}

	tick(delta: number, now: number): void {
		// do nothing
	}

	receiveEvent(event: GameEvent): void {
	}

}