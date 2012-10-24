class Vector2 {
	constructor (public x : number, public y : number) {}

	add(x : number, y : number) {
		this.x += x;
		this.y += y;
	}

	toString() {
		return this.x + ', ' + this.y;
	}

	isZero() {
		return this.x == 0 && this.y == 0;
	}

	static zero() {
		return new Vector2(0, 0);
	}

	static lerp(a : Vector2, b : Vector2, t : number) {
		return new Vector2(((b.x - a.x) * t + a.x), ((b.y - a.y) * t + a.y));
	}

	static distance(a : Vector2, b : Vector2) {
		var dx = Math.abs(a.x - b.x);
		var dy = Math.abs(a.y - b.y);
		return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
	}

}