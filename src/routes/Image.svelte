<script lang="ts">
    export let src:string;
    export let alt:string='Sup.';
</script>
<img
        {src}
        {alt}
        class="sepia hover:sepia-0 transition duration-500 w-1/2 contrast-75 hover:contrast-100 border border-black float-left p-1 m-2"
    />