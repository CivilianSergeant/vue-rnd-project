<template>
    <div class="groups" @keyup="test">
        <PageTitle :text="title"/>
        <div class="row" >
            <div class="input-group">
                <label>Group Name</label>
                <TextInput tabindex="1" :autofocus="autofocus" :placeholder="'N/A'"/>
            </div>
            <div class="input-group">
                <label>Parent Group</label>
                <TextInput tabindex="2" :placeholder="'N/A'"/>
            </div>
        </div>
    </div>
</template>
<script>
import PageTitle from '../../components/form/PageTitle.vue';
import TextInput from '../../components/form/TextInput.vue';
export default {
    name: 'Group',
    components:{
        'PageTitle':PageTitle,
        'TextInput':TextInput
    },
    data:()=>{
        return{
            title:'Group',
            autofocus:'autofocus'
        };
    },
    methods:{
        test(e){
            if(e.keyCode == 13 || e.keyCode == 40){
                let inputGroup = (e.srcElement.parentNode.parentNode.nextSibling);
                if(inputGroup){
                    inputGroup.children[1].children[0].focus();
                }else{
                    // show save option
                }
            }else if(e.keyCode == 38){
                let inputGroup = (e.srcElement.parentNode.parentNode.previousSibling);
                if(inputGroup){
                    inputGroup.children[1].children[0].focus();
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




