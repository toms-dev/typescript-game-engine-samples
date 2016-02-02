
import {Declare, Entity, Components, NamedEntityType} from "typescript-game-engine-server";
import User from "./User";

@Declare.Entity
export default class FriendList extends Entity {

	private owner: User;

	@Declare.PropertyReference
	private friends: User[];

	constructor(owner: User) {
		super(new NamedEntityType("FriendList"));
		this.owner = owner;
		this.friends = [];
	}

	addFriend(user: User): void {
		this.friends.push(user);
		// TODO: throw an event, a new friendship has to be noticed by everybody! :)
	}
	removeFriend(user: User): void {
		var index = this.friends.indexOf(user);
		if (index == -1) {
			throw new Error("User "+this.owner.toString()+" does not have friend "+user.toString());
		}
		this.friends.splice(index, 1);
	}

}
