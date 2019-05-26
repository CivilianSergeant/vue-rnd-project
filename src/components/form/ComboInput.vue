<template>
    <div class="text-input-container">
        <input class="text-input" v-model="text" @keyup="handleKeyUp"/>
    </div>
</template>
<script>
export default {
    name: 'ComboInput',
    data:()=>{
        return {
            val:'',
            text:'',
            caretPos:0
        };
    },
    methods:{
        handleKeyUp:function(e){
            this.caretPos = e.target.selectionStart;
            if(this.caretPos==0){
                // console.log('here');
            }
            
            if(this.text.length>=2){

            }

        }
    }
}
</script>

