<script>
    import Article from "$lib/components/Article.svelte";
    import Background from "$lib/components/Background.svelte";
    import TitlePage from "$lib/components/TitlePage.svelte";
    import TopBottomPad from "$lib/components/TopBottomPad.svelte";
    import CloudBackground from "$lib/assets/cloud background.jpeg";

</script>

<Background
    image={CloudBackground}
    size="cover">
    <Article>
        <TopBottomPad>
            <TitlePage>
                Perpustakaan
            </TitlePage>
        </TopBottomPad>
    </Article>
</Background>

<slot></slot>