<script lang="ts">
	import P5 from 'p5-svelte';
	import type p5 from 'p5';
	import type { Graphics } from 'p5';

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
		let imgs: p5.Image[] = [];

		function pattern(p: design, img: Graphics) {
			// p5.fill(p.col);
			// p5.stroke(255);
			img.fill(0);
			img.stroke(170);
			img.strokeWeight(1);
			img.beginShape();
			for (let i = 0; i <= 360; i += 1) {
				let r = f(i, p);
				let x = r * p5.cos(i);
				let y = r * p5.sin(i);
				img.vertex(x, y);
			}
			img.endShape(p5.CLOSE);
			return img;
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
				(p5.pow(p5.sin(i * p.multiplier + p.offset + -c), p.power) - p.voff) *
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
					let s = p5.random(10, 100) / n;
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
			for (let i = 0; i < ps.length; i++) {
				//console.log(ps[i]);
				let img = p5.createGraphics(p5.width, p5.height);
				img.translate(p5.width / 2, p5.height / 2);
				if (ps[i].bound) {
					img.circle(0, 0, ps[i].size + ps[i].minR + ps[i].multiplier);
				}
				img = pattern(ps[i], img);
				let IMG = p5.createImage(p5.width, p5.height);
				IMG.copy(img, 0, 0, img.width, img.height, 0, 0, img.width, img.height);
				imgs.push(IMG);
			}
		};

		p5.draw = () => {
			p5.background(0);
			p5.translate(p5.width / 2, p5.height / 2);
			p5.imageMode(p5.CENTER);
			for (let i = 0; i < imgs.length; i++) {
				//console.log(ps[i]);
				p5.rotate(c*ps[i].voff);
				p5.image(imgs[i],0,0)
				p5.rotate(-c*ps[i].voff);
				
			}
			c += 0.1;
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
