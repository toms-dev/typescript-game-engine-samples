// <reference path="../typings/tsd.d.ts" />
// This reference is needed if compiling for AMD. It will crash stuff if used on CommonJS.
// <reference path="../node_modules/typescript-game-engine-client/typings.d.ts" />

import {Game, Entity, GameEvent} from 'typescript-game-engine-client';
import {Math} from 'typescript-game-engine-client';
//import {Vector3} from 'typescript-game-engine-client/lib/math';
import {Loader, DecorationContext} from 'typescript-game-engine-client';

import My2DRenderer from "./game/My2DRenderer";
import MyTextRenderer from "./game/MyTextRenderer";
import ColorButton from "./game/ColorButton";
import Alerter from "./game/components/Alerter";

// TODO: replace this using by loadProject, using a loader like System.import. But that will add a callback in the flow.
Loader.listen();
// Import all the client entities
import BoxEntity from "./game/BoxEntity";
var classes = [BoxEntity];
/*var classes = ["game/BoxEntity"];
Loader.loadProject(classes[0]);*/
var context = Loader.done();

import ClickableComponent from "./game/components/ClickableComponent";
//var context = Loader.loadProject("game/BoxEntity");

var game = new Game();
game.loadContext(context);
game.start();

(<any> window).game = game;

// TODO: all this setup should be done in a MyGame class that performs all the setup.
// Setup renderers
//
// Create 2D renderer
var my2DRenderer = new My2DRenderer(game);	// TODO: canvas param?

// Create text renderer
var myTextRenderer = new MyTextRenderer(game);

// Bind them to the game
game.addComponent(my2DRenderer);
game.addComponent(myTextRenderer);

// Create an alerter
var alerter = new Alerter();

// Wire it to the 2D renderer
my2DRenderer.eventEmitter.addListener(My2DRenderer.EVENT_CLICK_PX, (x: number, y: number) => {
	// do nothing
});
my2DRenderer.eventEmitter.addListener(My2DRenderer.EVENT_CLICK_COORDS, (coords: Math.Vector3) => {
	alerter.alert("Click @ " + JSON.stringify(coords.toJSON()));
});
my2DRenderer.eventEmitter.addListener(My2DRenderer.EVENT_CLICK_ENTITY, (e: Entity) => {
	alerter.alert("Click on " + e.guid);
	e.emitEvent(new GameEvent(My2DRenderer.EVENT_CLICK_ENTITY, [e], e));
});

var button = new ColorButton(game.commandSender);
game.addComponent(button);
