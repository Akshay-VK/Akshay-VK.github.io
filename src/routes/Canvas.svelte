<script>
	import P5  from 'p5-svelte';
	
  
	const sketch = (/** @type {{ setup: () => void; createCanvas: (arg0: number, arg1: number) => void; draw: () => void; ellipse: (arg0: number, arg1: number, arg2: number, arg3: number) => void; width: number; height: number; }} */ p5) => {
	  p5.setup = () => {
		p5.createCanvas(p5.windowWidth, p5.windowHeight);
	  };
  
	  p5.draw = () => {
		p5.background(0,0,0,10);
		p5.noStroke();
		p5.fill(25)
		let s=Math.abs(Math.sin(p5.frameCount/50))*200+100;
		p5.ellipse(p5.width / 2, p5.height / 2-75, s, s);
	  };
	};
  </script>
  <P5 {sketch} />
  <style>
	canvas {
		position: fixed;
		top: 0;
		left: 0;
		z-index: -1;
		width: 100vw;
		height: 100vh;
	}
  </style>