
main();


function extraLongFactorials(n) {
  n = BigInt(n)
  let num = BigInt(1)
  for (let i = n; i > 1; i --) {
    num *= i;
  }
  return num.toString();
}

function main() {
    // Altere o dado aqui
    const n = 25;

    console.log(extraLongFactorials(n));
}