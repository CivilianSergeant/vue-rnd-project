<template>
    <div class="input-group">
        <label>Group Name</label>
        <TextInput v-if="showTextInput()" :autofocus="autofocus" :placeholder="'N/A'"/>
    </div>
</template>
<script>
import TextInput from './TextInput.vue';
export default {
    name: 'FormInput',
    components:{
        'TextInput':TextInput
    },
    data:()=>{
        return {
            TextInput:'TextInput',
            
        }
    },
    props:['type','autofocus'],
    methods:{
        showTextInput:function(){
            return (this.type==this.TextInput);
        }
    }
}
</script>
