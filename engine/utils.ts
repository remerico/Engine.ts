class Utils {
	static RequestAnimationFrame(callback) { 
		_req()(callback);
	}

	private static _req() {
		return window['requestAnimationFrame'] ||
		window['webkitRequestAnimationFrame'] ||
		window['mozRequestAnimationFrame'] ||
		window['oRequestAnimationFrame'] ||
		window['msRequestAnimationFrame'] ||
		function(callback) {
	        window.setTimeout(callback, 1000 / 30); 
	    };
	}

	static random(min, max) {
	    return Math.floor(Math.random() * (max - (min - 1))) + min;
	}

	static lerp(a, b, t) {
    	return (b - a) * t + a
    };

    static floor(a : number) {
    	return 0|(a);
    }

    static round(a : number) {
    	return (0.5 + a) | 0;
    }

    static clamp(v : number, n : number, x : number) {
  		return Math.min(Math.max(v, n), x);
	}

	static sign(a) {
		return (a > 0) ? 1 : (a < 0) ? -1 : 0;
	}

}