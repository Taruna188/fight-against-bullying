
<style>
    #body {
        display: grid;

        grid-auto-flow: column;
        grid-template-columns: auto auto 5%;
        justify-items: center;
        gap: 40px;

        height: 40px;
        padding: 14px;
    }

    @media screen and (max-width: 1200px) {
        #body {
            grid-template-columns: auto auto;
        }
    }

    @media screen and (max-width: 800px) {
        #body {
            gap: 0;
        }
    }
</style>

<div id="body">
    <slot></slot>
</div>