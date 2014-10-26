var loadAndRunScripts = require('loadandrunscripts');
loadAndRunScripts([
	'bower_components/pixi.js/bin/pixi.js'
],
function() {
	var View = require('./');
	var TestCircle = require('./TestCircle');
	var view = new View();
	console.log(view);
	view.stage.addChild(new TestCircle(50, 50, 50));
	view.renderer.render(view.stage);
})