
<style>
    div {
        font-family: var(--font-family);
        font-size: clamp(var(--min-font-size, 1.4rem), 4vw, var(--max-font-size, 2.7rem));
        font-weight: 600;
        padding: 7px 0 7px 10px;
        color: var(--font-color);
    }

    @media screen and (max-width: 800px) {
        div {
            background-color: black;
        }
    }
</style>

<div>
    <slot></slot>
</div>