
<script lang="ts">
    export let src: string;
</script>

<style>
    #body {
        display: grid;

        background-color: var(--bg-color);
        color: var(--font-color);

        grid-template-columns: 4fr [desc] 5fr [img-start] 5fr 4fr [img-end];
        justify-content: center;
    }

    #description {
        padding: 160px 0 160px 0;
        grid-area: desc;
    }

    #image {
        grid-area: img;
        padding-left: 80px;
        align-self: center;
    }

    #image > img {
        width: 800px;
    }

    @media screen and (max-width: 1800px) {
        #body {
            grid-template-columns: 2fr [desc] 5fr [img-start] 5fr 2fr [img-end];
        }

        #image > img {
            width: clamp(200px, 40vw, 600px);
        }
    }

    @media screen and (max-width: 1200px) {
        #body {
            grid-template-columns: 1fr [desc] 5fr [img-start] 5fr 1fr [img-end];
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

<div id="body">
    <div id="description">
        <slot></slot>
    </div>
    <div id="image">
        <img {src} alt="">
    </div>
</div>