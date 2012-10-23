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

	static Random(min, max) {
	    return Math.floor(Math.random() * (max - (min - 1))) + min;
	}

}