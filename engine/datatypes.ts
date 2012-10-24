class Vector2 {
	constructor (public x : number, public y : number) {}

	add(x : number, y : number) {
		this.x += x;
		this.y += y;
	}

	static zero() {
		return new Vector2(0, 0);
	}

	static lerp(a : Vector2, b : Vector2, t : number) {
		return new Vector2(((b.x - a.x) * t + a.x), ((b.y - a.y) * t + a.y));
	}
}