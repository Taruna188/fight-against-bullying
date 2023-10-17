
<script lang="ts">
    export let href: string = "";
</script>

<style>
    #body {
        all: unset;
        cursor: pointer;
    }

    #body:hover > #underline {
        height: 6px;
        border-radius: 0;
    }

    #underline {
        height: 4px;
        border-radius: 4px;
        background: violet;
        transition: height 0.2s, border-radius 0.2s;
    }

    @media screen and (max-width: 900px) {
        #underline {
            display: none;
        }
    }
</style>

<a id="body" {href}>
    <slot></slot>
    <div id="underline"></div>
</a>