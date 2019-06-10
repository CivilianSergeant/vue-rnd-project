<template>
    <div class="text-input-container">
        <input :class="cssClasses()" :style="customStyles()" :autofocus="autofocus" :placeholder="placeholder"  @keyup="handleTyped" v-model="textValue"/>
    </div>
</template>
<script>
export default {
    name:'TextInput',
    data:()=>{
        return {
            textValue:''
        };
    },
    props:['width','focusstyle','height','text','placeholder','autofocus'],
    watch:{
        text:function(){
            this.textValue = this.text;
        }
    },
    methods:{
        customStyles(){
            return 'width:'+this.width+'%; height:'+this.height+'px;';
        },
        cssClasses(){
            return (this.focusstyle)? this.focusstyle : 'text-input';
        },
        handleTyped:function(e){
            
            let val = {
                'keyCode':e.keyCode,
                'text':this.textValue
            }
            this.$emit('typed',val);
        }
    }
}
</script>
<style>
    
    .text-input-container:focus{
         outline: none;
        
    }
    .text-input{
        border:none;
        background-color:#e0e9f7;
        border:1px solid #e0e9f7;
    }
    .text-input:focus{
        outline: none;
        border:1px solid #555;
        background-color: aquamarine;
    }

    .black{
        border:none;
        background-color:#333;
        border:1px solid #333;
        color:#fff;
    }
    .black:focus{
        outline: none;
        border:1px solid #333;
        background-color: #333;
        color:#fff;
    }

</style>

