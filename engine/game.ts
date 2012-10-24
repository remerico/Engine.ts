class Game {

	_canvasId : string;
	_currentScene : Scene;
	_nextScene : Scene;
	_sceneChanged : bool;

	display : Display;
	time : Time;
	input : Input;

	loaded : bool;

	constructor (canvasId : string) {
		this._canvasId = canvasId;

	}	

	start() {

		window.addEventListener('load', () => { 
			this.display = new Display(document.getElementById(this._canvasId));
			this.time = new Time();
			this.input = new Input(this);
			this.loaded = true;

			this._runLoop();
			
		});


	}

	update() {

		if (this._sceneChanged == true) {

			if (this._currentScene) {
				this._currentScene._destroyChildren();
			}

			this._currentScene = this._nextScene;
			this._currentScene._setReference(this);
			
			if (this._currentScene) {
				this._currentScene._startChildren();
			}

			this._sceneChanged = false;

		}
		else if (this._currentScene) {
			this._currentScene._updateChildren();
			this._currentScene._renderChildren();
		}

		this.time.tick();
		this.input.consume();

		this._runLoop();
	}

	setScene(scene : Scene) {
		this._nextScene = scene;
		this._sceneChanged = true;
	}

	_runLoop() {
		var game = this;
		Utils.RequestAnimationFrame(function() {game.update()});
	}

}
