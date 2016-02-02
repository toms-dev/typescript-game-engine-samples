
import {Declare, Map, World} from "typescript-game-engine-server";
import DefaultEntity from "../entities/User";
import User from "../entities/User";
import ChatRoom from "../entities/ChatRoom";

@Declare.Map
export default class DefaultMap extends Map {

	setup(world: World): void {
		var chatRoom = new ChatRoom();
		world.addEntity(chatRoom);

		var user = new User("Marmotte");
		world.addEntity(user);

		chatRoom.userJoin(user);

		console.log("Users:", chatRoom.users);

		chatRoom.newMessage("Hello!", user);

		console.log("Map setup done.");
	}

}