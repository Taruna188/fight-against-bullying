
<style>
    div {
        display: grid;

        grid-template-columns: var(--lbox-size, 5fr) var(--rbox-size, 5fr);
        gap: var(--gap, 4cm);
    }

    @media screen and (max-width: 1400px) {
        div {
            gap: var(--laptop-gap, 4cm);
        }
    }

    @media screen and (max-width: 900px) {
        div {
            grid-template-rows: var(--mobile-lbox-size, 5fr) var(--mobile-rbox-size, 5fr);
            grid-template-columns: none;
            gap: var(--mobile-gap, 2cm);
        }
    }
</style>

<div>
    <slot></slot>
</div>