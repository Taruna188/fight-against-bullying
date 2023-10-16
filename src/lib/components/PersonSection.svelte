
<script lang="ts">
    import BlankPerson from "$lib/assets/blank person.png";

    export let name: string;
    export let description: string;
    export let src: string = BlankPerson;
</script>

<style>
    #body {
        display: flex;
        flex-wrap: wrap;
    }
    #profile {
        margin-right: 60px;
    }
    #profile, #profile img {
        width: 230px;
        border-radius: 100%;
    }
    h1 {
        border-bottom: solid violet 4px;
    }

    @media screen and (max-width: 900px) {
        #body {
            align-content: center;
        }
    }
</style>

<div id="body">
    <div id="profile">
        <img {src} alt="">
    </div>
    <div>
        <h1>{name}</h1>
        <p>{description}</p>
    </div>
</div>