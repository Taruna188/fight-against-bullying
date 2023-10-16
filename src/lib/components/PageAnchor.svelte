
<script lang="ts">
    export let src: string | undefined = undefined;
    export let title: string = "Page Title";
    export let group: string = "";
    export let url: string = ".";
</script>

<style>
    #body {
        width: 340px;
        height: fit-content;
        border-radius: 12px;
        border: solid darkslategray 2px;
    }

    #body > div {
        margin-bottom: 12px;
    }

    #body > div:first-child:not(#thumbnail) {
        margin-top: 12px;
    }

    #body > div:not(#thumbnail) {
        margin-left: 16px;
    }

    #description {
        font-weight: bold;
    }

    #thumbnail > img {
        height: 200px;
        width: 340px;
        border-radius: 12px 12px 0 0;
        object-fit: cover;
    }

    #group-text {
        font-weight: normal;
        color: gray;
    }
</style>

<button id="body" on:click={() => window.location.href = url}>
    {#if src != undefined}
    <div id="thumbnail">
        <img src={src ?? ""} alt="">
    </div>
    {/if}
    <div id="description">
        <div>
            {title}
        </div>
        <div id="group-text">{group}</div>
    </div>
</button>