
<script lang="ts">
    export let area: "top" | "bottom" = "bottom";
</script>

<style>
    .bottom > :global(*) {
        margin-bottom: var(--margin, 12px);
    }
    .top > :global(*) {
        margin-top: var(--margin, 12px);
    }
</style>

<div class:top={() => area == "top"}
    class:bottom={() => area == "bottom"}>
    <slot></slot>
</div>