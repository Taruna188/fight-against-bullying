
<script lang="ts">
    import MalePerson from "$lib/svg/male person.svg";
    import FemalePerson from "$lib/svg/female person.svg";
    import MalePersonRed from "$lib/svg/male person red.svg";
    import FemalePersonRed from "$lib/svg/female person red.svg";
</script>

<style>
    #body {
        background: white;
        width: 360px;
        color: #cf65e1;
        padding-bottom: 14px;
        text-align: center;

        transform: scale(0.9);
    }

    #percentage {
        font-size: 10rem;
    }

    #age {
        font-size: 2.2rem;
    }

    .bold {
        font-weight: 600;
    }

    #people {
        padding: 0 20px 16px 20px;
    }

    #people > object {
        width: 40px;
    }
</style>

<div id="body">
    <div id="percentage" class="bold">41%</div>
    <div id="people">
        <object title="red male person" data={MalePersonRed}></object>
        <object title="red female person" data={FemalePersonRed}></object>
        <object title="red male person" data={MalePersonRed}></object>
        <object title="red female person" data={FemalePersonRed}></object>
        <object title="red male person" data={MalePersonRed}></object>
        <object title="red female person" data={FemalePerson}></object>
        <object title="male person" data={MalePerson}></object>
        <object title="female person" data={FemalePerson}></object>
        <object title="red male person" data={MalePerson}></object>
        <object title="red female person" data={FemalePerson}></object>
        <object title="male person" data={MalePerson}></object>
        <object title="female person" data={FemalePerson}></object>
        <object title="male person" data={MalePerson}></object>
        <object title="female person" data={FemalePerson}></object>
    </div>
    <div id="age" class="bold">siswa berumur 15 tahun</div>
</div>