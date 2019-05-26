<template>
    <div class="text-input-container">
        <input class="text-input" :style="cssClasses()" :autofocus="autofocus" :placeholder="placeholder"  @keyup="handleTyped" v-model="textValue"/>
        
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
    props:['width','height','text','placeholder','autofocus'],
    watch:{
        text:function(){
            this.textValue = this.text;
        }
    },
    methods:{
        cssClasses(){
            return 'width:'+this.width+'%; height:'+this.height+'px;';
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
</style>

