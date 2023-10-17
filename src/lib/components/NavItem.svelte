
<script lang="ts">
    export let href: string;
</script>

<style>
    button {
        all: unset;
        font-size: 1.2rem;
        padding: 4px 0;
        cursor: pointer;
    }
    
    @media screen and (max-width: 900px) {
        button {
            padding: 20px;
        }

        button:not(:last-child) {
            border-bottom: solid darkslategray 2px;
        }
    }
</style>

<button on:click={() => window.location.href = href}>
    <slot {href}></slot>
</button>