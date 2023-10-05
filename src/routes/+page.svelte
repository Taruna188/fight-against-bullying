
<script lang="ts">
    // assets
    import DumbStudent from "$lib/assets/dumb student.jpg";
    import SadMentalKid from "$lib/assets/sad mental kid.jpg";
    import Blob1 from "$lib/assets/blob 1.png";
    import Swirl1 from "$lib/svg/swirl 1.svg";
    import Blob2 from "$lib/assets/blob 2.png";
    import PatchSvg from "$lib/svg/patch.svg";
    import ArrowRotatedSvg from "$lib/svg/arrow rotated.svg";
    import InterviewIllust from "$lib/assets/interview illust.png";

    // components
    import HeroArticle from "$lib/components/HeroArticle.svelte";
    import HeroWordmark from "$lib/components/HeroWordmark.svelte";
    import HeroSection from "$lib/components/HeroSection.svelte";
    import EvenBox from "$lib/components/EvenBox.svelte";
    import TopBottomPad from "$lib/components/TopBottomPad.svelte";
    import ImageArticle from "$lib/components/ImageArticle.svelte";
    import Brand from "$lib/components/Brand.svelte";
    import HMargin from "$lib/components/HMargin.svelte";
    import TextBig from "$lib/components/TextBig.svelte";
    import BullyPercentage from "$lib/components/BullyPercentage.svelte";
    import GridBox from "$lib/components/GridBox.svelte";
    import Article from "$lib/components/Article.svelte";
    import TextMedium from "$lib/components/TextMedium.svelte";
    import Background from "$lib/components/Background.svelte";
    import Logo from "$lib/components/Logo.svelte";
</script>

<svelte:head>
    <title>Fight. Against. Bullying.</title>
</svelte:head>

<HeroArticle>
    <HeroSection>
        <HeroWordmark></HeroWordmark>
    </HeroSection>
</HeroArticle>

<Background 
    color="#343f56"
    image={[Blob1, Swirl1]}
    repeat="no-repeat"
    position="bottom left, top 20px right 140px"
    size="800px, 400px">
    <ImageArticle src={SadMentalKid}>
        <TextBig --font-color="white">
            Bullying penyebab kerusakan mental. Menyiksa psikologis, merusak kepercayaan diri, dan meninggalkan luka yang mendalam.
        </TextBig>
    </ImageArticle>
</Background>

<Background
    color="#43a485"
    image={[Blob2, PatchSvg, ArrowRotatedSvg]}
    repeat="no-repeat"
    position="bottom right, left 120px top 14px, bottom -100px right 700px"
    size="400px, 400px, 600px">
    <ImageArticle src={DumbStudent} reverse={true}>
        <TextBig --max-font-size="2.4rem" --font-color="white">
            Pembullyan bukan hanya menyakiti hati, tetapi juga menggerus semangat belajar siswa. Kondisi psikologis yang terganggu membuat konsentrasi berkurang dan motivasi belajar memudar. Setiap anak berhak mendapatkan lingkungan belajar yang kondusif tanpa rasa takut dan tekanan.
        </TextBig>
    </ImageArticle>
</Background>

<Article --bg-color="#cf65e1">
    <TopBottomPad>
        <EvenBox --lbox-size="3fr" --mobile-rbox-size="2fr" --mobile-gap="2px">
            <GridBox --justify="center">
                <BullyPercentage></BullyPercentage>
            </GridBox>
            <GridBox --align="center">
                <TextBig>41% siswa berusia 15 tahun pernah mengalami pembullyian setidaknya beberapa kali dalam sebulan, menurut studi PISA (Programme for International Student Assessment) pada tahun 2018.</TextBig>
            </GridBox>
        </EvenBox>
    </TopBottomPad>
</Article>

<Background
    repeat="no-repeat"
    size="cover">
    <Article>
        <TopBottomPad --padding="200px">
            <EvenBox>
                <GridBox>
                    <HMargin --margin="20px">
                        <Brand --max-font-size="3rem"></Brand>
                        <TextMedium>Kami akan berupaya keras untuk mencegah masalah pembullyan sebelum terjadi dengan memberikan pendidikan baik siswa maupun guru tentang dampak negatif dari pembullyan itu sendiri.</TextMedium>
                    </HMargin>
                </GridBox>
                <div>
                    <Logo></Logo>
                </div>
            </EvenBox>
        </TopBottomPad>
    </Article>
</Background>

<Background
    color="#214df9">
    <ImageArticle src={InterviewIllust} reverse={true} --image-width="700px">
        <TopBottomPad>
            <TextMedium>
                Melalui serangkaian kegiatan seperti seminar, pelatihan, dan pembuatan video wawancara, kami ingin menanamkan kesadaran bahwa perbuatan menyakiti orang lain tidak hanya berdampak pada korban, tetapi juga pada pelaku dan komunitas sekolah sebagai keseluruhan.
            </TextMedium>
        </TopBottomPad>
    </ImageArticle>
</Background>