<template>
    <div class="page-title">
        <h3>{{text}}</h3>
    </div>
</template>
<script>
export default {
    name: 'PageTitle',
    props:['text']
}
</script>

<style>
    .page-title > h1,h2,h3,h4,h5,h6{
        margin: 0px;
        height: 16px;
        background: #e2d1d1;
        font-size: 14px;
        border-bottom: 1px black;
        border-style: outset;
        color: #555;
        padding: 2px;
    }
</style>
