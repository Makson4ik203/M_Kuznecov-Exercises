let atlyginimai = [824.25, 1225.12, 459.16, 1500];

let naujasAtliginimas = (esamasAtlyginimas) => {
    if (esamasAtlyginimas > 1000) {
        return (esamasAtlyginimas * 1.05).toFixed(2);
    } else {
        return (esamasAtlyginimas * 1.1).toFixed(2);
    }
};

let naujiAtlyginimai = [];

for (let i = 0; i < atlyginimai.length; i++) {
    naujiAtlyginimai.push(naujasAtliginimas(atlyginimai[i]));
}

console.log("Atlyginimas iki:", atlyginimai.join(", "));
console.log("Atlyginimas po:", naujiAtlyginimai.join(", "));
