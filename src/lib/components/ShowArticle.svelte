<script>
    import Article from "./Article.svelte";
</script>

<style>
    div {
        padding: 150px 0;
    }
</style>

<Article>
    <div>
        <slot></slot>
    </div>
</Article>