<template>
    <div class="container">
        <router-view></router-view> 
    </div>
</template>
<script>
// import TextInputVue from './../form/TextInput.vue';
// import ComboInputVue from './../form/ComboInput.vue';
export default {
    name: "Container",
    components: {
        // 'TextInput':TextInputVue,
        // 'ComboInput':ComboInputVue
    }
}
</script>
<style>
    .container{
        align-self: flex-start;
        width: 80%;
        height: 100%;
        border-right:1px solid gray;
    }
</style>


