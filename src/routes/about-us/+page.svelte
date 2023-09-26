
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
</script>

<Background
    image={ChalkboardBackground}
    size="cover">
    <Article>
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