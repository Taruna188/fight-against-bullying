<script>
    import TextArticle from "$lib/components/TextArticle.svelte";
    import BullyingIllust from "$lib/assets/apa-itu-bullying-illust.png";
    import BottomNavigator from "$lib/components/BottomNavigator.svelte";

</script>

<style>
    #bullying-illust {
        float: right;
        margin: 12px 12px 12px 20px;
    }

    img {
        width: 500px;
        max-width: 100%;
    }
</style>

<TextArticle>
    <h1>Apa itu Bullying?</h1>

    <img src={BullyingIllust} id="bullying-illust" alt="">

    <p>
        Bullying, juga dikenal sebagai perundungan atau pembulian dalam bahasa Indonesia, adalah suatu bentuk perilaku negatif yang menciptakan rasa takut, cemas, atau terluka pada korban. 
    </p>

    <ol>
        <li>
            <p>
                Menurut Olweus (2005), bullying diartikan sebagai tindakan atau perilaku agresif yang disengaja, yang dilakukan oleh sekelompok orang atau individu secara berulang kali terhadap korban yang tidak dapat mempertahankan dirinya dengan mudah, atau sebagai penyalahgunaan kekuasaan/kekuatan sistematis<sup>1</sup>.
            </p>
        </li>
        <li>
            <p>
                Menurut Wicaksana (2008), bullying adalah kekerasan fisik dan psikologis jangka panjang yang dilakukan seseorang atau kelompok, terhadap seseorang yang tidak mampu mempertahankan dirinya dalam situasi di mana ada hasrat untuk melukai atau menakuti orang itu atau membuat dia tertekan. 
            </p>
        </li>
        <li>
            <p>
                Menurut American Psychatric Association (APA) bahwa bullying adalah perilaku agresif yang dikarakteristikkan dengan tiga kondisi yaitu: (a) perlikaku negative yang bertujuan untuk merusak atau membahayakan (b) perilaku yang diulang selama jangka waktu tertentu (c) adanya ketidakseimbangan kekuatan atau kekuasaan dari pihak-pihak yang terlibat. Beberapa kondisi tersebut lebih mengacu pada yang dapat menjadikan korban trauma, cemas dan sikap-sikap yang membuat tidak nyaman.
            </p>
        </li>
    </ol>

    <p>
        Bullying dapat terjadi karena berbagai situasi dan dalam berbagai bentuk, baik secara langsung maupun tidak langsung. Salah satu penyebab utama bullying adalah perbedaan penampilan fisik. Ketika seorang anak memiliki penampilan fisik yang dianggap berbeda dari anak-anak lain, para bully bisa menjadikan hal tersebut sebagai bahan untuk mengintimidasi anak tersebut. Selain itu, keinginan untuk mendominasi juga bisa menjadi pemicu bullying. Pelaku bullying mungkin merasa dapat memperoleh dominasi terhadap orang lain dan memaksakan kehendaknya untuk mencapai kepuasan pribadi. Dalam ilmu psikologi, fenomena ini dikenal sebagai abuse of power, yaitu kecenderungan seseorang untuk mencari dominasi atau kekuasaan atas orang lain. Faktor lain yang bisa memicu bullying adalah pengaruh pergaulan yang tidak baik dan kurangnya empati.
    </p>

    <p>
        Dampak bullying dapat sangat merugikan dan berlangsung dalam jangka pendek maupun jangka panjang. Dalam jangka pendek, korban bullying dapat mengalami ketakutan dan kecemasan. Sebagai contoh, anak yang menjadi korban bullying di sekolah mungkin akan merasa takut pergi ke sekolah, takut menggunakan kamar mandi, naik kendaraan umum, atau berjalan sendiri di lorong sekolah. Dalam jangka panjang, dampak bullying bisa lebih serius dan meliputi depresi, kecemasan, peningkatan risiko penggunaan narkoba, penurunan prestasi akademik, atau bahkan memicu anak untuk menjadi pelaku bullying di masa depan.
    </p>

    <p>
        Mengatasi bullying adalah tugas penting bagi individu, komunitas, dan institusi untuk menciptakan lingkungan yang aman dan mendukung. Penting untuk mengajarkan anak-anak dan remaja tentang bullying, termasuk bagaimana mengidentifikasi perilaku bullying, bagaimana melaporkannya, dan bagaimana mendukung teman dan rekan yang mungkin menjadi korban bullying. Penanganan dan pencegahan bullying memerlukan pendekatan komprehensif yang melibatkan pendidikan, intervensi dini, dan dukungan sosial untuk membantu mencegah bullying dan mendukung korban dan keluarganya dalam mengatasi trauma yang mungkin diakibatkannya.
    </p>

    <BottomNavigator
        nextPageUrl="./apa-penyebab-bullying"
        nextPageTitle="Apa Penyebab Bullying"></BottomNavigator>
</TextArticle>