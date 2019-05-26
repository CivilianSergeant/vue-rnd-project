<template>

    <div class="side-bar">
        <ComboList/>
    </div>
</template>

<script>
import ComboListVue from '../form/ComboList.vue';
    export default {
        name:'SideBar',
        components: {
            'ComboList':ComboListVue
        }
    }
</script>
<style>
    .side-bar{
        align-self:flex-start;
        width:20%;
        height:100%;
    }
</style>