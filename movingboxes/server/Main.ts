
import {Main} from "typescript-game-engine-server";

var game = Main(__dirname+"/maps/MainMap", 25);

import BoxesMainController from "./controllers/BoxesMainController";
game.clientConnectControllerClass = BoxesMainController;

//Main(__dirname+"/maps/EmptyMap");
