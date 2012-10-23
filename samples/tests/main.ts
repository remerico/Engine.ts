/// <reference path="../../engine/engine.ts"/>

class Backdrop extends GameObject {
	render() {
		this.display.blank('#113344');
	}
}

class Ball extends GameObject {
	date = new Date();

	pos : Vector2 = { x : 0, y : 0 };
	direction : Vector2 = { x : 0, y : 0 };
	speed : number = 200;

	start() {

	}

	update() {
		this.pos.x += this.speed * this.time.deltaTime;

		if ((this.pos.x + 100) > this.display.width()) {
			if (this.speed > 0) this.speed *= -1;
		}
		else if (this.pos.x < -1) {
			if (this.speed < 0) this.speed *= -1;	
		}

	}

	render() {
		this.context.fillStyle = '#994082';
		this.context.fillRect(this.pos.x, 10, 100, 100);

		this.context.fillStyle = '#ffffff';
		this.context.font = '30px Arial';
		this.context.fillText(this.display.mousePos.x + ', ' + this.display.mousePos.y, 10,60);

		this.context.fillText(this.time.deltaTime.toString(), 10,100);
		this.context.fillText(this.time.fps.toString(), 10,140);
	}


}



var ss = new Scene();
ss.addChild(new Backdrop());
ss.addChild(new Ball());

var game = new Game('game');
game.setScene(ss);
game.start();


