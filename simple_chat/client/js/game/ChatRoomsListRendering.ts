
import {UIComponent, Game, GameEvent} from "typescript-game-engine-client";
import ChatService from "../../../shared/entities/ChatService";
import ChatRoom from "../../../shared/entities/ChatRoom";

export default class ChatRoomsListRendering extends UIComponent {

	private chatService: ChatService;
	private $list: JQuery;

	constructor(game: Game, chatService: ChatService) {
		super(game);
		this.chatService = chatService;
	}

	setup(): void {
		this.$list = $("#roomsList");
	}

	loadState(entityData: any): void {
	}

	tick(delta: number, now: number): void {
		$("#roomsList").empty();
		this.chatService.rooms.forEach((r: ChatRoom) => {
			$("#roomsList").append($("<li>").text(r.name));
		})

	}

	receiveEvent(event: GameEvent): void {
	}

}
