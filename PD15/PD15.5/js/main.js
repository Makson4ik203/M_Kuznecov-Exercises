function rikiuotiMasyva(masyvas) {
    masyvas.sort(function(a, b) {
        return a - b;
    });
}

var manoMasyvas = [5, 2, 8, 1, 6];

rikiuotiMasyva(manoMasyvas);

console.log(manoMasyvas);
