main();

function breakingRecords(scores) {
    let best = 0;
    let worst = 0;
    let bestScore = scores[0];
    let worstScore = scores[0];

    for(let i = 1; i < scores.length; i++) {
        if (scores[i] > bestScore) {
            bestScore = scores[i];
            best++;
            continue;
        }
        if (scores[i] < worstScore) {
            worstScore = scores[i]
            worst++;
            continue;
        }
    }
    return [best, worst];
}

function main() {


    const scores = [10,5,20,20,4,5,2,25,1]

    const result = breakingRecords(scores);

    console.log(result)
}