// The following reference is commented because of identifiers duplication for node libs. Waiting for a fix :(
///- <reference path="../../typings/browser.d.ts" />

// Do the framework imports
import {Game, Entity, GameEvent} from 'typescript-game-engine-client';
import {Math} from 'typescript-game-engine-client';
import {Loader} from 'typescript-game-engine-client';

import {DecorationContext as SharedDecorationContext} from "typescript-game-engine-server";

console.log("Hello world!");

/**
 * This Main file shouldn't exist, or at least, should not be that long. Everything should be done in dedicated classes
 * (maybe in a similar fashion than server's Maps).
 */
// Do the custom libs imports

// Load the entities with the Loader activated, otherwise, the framework will have a bad time unmarshalling your
// entities!
// TODO: replace this using by loadProject, using a loader like System.import. But that will add a callback in the flow.
SharedDecorationContext.start();
Loader.listen();
// Import all the client entities here
// eg.: import DefaultEntity from "./entities/User";

import ClientChatService from "./entities/ClientChatService";

// Local entities
// TODO: load all the entities automatically
// HOW: automatically/recursively load all the files? => would not work because of webpack
// only solution seems to be manual declaration
// TODO: OR!!!! or make webpack package all classes even if they don't look like to be used
// import syntax for side-effect (eg. decorators) :
import "./entities/ClientUser";

// Other client classes (ui, adapters)
import ChatRoomsListRendering from "./ui/ChatRoomsListRendering";
import NameInput from "./ui/NameInput";
import ChatCommandAdapter from "./commands/ChatCommandAdapter";
import UsersListRendering from "./ui/UsersListRendering";

var sharedContext = SharedDecorationContext.build();

//var classes = [DefaultEntity];
var context = Loader.done();	// The context contains all the declarations that we performed during the loading.

// The user shouldn't have to do that.
var game = new Game();
//game.fakeLocalLag = 500;
//game.loadContext(context);
game.rootEntity = new ClientChatService();
game.sharedContext = sharedContext;
game.start();

game.addComponent(new ChatRoomsListRendering(game, <any> game.rootEntity));
game.addComponent(new NameInput(game, "#chat_username"));
game.addComponent(new UsersListRendering(game, <any> game.rootEntity, "#globalUsersList"));
game.commandAdapters.push(new ChatCommandAdapter(game));

// For some cheap tests in the browser console.
(<any> window).game = game;
