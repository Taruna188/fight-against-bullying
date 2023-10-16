
<script lang="ts">
    import MenuBar from "$lib/svg/menu bar.svg";
</script>

<style>
    button {
        all: unset;
        display: none;
        padding: 0;
        margin: 0;
        align-self: center;
        background: white;
    }

    button > img {
        width: 38px;
        height: 38px;
        margin: 0;
    }

    @media screen and (max-width: 900px) {
        button {
            display: block;
            grid-column: 1;
        }
    }
</style>

<button on:click>
    <img title="menu bar" src={MenuBar}>
</button>