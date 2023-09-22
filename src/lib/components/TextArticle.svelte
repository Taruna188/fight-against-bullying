<script>
    import Article from "./Article.svelte";

</script>

<style>
    div {
        padding: 100px 0;
    }

    @media screen and (max-width: 800px) {
        div {
            padding: 60px 0;
        }
    }
</style>

<Article>
    <div>
        <slot></slot>
    </div>
</Article>