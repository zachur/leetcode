var predictPartyVictory = function(senate) {
    const n = senate.length;
    const radiant = [];
    const dire = [];
    for (let i = 0; i < n; i++) {
        if (senate[i] === 'R') {
            radiant.push(i);
        } else {
            dire.push(i);
        }
    }
    while (radiant.length > 0 && dire.length > 0) {
        const r = radiant.shift();
        const d = dire.shift();
        if (r < d) {
            radiant.push(r + n);
        } else {
            dire.push(d + n);
        }
    }
    return radiant.length > 0 ? "Radiant" : "Dire";
};

let senate_a = "RD";
let senate_b = "RDD";

console.log(predictPartyVictory(senate_a));
console.log(predictPartyVictory(senate_b));