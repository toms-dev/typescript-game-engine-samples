/// <reference path="../typings/tsd.d.ts" />
import {Game} from 'typescript-game-engine-client';

import My2DRenderer from "./game/My2DRenderer";
import MyTextRenderer from "./game/MyTextRenderer";
import ColorButton from "./game/ColorButton";
import Alerter from "./game/components/Alerter";

var game = new Game();
game.start();
var commandSender = game.commandSender;

(<any> window).game = game;

// TODO: all this setup should be done in a MyGame class
// Setup renderers
//
// Create 2D renderer
var my2DRenderer = new My2DRenderer(game);
// TODO: Bind it to the canvas

// Create text renderer
var myTextRenderer = new MyTextRenderer(game);

// Bind them to the game
game.addComponent(my2DRenderer);
game.addComponent(myTextRenderer);

// Create an alerter
var alerter = new Alerter();
// Wire it to the 2D renderer
my2DRenderer.eventEmitter.addListener(My2DRenderer.EVENT_CLICK, (x:number, y: number) => {
	alerter.alert("Click @ "+x+","+y);
});

var button = new ColorButton(commandSender);
game.addComponent(button);