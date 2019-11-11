
function totalamounts(){
    var totalamount = [];

    let fp = document.getElementById("4p").value;
    fp *= 97.5;

    let f = document.getElementById("4").value;
    f *= 90.5;

    let fm = document.getElementById("4m").value;
    fm *= 83;

    let tp = document.getElementById("3p").value;
    tp *= 77.5;

    let t = document.getElementById("3").value;
    t *= 75;

    let tm = document.getElementById("3m").value;
    tm *= 72.5;

    let twop = document.getElementById("2p").value;
    twop *= 67.5;

    let two = document.getElementById("2").value;
    two *= 65;

    let twom = document.getElementById("2m").value;
    twom *= 62.5;

    let op = document.getElementById("1p").value;
    op *= 57.5;

    let o = document.getElementById("1").value;
    o *= 55;

    let om = document.getElementById('1m').value;
    om *= 52.5;

    let r = document.getElementById("R").value;
    r *= 50

    totalamount.push(fp, f, fm, tm, t, tp, twop, two, twom, op, o, om , r);
    return totalamount;
};

function totals(){
    var total = [];

    let fail = document.getElementById("R").value;    
    let one = document.getElementById("1").value;
    let oneminus = document.getElementById('1m').value;
    let oneplus = document.getElementById("1p").value;

    let twominus = document.getElementById("2m").value;
    let twon = document.getElementById("2").value;
    let twoplus = document.getElementById("2p").value;

    let threeminus = document.getElementById("3m").value;
    let three = document.getElementById("3").value;
    let threeplus = document.getElementById("3p").value;

    let fourminus = document.getElementById("4m").value;
    let fourplus = document.getElementById("4p").value;
    let four = document.getElementById("4").value;

     total.push(fourplus, four, fourminus, threeplus, three, threeminus, twoplus, twon, twominus, oneplus, one, oneminus, fail);  
     return total;
};

function adding(a, b){
    total = 0;
    amount = 0;
    for(let i=0; i < 13;){
        total += a[i];
        amount += b[i];
        i++;
    }
    return total / amount;
};

function convert(){
    let amountofnumbers = totals();
    let finalnumber = totalamounts();
    //let positive = check(amountofnumbers);
    if(1 === 1){
        let product = adding(finalnumber, amountofnumbers);
        //document.getElementById('test').innerHTML = product;
    }
    else{
        document.getElementById('test').innerHTML = "no";
    }
}

function check(value){
    for(let i = 0; i < 13; i++){ 
        if(value[i] > -1){
            return true;
        }
    }
};



