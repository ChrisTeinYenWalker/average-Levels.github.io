function totalamounts(){
    var totalamount = [];

    let fp = document.getElementById("4p").value*98.5;

    let f = document.getElementById("4").value*90.5;
    

    let fm = document.getElementById("4m").value*83

    let tp = document.getElementById("3p").value*77.5;

    let t = document.getElementById("3").value*75;

    let tm = document.getElementById("3m").value*72.5;

    let twop = document.getElementById("2p").value*67.5;

    let two = document.getElementById("2").value*65;

    let twom = document.getElementById("2m").value*62.5;

    let op = document.getElementById("1p").value*57.5;

    let o = document.getElementById("1").value*55;

    let om = document.getElementById('1m').value*52.5;

    let r = document.getElementById("R").value*47.5

    totalamount.push(fp, f, fm, tm, t, tp, twop, two, twom, op, o, om , r);
    return totalamount;
};

function totals(){
    var total = [];

    let fail = parseInt(document.getElementById("R").value);

    let one = parseInt(document.getElementById("1").value);
    let oneminus = parseInt(document.getElementById("1m").value);
    let oneplus = parseInt(document.getElementById("1p").value);

    let twominus = parseInt(document.getElementById("2m").value);
    let twon = parseInt(document.getElementById("2").value);
    let twoplus = parseInt(document.getElementById("2p").value);

    let threeminus = parseInt(document.getElementById("3m").value);
    let three = parseInt(document.getElementById("3").value);
    let threeplus = parseInt(document.getElementById("3p").value);

    let fourminus = parseInt(document.getElementById("4m").value);
    let fourplus = parseInt(document.getElementById("4p").value);
    let four = parseInt(document.getElementById("4").value);

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

