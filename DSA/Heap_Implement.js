class Maxheap {
     arr = [];
     size ;
     total_size; // total size of a arr
   //   index;

     constructor(n){
        this.arr;
        this.size = 0 ;
        this.total_size = n;
     }

      insert = (value)=>{
       if(this.size === this.total_size){
         console.log("heap OverFlow\n");
         return ;
       }

         this.arr[this.size] = value;
          let index = this.size;
          this.size++;

          while(index> 0 && this.arr[Math.floor((index - 1) / 2)]<this.arr[index]){

             let parent = Math.floor((index - 1) / 2);// in Math.floor we does not used this.Math beascuse
                                                      // it build in global object. by js;
      // swap
      [this.arr[parent], this.arr[index]] = [this.arr[index], this.arr[parent]];
       
       index = parent;
          
   }
          console.log("is insert into heap\n",this.arr[index]);
      }
            print = ()=>{
               for(let i = 0 ;i < this.size ; i++){
                    console.log(this.arr[i]," ");
                    console.log("\n");
               }
            }
}

const Heap = new Maxheap(5);


Heap.insert(4);
Heap.insert(5);
Heap.insert(8)
Heap.insert(9);
Heap.print();