
<style>
    #body {
        border-bottom: 1px solid darkgray;
    }

    /* @media screen and (prefers-color-scheme: dark) { */
        #body {
            background: var(--bg-front);
            backdrop-filter: opacity(50%);
            border-bottom: 1px solid darkslategray;
        }
    /* } */

    @media screen and (max-width: 1500px) {
        #body {
            height: fit-content;
            padding-bottom: 20px;
        }
    }
</style>

<div id="body">
    <slot></slot>
</div>