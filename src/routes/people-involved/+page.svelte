
<script lang="ts">
    import CloudBackground from "$lib/assets/cloud background.jpeg";

    import Article from "$lib/components/Article.svelte";
    import TitlePage from "$lib/components/TitlePage.svelte";
    import TextArticle from "$lib/components/TextArticle.svelte";
    import TopBottomPad from "$lib/components/TopBottomPad.svelte";
    import PersonCard from "$lib/components/PersonCard.svelte";
    import PersonList from "$lib/components/PersonList.svelte";
    import Background from "$lib/components/Background.svelte";
</script>

<Background
    image={CloudBackground}
    size="cover">
    <Article>
        <TopBottomPad>
            <TitlePage>
                People Involved
            </TitlePage>
        </TopBottomPad>
    </Article>
</Background>

<TextArticle>
    <h1>Pewawancara</h1>
    <PersonList>
        <PersonCard name="Azka Nuran Ardiansyah" classAssigned="Siswa, Kelas XI-3"></PersonCard>
        <PersonCard name="Rayhan Setiawan" classAssigned="Siswa, Kelas XI-1"></PersonCard>
        <PersonCard name="Rifat Agung Mulia" classAssigned="Siswa, Kelas XI-3"></PersonCard>
        <PersonCard name="Taruna Prasetya" classAssigned="Siswa, Kelas XI-3"></PersonCard>
        <PersonCard name="Yatna Firdaus Hidayat" classAssigned="Siswa, Kelas XI-3"></PersonCard>
    </PersonList>
    <h1>Wawancara - Narasumber</h1>
    <PersonList>
        <PersonCard name="Pak Reja" classAssigned="Guru BK"></PersonCard>
    </PersonList>
    <h1>Wawancara - Korban Pembullyian</h1>
    <PersonList>
        <PersonCard name="Taruna Prasetya" classAssigned="Siswa, Kelas XI-3"></PersonCard>
    </PersonList>
</TextArticle>