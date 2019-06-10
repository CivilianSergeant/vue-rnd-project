<template>
    <div class="text-input-container">
        <input :ref="'combo-input'" :class="cssClasses()" @focus="handleOnFocus" @blur="handleOnBlur" v-model="combo.name" readonly />
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
            caretPos:0,
            focused:false
        };
    },
    mounted:function(){
        this.$root.eventObserver.register({'ComboInput':this});
        this.$root.eventObserver.subscribe('ComboInput',(obj,option,value)=>{
            this[option] = value;
            this.$refs['combo-input'].focus();
           
        });
    },
    methods:{
        handleOnFocus:function(){
            this.focused = true;
        },
        handleOnBlur:function(){
            this.focused = false;
        },
        cssClasses:function(){
            if(this.focused)
                return 'text-input-focused';
            return 'text-input';

        }
    }
}
</script>
<style>
.text-input-focused{
    outline: none;
    border:1px solid #555;
    background-color: aqua;
}
</style>


