class Time {

	lastTick : number = (new Date()).getTime();
	deltaTime : number = 0;
	fps : number = 0;

	private _counter : number = 0;
	private _lastCount : number = 0;

	tick() : void {
		
		var currentTime = (new Date()).getTime();

		// Compute Delta time
		this.deltaTime = (currentTime - this.lastTick) / 1000;
		if (this.deltaTime > 0.2) this.deltaTime = 0.2;  // clamp 

		// Compute FPS
		if ((currentTime - this._lastCount) < 1000) {
			this._counter++;
		}
        else {
            this.fps = this._counter;
            this._counter = 0;
            this._lastCount = (new Date()).getTime();
        }

		this.lastTick = currentTime;

	}


}