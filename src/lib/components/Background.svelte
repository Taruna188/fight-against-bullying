
<script lang="ts">
    export let color: string = "auto";
    export let image: string | string[] = "auto";
    export let repeat: string = "auto";
    export let position: string = "auto";
    export let size: string = "auto";
</script>

<style></style>

<div style:background-color={(color)}
    style:background-image={Array.isArray(image) ? image.map(image => `url("${image}")`).join(", ") : `url("${image}")`}
    style:background-repeat={(repeat)}
    style:background-position={(position)}
    style:background-size={(size)}>
    <slot></slot>
</div>