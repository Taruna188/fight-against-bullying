
<style>
    #body {
        border-top: 2px solid darkgray;
    }

    @media screen and (prefers-color-scheme: dark) {
        #body {
            background: var(--bg-front);
            backdrop-filter: opacity(50%);
            border-top: 2px solid darkslategray;
        }
    }
</style>

<div id="body">
    <slot></slot>
</div>