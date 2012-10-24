
interface Rect { 
	x : number; 
	y : number; 
	width : number; 
	height : number; 
}

interface CanvasContext {
	fillStyle : string;
	font : string;
	globalAlpha : number;

	fillRect(x : number, y : number, width : number, height : number) : void;
	fillText(text : string, x : number, y : number);
	createPattern(pattern : HTMLElement, style : string);
	beginPath() : void;
	closePath() : void;
	moveTo(x : number, y : number) : void;
	lineTo(x : number, y : number) : void;
	arc(x : number, y : number, r : number, start : number, stop : number);
	stroke() : void;
	strokeText(text : string, x : number, y : number);
	drawImage(image : HTMLElement, x : number, y : number);
	isPointInPath(x : number, y : number);

	translate(x : number, y : number);
	rotate(rad : number);

	save();
	restore();
}
