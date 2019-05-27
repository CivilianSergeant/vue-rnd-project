class EventObserver{

    subscribe(topic,action){
        this.listeners.map((observer)=>{
            if(observer[topic] != undefined){ 
                observer['eventListener'] = action;
            }
        });
        
    }

    register(obj){
        if(this.listeners){
            this.listeners.push(obj);
        }else{
            this.listeners = [];
            this.listeners.push(obj);
        }
    }
    
    broadcast(topic,option,value){
        this.listeners.map((observer)=>{
            if(observer[topic] != undefined){ 
               observer['eventListener'](topic,option,value);
               //observer[topic][option]=value;
            }
        });
    }
}

export default EventObserver;