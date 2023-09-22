
<script lang="ts">
    import Article from "$lib/components/Article.svelte";
    import HeroArticle from "$lib/components/HeroArticle.svelte";
    import HeroWordmark from "$lib/components/HeroWordmark.svelte";
    import HeroLogo from "$lib/components/HeroLogo.svelte";
    import HeroSection from "$lib/components/HeroSection.svelte";
    import TitleArticle from "$lib/components/TitleArticle.svelte";
    import TextArticle from "$lib/components/TextArticle.svelte";
</script>

<TitleArticle>
    People Involved
</TitleArticle>

<style>
    ul {
        line-height: 40px;
        font-size: larger;
    }
</style>

<TextArticle>
    <h1>Pewawancara</h1>
    <ul>
        <li>Azka Nuran Ardiansyah</li>
        <li>Rayhan Setiawan</li>
        <li>Rifat Agung Mulia</li>
        <li>Taruna Prasetya</li>
        <li>Yatna Firdaus Hidayat</li>
    </ul>
    <h1>Wawancara - Narasumber</h1>
    <ul>
        <li>Pak Reja, Guru BK</li>
    </ul>
    <h1>Wawancara - Korban Pembullyian</h1>
    <ul>
        <li>Taruna Prasetya</li>
    </ul>
</TextArticle>