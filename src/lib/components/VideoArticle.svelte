
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

    #video-container {
        padding: 0 0 0 80px;
        grid-column: 3 / 5;
        align-self: center;
    }

    .reverse #video-container {
        padding: 0 80px 0 0;
        grid-row: 1;
        grid-column: 1 / 3;
        justify-self: right;
    }

    #video-container > video {
        width: var(--width, 800px);
        height: var(--height, auto);
    }


    @media screen and (max-width: 1800px) {
        #body {
            grid-template-columns: 2fr 5fr 5fr 2fr;
        }

        #video-container > video {
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
        
        #video-container, #description,
        .reverse #video-container, .reverse #description {
            grid-column: 1;
        }

        #video-container, .reverse #video-container {
            grid-row: 1;
            justify-self: center;
            padding: 40px 0 0;
        }

        #video-container > video {
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
    <div id="video-container">
        <!-- svelte-ignore a11y-media-has-caption -->
        <video {src}></video>
    </div>
</div>