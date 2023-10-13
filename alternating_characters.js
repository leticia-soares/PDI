main();

function alternatingCharacters(s) {
    // Write your code here
      s = s.split("")
      const N = s.length
      let res = 0
      for (let i = 0; i < N - 1; i++) {
        if (s[i] === s[i + 1]) {
           res++
        }
      }
  return res

}

function main() {

    const q = ['AAAA', 'BBBBB','ABABABAB','BABABA','AAABBB'];

    for (let i = 0; i < q.length; i++) {

        const result = alternatingCharacters(q[i]);

        console.log(result)
    }
}
