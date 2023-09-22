<script>
    import ShowArticle from "./ShowArticle.svelte";

</script>

<style>
    div {
        width: max-content;
        background-color: black;
        padding: 0 6px 2px 4px;

        color: white;
        font-size: 80px;
        font-family: Zilla Slab;
        font-weight: 600;
    }

    @media screen and (max-width: 800px) {
        div {
            font-size: 48px;
            text-align: center;
        }
    }
</style>

<ShowArticle --bg-color="blueviolet">
    <div>
        <slot></slot>
    </div>
</ShowArticle>