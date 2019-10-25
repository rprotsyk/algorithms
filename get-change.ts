function getChange(coins) {
    const coinsVars = [1, 5, 10, 20];
    
    let res = [];
    res.push({'20': Math.floor(coins / coinsVars[3])});
    let diff = (coins - coinsVars[3] * res[0]['20']);
    res.push({'10': Math.floor(diff / coinsVars[2])});
    diff = (coins - coinsVars[3] *res[0]['20'] - coinsVars[2] *res[1]['10']);
    res.push({'5': Math.floor(diff / coinsVars[1])});
    diff = (coins -coinsVars[3] *res[0]['20']  - coinsVars[2]* res[1]['10'] - coinsVars[1] * res[2]['5']);
    res.push({'1': Math.floor(diff / coinsVars[0])});
    return res;
}

console.log(getChange(199));