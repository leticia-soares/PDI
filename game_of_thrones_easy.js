main();

function gameOfThrones(s) {
    let c = 0, count = {};
    
    for (let i = 0; i < s.length; i++) {
        if (!count[s[i]]) {
            count[s[i]] = 0;
        }
        count[s[i]]++;
    }
    
    for (let value of Object.values(count)) {
        if (value & 1) {
            c++;
        }
    }
    
    return c > 1 ? 'NO' : 'YES';
}

function main() {
    const s = 'aaabbbb';
    const result = gameOfThrones(s);
    console.log(result)
}