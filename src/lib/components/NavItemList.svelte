
<style>
    div {
        display: grid;

        grid-column: 2;
        grid-auto-flow: column;
        justify-self: start;
        gap: clamp(10px, 40px, 2vw);
    }

    @media screen and (max-width: 800px) {
        div {
            display: none;
        }
    }

</style>

<div>
    <slot></slot>
</div>