<div class="headline">
    <slot name='headline'>No headline provided.</slot>
</div>
<div>
    <slot name='image'></slot>
</div>
<div class="deck text-3xl pt-2 pb-2">
    <slot name='deck'></slot>
</div>
<div class="text-base body-style">
    <slot name='content'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac sapien ligula.
        Pellentesque aliquet id orci vel aliquam. Fusce egestas tincidunt lacus, vel gravida enim
        imperdiet in. Quisque eget rutrum eros. Nullam ac velit sapien. Nulla dignissim justo at
        massa iaculis dignissim. Integer eleifend semper metus in viverra. Suspendisse tempor in
        enim vitae finibus. Cras dapibus faucibus varius. In in viverra odio. Donec id tellus eget
        mauris congue congue. Aliquam erat volutpat. Proin tempor massa vitae sapien maximus, at
        sagittis nisi porta. Proin eu suscipit mi, ac fringilla metus. Fusce sed urna non felis
        lobortis venenatis. Integer risus enim, aliquam nec erat vel, maximus auctor velit. Aliquam
        tincidunt tellus nec tortor lobortis, non eleifend arcu pellentesque. Fusce varius justo at
        congue convallis. Donec neque quam, placerat id condimentum ut, blandit eu nisi. Etiam
        pharetra consequat est, ut condimentum neque pellentesque feugiat. Aliquam tellus turpis,
        mollis vel facilisis vitae, imperdiet vel mauris. Proin sollicitudin purus eget leo
        hendrerit, quis ultricies metus condimentum. Nunc gravida vitae quam sit amet molestie.
        Proin eu sodales nunc. Curabitur vehicula facilisis gravida.
    </slot>
</div>

<style lang="postcss">
	.body-style {
		font-family: 'Times New Roman', Times, serif;
		text-align: justify;
	}
    .headline{
		font-family: "Roboto Serif";
		font-optical-sizing: auto;
		font-variation-settings:
			"wght" 700,
			"opsz" 100,
			"ital" 0,
			"wdth" 50,
			"GRAD" 10;
	}
    .deck{
		font-family: "Roboto Serif";
		font-optical-sizing: auto;
		font-variation-settings:
			"wght" 100,
			"opsz" 100,
			"ital" 0,
			"wdth" 50,
			"GRAD" 80;
	}
</style>
