<template>
    <div v-if="showComboList">
        <PageTitle :text="'List of Groups'"/>
        <TextInput :ref="'combo-search-input'" :placeholder="'Search'" :autofocus="'autofocus'" @typed="handleTyped" :text="text" :height="height" :width="width"/>
        <ul class="combo-list" ref="list">
            <li @keyup="handleKeyUp" @dblclick="handleDoubleClickSelectItem(item)" @click="handleClickSelectItem(item)" v-for="(item,$index) in filteredData" :ref="'li-'+$index" :tabindex="$index" :key="item.id">{{item.name}}</li>
        </ul>
    </div>
</template>
<script>
import TextInputVue from './TextInput.vue';
import PageTitle from './PageTitle.vue';
export default {
    name: 'ComboList',
    components:{
        'TextInput':TextInputVue,
        'PageTitle':PageTitle
    },
    data: ()=>{
        return {
            showComboList:false,
            width:99,
            height:20,
            selectedItemIndex:0,
            filteredData:[],
            text:'',
            data:[{
                id:1,
                name:'Asset'
            },
            {
                id:2,
                name:'Income'
            },
            {
                id:3,
                name:'Expense'
            },
            {
                id:4,
                name:'Liabilities'
            }
            ]
        };
    },
    mounted:function(){
        this.filteredData = this.data;
        this.$root.eventObserver.register({'ComboList':this});
        this.$root.eventObserver.subscribe('ComboList',(obj,option,value)=>{
            this.showComboList = value;
        });
    },
    methods:{
        handleTyped:function(val){
            let tempData = this.data;
            
            if(val.keyCode == 40){
                this.selectedItemIndex = 0;
                this.text = this.filteredData[this.selectedItemIndex].name;
                this.$refs['li-0'][0].focus();
            }else{
               
                this.filteredData = tempData.filter((item,i)=>{
                    if(item.name.toLowerCase() == val.text.toLowerCase()){
                        
                        this.selectedItemIndex = i;
                        this.$refs['li-0'][0].focus();
                        return true;
                    }else if(item.name.indexOf(val.text) > -1 || item.name.indexOf(val.text)==0){
                        // this.$refs['li-0'][0].focus();
                        return true;
                    }else{
                        return false;
                    }
                });
            }
        },
        handleClickSelectItem:function(item){
            this.text = item.name;
            this.selectedItemIndex = this.filteredData.indexOf(item);
        },
        handleDoubleClickSelectItem(item){
            this.text = item.name;
            this.$root.eventObserver.broadcast('ComboInput','combo',item);
            
            this.selectedItemIndex = this.filteredData.indexOf(item);
            this.$refs['combo-search-input'].$el.children[0].focus();
        },
        handleKeyUp:function(e){
            if(e.keyCode==40){
                if(e.srcElement.nextSibling){
                    this.selectedItemIndex++;
                    this.text = this.filteredData[this.selectedItemIndex].name;
                    e.srcElement.nextSibling.focus();
                }
            }else if(e.keyCode == 38){
                if(e.srcElement.previousSibling){
                    this.selectedItemIndex--;
                    this.text = this.filteredData[this.selectedItemIndex].name;
                    e.srcElement.previousSibling.focus();
                }
            }
        }
    }
}
</script>
<style>
.combo-list{
    margin: 0px;
    padding: 0px;
    list-style: none;
}
.combo-list li{
    background-color:#cfffef;
}
.combo-list li:focus{
    background-color:darkslategray;
    color:#fff;
    outline: none;
}
</style>


