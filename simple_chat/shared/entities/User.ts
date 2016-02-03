import {Declare, Entity, World, NamedEntityType} from "typescript-game-engine-server";

import FriendList from "./FriendList";

@Declare.Entity
export default class User extends Entity {

	@Declare.Property
	public username: string;

	@Declare.PropertyEntity
	public friendList: FriendList;

	constructor(username: string) {
		super(new NamedEntityType("User"));
		this.username = username;
		this.friendList = new FriendList(this);
		console.log("Created user:"+this.username);
	}

}
