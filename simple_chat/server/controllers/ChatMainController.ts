
import {Controller, CommandRequestJSON} from "typescript-game-engine-server";
import User from "../../shared/entities/User";
import ChatRoom from "../../shared/entities/ChatRoom";
import ChatService from "../../shared/entities/ChatService";
import ChatRoomController from "./ChatRoomController";

import ChatCommands from "../../shared/ChatCommands";

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
		if (command.name == ChatCommands.SET_NAME) {
			var username = command.data.username;
			this.createUser(username);
		}
		else if (command.name == ChatCommands.JOIN_ROOM) {
			var userID = command.data.userID,
				roomID = command.data.roomID;
			this.joinRoom(userID, roomID);
		}
	}

	private createUser(username: string): void {
		this.chatService.createUser(username);
		// TODO:? this.world.broadcastWorldEvent(new GameEvent(USER_LOGIN));
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