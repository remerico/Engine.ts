class GameObject {

	// Convenience references to common game classes
	game : Game;
	display : Display;
	context : CanvasContext;
	time : Time;
	input : Input;
	childObjects : GameObject[] = [];

	start() { }
	update() {}
	render() {}
	destroy() {}

	_startChildren() {
		this.start();
		for (var i in this.childObjects) this.childObjects[i]._startChildren();
	}

	_updateChildren() {
		this.update();
		for (var i in this.childObjects) this.childObjects[i]._updateChildren();
	}

	_renderChildren() {
		this.render();
		for (var i in this.childObjects) this.childObjects[i]._renderChildren();
	}

	_destroyChildren() {
		this.destroy();
		for (var i in this.childObjects) this.childObjects[i]._destroyChildren();
	}

	_setReference(game : Game) {
		this.game = game;
		this.display = game.display;
		this.context = game.display.context;
		this.time = game.time;
		this.input = game.input;

		for (var i in this.childObjects) {
			this.childObjects[i]._setReference(game);
		}
	}

	addChild(object : GameObject) {
		if (this.game) object._setReference(this.game);

		this.childObjects.push(object);
	}

}

class Scene extends GameObject {}