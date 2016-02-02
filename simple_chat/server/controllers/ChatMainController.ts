
import {Controller, CommandRequestJSON} from "typescript-game-engine-server";
import User from "../entities/User";
import ChatRoom from "../entities/ChatRoom";

export default class ChatMainController extends Controller {

	private chatRoom: ChatRoom = new ChatRoom();

	protected activate(now: number): void {
	}

	protected deactivate(now: number): void {
	}

	protected receiveCommand(command: CommandRequestJSON): void {
		if (command.name == "COMMAND_LOGIN") {
			var username = command.data.username;
			this.createUser(username);
			throw "Not implemented.";
		}
	}

	private createUser(username: string): void {
		var user = new User(username);
		this.world.addEntity(user);
		//this.world.broadcastWorldEvent(new GameEvent(USER_LOGIN));
	}

	getWorldState(): any {
		return {
			worldStatus: "loaded"
		}
	}

}