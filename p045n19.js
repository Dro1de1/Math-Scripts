const balls = ['a1','a2','a3','b1','b2']
const result = []
const [e1, e2, e3] = [[],[],[]];
const log = console.log;
for (x of balls) {

    for (y of balls) {
        if (!(x==y)) {
            
            for (z of balls) {
                if (!(z==y || z==x)) {
                    result.push([x,y,z]);
                }
            }
        }
    }
}
for (a of result) {
    a.sort();
}
result.sort();

log(result);
log(result.length);

// e1
for (b of result) {
    let count = 0;
    for (c of b) {
        if (c.startsWith("b")) count++;
    }
    if (count >= 2) e1.push(b);
}
log(`\ne1: ${e1.length}`);log(e1);

//e2
for (b of result) {
    let count = 0;
    for (c of b) {
        if (c.startsWith("a")) count++;
    }
    if (count == 3) e2.push(b);
}
log(`\ne2: ${e2.length}`);log(e2);

//e3
for (b of result) {
    let count = 0;
    for (c of b) {
        if (c.startsWith("a")) count++;
    }
    if (count > 1) e3.push(b);
}
log(`\ne3: ${e3.length}`);log(e3);
