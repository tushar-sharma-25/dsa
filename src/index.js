import { Queue } from "./ADT/queue.js";

(() => {
    let ip =  new Queue(5);
    ip.enqueue(1);
    ip.enqueue(2);
    ip.enqueue(3);
    ip.enqueue(4);
    ip.enqueue(5);
    // let val = ip.dequeue();
    let op = reverseQueue(ip);
    op.print();
/**
 * input [1 2 3 4 5]
 * output [5 4 3 2 1]
 * 
 *  1 , 2,
 * 1 2 3 
 */
})()
/**
 * reverse a queue 
 * @param {Queue} queue 
 * @returns {Queue}
 */
function reverseQueue(queue){
    let temp = [];
    let result =  new Queue(queue.getCapacity());
    while(queue.getSize()>0){
        temp.push(queue.dequeue());
    }

    for(let i=temp.length-1;i>=0;i--){
        result.enqueue(temp[i]);
    }
    
   return result;
}