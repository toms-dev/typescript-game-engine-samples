
import {Components} from "typescript-game-engine-server";
import User from "../entities/User";

export default class FriendList implements Components.IComponent {

	private owner: User;
	private friends: User[];

	constructor(owner: User) {
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

	tick(delta: number, now: number): void {
	}

	getState(): any {
		return {
			friendsIDs: this.friends.map((f: User) => { return f.getGUID();})
		};
	}

}
