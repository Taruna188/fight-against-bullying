
<script lang="ts">
    import ChalkboardBackground from "$lib/assets/chalkboard background.jpg";
    
    import EvenBox from "$lib/components/EvenBox.svelte";
    import TopBottomPad from "$lib/components/TopBottomPad.svelte";
    import Brand from "$lib/components/Brand.svelte";
    import ChalkText from "$lib/components/ChalkText.svelte";
    import HMargin from "$lib/components/HMargin.svelte";
    import Article from "$lib/components/Article.svelte";
    import MediumTextBody from "$lib/components/TextMedium.svelte";
    import Background from "$lib/components/Background.svelte";
    import PersonCard from "$lib/components/PersonCard.svelte";
    import PersonSection from "$lib/components/PersonSection.svelte";
    import PersonSectionList from "$lib/components/PersonSectionList.svelte";

    import AzkaA from "$lib/assets/azka-nuran-ardiansyah.jpg";
    import RifatA from "$lib/assets/rifat-agung-mulia.jpg";
    import YatnaF from "$lib/assets/yatna-firdaus-hidayat.jpg";
    import RayhanS from "$lib/assets/rayhan-setiawan.jpg";
    import TitlePage from "$lib/components/TitlePage.svelte";
</script>

<Background
    image={ChalkboardBackground}
    size="cover">
    <Article --font-color="white">
        <TopBottomPad>
            <HMargin>
                <Brand --max-font-size="3rem"></Brand>
                <EvenBox>
                    <div>
                        <ChalkText>Our Mission</ChalkText>
                        <MediumTextBody>Menyediakan lingkungan yang aman dan mendukung untuk semua individu, dengan memerangi tindakan bullying di setiap level, mendorong empati dan saling menghargai di antara masyarakat.</MediumTextBody>
                    </div>
                    <div>
                        <ChalkText>Our Vision</ChalkText>
                        <MediumTextBody>Menuju masyarakat yang bebas dari intimidasi dan tekanan, di mana setiap individu dapat tumbuh dan berkembang dengan rasa aman, dihargai, dan diterima apa adanya.</MediumTextBody>
                    </div>
                </EvenBox>
                    <ChalkText>How We Do It</ChalkText>
                    <EvenBox --gap="2cm">
                        <MediumTextBody>Kami akan berupaya keras untuk mencegah pembullyian dengan memberikan pendidikan tentang dampak-dampak pembullyian untuk siswa maupun guru. Melalui wawancara, kami mendengar dan memahami pengalaman korban serta menggali solusi dari berbagai perspektif.</MediumTextBody>
                        <MediumTextBody>Dari kegiatan-kegiatan tersebut, kami merumuskan resolusi yang efektif untuk mencegah dan mengatasi tindakan bullying di masa depan.</MediumTextBody>
                </EvenBox>
            </HMargin>
        </TopBottomPad>
    </Article>
</Background>

<Article --bg-color="#22272e">
    <TopBottomPad>
        <PersonSectionList>
            <TitlePage>
                Anggota Kelompok
            </TitlePage>
            <PersonSection
                name="Azka Nuran Ardiansyah"
                description="Anggota Kelompok, Pewawancara"
                src={AzkaA}></PersonSection>
            <PersonSection
                name="Rifat Agung Mulia"
                description="Anggota Kelompok, Pewawancara"
                src={RifatA}></PersonSection>
            <PersonSection
                name="Rayhan Setiawan"
                description="Anggota Kelompok, Video Editor"
                src={RayhanS}></PersonSection>
            <PersonSection
                name="Taruna Prasetya"
                description="Anggota Kelompok, Website Designer"></PersonSection>
            <PersonSection
                name="Yatna Firdaus Hidayat"
                description="Anggota Kelompok, Social Media Promoter"
                src={YatnaF}></PersonSection>
        </PersonSectionList>
    </TopBottomPad>
</Article>