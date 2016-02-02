import {Entity, Controller, IGameConfiguration} from "typescript-game-engine-server";

import DefaultController from "./controllers/ChatMainController";
import ChatService from "./entities/ChatService";

export default class ChatGameConfiguration implements IGameConfiguration<ChatService> {

	createRootEntity(): ChatService {
		var chatService = new ChatService();
		var chatRoom = chatService.createRoom();
		var user = chatService.createUser("Marmotte");
		chatService.userJoinRoom(user, chatRoom);

		console.log("Users:", chatRoom.users);
		chatRoom.newMessage("Hello!", user);

		console.log("Setup done.");

		return chatService;
	}

	createRootController(rootEntity: ChatService): Controller {
		return new DefaultController(rootEntity);
	}

}
