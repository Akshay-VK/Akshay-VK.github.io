<script lang="ts">
	import { base } from '$app/paths';
    export let text:string="Continued";
    export let to:string="/about";
</script>

<a  href="{base}{to}" class="font-extrabold hover:underline underline-offset-2 visited:text-black text-black hover:text-black">{text} ▶</a>