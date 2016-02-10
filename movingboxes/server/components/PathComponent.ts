
import {Declare, Components, Math as MathUtils} from "typescript-game-engine-server";

//import {IComponent, Component, ComponentBag} from "typescript-game-engine-server/dist/lib/components";

import Component = Components.Component;
import Movement = Components.CommonComponents.Movement;

import Vector3 = MathUtils.Vector3;
//import {Movement} from "typescript-game-engine-server/lib/components/generic/";


@Declare.Component
export default class PathComponent extends Component {

	private activeTarget: number;
	private targets: Vector3[];
	private movement: Movement;

	constructor(target: Movement) {
		super();
		this.targets = [
			Vector3.create(0, 0, 0),
			Vector3.create(3*Math.random(), 3*Math.random(), 0),
			Vector3.create(3*Math.random(), 3*Math.random(), 0),
			Vector3.create(3*Math.random(), 3*Math.random(), 0)
		];
		this.activeTarget = 0;
		this.movement = target;
	}

	tick(delta:number, now:number):void {
		if (!this.movement.hasTarget()) {
			var nextTargetIndex = this.activeTarget++ % this.targets.length;
			console.log("New target "+nextTargetIndex);
			this.movement.moveTo(this.targets[nextTargetIndex]);
		}
	}

}