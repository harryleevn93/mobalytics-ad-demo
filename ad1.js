(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
var rect; // used to reference frame bounds
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib._1lor = function() {
	this.initialize(img._1lor);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,175,153);


(lib._1lor_logo_white = function() {
	this.initialize(img._1lor_logo_white);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2611,829);


(lib._1lor_logo_yellow = function() {
	this.initialize(img._1lor_logo_yellow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,196,169);


(lib._2tft = function() {
	this.initialize(img._2tft);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,183,153);


(lib._2tft_logo_white = function() {
	this.initialize(img._2tft_logo_white);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,751,211);


(lib._2tft_logo_yellow = function() {
	this.initialize(img._2tft_logo_yellow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,204,169);


(lib._3lol = function() {
	this.initialize(img._3lol);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,176,152);


(lib._3lol_logo_white = function() {
	this.initialize(img._3lol_logo_white);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,733);


(lib._3lol_logo_yellow = function() {
	this.initialize(img._3lol_logo_yellow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,196,169);


(lib._4valo = function() {
	this.initialize(img._4valo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,179,153);


(lib._4valo_logo_white = function() {
	this.initialize(img._4valo_logo_white);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1199,173);


(lib._4valo_logo_yellow = function() {
	this.initialize(img._4valo_logo_yellow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,169);


(lib.bkg = function() {
	this.initialize(img.bkg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3025,688);


(lib.gloweffect = function() {
	this.initialize(img.gloweffect);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,612,201);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.washout = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)","rgba(255,255,255,0)"],[0.02,0.51,1,1],-72.1,0,72.2,0).s().p("ArRbqMAAAg3TIWjAAMAAAA3Tg");
	this.shape.setTransform(-0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72.2,-177,144.4,354.1);
p.frameBounds = [rect];


(lib.valor = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._4valo();
	this.instance.setTransform(-89.5,-76.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.5,-76.5,179,153);
p.frameBounds = [rect];


(lib.tft = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._2tft();
	this.instance.setTransform(-91.5,-76.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-91.5,-76.5,183,153);
p.frameBounds = [rect];


(lib.lor = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._1lor();
	this.instance.setTransform(-87.5,-76.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-87.5,-76.5,175,153);
p.frameBounds = [rect];


(lib.LoL = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._3lol();
	this.instance.setTransform(-88,-76);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-88,-76,176,152);
p.frameBounds = [rect];


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AwtEYIAAovMAhbAAAIAAIvg");
	mask.setTransform(107,28);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFE").s().p("AAkA5IAAhPIgVApIAAABIgIASIgBACIgJAAIggg/IAABQIgOAAIAAhxIANAAIABACIAkBKIAkhKIABgCIAMAAIAABxg");
	this.shape.setTransform(25.025,27.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFE").s().p("AiHA0IhpjuIDwguIABABIDwAuIhSDoIAAABIiTC5gAjni1IBlDmICOCuICOi0IBPjgIjpgsgAh9AvIhjjhIDggrIAAAAIDiAsIhMDbIiKCugAjYitIBgDZICECiICFioIBJjTIjagqg");
	this.shape_1.setTransform(24.625,31.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFE").s().p("AiEAzIhojqIDsgtIAAAAIDtAtIhQDlIgBABIiQC2gAjcivIBhDeICHCkICHirIBLjWIjegrg");
	this.shape_2.setTransform(24.65,31.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFE").s().p("AgLANQgGgGAAgHQAAgGAGgFQAEgGAHAAQAIAAAFAGQAFAFAAAGQAAAHgFAGQgFAFgIAAQgHAAgEgFgAgIgHQgDADAAAEQAAAFADAEQAEADAEAAQAFAAADgDQAEgEAAgFQAAgEgEgDQgDgEgFABQgEgBgEAEgAgEAAQgBgEAFAAQAFAAABAEQgBAGgFAAQgFAAABgGg");
	this.shape_3.setTransform(1.95,39.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFE").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFgAgBAAQAAAAAAABQAAAAAAABQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAAAg");
	this.shape_4.setTransform(1.95,39.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFE").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgCADAAQAEAAADACQACADAAADQAAAEgCADQgDACgEAAQgDAAgDgCgAgCAAQAAABAAAAQAAABAAAAQABABAAAAQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAABAAAAQAAABAAAAg");
	this.shape_5.setTransform(1.95,39.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFE").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_6.setTransform(1.925,39.575);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFE").s().p("AgMANQgFgFAAgIQAAgGAFgGQAGgFAGAAQAIAAAFAFQAFAGAAAGQAAAIgFAFQgFAFgIAAQgGAAgGgFgAgHgHQgEADAAAEQAAAFAEADQADAEAEAAQAFAAAEgEQADgDAAgFQAAgEgDgDQgEgDgFgBQgEABgDADgAgEAAQAAgEAEAAQAGAAgBAEQABAFgGAAQgEAAAAgFg");
	this.shape_7.setTransform(23.95,1.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFE").s().p("AgJAKQgFgEAAgGQAAgFAFgEQAEgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgEgFgAgBAAQAAAAAAABQAAAAAAABQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAABAAAAQAAAAAAAAg");
	this.shape_8.setTransform(23.975,1.825);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFE").s().p("AgIAAQAAgDACgDQADgCADAAQAEAAACACQADADAAADQAAAEgDADQgCACgEAAQgIAAAAgJgAgCAAQAAABAAAAQAAABABAAQAAABAAAAQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQAAAAAAABQgBAAAAAAQAAABAAAAg");
	this.shape_9.setTransform(23.975,1.825);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFE").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_10.setTransform(23.975,1.825);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFE").s().p("AgMANQgFgGAAgHQAAgGAFgGQAGgFAGAAQAHAAAGAFQAFAGAAAGQAAAHgFAGQgGAFgHAAQgGAAgGgFgAgHgHQgEADAAAEQAAAFAEADQADAEAEAAQAFAAADgEQAEgDAAgFQAAgEgEgDQgDgEgFAAQgEAAgDAEgAgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_11.setTransform(24.575,9.275);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFE").s().p("AgJAKQgFgEAAgGQAAgFAFgEQAEgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgEgFgAgBAAQAAAAAAABQAAAAAAABQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAABAAAAQAAAAAAAAg");
	this.shape_12.setTransform(24.575,9.275);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFE").s().p("AgIAAQAAgDACgDQADgCADAAQAEAAACACQADADAAADQAAAEgDADQgCACgEAAQgIAAAAgJgAgCAAQAAABAAAAQAAABAAAAQABABAAAAQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAABAAAAQAAABAAAAg");
	this.shape_13.setTransform(24.575,9.275);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFE").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_14.setTransform(24.575,9.275);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFE").s().p("AgMANQgFgGAAgHQAAgHAFgEQAGgGAGAAQAHAAAGAGQAFAEAAAHQAAAHgFAGQgGAFgHAAQgGAAgGgFgAgHgIQgEAEAAAEQAAAFAEADQADADAEAAQAFAAADgDQAEgDAAgFQAAgEgEgEQgDgDgFAAQgEAAgDADgAgEAAQAAgFAEABQAFgBAAAFQAAAFgFAAQgEAAAAgFg");
	this.shape_15.setTransform(1.775,13.65);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFE").s().p("AgJAKQgFgEAAgGQAAgGAFgEQAEgEAFAAQAGAAAEAEQAFAEAAAGQAAAGgFAEQgEAFgGAAQgFAAgEgFgAgBAAQAAABAAAAQAAAAAAABQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAAAg");
	this.shape_16.setTransform(1.775,13.65);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFE").s().p("AgGAHQgCgDAAgEQAAgDACgDQADgCADAAQAEAAACACQADADAAADQAAAEgDADQgCACgEAAQgDAAgDgCgAgCAAQAAABAAABQAAAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAQAAgBAAgBQAAAAAAAAQAAgBgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAAAABQAAAAAAAAg");
	this.shape_17.setTransform(1.775,13.625);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFE").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_18.setTransform(1.775,13.625);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFE").s().p("AgMANQgFgGAAgHQAAgGAFgFQAGgGAGAAQAIAAAFAGQAFAFAAAGQAAAHgFAGQgFAFgIAAQgGAAgGgFgAgHgHQgEADAAAEQAAAFAEADQADAEAEAAQAFAAAEgEQADgDAAgFQAAgEgDgDQgEgEgFAAQgEAAgDAEgAgFAAQABgEAEAAQAGAAgBAEQABAFgGAAQgEAAgBgFg");
	this.shape_19.setTransform(11.8,36.525);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFE").s().p("AgKALQgEgFAAgGQAAgFAEgEQAFgFAFAAQAGAAAFAFQAEAEAAAFQAAAGgEAFQgFAEgGAAQgFAAgFgEgAgCAAQAAABABAAQAAAAAAABQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAgBAAAAQABAAAAgBQAAAAgBAAQAAAAAAgBQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgBAAAAAAg");
	this.shape_20.setTransform(11.8,36.525);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFE").s().p("AgGAHQgCgDAAgEQAAgIAIAAQAEAAACACQADADAAADQAAAEgDADQgCACgEAAQgDAAgDgCgAgCAAQAAABAAABQAAAAABAAQAAABAAAAQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAQAAgBAAgBQAAAAAAAAQAAgBgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQAAAAAAABQgBAAAAABQAAAAAAAAg");
	this.shape_21.setTransform(11.825,36.525);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFE").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_22.setTransform(11.825,36.525);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFE").s().p("AgMANQgFgFAAgIQAAgGAFgGQAGgFAGAAQAHAAAGAFQAFAGAAAGQAAAIgFAFQgGAFgHAAQgGAAgGgFgAgHgHQgEADAAAEQAAAFAEAEQADADAEAAQAFAAADgDQAEgEAAgFQAAgEgEgDQgDgEgFAAQgEAAgDAEgAgEAAQAAgEAEgBQAFABAAAEQAAAGgFgBQgEABAAgGg");
	this.shape_23.setTransform(25.825,53.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFE").s().p("AgJALQgFgFAAgGQAAgFAFgFQAEgEAFAAQAGAAAEAEQAFAFAAAFQAAAGgFAFQgEAEgGAAQgFAAgEgEgAgBAAQAAABAAAAQAAABAAAAQABAAAAAAQAAABAAAAQAAAAABgBQAAAAABAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBAAAAAAQgBgBAAAAQAAAAAAABQAAAAgBAAQAAAAAAABQAAAAAAAAg");
	this.shape_24.setTransform(25.825,53.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFE").s().p("AgGAGQgCgCAAgEQAAgDACgCQADgDADAAQAEAAADADQACACAAADQAAAEgCACQgDAEgEAAQgDAAgDgEgAgCAAQAAABAAAAQAAABAAAAQABABAAAAQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAAAgBABQAAAAgBAAQAAABAAAAQAAABAAAAg");
	this.shape_25.setTransform(25.825,53.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFE").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_26.setTransform(25.825,53.175);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFE").s().p("AgMANQgFgGAAgHQAAgGAFgGQAGgFAGAAQAHAAAGAFQAFAGAAAGQAAAHgFAGQgGAFgHAAQgGAAgGgFgAgHgHQgEADAAAEQAAAFAEADQADAEAEAAQAFAAADgEQAEgDAAgFQAAgEgEgDQgDgEgFAAQgEAAgDAEgAgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_27.setTransform(47.575,39.475);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFE").s().p("AgJAKQgFgEAAgGQAAgFAFgEQAEgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgEgFgAgBAAQAAAAAAABQAAAAAAABQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAAAg");
	this.shape_28.setTransform(47.575,39.475);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFE").s().p("AgGAHQgCgDAAgEQAAgDACgDQADgCADAAQAEAAADACQACADAAADQAAAJgJAAQgDAAgDgCgAgCAAQAAABAAAAQAAABAAAAQABABAAAAQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAABAAAAQAAABAAAAg");
	this.shape_29.setTransform(47.575,39.475);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFE").s().p("AgDAEQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQAAAAAAAAQgBAAgBAAQAAgBAAAAQgBAAAAgBg");
	this.shape_30.setTransform(47.575,39.475);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFE").s().p("AgLANQgGgGAAgHQAAgHAGgFQAFgFAGAAQAHAAAGAFQAFAFAAAHQAAAHgFAGQgGAFgHAAQgGAAgFgFgAgHgIQgEAEAAAEQAAAFAEADQADAEAEAAQAFAAADgEQAEgDAAgFQAAgEgEgEQgDgDgFAAQgEAAgDADgAgEAAQAAgFAEABQAFgBAAAFQAAAFgFABQgEgBAAgFg");
	this.shape_31.setTransform(39.825,35.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFE").s().p("AgJALQgFgFAAgGQAAgFAFgFQAEgEAFAAQAGAAAFAEQAEAFAAAFQAAAGgEAFQgFAEgGAAQgFAAgEgEgAgBAAQAAABAAAAQAAABAAAAQABAAAAAAQAAABAAAAQABAAAAgBQABAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAgBgBAAQAAAAAAABQAAAAgBAAQAAAAAAABQAAAAAAAAg");
	this.shape_32.setTransform(39.825,35.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFE").s().p("AgGAGQgCgCAAgEQAAgDACgCQADgEADAAQAEAAADAEQACACAAADQAAAEgCACQgDADgEAAQgDAAgDgDgAgCAAQAAABAAABQAAAAABABQAAAAABAAQAAABAAAAQABAAABgBQAAAAAAAAQABgBAAAAQAAgBAAgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQgBAAgBAAQAAAAAAAAQgBAAAAABQgBAAAAABQAAAAAAAAg");
	this.shape_33.setTransform(39.825,35.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFE").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_34.setTransform(39.825,35.925);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFE").s().p("AgMANQgFgGAAgHQAAgGAFgGQAGgFAGAAQAHAAAGAFQAFAGAAAGQAAAHgFAGQgGAFgHAAQgGAAgGgFgAgHgHQgEADAAAEQAAAFAEADQADAEAEAAQAFAAADgEQAEgDAAgFQAAgEgEgDQgDgEgFAAQgEAAgDAEgAgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_35.setTransform(47.575,13.675);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFE").s().p("AgJAKQgFgEAAgGQAAgFAFgEQAEgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgEgFgAgBAAQAAAAAAABQAAAAAAABQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAQAAAAAAAAg");
	this.shape_36.setTransform(47.575,13.675);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFE").s().p("AgGAHQgCgDAAgEQAAgDACgDQADgCADAAQAEAAADACQACADAAADQAAAJgJAAQgDAAgDgCgAgCAAQAAABAAAAQAAABAAAAQABABAAAAQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAABAAAAQAAABAAAAg");
	this.shape_37.setTransform(47.575,13.675);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFE").s().p("AgDAEQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAQAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAQAAgBABAAQAAAAABAAQAAAAAAAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAABAAQAAABAAABQAAAAAAAAQAAAGgGAAQAAAAAAAAQgBAAgBAAQAAAAAAgBQgBAAAAgBg");
	this.shape_38.setTransform(47.575,13.675);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFE").s().p("AAOEKIgBAAIjwiMIgEABIAAgEIgIgFIAIgCIAAj3IACgBIgCgFIgBABIABgBIgCgFIAFgBIDch1IAAgFIAFACIADgCIAAAEIDpB2IAFABIgCAFIAAD/IAEACIgEACIAAAFIgEgCIjaCNgAhzBfICACdICCijgAgIDyIh1iPIgBADIgDgGIhUAZIDNB5gAAlDvIC2h2Ig+gfIgCAGIgCgEgAjdBxIBYgbIhYi/gACgBRIBCAeIAAjagAh2BUIEHgGIiQj5gAjbiHIBdDUIB3j8gACYBHIBIjNIjUgpgAjBiWIC8gkIgCgDIADAAIgFg7gADEiWIjChiIAFA8IADgBIgCADIC8Akg");
	this.shape_39.setTransform(24.475,27.575);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#363356").s().p("AgMiHICYEJIkXAGg");
	this.shape_40.setTransform(25.825,22.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#484979").s().p("AiLhRIEYgHIiNCxg");
	this.shape_41.setTransform(25.8,44.775);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#363257").s().p("AhxhbIDjgsIh/EPg");
	this.shape_42.setTransform(13.15,22.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#42416C").s().p("AhziEIDnAsIhNDdg");
	this.shape_43.setTransform(35.975,22.575);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#202134").s().p("Agxh8IBjDbIhjAeg");
	this.shape_44.setTransform(6.775,27.075);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#2D2D45").s().p("AglBeIBLjeIAAEBg");
	this.shape_45.setTransform(43.7,26.55);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#27283E").s().p("Ah3g3IBkgeICLCqg");
	this.shape_46.setTransform(13.775,45.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#272643").s().p("AAghYIBNAkIjZCNg");
	this.shape_47.setTransform(36.675,44.775);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#7A7397").s().p("AhvAQIgGhLIDrB3g");
	this.shape_48.setTransform(35.75,7.65);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#535072").s().p("ABsg8IAGBKIjjAvg");
	this.shape_49.setTransform(13.15,7.875);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFE").s().p("AgkBjQgTgGgPgMIAKgPQARAKANAEQAQAGAPAAQAVAAAOgKQAOgKAAgSQAAgLgFgHQgEgGgIgFQgHgEgKgDIgRgEQgLgCgNgEQgLgCgJgHQgIgFgGgLQgGgKAAgOQAAgMAFgLQAEgKAJgHQAJgIALgEQANgEAOAAQAQAAAQADQAQADAPAJIgKARQgMgGgPgEQgOgDgNAAQgJAAgHACQgHACgHAFQgHAGgCAGQgEAHAAAKQAAAJAFAGQADAGAJAFQAHAEAJACIAQAEIAaAHQALADAKAGQAIAGAGAKQAFAJAAARQAAANgFAKQgFALgJAHQgKAIgNADQgNAEgQAAQgSAAgSgFg");
	this.shape_50.setTransform(206.675,27.125);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFE").s().p("AgTBjQgNgEgKgJQgKgJgFgNQgFgMgBgPIAAhJQABgOAFgNQAGgNAJgIQALgJAMgFQAPgFAMAAQAhAAAWARIgKARQgJgHgLgEQgMgDgNAAQgIAAgJADQgJADgIAGQgHAGgEAKQgFAKAAAOIAABAQAAAOAFAJQAEAKAHAHQAIAGAJADQAJADAIAAQALAAANgDQAMgEAJgHIAKAQQgIAHgOAFQgOAFgTAAQgOAAgNgFg");
	this.shape_51.setTransform(191.4,27.175);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFE").s().p("AgJBlIAAjKIATAAIAADKg");
	this.shape_52.setTransform(180.05,27.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFE").s().p("AgJBlIAAi2Ig9AAIAAgUICNAAIAAAUIg8AAIAAC2g");
	this.shape_53.setTransform(168.925,27.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFE").s().p("AgJBlIAAhNIg+h9IAXAAIAxBoIAwhoIAXAAIg9B9IAABNg");
	this.shape_54.setTransform(153.725,27.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFE").s().p("AhBBlIAAjKIAUAAIAAC4IBvAAIAAASg");
	this.shape_55.setTransform(142.625,27.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFE").s().p("AA7BlIgQguIhWAAIgQAuIgVAAIBGjKIAVAAIBGDKgAgkAkIBJAAIglhuIAAAAg");
	this.shape_56.setTransform(125.625,27.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFE").s().p("AhMBlIAAjKIBaAAQAPABAMAEQALAEAHAIQAHAHAEAKQADALAAALQAAALgGALQgFAMgOAHQAHADAGAFQAFAGAEAGQADAFACAIQACAFAAAHQAAAMgEAMQgEAKgHAIQgIAJgLAFQgKAEgPAAgAgkBBIArAAQAMABAIgIQAHgGAAgMQAAgMgHgHQgIgIgNAAIgqAAgAgkgUIApAAQAMAAAIgFQAHgHAAgKQAAgKgHgHQgGgFgPgBIgoAAg");
	this.shape_57.setTransform(108.075,27.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFE").s().p("AgdBkQgPgFgKgIQgKgIgHgNQgGgMAAgRIAAhKQAAgRAHgLQAGgNALgIQAMgJANgDQAOgFAOAAQAPAAAOAFQANAEAMAJQALAIAHANQAGANAAAPIAABJQAAARgGAMQgGANgLAIQgJAIgQAFQgMAEgSAAQgRAAgMgEgAgNg/QgHACgFAEQgGAFgCAHQgDAHAAAKIAAA6QAAAKADAHQADAHAFAFQAHAFAFABQAGACAHAAQAIAAAGgCQAFgBAHgFQAFgFADgHQAEgHAAgKIAAg6QAAgLgEgGQgCgHgGgFQgFgEgHgCQgGgCgIAAQgHAAgGACg");
	this.shape_58.setTransform(89.225,27.175);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFE").s().p("AA6BlIAAhrIgBAAIgqBQIgcAAIgrhQIgBAAIAABrIgoAAIAAjKIAlAAIA8B5IACAAIA7h5IAlAAIAADKg");
	this.shape_59.setTransform(68.3,27.2);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, rect = new cjs.Rectangle(0,0,213.8,55), [rect]);


(lib.Tween18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._4valo_logo_white();
	this.instance.setTransform(-83.25,47.25,0.116,0.116);

	this.instance_1 = new lib.valor("synched",0);
	this.instance_1.setTransform(0,0,1.1967,1.1967);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-107.1,-91.5,214.2,183.1);
p.frameBounds = [rect];


(lib.Tween17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._4valo_logo_white();
	this.instance.setTransform(-83.55,47.25,0.116,0.116);

	this.instance_1 = new lib.valor("synched",0);
	this.instance_1.setTransform(0,0,1.1967,1.1967);
	var instance_1Filter_1 = new cjs.ColorFilter(0.3,0.3,0.3,1,0,0,0,0);
	this.instance_1.filters = [instance_1Filter_1];
	this.instance_1.cache(-91,-78,183,157);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_1Filter_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-107.1,-91.5,214.2,183.1);
p.frameBounds = [rect];


(lib.Tween16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._4valo_logo_white();
	this.instance.setTransform(-83.55,47.25,0.116,0.116);

	this.instance_1 = new lib.valor("synched",0);
	this.instance_1.setTransform(0,0,1.1967,1.1967);
	var instance_1Filter_1 = new cjs.ColorFilter(0.3,0.3,0.3,1,0,0,0,0);
	this.instance_1.filters = [instance_1Filter_1];
	this.instance_1.cache(-91,-78,183,157);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_1Filter_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-107.1,-91.5,214.2,183.1);
p.frameBounds = [rect];


(lib.Tween15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._4valo_logo_white();
	this.instance.setTransform(-83.25,47.25,0.116,0.116);

	this.instance_1 = new lib.valor("synched",0);
	this.instance_1.setTransform(0,0,1.1967,1.1967);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-107.1,-91.5,214.2,183.1);
p.frameBounds = [rect];


(lib.Tween14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._1lor_logo_white();
	this.instance.setTransform(-75.85,34.25,0.0495,0.0495);

	this.instance_1 = new lib.lor("synched",0);
	this.instance_1.setTransform(0,0,1.1967,1.1967);
	var instance_1Filter_1 = new cjs.ColorFilter(0.3,0.3,0.3,1,0,0,0,0);
	this.instance_1.filters = [instance_1Filter_1];
	this.instance_1.cache(-89,-78,179,157);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_1Filter_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-104.7,-91.5,209.5,183.1);
p.frameBounds = [rect];


(lib.Tween13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._1lor_logo_white();
	this.instance.setTransform(-75.7,34.5,0.0495,0.0495);

	this.instance_1 = new lib.lor("synched",0);
	this.instance_1.setTransform(0,0,1.1967,1.1967);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-104.7,-91.5,209.5,183.1);
p.frameBounds = [rect];


(lib.Tween12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._1lor_logo_white();
	this.instance.setTransform(-75.7,34.5,0.0495,0.0495);

	this.instance_1 = new lib.lor("synched",0);
	this.instance_1.setTransform(0,0,1.1967,1.1967);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-104.7,-91.5,209.5,183.1);
p.frameBounds = [rect];


(lib.Tween11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._1lor_logo_white();
	this.instance.setTransform(-75.85,34.25,0.0495,0.0495);

	this.instance_1 = new lib.lor("synched",0);
	this.instance_1.setTransform(0,0,1.1967,1.1967);
	var instance_1Filter_1 = new cjs.ColorFilter(0.3,0.3,0.3,1,0,0,0,0);
	this.instance_1.filters = [instance_1Filter_1];
	this.instance_1.cache(-89,-78,179,157);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_1Filter_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-104.7,-91.5,209.5,183.1);
p.frameBounds = [rect];


(lib.Tween10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._2tft_logo_white();
	this.instance.setTransform(-79.9,35.25,0.1775,0.1775);

	this.instance_1 = new lib.tft("synched",0);
	this.instance_1.setTransform(0,0,1.1967,1.1967);
	var instance_1Filter_1 = new cjs.ColorFilter(0.3,0.3,0.3,1,0,0,0,0);
	this.instance_1.filters = [instance_1Filter_1];
	this.instance_1.cache(-93,-78,187,157);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_1Filter_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109.4,-91.5,219,183.1);
p.frameBounds = [rect];


(lib.Tween9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._2tft_logo_white();
	this.instance.setTransform(-79.6,35.55,0.1775,0.1775);

	this.instance_1 = new lib.tft("synched",0);
	this.instance_1.setTransform(0,0,1.1967,1.1967);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109.4,-91.5,219,183.1);
p.frameBounds = [rect];


(lib.Tween8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._2tft_logo_white();
	this.instance.setTransform(-79.6,35.55,0.1775,0.1775);

	this.instance_1 = new lib.tft("synched",0);
	this.instance_1.setTransform(0,0,1.1967,1.1967);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109.4,-91.5,219,183.1);
p.frameBounds = [rect];


(lib.Tween7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._2tft_logo_white();
	this.instance.setTransform(-79.7,35.55,0.1775,0.1775);

	this.instance_1 = new lib.tft("synched",0);
	this.instance_1.setTransform(0,0,1.1967,1.1967);
	var instance_1Filter_1 = new cjs.ColorFilter(0.3,0.3,0.3,1,0,0,0,0);
	this.instance_1.filters = [instance_1Filter_1];
	this.instance_1.cache(-93,-78,187,157);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_1Filter_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109.4,-91.5,219,183.1);
p.frameBounds = [rect];


(lib.Tween6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._3lol_logo_white();
	this.instance.setTransform(-59.5,37.05,0.0532,0.0532);

	this.instance_1 = new lib.LoL("synched",0);
	this.instance_1.setTransform(0,0,1.1967,1.1967);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105.3,-90.9,210.6,181.9);
p.frameBounds = [rect];


(lib.Tween5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._3lol_logo_white();
	this.instance.setTransform(-59.85,36.65,0.0532,0.0532);

	this.instance_1 = new lib.LoL("synched",0);
	this.instance_1.setTransform(0,0,1.1967,1.1967);
	var instance_1Filter_1 = new cjs.ColorFilter(0.3,0.3,0.3,1,0,0,0,0);
	this.instance_1.filters = [instance_1Filter_1];
	this.instance_1.cache(-90,-78,180,156);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_1Filter_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105.3,-90.9,210.6,181.9);
p.frameBounds = [rect];


(lib.Tween4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._3lol_logo_white();
	this.instance.setTransform(-59.65,35.65,0.0532,0.0532);

	this.instance_1 = new lib.LoL("synched",0);
	this.instance_1.setTransform(0,0,1.1967,1.1967);
	var instance_1Filter_1 = new cjs.ColorFilter(0.3,0.3,0.3,1,0,0,0,0);
	this.instance_1.filters = [instance_1Filter_1];
	this.instance_1.cache(-90,-78,180,156);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_1Filter_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105.3,-90.9,210.6,181.9);
p.frameBounds = [rect];


(lib.Tween3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._3lol_logo_white();
	this.instance.setTransform(-59.5,37.05,0.0532,0.0532);

	this.instance_1 = new lib.LoL("synched",0);
	this.instance_1.setTransform(0,0,1.1967,1.1967);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105.3,-90.9,210.6,181.9);
p.frameBounds = [rect];


// stage content:
(lib.ad1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// washout
	this.instance = new lib.washout("synched",0);
	this.instance.setTransform(-592.6,134.35,7.6896,3.1339,0,0,0,-0.5,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({x:1693.3},37).to({_off:true},1).wait(257).to({_off:false},0).wait(1).to({startPosition:0},0).to({x:-573.2},34).to({_off:true},1).wait(20));

	// Button
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgFA/IgEgCIgCgFIgBgGIABgGIACgFIAEgBIAFgBIAGABIAEABIACAFIABAGIgBAGIgCAFIgEACIgGABIgFgBgAgEAbIgDAAIgBgCIgBgCIgChRIAAgCIACgBIAEgBIAFAAIAGAAIAEABIACABIAAACIgCBRIgBACIgBACIgDAAIgFABIgEgBg");
	this.shape.setTransform(246.825,173.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAjA7IgIAAIgFgBIgDgCIgBgDIgShKIgSBKIgBADIgCACIgFABIgIAAIgJAAIgFgBIgCgCIgCgDIgahmIgBgFIABgDIAEgBIAHAAIAHAAIADAAIACACIABADIAUBZIAWhZIABgDIACgBIAEgBIAFAAIAHAAIAEABIACABIABADIAWBZIABAAIAUhZIABgDIACgBIADgBIAHAAIAGAAIADABIABADIgBAFIgbBmIgBADIgDACIgFABIgIAAg");
	this.shape_1.setTransform(235.025,173.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgYA5QgLgDgGgIQgHgHgEgLQgCgMAAgPQAAgOADgLQAEgLAGgIQAIgIAKgFQALgEANAAQAOAAAKAEQAKADAHAIQAGAHAEALQAEALgBAQQABANgEAMQgDALgIAIQgHAIgKAFQgLAEgNAAQgOAAgKgEgAgOglQgGADgDAGQgEAFgBAIQgBAHAAAIQAAAJABAIQABAIADAFQAEAFAGADQAGADAIAAQAIAAAHgDQAFgDAEgGQADgGACgHQABgIAAgIQAAgIgBgIQgCgIgDgFQgDgFgGgDQgGgDgJAAQgHAAgHADg");
	this.shape_2.setTransform(220.55,173.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AglA7IgFAAIgDgBIgCgBIAAgCIAAhoQAAgFACgCQADgCADAAIANAAIAGABIAEACIAEAEIADAFIAWArIAEAHIAEAIIADAHIADAHIABAAIgBgNIAAgNIAAg2IABgCIABgBIAEgBIAFAAIAFAAIADABIACABIAAACIAABoIAAAEIgCADIgDABIgEABIgKAAIgFgBIgEgCIgEgFIgEgHIgdg2IgFgKIgEgMIgBAAIABAOIAAANIAAA8IAAACIgCABIgDABIgGAAg");
	this.shape_3.setTransform(208.125,173.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAAA7IgFAAIgDgBIgDgBIAAgCIAAheIgeAAIgBAAIgBgCIAAgCIgBgFIABgFIAAgDIABgCIABAAIBSAAIACAAIABACIABADIAAAFIAAAFIgBACIgBACIgCAAIgdAAIAABeIAAACIgCABIgEABIgGAAg");
	this.shape_4.setTransform(193.15,173.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgUA6QgIgEgGgFQgGgGgDgIQgEgJAAgLIAAhGIABgCIACgBIADgBIAGAAIAGAAIAEABIACABIAAACIAABEQAAAHACAFQACAFADAEQADADAFACQAEABAFABQAFAAAFgCQAEgCADgDQADgEACgFQABgFAAgFIAAhGIABgCIACgBIAEgBIAGAAIAFAAIAEABIABABIABACIAABFQAAALgDAJQgDAIgGAGQgHAGgIADQgKADgLAAQgKAAgKgCg");
	this.shape_5.setTransform(182.45,173.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgYA5QgLgDgGgIQgHgHgEgLQgCgMAAgPQAAgOADgLQAEgLAGgIQAIgIAKgFQALgEANAAQAOAAAKAEQAKADAHAIQAGAHAEALQAEALgBAQQABANgEAMQgDALgIAIQgHAIgKAFQgLAEgNAAQgOAAgKgEgAgOglQgGADgDAGQgEAFgBAIQgBAHAAAIQAAAJABAIQABAIADAFQAEAFAGADQAGADAIAAQAJAAAGgDQAFgDAEgGQADgGACgHQABgIAAgIQAAgIgBgIQgCgIgDgFQgDgFgGgDQgGgDgJAAQgHAAgHADg");
	this.shape_6.setTransform(170.15,173.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgpA7QgDAAgCgCQgCgCAAgEIAAhlQAAgEACgCQACgCADAAIAeAAQAPAAALAEQALAEAHAHQAIAHAEALQAEAKAAAOQAAAPgEAMQgFALgIAIQgIAHgLADQgLAEgPAAgAgYAoIAMAAQAKAAAGgDQAHgCAEgFQAFgFACgIQACgIAAgJQAAgIgCgHQgCgIgEgFQgFgFgGgDQgGgDgLAAIgMAAg");
	this.shape_7.setTransform(154.075,173.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AglA7IgFAAIgDgBIgCgBIAAgCIAAhoQAAgFACgCQADgCADAAIANAAIAGABIAEACIAEAEIADAFIAWArIAEAHIAEAIIADAHIADAHIABAAIgBgNIAAgNIAAg2IABgCIABgBIAEgBIAFAAIAFAAIADABIACABIAAACIAABoIAAAEIgCADIgDABIgEABIgKAAIgFgBIgEgCIgEgFIgEgHIgdg2IgFgKIgEgMIgBAAIABAOIAAANIAAA8IAAACIgCABIgDABIgGAAg");
	this.shape_8.setTransform(141.775,173.875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAAA7IgFAAIgEgBIgCgBIAAgCIAAhuIAAgBIACgBIAEgBIAFAAIAFAAIAEABIACABIABABIAABuIgBACIgCABIgEABIgFAAg");
	this.shape_9.setTransform(133.2,173.875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgUA7IgGAAIgEgBIgCgBIAAgCIAAhqQAAgDACgCQACgCADAAIA2AAIABAAIACACIAAADIABAFIgBAFIAAACIgCACIgBAAIglAAIAAAgIAjAAIABABIABABIABADIAAAEIAAAEIgBADIgBACIgBABIgjAAIAAArIgBACIgBABIgFABIgFAAg");
	this.shape_10.setTransform(126.75,173.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFC000").s().p("AsgDYQgyABAAgyIAAlMQAAgzAyAAIZBAAQAyAAgBAzIAAFMQABAygygBg");
	this.shape_11.setTransform(184.4913,173.95,1.0435,1);

	this.instance_1 = new lib.gloweffect();
	this.instance_1.setTransform(84,140,0.3284,0.3378);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},335).wait(25));

	// LOGO
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAjA9IgGAAIgEgBIgCgBIAAgCIAAgxIgtAAIAAAxIAAACIgCABIgEABIgGAAIgGAAIgDgBIgCgBIgBgCIAAhxIABgBIACgCIADAAIAGgBIAGABIAEAAIACACIAAABIAAAtIAtAAIAAgtIAAgBIACgCIAEAAIAGgBIAGABIAEAAIACACIAAABIAABxIAAACIgCABIgEABIgGAAg");
	this.shape_12.setTransform(254.025,101.05);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgMA7QgKgEgHgIQgHgIgEgLQgEgLABgQQAAgOADgMQAEgLAIgJQAIgIAJgEQALgFAMAAIAJABIAJADIAHADIAEADIACACIABACIABADIAAAFIgBAEIgBAEIgBACIgBAAIgDgBIgGgFIgJgDQgEgBgHAAQgHAAgFACQgFADgEAGQgEAFgCAIQgCAIAAAIQAAALACAIQADAHAEAGQAEAEAEADQAGACAHABQAGgBAFgBIAIgEIAGgCIADgCIACAAIABACIABADIAAAFIAAAEIgBADIgBACIgBACIgEACIgHAEIgKACIgLABQgMAAgKgDg");
	this.shape_13.setTransform(243.1,101.05);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAsA9IgIAAIgDgBIgCgBIgCgCIgHgYIgtAAIgHAYIgBACIgDABIgDABIgHAAIgHAAIgDgBQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAABAAIABgGIAlhqIABgCIADgCIAEAAIAIgBIAHABIAGAAIADACIABACIAlBqIABAGQABAAAAAAQAAABAAAAQAAABgBAAQAAAAAAABIgEABIgHAAgAgSAOIAiAAIgRgzg");
	this.shape_14.setTransform(232.35,101.05);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgZA7QgKgEgHgHQgHgIgEgMQgDgLAAgQQAAgOADgMQAEgLAIgJQAHgHALgFQALgFANAAQAOAAAKAEQALAEAHAHQAHAIAEALQADAMAAAPQAAAOgEAMQgDANgIAHQgHAJgLAFQgLADgNAAQgOABgLgEgAgOgmQgGAEgEAFQgDAGgCAHQgCAIAAAIQAAAKACAHQABAJAEAFQAEAFAGAEQAGACAIAAQAJAAAGgDQAGgDAEgGQADgGACgIQABgHAAgJQAAgIgBgJQgCgHgDgFQgEgGgGgDQgGgDgJAAQgIAAgGADg");
	this.shape_15.setTransform(220.325,101.05);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgMA7QgKgEgHgIQgHgIgEgLQgDgLAAgQQAAgOADgMQAFgLAHgJQAIgIAKgEQAKgFALAAIAKABIAJADIAHADIAEADIACACIABACIABADIAAAFIgBAEIAAAEIgBACIgCAAIgEgBIgFgFIgJgDQgEgBgHAAQgHAAgFACQgFADgEAGQgEAFgCAIQgCAIAAAIQAAALACAIQACAHAFAGQAEAEAEADQAGACAHABQAGgBAGgBIAHgEIAGgCIADgCIACAAIABACIABADIAAAFIAAAEIgBADIAAACIgCACIgEACIgHAEIgKACIgLABQgMAAgKgDg");
	this.shape_16.setTransform(209.1,101.05);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgZA7QgKgEgHgHQgHgIgEgMQgDgLAAgQQAAgOADgMQAEgLAIgJQAHgHALgFQALgFANAAQAOAAAKAEQALAEAHAHQAHAIAEALQADAMAAAPQAAAOgEAMQgDANgIAHQgHAJgLAFQgLADgNAAQgOABgLgEgAgOgmQgGAEgEAFQgDAGgCAHQgCAIAAAIQAAAKACAHQABAJAEAFQAEAFAGAEQAGACAIAAQAJAAAGgDQAGgDAEgGQADgGACgIQABgHAAgJQAAgIgBgJQgCgHgDgFQgEgGgGgDQgGgDgJAAQgIAAgGADg");
	this.shape_17.setTransform(193.125,101.05);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAfA9IgGAAIgEgBIgCgBIgBgCIgKgbIgFgIIgDgGQgBgDgEgBQgDgBgDAAIgIAAIAAAuIgBACIgCABIgEABIgGAAIgFAAIgFgBIgCgBIAAgCIAAhtQAAgEACgCQACgCAEAAIAeAAIAHABIAGAAQAIABAFADQAGACAEAEQAEAEACAGQACAFAAAIQAAAGgBAFQgBAFgDAEIgIAGIgKAEIAFADIAFAFIADAGIAFAIIAKAXIACAGIAAACIAAACIgCABIgFABIgHAAgAgTgHIAMAAIAIgBIAHgDIAEgGIABgHQAAgGgDgEQgCgEgHgCIgCgBIgIAAIgKAAg");
	this.shape_18.setTransform(181.85,101.075);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgcA9IgGAAIgEgBIgCgBIAAgCIAAhsQgBgEADgCQACgDAEAAIAdAAIAHABIAJABQAGABAFADQAGADADAEQAEAFADAGQABAGABAHQgBAKgDAIQgDAHgGAFQgGAGgJADQgIACgLAAIgLAAIAAAnIgBACIgCABIgDABIgGAAgAgQAAIALAAQAFAAAEgBQAEgCADgDIAEgGIAAgJQAAgGgBgFQgDgEgDgCIgHgCIgGgBIgLAAg");
	this.shape_19.setTransform(171.35,101.075);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAfA9IgGAAIgEgBIgCgBIgBgCIgKgbIgFgIIgDgGQgBgDgEgBQgCgBgEAAIgIAAIAAAuIgBACIgCABIgEABIgGAAIgFAAIgFgBIgCgBIAAgCIAAhtQAAgEACgCQADgCADAAIAeAAIAHABIAGAAQAIABAFADQAGACAEAEQAEAEACAGQACAFAAAIQABAGgCAFQgCAFgCAEIgIAGIgKAEIAFADIAFAFIADAGIAFAIIAKAXIACAGIAAACIAAACIgCABIgFABIgHAAgAgTgHIAMAAIAIgBIAHgDIAEgGIABgHQAAgGgDgEQgCgEgHgCIgCgBIgHAAIgLAAg");
	this.shape_20.setTransform(156.55,101.075);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgUA7QgKgDgFgGQgHgFgDgJQgDgJgBgLIAAhJIABgBIACgCIAEAAIAGgBIAGABIAEAAIACACIAAABIAABHQAAAHACAFQACAFADAEQADADAFACQAEACAGAAQAFAAAFgCQAEgCAEgDQADgEABgFQACgFAAgGIAAhIIAAgBIADgCIADAAIAGgBIAGABIAEAAIABACIABABIAABIQAAALgDAJQgEAIgFAGQgHAHgJADQgKADgLAAQgLAAgJgDg");
	this.shape_21.setTransform(144.55,101.125);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgZA7QgKgEgHgHQgHgIgEgMQgDgLAAgQQAAgOADgMQAEgLAIgJQAHgHALgFQALgFANAAQAOAAAKAEQALAEAHAHQAHAIAEALQADAMAAAPQAAAOgEAMQgDANgIAHQgHAJgLAFQgLADgNAAQgOABgLgEgAgOgmQgGAEgEAFQgDAGgCAHQgCAIAAAIQAAAKACAHQABAJAEAFQAEAFAGAEQAGACAIAAQAJAAAGgDQAGgDAEgGQADgGACgIQABgHAAgJQAAgIgBgJQgCgHgDgFQgEgGgGgDQgGgDgJAAQgIAAgGADg");
	this.shape_22.setTransform(131.825,101.05);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAAA9IgFAAIgEgBIgCgBIAAgCIAAgqIghhBIgDgFQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABAAIAEgBIAIgBIAHABIAEAAIACACIABACIAOAdIAEAJIACAKIABAAIADgKIAEgJIANgdIABgCIACgCIAEAAIAHgBIAIABIAEABQAAAAABAAQAAAAAAABQAAAAAAABQAAAAAAABIgDAFIghBBIAAAqIAAACIgCABIgEABIgGAAg");
	this.shape_23.setTransform(121.125,101.05);

	this.instance_2 = new lib.ClipGroup();
	this.instance_2.setTransform(172.65,77.9,1.1559,1.1559,0,0,0,107,28.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},31).wait(329));

	// LoL
	this.instance_3 = new lib._3lol_logo_white();
	this.instance_3.setTransform(356,174,0.0532,0.0532);

	this.instance_4 = new lib.LoL("synched",0);
	this.instance_4.setTransform(415.85,137.35,1.1967,1.1967);
	var instance_4Filter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_4.filters = [instance_4Filter_1];
	this.instance_4.cache(-90,-78,180,156);

	this.instance_5 = new lib.Tween5("synched",0);
	this.instance_5.setTransform(415.85,137.35);
	this.instance_5._off = true;

	this.instance_6 = new lib.Tween6("synched",0);
	this.instance_6.setTransform(423.5,109.95);

	this.instance_7 = new lib.Tween3("synched",0);
	this.instance_7.setTransform(423.5,109.95);
	this.instance_7._off = true;

	this.instance_8 = new lib.Tween4("synched",0);
	this.instance_8.setTransform(414.65,136.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4},{t:this.instance_3}]},32).to({state:[{t:this.instance_5}]},27).to({state:[{t:this.instance_6}]},15).to({state:[{t:this.instance_7}]},30).to({state:[{t:this.instance_8}]},15).wait(241));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(59).to({_off:false},0).to({_off:true,x:423.5,y:109.95},15).wait(286));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(104).to({_off:false},0).to({_off:true,x:414.65,y:136.35},15).wait(241));
	this.timeline.addTween(cjs.Tween.get(instance_4Filter_1).wait(32).to(new cjs.ColorFilter(0.3,0.3,0.3,1,0,0,0,0), 0).wait(301));
	this.instance_5.addEventListener("tick", AdobeAn.handleFilterCache);
	this.instance_8.addEventListener("tick", AdobeAn.handleFilterCache);

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_74 = new cjs.Graphics().p("A3vpLICViVMAg8Ag9IiUCUgArh1bICViVMAg8Ag8IiVCVg");
	var mask_graphics_75 = new cjs.Graphics().p("A3upLICTiVMAg8Ag9IiUCUgArh1bICViVMAg7Ag8IiTCVg");
	var mask_graphics_76 = new cjs.Graphics().p("A3vpLICUiVMAg9Ag9IiVCUgArh1bICUiVMAg9Ag8IiVCVg");
	var mask_graphics_77 = new cjs.Graphics().p("A3vpLICViVMAg8Ag9IiUCUgArh1bICViVMAg8Ag8IiUCVg");
	var mask_graphics_78 = new cjs.Graphics().p("A3upLICTiVMAg8Ag9IiTCUgArg1bICUiVMAg7Ag8IiTCVg");
	var mask_graphics_79 = new cjs.Graphics().p("A3vpLICViVMAg8Ag9IiVCUgArh1bICUiVMAg9Ag8IiVCVg");
	var mask_graphics_80 = new cjs.Graphics().p("A3vpLICViVMAg8Ag9IiUCUgArh1bICViVMAg8Ag8IiUCVg");
	var mask_graphics_81 = new cjs.Graphics().p("A3upLICTiVMAg9Ag9IiUCUgArg1bICTiVMAg8Ag8IiTCVg");
	var mask_graphics_82 = new cjs.Graphics().p("A3vpLICViVMAg8Ag9IiUCUgArh1bICUiVMAg9Ag8IiVCVg");
	var mask_graphics_83 = new cjs.Graphics().p("A3upLICTiVMAg8Ag9IiTCUgArh1bICViVMAg7Ag8IiTCVg");
	var mask_graphics_84 = new cjs.Graphics().p("A3vpLICUiVMAg9Ag9IiVCUgArh1bICUiVMAg9Ag8IiVCVg");
	var mask_graphics_85 = new cjs.Graphics().p("A3vpLICViVMAg8Ag9IiUCUgArh1bICViVMAg8Ag8IiVCVg");
	var mask_graphics_86 = new cjs.Graphics().p("A3upLICTiVMAg8Ag9IiTCUgArg1bICUiVMAg7Ag8IiTCVg");
	var mask_graphics_87 = new cjs.Graphics().p("A3vpLICUiVMAg9Ag9IiVCUgArh1bICUiVMAg9Ag8IiVCVg");
	var mask_graphics_88 = new cjs.Graphics().p("A3vpLICViVMAg8Ag9IiUCUgArh1bICViVMAg8Ag8IiUCVg");
	var mask_graphics_89 = new cjs.Graphics().p("A3upLICTiVMAg9Ag9IiUCUgArg1bICUiVMAg7Ag8IiTCVg");
	var mask_graphics_90 = new cjs.Graphics().p("A3vpLICViVMAg8Ag9IiVCUgArh1bICUiVMAg9Ag8IiVCVg");
	var mask_graphics_91 = new cjs.Graphics().p("A3vpLICViVMAg8Ag9IiUCUgArh1bICViVMAg8Ag8IiUCVg");
	var mask_graphics_92 = new cjs.Graphics().p("A3vpLICUiVMAg9Ag9IiVCUgArh1bICUiVMAg9Ag8IiVCVg");
	var mask_graphics_93 = new cjs.Graphics().p("A3vpLICViVMAg8Ag9IiUCUgArh1bICViVMAg8Ag8IiVCVg");
	var mask_graphics_94 = new cjs.Graphics().p("A3upLICTiVMAg8Ag9IiUCUgArg1bICUiVMAg7Ag8IiTCVg");
	var mask_graphics_95 = new cjs.Graphics().p("A3vpLICUiVMAg9Ag9IiVCUgArh1bICUiVMAg9Ag8IiVCVg");
	var mask_graphics_96 = new cjs.Graphics().p("A3vpLICViVMAg8Ag9IiUCUgArh1bICViVMAg8Ag8IiUCVg");
	var mask_graphics_97 = new cjs.Graphics().p("A3upLICTiVMAg9Ag9IiVCUgArg1bICUiVMAg7Ag8IiTCVg");
	var mask_graphics_98 = new cjs.Graphics().p("A3vpLICViVMAg8Ag9IiVCUgArh1bICUiVMAg9Ag8IiVCVg");
	var mask_graphics_99 = new cjs.Graphics().p("A3vpLICViVMAg8Ag9IiUCUgArh1bICViVMAg8Ag8IiUCVg");
	var mask_graphics_100 = new cjs.Graphics().p("A3vpLICUiVMAg9Ag9IiVCUgArh1bICUiVMAg9Ag8IiVCVg");
	var mask_graphics_101 = new cjs.Graphics().p("A3vpLICViVMAg8Ag9IiUCUgArh1bICViVMAg8Ag8IiVCVg");
	var mask_graphics_102 = new cjs.Graphics().p("A3upLICTiVMAg8Ag9IiUCUgArh1bICUiVMAg8Ag8IiTCVg");
	var mask_graphics_103 = new cjs.Graphics().p("A3vpLICUiVMAg9Ag9IiVCUgArh1bICUiVMAg9Ag8IiVCVg");
	var mask_graphics_104 = new cjs.Graphics().p("A3vpLICViVMAg8Ag9IiUCUgArh1bICViVMAg8Ag8IiUCVg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(74).to({graphics:mask_graphics_74,x:239.8999,y:286.7251}).wait(1).to({graphics:mask_graphics_75,x:252.7434,y:275.0432}).wait(1).to({graphics:mask_graphics_76,x:265.5868,y:263.3616}).wait(1).to({graphics:mask_graphics_77,x:278.4299,y:251.6801}).wait(1).to({graphics:mask_graphics_78,x:291.2733,y:239.9985}).wait(1).to({graphics:mask_graphics_79,x:304.1167,y:228.3165}).wait(1).to({graphics:mask_graphics_80,x:316.9597,y:216.635}).wait(1).to({graphics:mask_graphics_81,x:329.8032,y:204.9534}).wait(1).to({graphics:mask_graphics_82,x:342.6467,y:193.2719}).wait(1).to({graphics:mask_graphics_83,x:355.4901,y:181.5898}).wait(1).to({graphics:mask_graphics_84,x:368.3335,y:169.9083}).wait(1).to({graphics:mask_graphics_85,x:381.1766,y:158.2268}).wait(1).to({graphics:mask_graphics_86,x:394.02,y:146.5452}).wait(1).to({graphics:mask_graphics_87,x:406.8634,y:134.8632}).wait(1).to({graphics:mask_graphics_88,x:419.7064,y:123.1816}).wait(1).to({graphics:mask_graphics_89,x:432.5499,y:111.5001}).wait(1).to({graphics:mask_graphics_90,x:445.3934,y:99.8181}).wait(1).to({graphics:mask_graphics_91,x:458.2363,y:88.1365}).wait(1).to({graphics:mask_graphics_92,x:471.0802,y:76.455}).wait(1).to({graphics:mask_graphics_93,x:483.9232,y:64.7734}).wait(1).to({graphics:mask_graphics_94,x:496.7667,y:53.0919}).wait(1).to({graphics:mask_graphics_95,x:509.6102,y:41.4099}).wait(1).to({graphics:mask_graphics_96,x:522.4531,y:29.7283}).wait(1).to({graphics:mask_graphics_97,x:535.2966,y:18.0468}).wait(1).to({graphics:mask_graphics_98,x:548.14,y:6.3648}).wait(1).to({graphics:mask_graphics_99,x:560.983,y:-5.3168}).wait(1).to({graphics:mask_graphics_100,x:573.827,y:-16.9983}).wait(1).to({graphics:mask_graphics_101,x:586.67,y:-28.6799}).wait(1).to({graphics:mask_graphics_102,x:599.5134,y:-40.3619}).wait(1).to({graphics:mask_graphics_103,x:612.3569,y:-52.0434}).wait(1).to({graphics:mask_graphics_104,x:625.1998,y:-63.7749}).wait(1).to({graphics:null,x:0,y:0}).wait(255));

	// Yellow
	this.instance_9 = new lib._3lol_logo_yellow();
	this.instance_9.setTransform(310,11,1.1619,1.1619);
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(74).to({_off:false},0).to({_off:true},31).wait(255));

	// tft
	this.instance_10 = new lib._2tft_logo_white();
	this.instance_10.setTransform(513,174,0.1775,0.1775);

	this.instance_11 = new lib.tft("synched",0);
	this.instance_11.setTransform(592.7,138.45,1.1967,1.1967);
	var instance_11Filter_2 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_11.filters = [instance_11Filter_2];
	this.instance_11.cache(-93,-78,187,157);

	this.instance_12 = new lib.Tween7("synched",0);
	this.instance_12.setTransform(592.7,138.45);
	this.instance_12._off = true;

	this.instance_13 = new lib.Tween8("synched",0);
	this.instance_13.setTransform(599.6,109.45);

	this.instance_14 = new lib.Tween9("synched",0);
	this.instance_14.setTransform(599.6,109.45);
	this.instance_14._off = true;

	this.instance_15 = new lib.Tween10("synched",0);
	this.instance_15.setTransform(593.9,135.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_11},{t:this.instance_10}]},33).to({state:[{t:this.instance_12}]},86).to({state:[{t:this.instance_13}]},15).to({state:[{t:this.instance_14}]},30).to({state:[{t:this.instance_15}]},15).wait(181));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(119).to({_off:false},0).to({_off:true,x:599.6,y:109.45},15).wait(226));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(164).to({_off:false},0).to({_off:true,x:593.9,y:135.75},15).wait(181));
	this.timeline.addTween(cjs.Tween.get(instance_11Filter_2).wait(33).to(new cjs.ColorFilter(0.3,0.3,0.3,1,0,0,0,0), 0).wait(241));
	this.instance_12.addEventListener("tick", AdobeAn.handleFilterCache);
	this.instance_15.addEventListener("tick", AdobeAn.handleFilterCache);

	// Mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_134 = new cjs.Graphics().p("A3vpLICUiVMAg9Ag9IiVCUgArh1bICUiVMAg9Ag8IiVCVg");
	var mask_1_graphics_135 = new cjs.Graphics().p("A3vpLICUiVMAg9Ag9IiVCUgArh1bICUiVMAg9Ag8IiVCVg");
	var mask_1_graphics_136 = new cjs.Graphics().p("A3vpLICUiVMAg9Ag9IiVCUgArh1bICUiVMAg9Ag8IiVCVg");
	var mask_1_graphics_137 = new cjs.Graphics().p("A3upLICTiVMAg9Ag9IiUCUgArg1bICUiVMAg7Ag8IiTCVg");
	var mask_1_graphics_138 = new cjs.Graphics().p("A3upLICTiVMAg8Ag9IiTCUgArg1bICTiVMAg8Ag8IiTCVg");
	var mask_1_graphics_139 = new cjs.Graphics().p("A3upLICTiVMAg8Ag9IiUCUgArg1bICUiVMAg7Ag8IiTCVg");
	var mask_1_graphics_140 = new cjs.Graphics().p("A3upLICTiVMAg8Ag9IiUCUgArh1bICViVMAg7Ag8IiTCVg");
	var mask_1_graphics_141 = new cjs.Graphics().p("A3vpLICViVMAg8Ag9IiUCUgArh1bICViVMAg8Ag8IiUCVg");
	var mask_1_graphics_142 = new cjs.Graphics().p("A3vpLICViVMAg8Ag9IiUCUgArh1bICViVMAg8Ag8IiUCVg");
	var mask_1_graphics_143 = new cjs.Graphics().p("A3vpLICViVMAg8Ag9IiUCUgArh1bICViVMAg8Ag8IiUCVg");
	var mask_1_graphics_144 = new cjs.Graphics().p("A3vpLICViVMAg8Ag9IiUCUgArh1bICViVMAg8Ag8IiVCVg");
	var mask_1_graphics_145 = new cjs.Graphics().p("A3vpLICViVMAg8Ag9IiVCUgArh1bICViVMAg8Ag8IiVCVg");
	var mask_1_graphics_146 = new cjs.Graphics().p("A3vpLICViVMAg8Ag9IiVCUgArh1bICUiVMAg9Ag8IiVCVg");
	var mask_1_graphics_147 = new cjs.Graphics().p("A3vpLICUiVMAg9Ag9IiVCUgArh1bICUiVMAg9Ag8IiVCVg");
	var mask_1_graphics_148 = new cjs.Graphics().p("A3vpLICUiVMAg9Ag9IiVCUgArh1bICUiVMAg9Ag8IiVCVg");
	var mask_1_graphics_149 = new cjs.Graphics().p("A3vpLICUiVMAg9Ag9IiVCUgArh1bICUiVMAg9Ag8IiVCVg");
	var mask_1_graphics_150 = new cjs.Graphics().p("A3vpLICUiVMAg9Ag9IiVCUgArh1bICUiVMAg9Ag8IiVCVg");
	var mask_1_graphics_151 = new cjs.Graphics().p("A3upLICTiVMAg9Ag9IiVCUgArg1bICUiVMAg7Ag8IiTCVg");
	var mask_1_graphics_152 = new cjs.Graphics().p("A3upLICTiVMAg8Ag9IiTCUgArg1bICTiVMAg8Ag8IiTCVg");
	var mask_1_graphics_153 = new cjs.Graphics().p("A3upLICTiVMAg8Ag9IiUCUgArg1bICTiVMAg8Ag8IiTCVg");
	var mask_1_graphics_154 = new cjs.Graphics().p("A3upLICTiVMAg8Ag9IiUCUgArh1bICUiVMAg8Ag8IiTCVg");
	var mask_1_graphics_155 = new cjs.Graphics().p("A3vpLICViVMAg8Ag9IiUCUgArh1bICViVMAg8Ag8IiUCVg");
	var mask_1_graphics_156 = new cjs.Graphics().p("A3vpLICViVMAg8Ag9IiUCUgArh1bICViVMAg8Ag8IiUCVg");
	var mask_1_graphics_157 = new cjs.Graphics().p("A3vpLICViVMAg8Ag9IiUCUgArh1bICViVMAg8Ag8IiVCVg");
	var mask_1_graphics_158 = new cjs.Graphics().p("A3vpLICViVMAg8Ag9IiUCUgArh1bICViVMAg8Ag8IiVCVg");
	var mask_1_graphics_159 = new cjs.Graphics().p("A3vpLICViVMAg8Ag9IiVCUgArh1bICViVMAg8Ag8IiVCVg");
	var mask_1_graphics_160 = new cjs.Graphics().p("A3vpLICViVMAg8Ag9IiVCUgArh1bICUiVMAg9Ag8IiVCVg");
	var mask_1_graphics_161 = new cjs.Graphics().p("A3vpLICUiVMAg9Ag9IiVCUgArh1bICUiVMAg9Ag8IiVCVg");
	var mask_1_graphics_162 = new cjs.Graphics().p("A3vpLICUiVMAg9Ag9IiVCUgArh1bICUiVMAg9Ag8IiVCVg");
	var mask_1_graphics_163 = new cjs.Graphics().p("A3vpLICUiVMAg9Ag9IiVCUgArh1bICUiVMAg9Ag8IiVCVg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(134).to({graphics:mask_1_graphics_134,x:402.1501,y:268.2252}).wait(1).to({graphics:mask_1_graphics_135,x:415.6312,y:256.4114}).wait(1).to({graphics:mask_1_graphics_136,x:429.1124,y:244.5975}).wait(1).to({graphics:mask_1_graphics_137,x:442.593,y:232.7836}).wait(1).to({graphics:mask_1_graphics_138,x:456.0741,y:220.9698}).wait(1).to({graphics:mask_1_graphics_139,x:469.5552,y:209.156}).wait(1).to({graphics:mask_1_graphics_140,x:483.0363,y:197.3421}).wait(1).to({graphics:mask_1_graphics_141,x:496.517,y:185.5282}).wait(1).to({graphics:mask_1_graphics_142,x:509.998,y:173.7148}).wait(1).to({graphics:mask_1_graphics_143,x:523.4791,y:161.901}).wait(1).to({graphics:mask_1_graphics_144,x:536.9603,y:150.0871}).wait(1).to({graphics:mask_1_graphics_145,x:550.4413,y:138.2733}).wait(1).to({graphics:mask_1_graphics_146,x:563.9224,y:126.4594}).wait(1).to({graphics:mask_1_graphics_147,x:577.4035,y:114.6456}).wait(1).to({graphics:mask_1_graphics_148,x:590.8846,y:102.8317}).wait(1).to({graphics:mask_1_graphics_149,x:604.3658,y:91.0179}).wait(1).to({graphics:mask_1_graphics_150,x:617.8468,y:79.2045}).wait(1).to({graphics:mask_1_graphics_151,x:631.3275,y:67.3906}).wait(1).to({graphics:mask_1_graphics_152,x:644.8086,y:55.5768}).wait(1).to({graphics:mask_1_graphics_153,x:658.2897,y:43.7629}).wait(1).to({graphics:mask_1_graphics_154,x:671.7708,y:31.9491}).wait(1).to({graphics:mask_1_graphics_155,x:685.2514,y:20.1352}).wait(1).to({graphics:mask_1_graphics_156,x:698.7325,y:8.3214}).wait(1).to({graphics:mask_1_graphics_157,x:712.2137,y:-3.4925}).wait(1).to({graphics:mask_1_graphics_158,x:725.6947,y:-15.3059}).wait(1).to({graphics:mask_1_graphics_159,x:739.1758,y:-27.1197}).wait(1).to({graphics:mask_1_graphics_160,x:752.657,y:-38.9336}).wait(1).to({graphics:mask_1_graphics_161,x:766.138,y:-50.7474}).wait(1).to({graphics:mask_1_graphics_162,x:779.6191,y:-62.5613}).wait(1).to({graphics:mask_1_graphics_163,x:793.1003,y:-74.3751}).wait(1).to({graphics:null,x:0,y:0}).wait(196));

	// Yellow
	this.instance_16 = new lib._2tft_logo_yellow();
	this.instance_16.setTransform(478,9,1.1737,1.1835);
	this.instance_16._off = true;

	var maskedShapeInstanceList = [this.instance_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(134).to({_off:false},0).to({_off:true},30).wait(196));

	// lor
	this.instance_17 = new lib._1lor_logo_white();
	this.instance_17.setTransform(694,172,0.0495,0.0495);

	this.instance_18 = new lib.lor("synched",0);
	this.instance_18.setTransform(769.85,137.75,1.1967,1.1967);
	var instance_18Filter_3 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_18.filters = [instance_18Filter_3];
	this.instance_18.cache(-89,-78,179,157);

	this.instance_19 = new lib.Tween11("synched",0);
	this.instance_19.setTransform(769.85,137.75);
	this.instance_19._off = true;

	this.instance_20 = new lib.Tween12("synched",0);
	this.instance_20.setTransform(776.7,109.5);

	this.instance_21 = new lib.Tween13("synched",0);
	this.instance_21.setTransform(776.7,109.5);
	this.instance_21._off = true;

	this.instance_22 = new lib.Tween14("synched",0);
	this.instance_22.setTransform(769.85,137.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_18},{t:this.instance_17}]},34).to({state:[{t:this.instance_19}]},145).to({state:[{t:this.instance_20}]},15).to({state:[{t:this.instance_21}]},30).to({state:[{t:this.instance_22}]},16).wait(120));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(179).to({_off:false},0).to({_off:true,x:776.7,y:109.5},15).wait(166));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(224).to({_off:false},0).to({_off:true,x:769.85,y:137.75},16).wait(120));
	this.timeline.addTween(cjs.Tween.get(instance_18Filter_3).wait(34).to(new cjs.ColorFilter(0.3,0.3,0.3,1,0,0,0,0), 0).wait(181));
	this.instance_19.addEventListener("tick", AdobeAn.handleFilterCache);
	this.instance_22.addEventListener("tick", AdobeAn.handleFilterCache);

	// Mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_194 = new cjs.Graphics().p("A3upLICTiVMAg8Ag9IiUCUgArh1bICViVMAg7Ag8IiTCVg");
	var mask_2_graphics_195 = new cjs.Graphics().p("A3vpLICViVMAg8Ag9IiUCUgArh1bICViVMAg8Ag8IiVCVg");
	var mask_2_graphics_196 = new cjs.Graphics().p("A3vpLICUiVMAg9Ag9IiVCUgArh1bICUiVMAg9Ag8IiVCVg");
	var mask_2_graphics_197 = new cjs.Graphics().p("A3upLICTiVMAg9Ag9IiUCUgArg1bICTiVMAg8Ag8IiTCVg");
	var mask_2_graphics_198 = new cjs.Graphics().p("A3upLICTiVMAg8Ag9IiUCUgArh1bICUiVMAg8Ag8IiTCVg");
	var mask_2_graphics_199 = new cjs.Graphics().p("A3vpLICViVMAg8Ag9IiUCUgArh1bICViVMAg8Ag8IiVCVg");
	var mask_2_graphics_200 = new cjs.Graphics().p("A3vpLICUiVMAg9Ag9IiVCUgArh1bICUiVMAg9Ag8IiVCVg");
	var mask_2_graphics_201 = new cjs.Graphics().p("A3upLICTiVMAg9Ag9IiVCUgArg1bICUiVMAg7Ag8IiTCVg");
	var mask_2_graphics_202 = new cjs.Graphics().p("A3vpLICViVMAg8Ag9IiUCUgArh1bICViVMAg8Ag8IiUCVg");
	var mask_2_graphics_203 = new cjs.Graphics().p("A3vpLICViVMAg8Ag9IiUCUgArh1bICViVMAg8Ag8IiVCVg");
	var mask_2_graphics_204 = new cjs.Graphics().p("A3vpLICUiVMAg9Ag9IiVCUgArh1bICUiVMAg9Ag8IiVCVg");
	var mask_2_graphics_205 = new cjs.Graphics().p("A3upLICTiVMAg8Ag9IiTCUgArg1bICTiVMAg8Ag8IiTCVg");
	var mask_2_graphics_206 = new cjs.Graphics().p("A3vpLICViVMAg8Ag9IiUCUgArh1bICViVMAg8Ag8IiUCVg");
	var mask_2_graphics_207 = new cjs.Graphics().p("A3vpLICViVMAg8Ag9IiUCUgArh1bICUiVMAg9Ag8IiVCVg");
	var mask_2_graphics_208 = new cjs.Graphics().p("A3vpLICUiVMAg9Ag9IiVCUgArh1bICUiVMAg9Ag8IiVCVg");
	var mask_2_graphics_209 = new cjs.Graphics().p("A3upLICTiVMAg8Ag9IiTCUgArg1bICTiVMAg8Ag8IiTCVg");
	var mask_2_graphics_210 = new cjs.Graphics().p("A3vpLICViVMAg8Ag9IiUCUgArh1bICViVMAg8Ag8IiUCVg");
	var mask_2_graphics_211 = new cjs.Graphics().p("A3vpLICViVMAg8Ag9IiVCUgArh1bICUiVMAg9Ag8IiVCVg");
	var mask_2_graphics_212 = new cjs.Graphics().p("A3upLICTiVMAg9Ag9IiUCUgArg1bICUiVMAg7Ag8IiTCVg");
	var mask_2_graphics_213 = new cjs.Graphics().p("A3upLICTiVMAg8Ag9IiTCUgArh1bICUiVMAg8Ag8IiTCVg");
	var mask_2_graphics_214 = new cjs.Graphics().p("A3vpLICViVMAg8Ag9IiUCUgArh1bICViVMAg8Ag8IiUCVg");
	var mask_2_graphics_215 = new cjs.Graphics().p("A3vpLICViVMAg8Ag9IiVCUgArh1bICUiVMAg9Ag8IiVCVg");
	var mask_2_graphics_216 = new cjs.Graphics().p("A3upLICTiVMAg9Ag9IiUCUgArg1bICTiVMAg8Ag8IiTCVg");
	var mask_2_graphics_217 = new cjs.Graphics().p("A3upLICTiVMAg8Ag9IiUCUgArh1bICViVMAg7Ag8IiTCVg");
	var mask_2_graphics_218 = new cjs.Graphics().p("A3vpLICViVMAg8Ag9IiUCUgArh1bICViVMAg8Ag8IiVCVg");
	var mask_2_graphics_219 = new cjs.Graphics().p("A3vpLICUiVMAg9Ag9IiVCUgArh1bICUiVMAg9Ag8IiVCVg");
	var mask_2_graphics_220 = new cjs.Graphics().p("A3upLICTiVMAg9Ag9IiUCUgArg1bICTiVMAg8Ag8IiTCVg");
	var mask_2_graphics_221 = new cjs.Graphics().p("A3upLICTiVMAg8Ag9IiTCUgArh1bICViVMAg7Ag8IiTCVg");
	var mask_2_graphics_222 = new cjs.Graphics().p("A3vpLICViVMAg8Ag9IiUCUgArh1bICViVMAg8Ag8IiVCVg");
	var mask_2_graphics_223 = new cjs.Graphics().p("A3vpLICUiVMAg9Ag9IiVCUgArh1bICUiVMAg9Ag8IiVCVg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(194).to({graphics:mask_2_graphics_194,x:572.7501,y:268.9749}).wait(1).to({graphics:mask_2_graphics_195,x:585.9689,y:258.0817}).wait(1).to({graphics:mask_2_graphics_196,x:599.188,y:247.1886}).wait(1).to({graphics:mask_2_graphics_197,x:612.4068,y:236.2959}).wait(1).to({graphics:mask_2_graphics_198,x:625.626,y:225.4027}).wait(1).to({graphics:mask_2_graphics_199,x:638.8447,y:214.5096}).wait(1).to({graphics:mask_2_graphics_200,x:652.0639,y:203.6164}).wait(1).to({graphics:mask_2_graphics_201,x:665.2827,y:192.7233}).wait(1).to({graphics:mask_2_graphics_202,x:678.5014,y:181.8301}).wait(1).to({graphics:mask_2_graphics_203,x:691.7206,y:170.937}).wait(1).to({graphics:mask_2_graphics_204,x:704.9398,y:160.0438}).wait(1).to({graphics:mask_2_graphics_205,x:718.1586,y:149.1507}).wait(1).to({graphics:mask_2_graphics_206,x:731.3773,y:138.2575}).wait(1).to({graphics:mask_2_graphics_207,x:744.5965,y:127.3648}).wait(1).to({graphics:mask_2_graphics_208,x:757.8157,y:116.4717}).wait(1).to({graphics:mask_2_graphics_209,x:771.0345,y:105.5785}).wait(1).to({graphics:mask_2_graphics_210,x:784.2532,y:94.6854}).wait(1).to({graphics:mask_2_graphics_211,x:797.4724,y:83.7922}).wait(1).to({graphics:mask_2_graphics_212,x:810.6912,y:72.8991}).wait(1).to({graphics:mask_2_graphics_213,x:823.9104,y:62.0059}).wait(1).to({graphics:mask_2_graphics_214,x:837.1292,y:51.1128}).wait(1).to({graphics:mask_2_graphics_215,x:850.3484,y:40.2196}).wait(1).to({graphics:mask_2_graphics_216,x:863.5671,y:29.3265}).wait(1).to({graphics:mask_2_graphics_217,x:876.7863,y:18.4338}).wait(1).to({graphics:mask_2_graphics_218,x:890.005,y:7.5406}).wait(1).to({graphics:mask_2_graphics_219,x:903.2242,y:-3.3525}).wait(1).to({graphics:mask_2_graphics_220,x:916.443,y:-14.2457}).wait(1).to({graphics:mask_2_graphics_221,x:929.6621,y:-25.1388}).wait(1).to({graphics:mask_2_graphics_222,x:942.8809,y:-36.032}).wait(1).to({graphics:mask_2_graphics_223,x:956.1001,y:-46.9251}).wait(1).to({graphics:null,x:0,y:0}).wait(136));

	// Yellow
	this.instance_23 = new lib._1lor_logo_yellow();
	this.instance_23.setTransform(660,5,1.2082,1.2082);
	this.instance_23._off = true;

	var maskedShapeInstanceList = [this.instance_23];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(194).to({_off:false},0).to({_off:true},30).wait(136));

	// valorant
	this.instance_24 = new lib._4valo_logo_white();
	this.instance_24.setTransform(861,185,0.116,0.116);

	this.instance_25 = new lib.valor("synched",0);
	this.instance_25.setTransform(944.55,137.75,1.1967,1.1967);
	var instance_25Filter_4 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_25.filters = [instance_25Filter_4];
	this.instance_25.cache(-91,-78,183,157);

	this.instance_26 = new lib.Tween17("synched",0);
	this.instance_26.setTransform(944.55,137.75);
	this.instance_26._off = true;

	this.instance_27 = new lib.Tween18("synched",0);
	this.instance_27.setTransform(954.25,108.75);

	this.instance_28 = new lib.Tween15("synched",0);
	this.instance_28.setTransform(954.25,108.75);
	this.instance_28._off = true;

	this.instance_29 = new lib.Tween16("synched",0);
	this.instance_29.setTransform(944.55,137.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_25},{t:this.instance_24}]},35).to({state:[{t:this.instance_26}]},205).to({state:[{t:this.instance_27}]},14).to({state:[{t:this.instance_28}]},30).to({state:[{t:this.instance_29}]},15).wait(61));
	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(240).to({_off:false},0).to({_off:true,x:954.25,y:108.75},14).wait(106));
	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(284).to({_off:false},0).to({_off:true,x:944.55,y:137.75},15).wait(61));
	this.timeline.addTween(cjs.Tween.get(instance_25Filter_4).wait(35).to(new cjs.ColorFilter(0.3,0.3,0.3,1,0,0,0,0), 0).wait(120));
	this.instance_26.addEventListener("tick", AdobeAn.handleFilterCache);
	this.instance_29.addEventListener("tick", AdobeAn.handleFilterCache);

	// Mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_254 = new cjs.Graphics().p("A3vpLICViVMAg8Ag9IiUCUgArh1bICViVMAg8Ag8IiUCVg");
	var mask_3_graphics_255 = new cjs.Graphics().p("A3upLICTiVMAg8Ag9IiTCUgArg1bICTiVMAg8Ag8IiTCVg");
	var mask_3_graphics_256 = new cjs.Graphics().p("A3vpLICUiVMAg9Ag9IiVCUgArh1bICUiVMAg9Ag8IiVCVg");
	var mask_3_graphics_257 = new cjs.Graphics().p("A3vpLICViVMAg8Ag9IiUCUgArh1bICUiVMAg9Ag8IiVCVg");
	var mask_3_graphics_258 = new cjs.Graphics().p("A3vpLICViVMAg8Ag9IiUCUgArh1bICViVMAg8Ag8IiUCVg");
	var mask_3_graphics_259 = new cjs.Graphics().p("A3upLICTiVMAg8Ag9IiTCUgArg1bICUiVMAg7Ag8IiTCVg");
	var mask_3_graphics_260 = new cjs.Graphics().p("A3vpLICUiVMAg9Ag9IiVCUgArh1bICUiVMAg9Ag8IiVCVg");
	var mask_3_graphics_261 = new cjs.Graphics().p("A3vpLICViVMAg8Ag9IiVCUgArh1bICViVMAg8Ag8IiVCVg");
	var mask_3_graphics_262 = new cjs.Graphics().p("A3vpLICViVMAg8Ag9IiUCUgArh1bICViVMAg8Ag8IiUCVg");
	var mask_3_graphics_263 = new cjs.Graphics().p("A3upLICTiVMAg8Ag9IiTCUgArg1bICTiVMAg8Ag8IiTCVg");
	var mask_3_graphics_264 = new cjs.Graphics().p("A3vpLICUiVMAg9Ag9IiVCUgArh1bICUiVMAg9Ag8IiVCVg");
	var mask_3_graphics_265 = new cjs.Graphics().p("A3vpLICViVMAg8Ag9IiUCUgArh1bICUiVMAg9Ag8IiVCVg");
	var mask_3_graphics_266 = new cjs.Graphics().p("A3vpLICViVMAg8Ag9IiUCUgArh1bICViVMAg8Ag8IiUCVg");
	var mask_3_graphics_267 = new cjs.Graphics().p("A3upLICTiVMAg8Ag9IiTCUgArg1bICUiVMAg7Ag8IiTCVg");
	var mask_3_graphics_268 = new cjs.Graphics().p("A3vpLICUiVMAg9Ag9IiVCUgArh1bICUiVMAg9Ag8IiVCVg");
	var mask_3_graphics_269 = new cjs.Graphics().p("A3vpLICViVMAg8Ag9IiVCUgArh1bICViVMAg8Ag8IiVCVg");
	var mask_3_graphics_270 = new cjs.Graphics().p("A3vpLICViVMAg8Ag9IiUCUgArh1bICViVMAg8Ag8IiUCVg");
	var mask_3_graphics_271 = new cjs.Graphics().p("A3upLICTiVMAg8Ag9IiTCUgArg1bICUiVMAg7Ag8IiTCVg");
	var mask_3_graphics_272 = new cjs.Graphics().p("A3vpLICUiVMAg8Ag9IiUCUgArh1bICUiVMAg9Ag8IiVCVg");
	var mask_3_graphics_273 = new cjs.Graphics().p("A3vpLICViVMAg7Ag9IiTCUgArh1bICUiVMAg9Ag8IiVCVg");
	var mask_3_graphics_274 = new cjs.Graphics().p("A3vpLICViVMAg8Ag9IiUCUgArh1bICViVMAg8Ag8IiUCVg");
	var mask_3_graphics_275 = new cjs.Graphics().p("A3upLICTiVMAg8Ag9IiUCUgArg1bICTiVMAg8Ag8IiTCVg");
	var mask_3_graphics_276 = new cjs.Graphics().p("A3vpLICUiVMAg9Ag9IiVCUgArh1bICUiVMAg9Ag8IiVCVg");
	var mask_3_graphics_277 = new cjs.Graphics().p("A3vpLICViVMAg8Ag9IiVCUgArh1bICUiVMAg9Ag8IiVCVg");
	var mask_3_graphics_278 = new cjs.Graphics().p("A3vpLICViVMAg8Ag9IiUCUgArh1bICViVMAg8Ag8IiUCVg");
	var mask_3_graphics_279 = new cjs.Graphics().p("A3upLICTiVMAg8Ag9IiUCUgArg1bICTiVMAg8Ag8IiTCVg");
	var mask_3_graphics_280 = new cjs.Graphics().p("A3vpLICUiVMAg9Ag9IiVCUgArh1bICUiVMAg9Ag8IiVCVg");
	var mask_3_graphics_281 = new cjs.Graphics().p("A3vpLICViVMAg8Ag9IiVCUgArh1bICUiVMAg9Ag8IiVCVg");
	var mask_3_graphics_282 = new cjs.Graphics().p("A3vpLICViVMAg8Ag9IiUCUgArh1bICViVMAg8Ag8IiUCVg");
	var mask_3_graphics_283 = new cjs.Graphics().p("A3upLICTiVMAg8Ag9IiTCUgArg1bICUiVMAg7Ag8IiTCVg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(254).to({graphics:mask_3_graphics_254,x:754.8997,y:304.6752}).wait(1).to({graphics:mask_3_graphics_255,x:767.8017,y:291.7733}).wait(1).to({graphics:mask_3_graphics_256,x:780.7036,y:278.8713}).wait(1).to({graphics:mask_3_graphics_257,x:793.6051,y:265.9698}).wait(1).to({graphics:mask_3_graphics_258,x:806.5066,y:253.0683}).wait(1).to({graphics:mask_3_graphics_259,x:819.4086,y:240.1664}).wait(1).to({graphics:mask_3_graphics_260,x:832.3105,y:227.2648}).wait(1).to({graphics:mask_3_graphics_261,x:845.212,y:214.3629}).wait(1).to({graphics:mask_3_graphics_262,x:858.1136,y:201.4614}).wait(1).to({graphics:mask_3_graphics_263,x:871.0155,y:188.5595}).wait(1).to({graphics:mask_3_graphics_264,x:883.9174,y:175.6579}).wait(1).to({graphics:mask_3_graphics_265,x:896.8189,y:162.756}).wait(1).to({graphics:mask_3_graphics_266,x:909.7204,y:149.8545}).wait(1).to({graphics:mask_3_graphics_267,x:922.6223,y:136.9525}).wait(1).to({graphics:mask_3_graphics_268,x:935.5244,y:124.051}).wait(1).to({graphics:mask_3_graphics_269,x:948.4258,y:111.1491}).wait(1).to({graphics:mask_3_graphics_270,x:961.3273,y:98.2476}).wait(1).to({graphics:mask_3_graphics_271,x:974.2293,y:85.3456}).wait(1).to({graphics:mask_3_graphics_272,x:987.1313,y:72.4441}).wait(1).to({graphics:mask_3_graphics_273,x:1000.0327,y:59.5422}).wait(1).to({graphics:mask_3_graphics_274,x:1012.9342,y:46.6407}).wait(1).to({graphics:mask_3_graphics_275,x:1025.8362,y:33.7387}).wait(1).to({graphics:mask_3_graphics_276,x:1038.7381,y:20.8372}).wait(1).to({graphics:mask_3_graphics_277,x:1051.6396,y:7.9353}).wait(1).to({graphics:mask_3_graphics_278,x:1064.5411,y:-4.9662}).wait(1).to({graphics:mask_3_graphics_279,x:1077.4431,y:-17.8682}).wait(1).to({graphics:mask_3_graphics_280,x:1090.345,y:-30.7697}).wait(1).to({graphics:mask_3_graphics_281,x:1103.2465,y:-43.6716}).wait(1).to({graphics:mask_3_graphics_282,x:1116.148,y:-56.5731}).wait(1).to({graphics:mask_3_graphics_283,x:1129.05,y:-69.4751}).wait(1).to({graphics:null,x:0,y:0}).wait(76));

	// Yellow
	this.instance_30 = new lib._4valo_logo_yellow();
	this.instance_30.setTransform(835,8,1.1976,1.2013);
	this.instance_30._off = true;

	var maskedShapeInstanceList = [this.instance_30];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(254).to({_off:false},0).to({_off:true},30).wait(76));

	// bkg
	this.instance_31 = new lib.bkg();
	this.instance_31.setTransform(0,0,0.3636,0.3634);

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(360));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance_4, startFrame:32, endFrame:32, x:-90, y:-78, w:180, h:156});
	this.filterCacheList.push({instance: this.instance_4, startFrame:0, endFrame:0, x:-90, y:-78, w:180, h:156});
	this.filterCacheList.push({instance: this.instance_11, startFrame:33, endFrame:33, x:-93, y:-78, w:187, h:157});
	this.filterCacheList.push({instance: this.instance_11, startFrame:0, endFrame:0, x:-93, y:-78, w:187, h:157});
	this.filterCacheList.push({instance: this.instance_18, startFrame:34, endFrame:34, x:-89, y:-78, w:179, h:157});
	this.filterCacheList.push({instance: this.instance_18, startFrame:0, endFrame:0, x:-89, y:-78, w:179, h:157});
	this.filterCacheList.push({instance: this.instance_25, startFrame:35, endFrame:35, x:-91, y:-78, w:183, h:157});
	this.filterCacheList.push({instance: this.instance_25, startFrame:0, endFrame:0, x:-91, y:-78, w:183, h:157});
	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = rect = new cjs.Rectangle(550,125,1100,250);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-593.9,-295.3,2244,1109.6), new cjs.Rectangle(-532.2,-295.2,2182.2,1109.5), new cjs.Rectangle(-470.4,-295.2,2120.4,1109.5), new cjs.Rectangle(-408.6,-295.2,2058.6,1109.5), new cjs.Rectangle(-346.8,-295.2,1996.8,1109.5), new cjs.Rectangle(-285,-295.2,1935.1,1109.5), new cjs.Rectangle(-223.3,-295.2,1873.3,1109.5), new cjs.Rectangle(-161.5,-295.2,1811.5,1109.5), new cjs.Rectangle(-99.7,-295.2,1749.7,1109.5), new cjs.Rectangle(-37.9,-295.2,1687.9,1109.5), new cjs.Rectangle(23.8,-295.2,1626.2,1109.5), new cjs.Rectangle(85.6,-295.2,1564.4,1109.5), new cjs.Rectangle(147.4,-295.2,1502.6,1109.5), new cjs.Rectangle(209.2,-295.2,1440.9,1109.5), new cjs.Rectangle(270.9,-295.2,1379.1,1109.5), new cjs.Rectangle(332.8,-295.2,1317.3,1109.5), new cjs.Rectangle(394.5,-295.2,1255.5,1109.5), new cjs.Rectangle(456.3,-295.2,1193.8,1109.5), new cjs.Rectangle(518.1,-295.2,1132,1109.5), new cjs.Rectangle(550,-295.2,1139.8,1109.5), new cjs.Rectangle(550,-295.2,1201.6,1109.5), new cjs.Rectangle(550,-295.2,1263.3,1109.5), new cjs.Rectangle(550,-295.2,1325.1,1109.5), new cjs.Rectangle(550,-295.2,1386.9,1109.5), new cjs.Rectangle(550,-295.2,1448.7,1109.5), new cjs.Rectangle(550,-295.2,1510.5,1109.5), new cjs.Rectangle(550,-295.2,1572.2,1109.5), new cjs.Rectangle(550,-295.2,1634,1109.5), new cjs.Rectangle(550,-295.2,1695.8,1109.5), new cjs.Rectangle(550,-295.2,1757.6,1109.5), new cjs.Rectangle(550,-295.2,1819.3,1109.5), new cjs.Rectangle(550,-295.2,1881.2,1109.5), new cjs.Rectangle(550,-295.2,1942.9,1109.5), new cjs.Rectangle(550,-295.2,2004.7,1109.5), new cjs.Rectangle(550,-295.2,2066.5,1109.5), new cjs.Rectangle(550,-295.2,2128.3,1109.5), new cjs.Rectangle(550,-295.2,2190.1,1109.5), new cjs.Rectangle(550,-295.3,2252,1109.6), rect=new cjs.Rectangle(550,125,1100,250), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(550,-295.3,2252,1109.6), rect, new cjs.Rectangle(550,-295.2,2185.1,1109.5), new cjs.Rectangle(550,-295.2,2118.5,1109.5), new cjs.Rectangle(550,-295.2,2051.8,1109.5), new cjs.Rectangle(550,-295.2,1985.2,1109.5), new cjs.Rectangle(550,-295.2,1918.5,1109.5), new cjs.Rectangle(550,-295.2,1851.9,1109.5), new cjs.Rectangle(550,-295.2,1785.2,1109.5), new cjs.Rectangle(550,-295.2,1718.6,1109.5), new cjs.Rectangle(550,-295.2,1651.9,1109.5), new cjs.Rectangle(550,-295.2,1585.2,1109.5), new cjs.Rectangle(550,-295.2,1518.5,1109.5), new cjs.Rectangle(550,-295.2,1451.9,1109.5), new cjs.Rectangle(550,-295.2,1385.2,1109.5), new cjs.Rectangle(550,-295.2,1318.6,1109.5), new cjs.Rectangle(550,-295.2,1251.9,1109.5), new cjs.Rectangle(550,-295.2,1185.2,1109.5), new cjs.Rectangle(550,-295.2,1118.6,1109.5), new cjs.Rectangle(492,-295.2,1158,1109.5), new cjs.Rectangle(425.4,-295.2,1224.7,1109.5), new cjs.Rectangle(358.7,-295.2,1291.4,1109.5), new cjs.Rectangle(292,-295.2,1358,1109.5), new cjs.Rectangle(225.4,-295.2,1424.7,1109.5), new cjs.Rectangle(158.7,-295.2,1491.3,1109.5), new cjs.Rectangle(92,-295.2,1558,1109.5), new cjs.Rectangle(25.4,-295.2,1624.7,1109.5), new cjs.Rectangle(-41.2,-295.2,1691.3,1109.5), new cjs.Rectangle(-107.9,-295.2,1757.9,1109.5), new cjs.Rectangle(-174.6,-295.2,1824.6,1109.5), new cjs.Rectangle(-241.2,-295.2,1891.3,1109.5), new cjs.Rectangle(-307.9,-295.2,1957.9,1109.5), new cjs.Rectangle(-374.5,-295.2,2024.6,1109.5), new cjs.Rectangle(-441.2,-295.2,2091.3,1109.5), new cjs.Rectangle(-507.8,-295.2,2157.9,1109.5), new cjs.Rectangle(-574.5,-295.3,2224.6,1109.6), rect=new cjs.Rectangle(550,125,1100,250), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];
// library properties:
lib.properties = {
	id: '2C32FBD83E72F247BCEF073048B6651F',
	width: 1100,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/_1lor.png", id:"_1lor"},
		{src:"images/_1lor_logo_white.png", id:"_1lor_logo_white"},
		{src:"images/_1lor_logo_yellow.png", id:"_1lor_logo_yellow"},
		{src:"images/_2tft.png", id:"_2tft"},
		{src:"images/_2tft_logo_white.png", id:"_2tft_logo_white"},
		{src:"images/_2tft_logo_yellow.png", id:"_2tft_logo_yellow"},
		{src:"images/_3lol.png", id:"_3lol"},
		{src:"images/_3lol_logo_white.png", id:"_3lol_logo_white"},
		{src:"images/_3lol_logo_yellow.png", id:"_3lol_logo_yellow"},
		{src:"images/_4valo.png", id:"_4valo"},
		{src:"images/_4valo_logo_white.png", id:"_4valo_logo_white"},
		{src:"images/_4valo_logo_yellow.png", id:"_4valo_logo_yellow"},
		{src:"images/bkg.png", id:"bkg"},
		{src:"images/gloweffect.png", id:"gloweffect"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['2C32FBD83E72F247BCEF073048B6651F'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;