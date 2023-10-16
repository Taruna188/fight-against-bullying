
<script lang="ts">
    export let mobileDisplay: boolean = false;
</script>

<style>
    div {
        display: grid;

        grid-column: 2;
        grid-auto-flow: column;
        justify-self: start;
        gap: clamp(10px, 40px, 2vw);
    }

    @media screen and (max-width: 900px) {
        div:not(.mobile-display) {
            display: none;
        }

        div {
            position: absolute;
            top: 80px;
            z-index: 10;
            background: #22272e;
            width: 300px;
            grid-auto-flow: row;
            border-radius: 18px;
        }
    }

</style>

<div class:mobile-display={mobileDisplay}>
    <slot></slot>
</div>