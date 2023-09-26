
<script lang="ts">
    import { onMount } from "svelte";

    export let src: string;
    export let reverse = false;
</script>

<style>
    #body {
        display: grid;

        background-color: var(--bg-color);
        color: var(--font-color);

        grid-template-columns: 4fr 5fr 5fr 4fr;
    }

    #description {
        padding: 160px 0 160px 0;
        grid-column: 2;
    }

    .reverse #description {
        grid-column: 3;
    }

    #image {
        padding: 0 0 0 80px;
        grid-column: 3 / 5;
        align-self: center;
    }

    .reverse #image {
        padding: 0 80px 0 0;
        grid-row: 1;
        grid-column: 1 / 3;
        justify-self: right;
    }

    #image > img {
        width: var(--image-width, 800px);
    }

    @media screen and (max-width: 1800px) {
        #body {
            grid-template-columns: 2fr 5fr 5fr 2fr;
        }

        #image > img {
            width: clamp(200px, 40vw, 600px);
        }
    }

    @media screen and (max-width: 1200px) {
        #body {
            grid-template-columns: 1fr 5fr 5fr 1fr;
        }
    }

    @media screen and (max-width: 900px) {
        #body {
            grid-template-columns: none;
        }

        #image {
            grid-row: 1;
            justify-self: center;
            padding: 40px 0 0;
        }

        #image > img {
            width: clamp(260px, 90vw, 600px);
        }

        #description {
            grid-row: 2;
            padding: 40px clamp(30px, 4vw, 80px);
        }
    }
</style>

<div id="body" class:reverse={reverse}>
    <div id="description">
        <slot></slot>
    </div>
    <div id="image">
        <img {src} alt="">
    </div>
</div>