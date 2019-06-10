<template>
    <div class="groups" @keyup="handleKeyUp">
        <PageTitle :text="title"/>
        <div class="row" >
            <FormInput :label="label1" :type="FormInputType.TextInput" :autofocus="'autofocus'"/>
            <FormInput :label="label2" :ref="'ComboInput'" :type="FormInputType.ComboInput" />
        </div>
        <ConfirmDialog :show="showConfirm" @handleYes="handleYes" @handleNo="handleNo"/>
    </div>
</template>
<script>
import PageTitle from '../../components/form/PageTitle.vue';
import FormInput from '../../components/form/FormInput.vue';
import ConfirmDialog from '../../components/form/ConfirmDialog.vue';
import FormInputType from '../../helpers/FormInputType.js';
export default {
    name: 'Group',
    components:{
        'PageTitle':PageTitle,
        'FormInput':FormInput,
        'ConfirmDialog': ConfirmDialog
    },
    data:()=>{
        return{
            title:'Group',
            label1:'Group Name',
            label2:'Parent Group',
            showConfirm:false,
            autofocus:'autofocus',
            FormInputType:FormInputType
        };
    },
    mounted:function(){

    },
    methods:{
        handleYes(res){
            return res;
            // console.log(res);
        },
        handleNo(res){
            return res;
            // console.log(res);
        },
        handleKeyUp(e){
            
            if(e.keyCode == 13 || e.keyCode == 40){
                let inputGroup = (e.srcElement.parentNode.parentNode.nextSibling);
                if(inputGroup){
                    inputGroup.children[1].children[0].focus();
                    this.$root.eventObserver.broadcast('ComboList','showComboList',true);
                    
                }else{
                    // show save option
                }
            }else if(e.keyCode == 38){
                let inputGroup = (e.srcElement.parentNode.parentNode.previousSibling);
                if(inputGroup){
                    
                    inputGroup.children[1].children[0].focus();
                    this.$root.eventObserver.broadcast('ComboList','showComboList',false);
                }else{
                    // show save option
                }
            }
        }
    }
}
</script>
<style>
.row{
    display: flex;
    flex-direction: row;
}
.row > .input-group{
    margin: 5px;
    display: flex;
    flex-direction: row;
}
.input-group > label{
    margin-right:5px;
}

</style>




