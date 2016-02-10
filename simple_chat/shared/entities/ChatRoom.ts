
import {Declare, Entity, NamedEntityType} from "typescript-game-engine-server";
import User from "./User";

@Declare.Entity
export default class ChatRoom extends Entity {

	@Declare.Property
	public name: string;

	private _users: User[];

	@Declare.PropertyReference
	private derpForGeneratingWarning: Entity;

	@Declare.Property
	private messages: string[];

	constructor(name: string) {
		super(new NamedEntityType("ChatRoom"));
		this.name = name;
		this._users = [];
		this.messages = [];
	}

	@Declare.PropertyReference
	get users(): User[] {
		return this._users;
	}

	userJoin(user: User): void {
		this._users.push(user);
	}

	newMessage(text: string, author: User): void {
		this.messages.push(author.username + " says: "+text);
		// TODO: this.fireEvent();
	}

}
