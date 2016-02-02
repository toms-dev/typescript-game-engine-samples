import {Declare, Entity, World, NamedEntityType} from "typescript-game-engine-server";
import FriendList from "../components/FriendList";

@Declare.Entity
export default class User extends Entity {

	@Declare.Property
	public username: string;

	@Declare.Property
	public friendList: FriendList;

	constructor(username: string) {
		super(new NamedEntityType("DefaultEntity"));
		this.username = username;
		this.friendList = new FriendList(this);
	}

}
