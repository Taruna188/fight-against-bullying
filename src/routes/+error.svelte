<script>
    import { page } from "$app/stores";

    import EvenBox from "$lib/components/EvenBox.svelte";
    import ShowArticle from "$lib/components/TopBottomPad.svelte";

</script>

<style>

    #status-code {
        text-align: end;
        font-weight: 800;
        font-size: 140px;
    }

    #status-code > span {
        background-color: black;
    }

    #message {
        align-self: center;
        font-size: 30px;
    }

    @media screen and (max-width: 800px) {
        #message {
            text-align: center;
        }
    }
</style>

<ShowArticle --bg-color="#0000ff" --font-color="white">
    <EvenBox --mobile-gap-size="0">
        <div id="status-code">
            <span>{$page.status}</span>
        </div>
        <div id="message">{$page.error.message}</div>
    </EvenBox>
</ShowArticle>