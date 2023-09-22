
<script lang="ts">
    import Article from "$lib/components/Article.svelte";
    import HeroArticle from "$lib/components/HeroArticle.svelte";
    import HeroWordmark from "$lib/components/HeroWordmark.svelte";
    import HeroLogo from "$lib/components/HeroLogo.svelte";
    import HeroSection from "$lib/components/HeroSection.svelte";
    import EvenBox from "$lib/components/EvenBox.svelte";
    import ShowArticle from "$lib/components/ShowArticle.svelte";
    import SadMentalKid from "$lib/assets/sad mental kid.jpg";
    import ImageArticle from "$lib/components/ImageArticle.svelte";
    import ImageArticleRev from "$lib/components/ImageArticleRev.svelte";
    // assets
    import Blob1 from "$lib/assets/blob 1.png";
    import DumbStudent from "$lib/assets/dumb student.jpg";
    import BigText from "$lib/components/BigText.svelte";
    import BullyPercentage from "$lib/components/BullyPercentage.svelte";
    import Brand from "$lib/components/Brand.svelte";
</script>

<style>
    #mental-background + :global(div > div) { 
        background-image: url("$lib/assets/blob 1.png"), url("$lib/svg/swirl 1.svg");
        background-repeat: no-repeat;
        background-position: bottom left, top 20px right 140px;
        background-size: 800px, 400px;
    }

    #semangat-background + :global(div > div) {
        background-image: url("$lib/assets/blob 2.png"), url("$lib/svg/patch.svg"), url("$lib/svg/arrow rotated.svg");
        background-repeat: no-repeat;
        background-position: bottom right, left 120px top 14px, bottom -100px right 600px;
        background-size: 400px, 400px, 600px;
    }

    #percentage-box {
        justify-self: center;
    }

    #percentage-box + :global(div) {
        align-self: center;
    }

    #mission-background + :global(div) {
        background-image: url("$lib/assets/chalkboard background.jpg");
        background-size: cover;
        font-size: 30px;
        font-weight: 600;
    }

    .chalky {
        font-family: Chalkboy;
        font-weight: normal;
        font-size: 130px;
    }

    #how-we-do-it {
        padding-top: 60px;
    }
</style>

<svelte:head>
    <title>Fight. Against. Bullying.</title>
</svelte:head>


<HeroArticle>
    <HeroSection>
        <HeroWordmark></HeroWordmark>
    </HeroSection>
</HeroArticle>


<span id="mental-background"></span>

<ImageArticle --bg-color="#343f56" src={SadMentalKid}>
    <BigText --font-color="white">
        Bullying penyebab kerusakan mental. Menyiksa psikologis, merusak kepercayaan diri, dan meninggalkan luka yang mendalam.
    </BigText>
</ImageArticle>

<ShowArticle --bg-color="#cf65e1">
    <EvenBox --lbox-size="3fr" --mobile-rbox-size="2fr" --mobile-gap="2px">
        <div id="percentage-box">
            <BullyPercentage></BullyPercentage>
        </div>
        <div>
            <BigText>41% siswa berusia 15 tahun pernah mengalami pembullyian setidaknya beberapa kali dalam sebulan, menurut studi PISA (Programme for International Student Assessment) pada tahun 2018.</BigText>
        </div>
    </EvenBox>
</ShowArticle>

<span id="semangat-background"></span>

<ImageArticleRev --bg-color="#43a485" src={DumbStudent}>
    <BigText --max-font-size="2.4rem" --font-color="white">
        Pembullyan bukan hanya menyakiti hati, tetapi juga menggerus semangat belajar siswa. Kondisi psikologis yang terganggu membuat konsentrasi berkurang dan motivasi belajar memudar. Setiap anak berhak mendapatkan lingkungan belajar yang kondusif tanpa rasa takut dan tekanan.
    </BigText>
</ImageArticleRev>

<span id="mission-background"></span>

<ShowArticle>
    <Brand --max-font-size="3rem"></Brand>
    <EvenBox>
        <div>
            <div class="chalky">Our Mission</div>
            <div>Menyediakan lingkungan yang aman dan mendukung untuk semua individu, dengan memerangi tindakan bullying di setiap level, mendorong empati dan saling menghargai di antara masyarakat.</div>
        </div>
        <div>
            <div class="chalky">Our Vision</div>
            <div>Menuju masyarakat yang bebas dari intimidasi dan tekanan, di mana setiap individu dapat tumbuh dan berkembang dengan rasa aman, dihargai, dan diterima apa adanya.</div>
        </div>
    </EvenBox>
    <div id="how-we-do-it">
        <div class="chalky">How We Do It</div>
        <EvenBox --gap="2cm">
            <div>Kami menyebarkan informasi mendalam tentang dampak dan bahaya bullying kepada masyarakat luas. Melalui wawancara, kami mendengar dan memahami pengalaman korban serta menggali solusi dari berbagai perspektif.</div>
            <div>Dari kegiatan-kegiatan tersebut, kami merumuskan resolusi yang efektif untuk mencegah dan mengatasi tindakan bullying di masa depan.</div>
        </EvenBox>
    </div>
</ShowArticle>
