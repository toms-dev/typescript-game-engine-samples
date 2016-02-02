
import {Controller, CommandRequestJSON} from "typescript-game-engine-server";
import User from "../../shared/entities/User";
import ChatRoom from "../../shared/entities/ChatRoom";
import ChatService from "../../shared/entities/ChatService";
import ChatRoomController from "./ChatRoomController";

export default class ChatMainController extends Controller {

	private chatService: ChatService;

	constructor(chatService: ChatService) {
		super();
		this.chatService = chatService;
	}

	protected activate(now: number): void {
	}

	protected deactivate(now: number): void {
	}

	protected receiveCommand(command: CommandRequestJSON): void {
		if (command.name == "COMMAND_LOGIN") {
			var username = command.data.username;
			this.createUser(username);
		}
		else if (command.name == "COMMAND_JOIN_ROOM") {
			var userID = command.data.userID,
				roomID = command.data.roomID;
			this.joinRoom(userID, roomID);
		}
	}

	private createUser(username: string): void {
		var user = new User(username);
		this.world.addEntity(user);
		// TODO: this.world.broadcastWorldEvent(new GameEvent(USER_LOGIN));
	}

	private joinRoom(userID: number, chatRoomID: number): void {
		var user = this.chatService.getUser(userID);
		var room = this.chatService.getChatRoom(chatRoomID);

		room.userJoin(user);
		this.addChildController(new ChatRoomController(room));
	}

	getWorldState(): any {
		return this.chatService.getState();
	}

}