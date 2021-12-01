let beeps = process.argv.slice(2).sort();
// sorts arguments on comand line and slices them

console.log(beeps);
let timer = 0
if (beeps === []) {
    //No numbers are provided
    return;
}
for (let i = 0; i < beeps.length; i++) {
    if (parseInt(beeps[i]) > 0 && beeps !== "" )
    //An input is a negative number & An input is not a number
    setTimeout(() => {
        process.stdout.write('\x07');
      }, parseInt(beeps[i]) * 1000);
};


