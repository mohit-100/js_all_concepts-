function counter(){

     state = {
        count : 0
     }

     function increment(){
        return   state.count += 1;
     }

     function decrement(){
         return  state.count--;
     }

     return {
        increment,
        decrement
     }
}

console.log(counter().increment())

