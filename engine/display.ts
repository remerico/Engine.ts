class Display {
	
	canvas : any;
	context : CanvasContext;

	onmousemove : any;
	onmouseclick : any;

	rect : Rect;
	mousePos : Vector2 = { x : 0, y : 0};

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

		// Setup events
		this.canvas.addEventListener('mousemove', 
			(ev : any) => {
			this.mousePos = {
				x : ev.pageX - this.rect.x,
				y : ev.pageY - this.rect.y
			}
		});

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