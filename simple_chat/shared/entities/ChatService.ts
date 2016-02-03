
import {Declare, Entity, NamedEntityType} from "typescript-game-engine-server";
import ChatRoom from "./ChatRoom";
import User from "./User";

@Declare.Entity
export default class ChatService extends Entity {

	private _rooms: ChatRoom[];
	private _users: User[];

	@Declare.Property
	private derp: string = "lol";

	constructor() {
		super(new NamedEntityType("ChatService"));
		this._rooms = [];
		this._users = [];
	}

	createRoom(roomName: string): ChatRoom {
		var room = new ChatRoom(roomName);
		this._rooms.push(room);
		return room;
	}

	@Declare.PropertyEntity
	get rooms(): ChatRoom[] {
		return this._rooms;
	}

	@Declare.PropertyEntity
	get users(): User[] {
		return this._users;
	}

	createUser(username: string): User {
		var user = new User(username);
		this._users.push(user);
		return user;
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

	removeUser(user: User): void {
		var index = this._users.indexOf(user);
		if (index == -1) {
			throw new Error("User not found");
		}
		this._users.splice(index, 1);
	}
}