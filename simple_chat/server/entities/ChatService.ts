
import {Declare, Entity, NamedEntityType} from "typescript-game-engine-server";
import ChatRoom from "./ChatRoom";
import User from "./User";

@Declare.Entity
export default class ChatService extends Entity {

	private _rooms: ChatRoom[];
	private _users: User[];

	constructor() {
		super(new NamedEntityType("ChatService"));
		this._rooms = [];
		this._users = [];
	}

	createRoom(): ChatRoom {
		var room = new ChatRoom();
		this._rooms.push(room);
		return room;
	}

	@Declare.Property
	get rooms(): ChatRoom[] {
		return this._rooms;
	}

	@Declare.Property
	get users(): User[] {
		return this._users;
	}

	createUser(username: string): User {
		var user = new User(username);
		this._users.push(user);
		return user;
	}

	getState(): any {
		return super.getState();
	}

	userJoinRoom(user: User, chatRoom: ChatRoom): void {
		chatRoom.userJoin(user);
	}

	getUser(userID: number): User {
		return this.getSubEntity(this._users, userID);
	}
	getChatRoom(roomID: number): ChatRoom {
		return this.getSubEntity(this._rooms, roomID);
	}

}