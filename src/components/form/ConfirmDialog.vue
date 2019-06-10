<template>
    <div v-if="show" class="confirm-dialog">
        <div class="confirm-dialog-veil">&nbsp;</div>
        <div class="confirm-dialog-control">
            <button type="button" @click="handleYes">Yes</button>
            <button type="button" @click="handleNo">No</button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ConfirmDialog',
    data: ()=>{
        return {
            
        };
    },
    props:['show'],
    methods:{
        handleYes:function(){
            this.show=false;
            this.$emit('handleYes',true);
        },
        handleNo:function(){
            this.show=false;
            this.$emit('handleNo',false);
        }
    }
}
</script>

<style>
.confirm-dialog{
    position: fixed;
    top:0px;
    height:100%;
    width: 100%;
}
.confirm-dialog-veil{
    opacity: 0.65;
    background-color: #fff;
    width: 80%;
    height:100%;
    position:absolute;
}
.confirm-dialog-control{
display: flex;
    align-items: center;
    /* align-content: center; */
    /* top: 0px; */
    width: 80%;
    height: 100%;
    z-index: 10000;
    position: relative;
    top: 0px;
    left: 35%;
}
</style>

