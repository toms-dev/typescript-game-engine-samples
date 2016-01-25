// <reference path="../typings/tsd.d.ts" />
import {Game, Entity, Loader} from 'typescript-game-engine-client';
import {Vector3} from 'typescript-game-engine-client/lib/math';
import DecorationContext from 'typescript-game-engine-client/lib/decorators/DecorationContext';

import My2DRenderer from "./game/My2DRenderer";
import MyTextRenderer from "./game/MyTextRenderer";
import ColorButton from "./game/ColorButton";
import Alerter from "./game/components/Alerter";


Loader.listen();
import BoxEntity from "./game/BoxEntity";
var context = Loader.done();
console.log("BoxEntity: ", BoxEntity);

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
my2DRenderer.eventEmitter.addListener(My2DRenderer.EVENT_CLICK_PX, (x:number, y: number) => {
	//alerter.alert("Click @ "+x+","+y);
});
my2DRenderer.eventEmitter.addListener(My2DRenderer.EVENT_CLICK_COORDS, (coords: Vector3) => {
	alerter.alert("Click @ "+JSON.stringify(coords.toJSON()));
});
my2DRenderer.eventEmitter.addListener(My2DRenderer.EVENT_CLICK_ENTITY, (e: Entity) => {
	alerter.alert("Click on "+e.guid);
});

var button = new ColorButton(game.commandSender);
game.addComponent(button);