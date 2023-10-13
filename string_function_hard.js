
main();

function maxValue(t) {
    // Write your code here
    
    let max_value=0;
    for(let i=0 ;i<t.length; i++){
        for(let j=i+1; j<=t.length; j++){
            const currentValue=t.substring(i,j);
            const output=check(currentValue,t);
            if(output>max_value){
                
                max_value=output
            }
        }
    }
    return max_value;
}
function check(str, t){
    let maxval=0;
    for (let i=0; i<=t.length-str.length; i++){
        if(t.substring(i,i + str.length)===str){
            maxval++
        }
    }
    return maxval*str.length;
}

function main() {
    const t = 'abcabcddd';
    const result = maxValue(t);
    console.log(result)
}
