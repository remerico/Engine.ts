/// <reference path="../../engine/engine.ts"/>

class Backdrop extends GameObject {
	render() {
		this.display.blank('#113344');
	}
}

class Ball extends GameObject {
	date = new Date();

	pos = Vector2.zero();
	maxSpeed = 250;
	acceleration = 10;
	speed = Vector2.zero();
	targetPos = Vector2.zero();

	start() {

	}

	update() {

		var dt = this.time.deltaTime;

		//if (this.input.getMouseDown()) {
			this.targetPos = this.input.mousePos;
		//}

		if (this.targetPos.isZero()) {
 
			var targetSpeed = new Vector2(
				this.input.getKey(Input.KeyCode.LEFT) ? -this.maxSpeed :
				this.input.getKey(Input.KeyCode.RIGHT) ? this.maxSpeed : 0,
				this.input.getKey(Input.KeyCode.UP)   ? -this.maxSpeed :
				this.input.getKey(Input.KeyCode.DOWN) ?  this.maxSpeed : 0
			);

			var direction = new Vector2(Utils.sign(targetSpeed.x - this.speed.x),
			                        Utils.sign(targetSpeed.y - this.speed.y));

			this.speed.add(this.acceleration * direction.x, this.acceleration * direction.y);

			if (Utils.sign(targetSpeed.x - this.speed.x) != direction.x) {
			    this.speed.x = targetSpeed.x;
			}

			if (Utils.sign(targetSpeed.y - this.speed.y) != direction.y) {
			    this.speed.y = targetSpeed.y;
			}

			this.pos.add(this.speed.x * dt, this.speed.y * dt);

		}
		else {

			this.pos = Vector2.lerp(this.pos, this.targetPos, dt * 5);
			if (Vector2.distance(this.pos, this.targetPos) <= 1) this.targetPos = Vector2.zero();

		}

	}

	render() {
		this.context.save();
		this.context.translate(-50, -50);
		this.context.fillStyle = '#994082';
		this.context.fillRect(this.pos.x, this.pos.y, 100, 100);

		this.context.restore();

		this.context.fillStyle = '#ffffff';
		this.context.font = '30px Arial';
		this.context.fillText(this.input.mousePos.x + ', ' + this.input.mousePos.y, 10,60);

		//this.context.fillText(this.time.deltaTime.toString(), 10,100);
		this.context.fillText(this.time.fps.toString(), 10,140);

		//this.context.fillText(this.input.getKey(Input.KeyCode.ENTER) + '', 10,180);
		this.context.fillText(this.input.getMouseDown() + '', 10,220);

		//this.context.fillText(Vector2.distance(this.pos, this.input.mousePos).toString() + '', 10,260);
	}


}



var ss = new Scene();
ss.addChild(new Backdrop());
ss.addChild(new Ball());

var game = new Game('game');
game.setScene(ss);
game.start();
