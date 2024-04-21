export class Queue{
   #queue;
   #currentSize;
   #capacity;
   
    constructor(size){
        this.#queue = [];
        this.#currentSize= 0;
        this.#capacity = size;
    }

    enqueue(val){
        if(this.#currentSize>=this.#capacity){
            throw new Error("queue is full");
        }
        else{
            this.#queue.push(val);
            this.#currentSize++;
        }
    }

    dequeue(){
        if(this.#currentSize===0){
            throw new Error("Queue is empty");
        }
        else{
            this.#currentSize--;
            let v= this.#queue.shift();
            return v;
        }        
    }

    getCapacity(){
        return this.#capacity;
    }

    getSize(){
        return this.#currentSize;
    }

    print(){
        console.log(this.#queue.toString());
    }
}