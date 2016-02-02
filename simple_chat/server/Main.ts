import {Main} from "typescript-game-engine-server";

var game = Main(__dirname+"/maps/DefaultMap", 25);

import DefaultController from "./controllers/ChatMainController";
game.clientConnectControllerClass = DefaultController;

