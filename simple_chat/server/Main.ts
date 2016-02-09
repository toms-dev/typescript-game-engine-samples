import {Main} from "typescript-game-engine-server";

require('source-map-support').install();

//var game = Main(__dirname+"/maps/DefaultMap", chatService, 25);
Main(__dirname+"/ChatGameConfiguration", 25);

