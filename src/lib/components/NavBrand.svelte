
<script lang="ts">
    import { base } from "$app/paths";
</script>

<style>
    #body {
        width: max-content;
        height: max-content;
        background: black;

        color: white;
        font-size: clamp(1rem, 6.9vw, 1.8rem);
        font-family: Zilla Slab;
        font-weight: 600;
        text-decoration: none;

        grid-column: 1;
        justify-self: right;
        align-self: center;

        padding: 0 6px 2px 4px;
    }

    @media (prefers-color-scheme: dark) {
        #body {
            background: white;
            color: black;
        }
    }

    @media screen and (max-width: 800px) {
        #body {
            grid-column: 2;
            justify-self: center;
        }
    }

</style>

<a id="body" href="{base}/">
    Fight. Against. Bullying.
</a>