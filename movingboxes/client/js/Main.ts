// <reference path="../typings/tsd.d.ts" />
// This reference is needed if compiling for AMD. It will crash stuff if used on CommonJS.
// <reference path="../node_modules/typescript-game-engine-client/typings.d.ts" />

import {Game, Entity, GameEvent} from 'typescript-game-engine-client';
import {Math} from 'typescript-game-engine-client';
//import {Vector3} from 'typescript-game-engine-client/lib/math';
import {Loader, DecorationContext} from 'typescript-game-engine-client';

import My2DRenderer from "./game/My2DRenderer";
import MyTextRenderer from "./game/MyTextRenderer";
import ColorButton from "./game/SomeButton";
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
import BoxesCommandAdapter from "./game/commands/BoxesCommandAdapter";
import AlertAdapter from "./game/components/AlertAdapter";
//var context = Loader.loadProject("game/BoxEntity");

var game = new Game();
//game.fakeLocalLag = 500;
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

// Create an alerter that can log stuff onto the page
var alerter = new Alerter();
game.addComponent(alerter);

// Create the adapter for the alerter. It will feed from the button and the 2D renderer with clicks.
var alerterAdapter = new AlertAdapter(game);
game.addComponent(alerterAdapter);

// Create a button that will generate some events
var button = new ColorButton(game);
game.addComponent(button);

// Add the main command adapter that will convert events into commands for the server
game.commandAdapters.push(new BoxesCommandAdapter(game));
