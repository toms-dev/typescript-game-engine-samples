// <reference path="../typings/tsd.d.ts" />
// This reference is needed if compiling for AMD. It will crash stuff if used on CommonJS.
// <reference path="../node_modules/typescript-game-engine-client/typings.d.ts" />

/**
 * This Main file shouldn't exist, or at least, should not be that long. Everything should be done in dedicated classes
 * (maybe in a similar fashion than server's Maps).
 */

// Do the framework imports
import {Game, Entity, GameEvent} from 'typescript-game-engine-client';
import {Math} from 'typescript-game-engine-client';
import {Loader, DecorationContext} from 'typescript-game-engine-client';

// Do the custom libs imports
import My2DRenderer from "./game/My2DRenderer";
import MyTextRenderer from "./game/MyTextRenderer";
import ColorButton from "./game/SomeButton";
import Alerter from "./game/components/Alerter";

// Load the entities with the Loader activated, otherwise, the framework will have a bad time unmarshalling your
// entities!
// TODO: replace this using by loadProject, using a loader like System.import. But that will add a callback in the flow.
Loader.listen();
// Import all the client entities here
import BoxEntity from "./game/BoxEntity";
var classes = [BoxEntity];
var context = Loader.done();	// The context contains all the declarations that we performed during the loading.

import BoxesCommandAdapter from "./game/commands/BoxesCommandAdapter";
import AlertAdapter from "./game/components/AlertAdapter";

// The user shouldn't have to do that.
var game = new Game();
//game.fakeLocalLag = 500;
game.loadContext(context);
game.start();

// For some cheap tests in the browser console.
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
