
<script lang="ts">
    export let nextPageTitle: string = "Next Page";
    export let nextPageUrl: string | undefined;
    export let prevPageTitle: string = "Previous Page";
    export let prevPageUrl: string | undefined;
</script>

<style>
    div {
        display: flex;
        gap: 20px;
    }
    button {
        padding: 20px;
        font-size: 1.2rem;
        font-weight: bold;
    }
</style>

<div>
    {#if prevPageUrl != undefined}
        <button on:click={() => prevPageUrl ? window.location.href = prevPageUrl : null}>
            <div>Halaman Sebelum: {prevPageTitle}</div>
        </button>
    {/if}
    
    {#if nextPageUrl != undefined}
        <button on:click={() => nextPageUrl ? window.location.href = nextPageUrl : null}>
            <div>Halaman Berikut: {nextPageTitle}</div>
        </button>
    {/if}
</div>