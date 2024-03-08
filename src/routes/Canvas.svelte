<script lang="ts">
	import P5 from 'p5-svelte';
	import type p5 from 'p5';

	type design = {
		power: number;
		offset: number;
		size: number;
		minR: number;
		multiplier: number;
		voff: number;
		bound: boolean;
		col: number;
	};

	const sketch = (p5: p5) => {
		let c = 0;
		let ps: design[] = [];
		let cs: p5.Color[] = [];

		function pattern(p: design) {
			// p5.fill(p.col);
			// p5.stroke(255);
			p5.fill(0);
			p5.stroke(170);
			p5.strokeWeight(1);
			p5.beginShape();
			for (let i = 0; i <= 360; i += 1) {
				let r = f(i, p);
				let x = r * p5.cos(i);
				let y = r * p5.sin(i);
				p5.vertex(x, y);
			}
			p5.endShape(p5.CLOSE);
		}
		function t(
			p: number,
			off: number,
			s: number,
			mr: number,
			x: number,
			v: number,
			b: boolean,
			c: number
		) {
			return {
				power: p,
				offset: off,
				size: s,
				minR: mr,
				multiplier: x,
				voff: v,
				bound: b,
				col: c
			};
		}
		function f(i: number, p: design) {
			let a =
				(p5.pow(p5.sin(i * p.multiplier + p.offset + -c /** p.multiplier*/), p.power) - p.voff) *
					p.size +
				p.minR;
			return a;
		}
		function createRangoli(n: number) {
			let MR = 0;
			for (let i = 0; i < n; i++) {
				if (p5.random() < 0.1 && i > 1) {
					let a = ps[i - 1];
					console.log(i, a);
					a.size -= 10;
					ps.push(a);
				} else {
					let x = p5.floor(p5.random(2, 6)) * 4;
					let p = p5.random() > 0.75 ? 0 : p5.floor(p5.random(1, 5));
					let off = p5.random() < 0.5 ? 0 : 180 / x;
					//let s = p5.random(10, 100) / ((i+1));
					let s = p5.random(10, 100) / (n);
					let v = p5.random(0, 1);
					let mr = p5.random(5, 25) + s + v;
					MR += mr;
					ps.push(t(p, off, s, mr + MR, x, v, p5.random() < 0.1 ? true : false, p5.random(cs)));
				}
				//p,off,s,mr,x
			}
			ps.sort((a, b) => {
				if (a.minR < b.minR) {
					return 1;
				} else if (a.minR > b.minR) {
					return -1;
				} else {
					return 0;
				}
			});
		}

		p5.setup = () => {
			p5.createCanvas(p5.windowWidth, p5.windowHeight);
			p5.angleMode(p5.DEGREES);
			cs = [
				p5.color(232, 123, 123),
				p5.color(232, 123, 123),
				p5.color(232, 123, 123),
				//p5.color(245, 192, 69),
				p5.color(1, 41, 95),
				p5.color(1, 41, 95),
				p5.color(214, 11, 51),
				p5.color(214, 11, 51),
				p5.color(214, 11, 51),
				p5.color(214, 11, 51)
			];
			//console.log(sin(45));
			let n = 10;
			createRangoli(n);
			console.log(ps);
		};

		p5.draw = () => {
			p5.background(0);
			p5.translate(p5.width / 2, p5.height / 2);
			/*let p = t(5, 0, 50, 100, 10);
  pattern(p)*/
			for (let i = 0; i < ps.length; i++) {
				//console.log(ps[i]);
				if (ps[i].bound) {
					p5.circle(0, 0, ps[i].size + ps[i].minR + ps[i].multiplier);
				}
				pattern(ps[i]);
			}
			c += 2;
		};

		p5.keyPressed = () => {
			if (p5.keyCode === p5.ENTER) {
				ps = [];
				createRangoli(10);
			}
		};
		p5.windowResized = () => {
			p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
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
