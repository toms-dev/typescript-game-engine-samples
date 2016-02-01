import {Main} from "typescript-game-engine-server";

var game = Main(__dirname+"/maps/DefaultMap", 25);

import DefaultController from "./controllers/DefaultController";
game.clientConnectControllerClass = DefaultController;

