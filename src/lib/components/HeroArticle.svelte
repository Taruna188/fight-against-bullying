<script>
    import Article from "./Article.svelte";

</script>

<style>
    div {
        display: grid;

        grid-template-columns: 6fr 5fr;
        justify-items: center;
        padding: 160px 0;
    }

    .hero-article-pos + :global(*) {
        background-repeat: no-repeat;        
        background-image: url("$lib/assets/sad kid in classroom.png");
        background-size: 1800px;
        background-position: center -100px;
        background-color: white;
    }

    @media screen and (max-width: 800px) {
        div {
            grid-template-columns: auto;
        }
    }
    
</style>

<span class="hero-article-pos"></span>

<Article>
    <div>
        <slot></slot>
    </div>
</Article>