<script lang="ts">
    import NavBrand from "$lib/components/NavBrand.svelte";
    import NavItem from "$lib/components/NavItem.svelte";
    import NavItemList from "$lib/components/NavItemList.svelte";
    import NavLink from "$lib/components/NavLink.svelte";
    import Navbar from "$lib/components/Navbar.svelte";
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import Article from "$lib/components/Article.svelte";
    import NavButton from "$lib/components/NavButton.svelte";
</script>

<Header>
    <Navbar>
        <NavButton></NavButton>
        <NavBrand></NavBrand>
        <NavItemList>
            <NavItem>
                <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/people-involved">People Involved</NavLink>
            </NavItem>
            <!-- <NavItem>
                <NavLink href="/about-us">About Us</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/contact">Contact</NavLink>
            </NavItem> -->
        </NavItemList>
    </Navbar>
</Header>


<div id="content">
    <slot></slot>
</div>

<style>
    #footer-credit {
        padding: 40px 0;
    }
</style>

<Footer>
    <Article>
        <div id="footer-credit">
            <b>Fight. Against. Bullying.</b> <br>
            Presentation by Kelompok Profile Pancasila 3
        </div>
    </Article>
</Footer>