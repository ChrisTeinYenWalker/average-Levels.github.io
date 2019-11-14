
function totalamounts(){
    var totalamount = [];

    let fp = 0;
    fp += document.getElementById("4p").value;
    fp *= 98.5;

    let f = 0;
    f += document.getElementById("4").value;
    f *= 90.5;

    let fm = 0;
    fm += document.getElementById("4m").value;
    fm *= 83;

    let tp = 0;
    tp += document.getElementById("3p").value;
    tp *= 77.5;

    let t = 0;
    t = document.getElementById("3").value;
    t *= 75;

    let tm = 0;
    tm += document.getElementById("3m").value;
    tm *= 72.5;

    let twop = 0;
    twop += document.getElementById("2p").value;
    twop *= 67.5;

    let two = 0;
    two += document.getElementById("2").value;
    two *= 65;

    let twom = 0;
    twom += document.getElementById("2m").value;
    twom *= 62.5;

    let op = 0;
    op += document.getElementById("1p").value;
    op *= 57.5;

    let o = 0;
    o += document.getElementById("1").value;
    o *= 55;

    let om = 0;
    om += document.getElementById('1m').value;
    om *= 52.5;

    let r = 0;
    r += document.getElementById("R").value;
    r *= 47.5

    totalamount.push(fp, f, fm, tm, t, tp, twop, two, twom, op, o, om , r);
    return totalamount;
};

function totals(){
    var total = [];

    let fail = parseInt(document.getElementById("R").value);

    let one = 0;
    one += parseInt(document.getElementById("1").value);
    let oneminus = 0;
    oneminus += parseInt(document.getElementById("1m").value);
    let oneplus = 0;
    oneplus += parseInt(document.getElementById("1p").value);

    let twominus = 0;
    twominus += parseInt(document.getElementById("2m").value);
    let twon = 0;
    twon += parseInt(document.getElementById("2").value);
    let twoplus = 0;
    twoplus += parseInt(document.getElementById("2p").value);

    let threeminus = 0;
    threeminus += parseInt(document.getElementById("3m").value);
    let three = 0;
    three += parseInt(document.getElementById("3").value);
    let threeplus = 0;
    threeplus += parseInt(document.getElementById("3p").value);

    let fourminus = 0;
    fourminus += parseInt(document.getElementById("4m").value);
    let fourplus = 0;
    fourplus += parseInt(document.getElementById("4p").value);
    let four = 0;
    four += parseInt(document.getElementById("4").value);

    total.push(fourplus, four, fourminus, threeplus, three, threeminus, twoplus, twon, twominus, oneplus, one, oneminus, fail);  
    return total
};



function adding(a, b){
    total = 0;
    amount = 0;
    for(let i=0; i < a.length; i++){
        total += a[i];
        amount += b[i];
    }
    return total/amount;
};

function check(a){
    total = 0;
    for(let i=0; i < a.length; i++){
        total += a[i];
    }
    if(total === 0){
        return false;
    }
    else{
        return true
    }
}

function awnser(){
    let amountofnumbers = totals();
    let finalnumber = totalamounts();
    let product = adding(finalnumber, amountofnumbers); 
    if(check(finalnumber) === true){
        document.getElementById('test').innerHTML = product;
    }
    else if(check(finalnumber) === false){
        document.getElementById('test').innerHTML = "no";
    }
};

function reset(){
    document.getElementById('reset').reset();
}

