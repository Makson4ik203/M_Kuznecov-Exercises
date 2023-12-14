let num1 = 1997;
let num2 = 2018;

function arKeliamiejiMetai(metai) {
    return (metai % 4 === 0 && metai % 100 !== 0) || metai % 400 === 0;
}

for (let metai = num1; metai <= num2; metai++) {
    if (arKeliamiejiMetai(metai)) {
        console.log(metai);
    }
}
