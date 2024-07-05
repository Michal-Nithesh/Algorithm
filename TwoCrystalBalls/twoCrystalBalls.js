function twoCrystalBall(Breaks) {
    const jumpAmount = Math.floor(Math.sqrt(Breaks.length));
    let i = jumpAmount;
    for (; i < Breaks.length; i += jumpAmount) {
        if (Breaks[i]) {
            break;
        }
    }

    i -= jumpAmount;
    for (let j = 0; j < jumpAmount && i < Breaks.length; ++j, ++i) {
        if (Breaks[i]) {
            return i;
        }
    }
    return -1;
}

const floors = [false, false, true, true, true, false];
console.log(twoCrystalBall(floors));