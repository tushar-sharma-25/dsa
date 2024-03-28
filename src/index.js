import { Stack } from "./ADT/stack.js";

(() => {
    SimplifyPath('/../')

})()
/**
 * 
 * @param {string} path 
 * @returns {string}
 */
function SimplifyPath(path){
    let stack =  new Stack(path.length);
    let pathArray =  path.split('/');
    for(let i =0;i<pathArray.length;i++){
        if(pathArray[i]==='.' || pathArray[i]===''){
            continue;
        }
        else if(pathArray[i]==='..'){
            stack.pop();
        }
        else{
            stack.push(pathArray[i]);
        }
    }
    
    
   return stack.print();
    

}