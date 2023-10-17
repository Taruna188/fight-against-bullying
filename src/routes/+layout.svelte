<script lang="ts">
    import { base } from "$app/paths";

    import DumbStudent from "$lib/assets/dumb student.jpg";
    import BullyingIllust from "$lib/assets/apa-itu-bullying-illust.png";
    import NavBrand from "$lib/components/NavBrand.svelte";
    import NavItem from "$lib/components/NavItem.svelte";
    import NavItemList from "$lib/components/NavItemList.svelte";
    import NavLink from "$lib/components/NavLink.svelte";
    import Navbar from "$lib/components/Navbar.svelte";
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import Article from "$lib/components/Article.svelte";
    import NavButton from "$lib/components/NavButton.svelte";
    import TopBottomPad from "$lib/components/TopBottomPad.svelte";
    import PageAnchor from "$lib/components/PageAnchor.svelte";
    import PageAnchorList from "$lib/components/PageAnchorList.svelte";

    import BooKid from "$lib/assets/boo kid.png";
    import GoodParent from "$lib/assets/good parent.jpg";
    import SadKid from "$lib/assets/sad kid in classroom.png";

    let navitemMobileDisplay = false;
</script>

<style>
    #footer-credit {
        padding: 40px 0;
    }
</style>

<Header>
    <Navbar>
        <NavButton on:click={() => navitemMobileDisplay = !navitemMobileDisplay}></NavButton>
        <NavBrand></NavBrand>
        <NavItemList bind:mobileDisplay={navitemMobileDisplay}>
            <NavItem href="{base}/perpustakaan/apa-itu-bullying">
                <NavLink>Apa itu Bullying?</NavLink>
            </NavItem>
            <NavItem href="{base}/perpustakaan/dampak-bullying-bagi-korban">
                <NavLink>Dampak Bullying</NavLink>
            </NavItem>
            <NavItem href="{base}/hasil-wawancara">
                <NavLink>Hasil Wawancara</NavLink>
            </NavItem>
            <NavItem href="{base}/tokoh-wawancara">
                <NavLink>Tokoh Wawancara</NavLink>
            </NavItem>
            <NavItem href="{base}/tentang-kami">
                <NavLink>Tentang Kami</NavLink>
            </NavItem>
        </NavItemList>
    </Navbar>
</Header>


<div id="content">
    <slot></slot>
</div>

<Article>
    <TopBottomPad>
        <h1>Pelajari lebih lanjut</h1>
        <PageAnchorList>
            <PageAnchor
                title="Apa itu Bullying?"
                group="Perpustakaan"
                src={BullyingIllust}
                url="{base}/perpustakaan/apa-itu-bullying"></PageAnchor>
            <PageAnchor
                title="Apa Penyebab Bullying?"
                group="Perpustakaan"
                src={BooKid}
                url="{base}/perpustakaan/apa-penyebab-bullying"></PageAnchor>
            <PageAnchor
                title="Dampak Bullying bagi Korban"
                group="Perpustakaan"
                src={DumbStudent}
                url="{base}/perpustakaan/dampak-bullying-bagi-korban"></PageAnchor>
            <PageAnchor
                title="Cara Mengendalikan Pembullyian"
                group="Perpustakaan"
                src={GoodParent}
                url="{base}/perpustakaan/cara-mengendalikan-pembullyian"></PageAnchor>
            <PageAnchor
                title="Statistika Bullying"
                group="Perpustakaan"
                src={SadKid}
                url="{base}/perpustakaan/statistika-bullying"
                ></PageAnchor>
        </PageAnchorList>

        <h1>Kelompok Kami</h1>
        <PageAnchorList>
            <PageAnchor
                title="Hasil Wawancara"
                group="Wawancara"
                url="{base}/hasil-wawancara"></PageAnchor>
            <PageAnchor
                title="Tokoh Wawancara"
                group="Wawancara"
                url="{base}/tokoh-wawancara"></PageAnchor>
            <PageAnchor
                title="Tentang Kami"
                group="Profil Kelompok"
                url="{base}/tentang-kami"></PageAnchor>
        </PageAnchorList>
    </TopBottomPad>
</Article>

<Footer>
    <Article>
        <div id="footer-credit">
            <b>Fight. Against. Bullying.</b> <br>
            Presentation by Kelompok Profile Pancasila 3 <br>
            Designed by Taruna Prasetya
        </div>
    </Article>
</Footer>