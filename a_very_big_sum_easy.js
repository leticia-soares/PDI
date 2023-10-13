main();


function aVeryBigSum(ar) {
    var i = 0;
    var total = 0;
    while (i < ar.length) {
        total += ar[i];
        i++;
    }
    return total;
}

function main() {

    const ar = [1000000001,1000000002,1000000003,1000000004,1000000005]
    const result = aVeryBigSum(ar);
    console.log(result)
}
