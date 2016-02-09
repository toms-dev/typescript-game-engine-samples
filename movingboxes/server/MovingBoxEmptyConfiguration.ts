import {IGameConfiguration, Controller} from "typescript-game-engine-server";
import BoxesWorld from "./entities/BoxesWorld";
import BoxesMainController from "./controllers/BoxesMainController";
import MyBox from "./entities/MyBox";

export default class MovingBoxDefaultConfiguration implements IGameConfiguration<BoxesWorld> {

	createRootEntity(): BoxesWorld {
		return new BoxesWorld();
	}

	createRootController(rootEntity: BoxesWorld): Controller {
		return new BoxesMainController();
	}

}