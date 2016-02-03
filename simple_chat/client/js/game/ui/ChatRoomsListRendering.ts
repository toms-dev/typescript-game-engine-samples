
import {UIComponent, Game, GameEvent} from "typescript-game-engine-client";
import ChatService from "../../../../shared/entities/ChatService";
import ChatRoom from "../../../../shared/entities/ChatRoom";

export default class ChatRoomsListRendering extends UIComponent {

	public static EVENT_JOIN_ROOM: string;

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
		var $content = $("<div>");
		this.chatService.rooms.forEach((r: ChatRoom) => {
			var $link = $("<div>");
			$link.text("room: ++" + r.name);
			$content.append($link);
			$link.on('click', (event: Event) => {
				var eventData = {
					roomID: r.getGUID()
				};
				console.debug("Firing event");
				this.fireEvent(new GameEvent(ChatRoomsListRendering.EVENT_JOIN_ROOM, [eventData], this));
				event.preventDefault();
			});

			//$link.appendTo($("body"));
		});
		$("#roomsList").empty().append($content);

	}

	receiveEvent(event: GameEvent): void {
	}

}
