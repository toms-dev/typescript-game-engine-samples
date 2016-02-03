
import {UIComponent, Game, GameEvent} from "typescript-game-engine-client";
import ChatService from "../../../../shared/entities/ChatService";
import ChatRoom from "../../../../shared/entities/ChatRoom";
import User from "../../../../shared/entities/User";

export default class UsersListRendering extends UIComponent {

	private chatService: ChatService;
	private selector: string;
	private $list: JQuery;

	constructor(game: Game, chatService: ChatService, selector: string) {
		super(game);
		this.chatService = chatService;
		this.selector = selector;
	}

	setup(): void {
		this.$list = $("#roomsList");
	}

	loadState(entityData: any): void {
	}

	tick(delta: number, now: number): void {
		$(this.selector).empty();
		this.chatService.users.forEach((u: User) => {
			$(this.selector).append($("<li>").text(u.username));
		})

	}

	receiveEvent(event: GameEvent): void {
	}

}
