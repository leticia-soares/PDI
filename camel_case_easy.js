main();

function camelcase(s) {
    // Write your code here
    const strArr = s.split(/(?=[A-Z])/)
    return  strArr.length ;

}

function main() {
    const s = 'saveChangesInTheEditor';

    const result = camelcase(s);

    console.log(result)
}
