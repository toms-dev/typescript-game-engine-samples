import {Declare, Entity, NamedEntityType} from "typescript-game-engine-server";
import MyBox from "./MyBox";

@Declare.Entity
export default class BoxesWorld extends Entity {

	@Declare.PropertyEntity
	public boxes: MyBox[];

	constructor() {
		super(new NamedEntityType("BoxesWorld"));
		this.boxes = [];
	}
}
