
<script lang="ts">
    import BlankPerson from "$lib/assets/blank person.png";

    export let image: string = BlankPerson;
    export let name: string = "John Doe";
    export let classAssigned: string = "Kelas XI-F";
    export let job: string | undefined = undefined;
</script>

<style>
    #body {
        display: grid;
        gap: 6px;
        width: 200px;
        justify-items: center;
        padding: 20px;
        background: rgb(128 128 128 / 0.2);
    }

    #avatar {
        margin-bottom: 6px;
    }

    #avatar > img {
        border-radius: 100%;
    }

    #class-assigned {
        font-size: 1rem;
        color: gray;
    }

    #job {
        font-style: italic;
    }
</style>

<div id="body">
    <div id="avatar">
        <img src={image} alt="person" width="180">
    </div>
    <div id="name">{name}</div>
    <div id="class-assigned">{classAssigned}</div>
    {#if typeof job == "string"}
        <div id="job">{job}</div>
    {/if}
</div>