// Heron Creative 2020

(function () {

	// canvas element
	var c    = document.getElementById("canvas");
	var ctx  = c.getContext("2d");

	// distance between pixels
	var d    = 20;

	// set canvas to correct width
	var w, h, ar, wr, ny, nx, n, canvasData;
	resize();

	// current wave angle for background wave
	var th   = 0;

	// arrays for holding ripples data
	var rxs  = [];
	var rys  = [];
	var rts  = [];

	// array for holding wave ripple offset data
	var wcos = [];
	var wsin = [];

	// populate those arrays
	for(var u = 0; u < 120; u++) {
		wcos.push( 5*Math.cos(3.14159/60 * u) );
		wsin.push( 5*Math.sin(3.14159/60 * u) );
	}

	// stores indexes of pixels that were previously drawn to so they can be cleared later
	var alphaindexes = [];

	function resize() {
		w        = Math.max(document.documentElement.clientWidth, window.innerWidth); // get screen width of canvas in px
		h        = Math.max(document.documentElement.clientHeight, window.innerHeight); // get screen height of canvas in px
		ar       = w/h;            // aspect ratio

		// set canvas width to its screen width (max width = 2000px)
		c.width  = Math.min(w, 2000);
		c.height = c.width / ar;
		wr       = w / c.width; // width ratio is ratio of screen size of canvas to number of pixels it has across it

		// calculate number of dots in the x and y directions
		ny       = Math.ceil(h/d);
		nx       = Math.ceil(w/d);
		n        = nx * ny;

		// get array of pixel values
		canvasData = ctx.createImageData(w, h);

		// set to all gold
		for(var s = 0; s < w*h; s++) {
			canvasData.data[s*4 + 0] = 200;
			canvasData.data[s*4 + 1] = 171;
			canvasData.data[s*4 + 2] = 55;
		}
	}


	function mouseDown(e) {

		// when the user left clicks, adds a ripple by adding its x and y coords to the respective arrays
		// and sets the time since the ripple was made to 0

		if(e.button == 0) {

			rxs.push((e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft) / wr);
			rys.push((e.clientY + document.body.scrollTop + document.documentElement.scrollTop) / wr);
			rts.push(0);
		}
	}

	// add listeners to trigger functions when events occur
	window.addEventListener('resize', resize);
	window.addEventListener('mousedown', mouseDown);


	function animate() {

		// clear screen
		for(const u of alphaindexes) {
			canvasData.data[u] = 0;
		}

		alphaindexes = [];

		// th1 and th2 control background wave effect - set both to equal th initially
		// each row of pixels th1 is incremented and each column th2 is incremented
		var th1 = th;
		var th2 = th1;

		// grid x and grid y positions of dots in grid
		var gy = 0.5*d;
		var gx = 0.5*d;

		for(var r = 0; r < n; r++) {

			// rest position of a dot is its grid position plus the background wave effect
			var x = gx + wcos[th2];
			var y = gy + wsin[th2];

			// for each ripple, affect the position of the dot
			for(var z = 0; z < rts.length; z++) {

				// ripples only last 90 frames, after which they are removed from the memory arrays
				if(rts[z] < 90) {
	
					// calculate offset of dot from rest position due to ripples and add that
					// to its current position
					var dx = x - rxs[z];
					var dy = y - rys[z];
					var dr = rts[z] * 10;
	
					var dm = Math.sqrt(dx*dx + dy*dy);

					// only proceed if the distance of the dot from the ripple is right for it 
					// to feel anything
					if(Math.abs(dm-dr) < 81.65) {

						var dc  = (dm-dr)

						// equation of ripple
						var a = (30 - 0.009*dc*dc + 0.000000675*dc*dc*dc*dc)*(1 - dm/900);

						// offset dot by correct amount
						x  += a * dx/dm;
						y  += a * dy/dm;
					}
				}
				else {
					
					// remove old ripple from arrays
					rts.splice(z, 1);
					rxs.splice(z, 1);
					rys.splice(z, 1);
				}
			}

			// x and y indices of centre of dot in pixel array
			var ix = Math.floor(x);
			var iy = Math.floor(y);

			// start drawing 3 pixels up and right of center of dot
			var oi = -3;
			var oj = -3;

			// t ranges from 0 to 49 for a 7x7 box around dot in which to draw it
			for(var t = 0; t < 49; t++) {

				// ox and oy are coords of the pixel we are currently drawing
				var ox = ix + oi;
				var oy = iy + oj;

				// distance from centre of dot
				var dx = ox - x;
				var dy = oy - y;
				var dm = dx*dx + dy*dy;

				// calculate alpha based off distance from centre of dot
				var alpha = ( 1.5 - 0.25*dm ) * 255;

				// set pixel values if alpha is positive and pixel is onscreen (pixel should be drawn)
				if(alpha > 0 && ox < w && ox > 0) {
					var ind = (ox + oy*w)*4 + 3;
					canvasData.data[ind] = alpha;
					alphaindexes.push(ind);
				}

				// when we reach the edge of the box, go down one row and loop back to other edge
				oj++;
				if(oj==4) {
					oj = -3;
					oi++;
				}
			}

			th2  = (th2 + 6) % 120;
			gx  += d;

			if(gx > w) {
				gx  = 0.5*d;
				gy += d;
				th1 = (th1 + 6) % 120;
				th2 = th1;
			}

		}

		th  = (th + 1) % 120;

		// evolve age of each ripple in arrays
		for(z = 0; z<rts.length; z++) {
			rts[z]++;
		}

		// draw pixel data to canvas
		ctx.putImageData(canvasData, 0, 0);
		
		// request next frame
		requestAnimationFrame(animate);
	}

	// start animation
	animate();

})(); 