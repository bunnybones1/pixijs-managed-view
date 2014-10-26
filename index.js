var Resize = require('input-resize');
function View() {
	var renderer = this.renderer =  new PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight, undefined, true, true);
	renderer.view.style.position = 'absolute';
	renderer.view.style.top = '0px';
	renderer.view.style.left = '0px';
	renderer.view.style.width = window.innerWidth + 'px';
	renderer.view.style.height = window.innerHeight + 'px';
	document.body.appendChild(renderer.view);
	var stage = this.stage = new PIXI.Stage();
	this.resize = this.resize.bind(this);
	Resize.onResize.add(this.resize);
	Resize.bump();
}

View.prototype = {
	resize: function(width, height) {
		this.renderer.resize(width, height);
		var view = this.renderer.view;
		view.style.width = width + 'px';
		view.style.height = height + 'px';
	}
}

module.exports = View;