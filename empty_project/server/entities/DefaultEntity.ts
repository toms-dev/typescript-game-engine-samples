import {Declare, Entity, World, NamedEntityType} from "typescript-game-engine-server";

@Declare.Entity
export default class DefaultEntity extends Entity {

	@Declare.Property
	private someProperty: string;

	constructor(world: World, someProperty: string) {
		super(world, new NamedEntityType("DefaultEntity"));
		this.someProperty = someProperty;
	}
}
