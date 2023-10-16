
<script lang="ts">
    import CloudBackground from "$lib/assets/cloud background.jpeg";

    import Article from "$lib/components/Article.svelte";
    import TitlePage from "$lib/components/TitlePage.svelte";
    import TextArticle from "$lib/components/TextArticle.svelte";
    import TopBottomPad from "$lib/components/TopBottomPad.svelte";
    import PersonCard from "$lib/components/PersonCard.svelte";
    import PersonList from "$lib/components/PersonCardList.svelte";
    import Background from "$lib/components/Background.svelte";
</script>

<Background
    image={CloudBackground}
    size="cover">
    <Article>
        <TopBottomPad>
            <TitlePage>
                Tokoh Wawancara
            </TitlePage>
        </TopBottomPad>
    </Article>
</Background>

<TextArticle>
    <h1>Pewawancara</h1>
    <PersonList>
        <PersonCard name="Azka Nuran Ardiansyah" classAssigned="Kelas XI-3"></PersonCard>
        <PersonCard name="Rifat Agung Mulia" classAssigned="Kelas XI-3"></PersonCard>
        <!-- <PersonCard name="Yatna Firdaus Hidayat" classAssigned="Kelas XI-3"></PersonCard> -->
    </PersonList>
    <h1>Wawancara</h1>
    <PersonList>
        <PersonCard name="Pak Reja" classAssigned="Narasumber, Guru BK"></PersonCard>
        <PersonCard name="Taruna Prasetya" classAssigned="Korban Bully, Kelas XI-3"></PersonCard>
    </PersonList>
</TextArticle>