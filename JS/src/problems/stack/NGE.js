export function NextGreaterElement(nums){
    let result = new Array(nums.length);
    let stack = new Stack(nums.length);
    for(let i=nums.length-1;i>=0;i--){
        let temp = stack.peek();
        if(stack.getCurrentSize()===0){
            result[i] = -1;
        }
        else if(stack.getCurrentSize()>0 && stack.peek()>nums[i]){
            result[i] = stack.peek();
        }
        else{
            // keep poping stack until stack.peek > nums[i]
            while(stack.peek()<=nums[i] && stack.getCurrentSize()>0){
                stack.pop();
            }
            if(stack.isEmpty()){
                result[i] = -1;
            }
            else{
                result[i] = stack.peek();
            }

        }
        let val=  nums[i];
        stack.push(val);
    }
    return result;
}
