/// <reference path="../../engine/engine.ts"/>

class Backdrop extends GameObject {
	render() {
		this.display.blank('#113344');
	}
}

class Ball extends GameObject {
	date = new Date();

	pos : Vector2 = Vector2.zero();
	direction : Vector2 = Vector2.zero();
	speed : number = 200;

	start() {

	}

	update() {

		var dt = this.time.deltaTime;

		var v = dt * 10;

		if (this.input.getKey(Input.KeyCode.UP)) {
			this.direction.y = Utils.lerp(this.direction.y, -1, v);
		}
		else if (this.input.getKey(Input.KeyCode.DOWN)) {
			this.direction.y = Utils.lerp(this.direction.y, 1, v);
		}
		else {
			this.direction.y = Utils.lerp(this.direction.y, 0, dt * 2);
		}
		
		if (this.input.getKey(Input.KeyCode.LEFT)) {
			this.direction.x = Utils.lerp(this.direction.x, -1, v);
		}
		else if (this.input.getKey(Input.KeyCode.RIGHT)) {
			this.direction.x = Utils.lerp(this.direction.x, 1, v);
		}
		else {
			this.direction.x = Utils.lerp(this.direction.x, 0, dt * 2);
		}

		this.pos.x += Utils.round(this.direction.x * this.speed * dt);
		this.pos.y += Utils.round(this.direction.y * this.speed * dt);

	}

	render() {
		this.context.fillStyle = '#994082';
		this.context.fillRect(this.pos.x, this.pos.y, 100, 100);

		this.context.fillStyle = '#ffffff';
		this.context.font = '30px Arial';
		this.context.fillText(this.display.mousePos.x + ', ' + this.display.mousePos.y, 10,60);

		this.context.fillText(this.time.deltaTime.toString(), 10,100);
		this.context.fillText(this.time.fps.toString(), 10,140);

		//this.context.fillText(this.input.getKey(Input.KeyCode.ENTER) + '', 10,180);
		//this.context.fillText(this.input.getKeys().toString(), 10,220);

		this.context.fillText(this.pos.x + ', ' + this.pos.y, 10,220);

	}


}



var ss = new Scene();
ss.addChild(new Backdrop());
ss.addChild(new Ball());

var game = new Game('game');
game.setScene(ss);
game.start();
