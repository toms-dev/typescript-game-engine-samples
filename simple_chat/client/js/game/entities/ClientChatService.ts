import {Declare} from "typescript-game-engine-server";

import ChatService from "../../../../shared/entities/ChatService";

@Declare.EntityImplementation
export default class ClientChatService extends ChatService {

	constructor() {
		super();
	}

}