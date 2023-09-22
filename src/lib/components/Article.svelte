
<style>
    #body {
        display: grid;
        
        background-color: var(--bg-color);
        color: var(--font-color);
        padding: 10px;

        grid-template-columns: 4fr 10fr 4fr;
        justify-content: center;
    }

    #content {
        grid-column: 2;
    }

    @media screen and (max-width: 1700px) {
        #body {
            grid-template-columns: 2fr 10fr 2fr;
        }
    }

    @media screen and (max-width: 1200px) {
        #body {
            grid-template-columns: 1fr 10fr 1fr;
        }
    }

</style>

<div id="body">
    <div id="content">
        <slot></slot>
    </div>
</div>