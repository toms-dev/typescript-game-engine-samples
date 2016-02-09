import path = require("path");

require('source-map-support').install();
import {Main} from "typescript-game-engine-server";

Main(path.join(__dirname, "./MovingBoxDefaultConfiguration"));

/*
var game = Main(__dirname+"/maps/MainMap", 25);
game.loadProject("./MovingBoxDefaultConfiguration");
*/

/*import BoxesMainController from "./controllers/BoxesMainController";
game.clientConnectControllerClass = BoxesMainController;*/

//Main(__dirname+"/maps/EmptyMap");
