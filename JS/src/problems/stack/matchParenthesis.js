
export function match() {
    let str = "{}()";
    if (str.length % 2 !== 0) {
        console.log("False")
        return false;
    }
    let length = str.length; 
    let stack = new Stack(length);
    for(let i=0;i<length;i++){
        if(isReverse(str[i])){
            if(!isPatternMatching(stack.pop(), str[i])){
                return false;
            };
        }
        else{
            stack.push(str[i]);

        }
    }
    return true
}

function isReverse(val){
    return val ===')' || val ==='}' || val ===']';
}

function isPatternMatching(a, b) {
    if (a === '[')
        return b === ']';
    if (a === '(')
        return b === ')'
    if (a === '{')
        return b === '}'
    else return false;

}
