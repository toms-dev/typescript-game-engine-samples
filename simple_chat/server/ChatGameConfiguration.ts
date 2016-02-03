import {Entity, Controller, IGameConfiguration} from "typescript-game-engine-server";

import ChatMainController from "./controllers/ChatMainController";
import ChatService from "../shared/entities/ChatService";

export default class ChatGameConfiguration implements IGameConfiguration<ChatService> {

	createRootEntity(): ChatService {
		var chatService = new ChatService();
		var chatRoom = chatService.createRoom("<3");
		var user = chatService.createUser("Marmotte");
		chatService.userJoinRoom(user, chatRoom);

		console.log("Users:", chatRoom.users);
		chatRoom.newMessage("Hello!", user);

		console.log("Setup done.");

		setInterval(() => {
			chatRoom.newMessage("I'm still here! ;)", user);
		}, 2000);
		setInterval(() => {
			var user = chatService.createUser("auto_derp");
			setTimeout(() => {
				chatService.removeUser(user);
			}, 1000);
		}, 2000);

		return chatService;
	}

	createRootController(rootEntity: ChatService): Controller {
		return new ChatMainController(rootEntity);
	}

}
