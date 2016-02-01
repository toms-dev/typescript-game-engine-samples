import {Declare, Entity, World, NamedEntityType} from "typescript-game-engine-server";

@Declare.Entity
export default class User extends Entity {

	@Declare.Property
	private username: string;

	constructor(world: World, username: string) {
		super(world, new NamedEntityType("DefaultEntity"));
		this.username = username;
	}

}
