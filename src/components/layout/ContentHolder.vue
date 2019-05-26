<template>

    <div class="content-holder">
        <ContainerVue/>
        <SideBar/>
    </div>
</template>

<script>
    import SideBar from './SideBar.vue';
    import ContainerVue from './Main.vue';
    
    export default {
        name : 'ContentHolder',
        components: {
            'ContainerVue':ContainerVue,
            'SideBar': SideBar
        }
    }
</script>
<style>
    .content-holder{
        display:flex;
        flex-direction: row;
        height:100%;
        
    }
</style>