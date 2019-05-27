class EventObserver{
    
    register(obj){
        if(this.listeners){
            this.listeners.push(obj);
        }else{
            this.listeners = [];
            this.listeners.push(obj);
        }
    }
}

export default EventObserver;