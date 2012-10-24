class Display {
	
	canvas : any;
	context : CanvasContext;

	rect : Rect;

	constructor(canvas : any) {

		// Get canvas context
		this.canvas = canvas;
		this.context = canvas.getContext('2d');

		// Define display rects
		this.rect = {
			x : canvas.offsetTop,
			y : canvas.offsetLeft,
			width : canvas.width,
			height : canvas.height
		};

	}

	blank(color? : string) {
		this.context.fillStyle = color || '#000000';
		this.context.fillRect(0, 0, this.rect.width, this.rect.height);
	}

	width() : number { 
		return this.rect.width;
	}

	height() : number {
		return this.rect.height;
	}

}