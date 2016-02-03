
import {Controller, CommandRequestJSON} from "typescript-game-engine-server";
import User from "../../shared/entities/User";
import ChatRoom from "../../shared/entities/ChatRoom";
import ChatService from "../../shared/entities/ChatService";
import ChatRoomController from "./ChatRoomController";

import ChatCommands from "../../shared/ChatCommands";

export default class ChatMainController extends Controller {

	private chatService: ChatService;
	private user: User;

	constructor(chatService: ChatService) {
		super();
		this.chatService = chatService;
		this.user = null;
	}

	protected activate(now: number): void {
	}

	protected deactivate(now: number): void {
	}

	protected receiveCommand(command: CommandRequestJSON): void {
		if (command.name == ChatCommands.SET_NAME) {
			var username = command.data.newName;
			this.createUser(username);
		}
		else if (command.name == ChatCommands.JOIN_ROOM) {
			var userID = this.user.getGUID(),
				roomID = command.data.roomID;
			this.joinRoom(userID, roomID);
		}
	}

	private createUser(username: string): void {
		this.user = this.chatService.createUser(username);
		// TODO:? this.world.broadcastWorldEvent(new GameEvent(USER_LOGIN));
	}

	private joinRoom(userID: number, chatRoomID: number): void {
		var user = this.chatService.getUser(userID);
		var room = this.chatService.getChatRoom(chatRoomID);

		console.log(user.username + " joined room "+room.name+"!");
		room.userJoin(user);
		this.addChildController(new ChatRoomController(room));
	}

	getWorldState(): any {
		return this.chatService.getState();
	}

}