// The following reference is commented because of identifiers duplication for node libs. Waiting for a fix :(
///- <reference path="../../typings/browser.d.ts" />

// Do the framework imports
import {Game, Entity, GameEvent} from 'typescript-game-engine-client';
import {Math} from 'typescript-game-engine-client';
import {Loader} from 'typescript-game-engine-client';

import {DecorationContext} from "typescript-game-engine-server";

console.log("Hello world!");
console.log("Got entity from framework: ", Entity);

/**
 * This Main file shouldn't exist, or at least, should not be that long. Everything should be done in dedicated classes
 * (maybe in a similar fashion than server's Maps).
 */
// Do the custom libs imports

// Load the entities with the Loader activated, otherwise, the framework will have a bad time unmarshalling your
// entities!
// TODO: replace this using by loadProject, using a loader like System.import. But that will add a callback in the flow.
DecorationContext.start();
Loader.listen();
// Import all the client entities here
//import DefaultEntity from "./entities/User";
// And some server ones :)
import ChatService from "../../../shared/entities/ChatService";
import ChatRoomsListRendering from "./ChatRoomsListRendering";

var sharedContext = DecorationContext.build();

//var classes = [DefaultEntity];
var context = Loader.done();	// The context contains all the declarations that we performed during the loading.

// The user shouldn't have to do that.
var game = new Game();
//game.fakeLocalLag = 500;
//game.loadContext(context);
game.rootEntity = new ChatService();
game.sharedContext = sharedContext;
game.start();

game.addComponent(new ChatRoomsListRendering(game, <any> game.rootEntity));

// For some cheap tests in the browser console.
(<any> window).game = game;
