import {Declare} from "typescript-game-engine-server";

import User from "../../../../shared/entities/User";
import FriendList from "../../../../shared/entities/FriendList";

@Declare.EntityImplementation
export default class ClientUser extends User {

	public friendList: FriendList;

	constructor(username: string) {
		super(username);
		console.debug("Local user!!!!!!! Name: "+username);
	}

}