<template>
    <div class="text-input-container">
        <input class="text-input" v-model="combo.name" readonly />
    </div>
</template>
<script>
export default {
    name: 'ComboInput',
    data:()=>{
        return {
            combo:{
                id:0,
                name:''
            },
            caretPos:0
        };
    },
    mounted:function(){
        this.$root.eventObserver.register({'ComboInput':this});
        this.$root.eventObserver.subscribe('ComboInput',(obj,option,value)=>{
            this[option] = value;
        });
    },
    methods:{
        // handleKeyUp:function(e){
        //     // this.caretPos = e.target.selectionStart;
        //     // if(this.caretPos==0){
        //     //     // console.log('here');
        //     // }
            
        //     // if(this.text.length>=2){

        //     // }

        // }
    }
}
</script>

