
import {Controller, World, CommandRequestJSON} from "typescript-game-engine-server";
import ChatRoom from "../entities/ChatRoom";

/**
 * The controller used inside a chat room.
 */
export default class ChatRoomController extends Controller {

	private currentChatRoom: ChatRoom;

	constructor(currentChatRoom: ChatRoom) {
		super();
		this.currentChatRoom = currentChatRoom;
	}

	protected activate(now: number): void {
	}

	protected deactivate(now: number): void {
	}

	protected receiveCommand(command: CommandRequestJSON): void {
	}



	public getWorldState(): any {
		return this.currentChatRoom.getState();
	}

}
