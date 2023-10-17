<script>
    import Article from "$lib/components/Article.svelte";
    import Background from "$lib/components/Background.svelte";
    import VideoArticle from "$lib/components/VideoArticle.svelte";

    import TitlePage from "$lib/components/TitlePage.svelte";
    import TopBottomPad from "$lib/components/TopBottomPad.svelte";
    import CloudBackground from "$lib/assets/cloud background.jpeg";
    import EvenBox from "$lib/components/EvenBox.svelte";
    import GridBox from "$lib/components/GridBox.svelte";
    import TextMedium from "$lib/components/TextMedium.svelte";

</script>

<style>
    @media screen and (max-width: 1400px) {
        iframe {
            width: 360px;
            height: 240px;
        }
    }
</style>

<Background
    image={CloudBackground}
    size="cover">
    <Article>
        <TopBottomPad>
            <TitlePage>
                Hasil Wawancara
            </TitlePage>
        </TopBottomPad>
    </Article>
</Background>

<Background>
    <Article --bg-color="#e7331a" --font-color="white">
        <TopBottomPad>
            <EvenBox --lbox-size="3fr" --mobile-rbox-size="2fr" --laptop-gap="2.6cm" --mobile-gap="2px">
                <GridBox --justify="center">
                    <iframe title="opening video wawancara" src="https://drive.google.com/file/d/1UboIWXaCDyKj1ZZxBqJInNHDYuwe_la6/preview" width="740" height="480" allow="autoplay" allowfullscreen></iframe>
                </GridBox>
                <GridBox --align="center">
                    <h1>Opening Wawancara</h1>
                    <TextMedium>
                        Video wawancara opening. Anggota Kelompok, Azka Nuran, menjelaskan pengertian bullying, bentuk-bentuk bullying, sebab dan akibat bullying.
                    </TextMedium>
                </GridBox>
            </EvenBox>
        </TopBottomPad>
    </Article>
</Background>

<Background>
    <Article --bg-color="#de9e46" --font-color="white">
        <TopBottomPad>
            <EvenBox --lbox-size="3fr" --mobile-rbox-size="3fr" --laptop-gap="2.6cm" --mobile-gap="2px">
                <GridBox --align="center">
                    <h1>Wawancara Pak Reja</h1>
                    <TextMedium>
                        Guru BK SMA Dewi Sartika, Pak Reja sebagai narasumber diwawancarai oleh Azka Nuran. Wawancara ini memperbahasa topik-topik seperti laporan kasus pembullyian, tugas dan kordinasi guru BK dalam menemukan masalah pembullyian, pelatihan khusus, dan lain lainnya.
                    </TextMedium>
                </GridBox>
                <GridBox --justify="center">
                    <iframe title="wawancara pak reja" src="https://drive.google.com/file/d/1Clqilnzv4wEsxLuAQ4LtrIFFMwOS-Zr3/preview" width="740" height="480" allow="autoplay" allowfullscreen></iframe>
                </GridBox>
            </EvenBox>
        </TopBottomPad>
    </Article>
</Background>

<Background>
    <Article --bg-color="#cd4f41" --font-color="white">
        <TopBottomPad>
            <EvenBox --lbox-size="3fr" --mobile-rbox-size="3fr" --laptop-gap="2.6cm" --mobile-gap="2px">
                <GridBox --align="center">
                    <h1>Wawancara Taruna Prasetya</h1>
                    <TextMedium>
                        Siswa Kelas XI SMA Dewi Sartika, Taruna Prasetya sebagai korban pembullyian diwawancarai oleh Rifat Agung Mulia. Wawancara ini memperbahas pengalaman bagaimana sebagai korban pembullyian.
                    </TextMedium>
                </GridBox>
                <GridBox --justify="center">
                    <iframe title="wawancara taruna prasetya" src="https://drive.google.com/file/d/1RPkurZm7bJRmBtwqSl4fDvYa8xIq46OH/preview" width="740" height="480" allow="autoplay" allowfullscreen></iframe>
                </GridBox>
            </EvenBox>
        </TopBottomPad>
    </Article>
</Background>