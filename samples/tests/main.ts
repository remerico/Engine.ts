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

	start() {

	}

	update() {

		var dt = this.time.deltaTime;
		var targetSpeed = Vector2.zero();
		var direction = Vector2.zero();

		if (this.input.getKey(Input.KeyCode.UP)) {
			targetSpeed.y = -this.maxSpeed;
		}
		else if (this.input.getKey(Input.KeyCode.DOWN)) {
			targetSpeed.y = this.maxSpeed;
		}
		
		if (this.input.getKey(Input.KeyCode.LEFT)) {
			targetSpeed.x = -this.maxSpeed;
		}
		else if (this.input.getKey(Input.KeyCode.RIGHT)) {
			targetSpeed.x = this.maxSpeed;
		}


		direction = new Vector2(Utils.sign(targetSpeed.x - this.speed.x),
		                        Utils.sign(targetSpeed.y - this.speed.y));

		this.speed.add(this.acceleration * direction.x, this.acceleration * direction.y);

		if (Utils.sign(targetSpeed.x - this.speed.x) != direction.x)
		    this.speed.x = targetSpeed.x;

		if (Utils.sign(targetSpeed.y - this.speed.y) != direction.y)
		    this.speed.y = targetSpeed.y;

		this.pos.x += this.speed.x * dt;
		this.pos.y += this.speed.y * dt;

	}

	render() {
		this.context.fillStyle = '#994082';
		this.context.fillRect(this.pos.x, this.pos.y, 100, 100);

		this.context.fillStyle = '#ffffff';
		this.context.font = '30px Arial';
		this.context.fillText(this.display.mousePos.x + ', ' + this.display.mousePos.y, 10,60);

		//this.context.fillText(this.time.deltaTime.toString(), 10,100);
		this.context.fillText(this.time.fps.toString(), 10,140);

		//this.context.fillText(this.input.getKey(Input.KeyCode.ENTER) + '', 10,180);
		//this.context.fillText(this.input.getKeys().toString(), 10,220);

		//this.context.fillText(this.direction.x + ', ' + this.direction.y, 10,220);

		//this.context.fillText( + '', 10,260);
	}


}



var ss = new Scene();
ss.addChild(new Backdrop());
ss.addChild(new Ball());

var game = new Game('game');
game.setScene(ss);
game.start();
