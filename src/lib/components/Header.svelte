
<style>
    #body {
        border-bottom: 1px solid darkgray;
    }

    @media screen and (prefers-color-scheme: dark) {
        #body {
            background: var(--bg-front);
            backdrop-filter: opacity(50%);
            border-bottom: 1px solid darkslategray;
        }
    }
</style>

<div id="body">
    <slot></slot>
</div>