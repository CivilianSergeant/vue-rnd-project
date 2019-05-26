<template>
    <div class="home">
        <TopBar/>
        <ContentHolder/>
    </div>
</template>
<script>
    import TopBar from './TopBar.vue';
    import ContentHolderVue from './ContentHolder.vue';
    
    export default {
        name:'Home',
        components: {
            'TopBar': TopBar,
            'ContentHolder': ContentHolderVue
        }
    }
</script>
<style>
    .home{
        height: 100%;
    }
</style>

