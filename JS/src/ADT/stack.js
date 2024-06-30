export class Stack{
     #stackArr;#currentSize;#maxSize ;
    constructor(size){
        this.#currentSize = 0;
        this.#maxSize = size
        this.#stackArr = [];
    }

    push(value){
        if(this.#currentSize>this.#maxSize){
        }
        else{
            this.#stackArr.push(value);
            this.#currentSize++;
        }
    }
    pop(){
        if(this.#currentSize<=0){
            console.log("Stack UnderFlow");
        }
        else{
            this.#currentSize--;
            return this.#stackArr.pop();
        }
    }
    peek(){
        if(this.isEmpty()){
            return undefined;
        }
        else{
            return this.#stackArr[this.#stackArr.length-1];
        }
    }
    print(){
        console.log(this.#stackArr.toString());
    }
    getMaxSize(){
        return this.#maxSize;
    }
    getCurrentSize(){
        return this.#currentSize;
    }
    isEmpty(){
        return this.#currentSize===0;
    }

}
// Test 

// (()=>{
// let stack = new Stack(5);
// stack.push(7);
// let x=  stack.isEmpty();
// let y=  stack.peek();
// console.log(x,y);
// })();