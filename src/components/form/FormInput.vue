<template>
    <div class="input-group">
        <label>{{label}}</label>
        <TextInput v-if="showTextInput()" :autofocus="autofocus" :placeholder="'N/A'"/>
        <ComboInput v-if="showComboInput()"/>
    </div>
</template>
<script>
import TextInput from './TextInput.vue';
import ComboInput from './ComboInput.vue';
import FileInputType from '../../helpers/FormInputType.js';

export default {
    name: 'FormInput',
    components:{
        'TextInput':TextInput,
        'ComboInput':ComboInput
    },
    data:()=>{
        return {
            TextInput:'TextInput',
            FileInputType:FileInputType
        }
    },
    props:['label','type','autofocus'],
    methods:{
        showTextInput:function(){
            return (this.type==this.FileInputType.TextInput);
        },
        showComboInput(){
            return (this.type==this.FileInputType.ComboInput);
        }
    }
}
</script>
