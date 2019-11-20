const Grade = [
    98.5,
    90.5,
    83,
    77.5,
    75,
    72.5,
    67.5,
    65,
    62.5,
    57.5,
    55,
    52.5,
    47.5
]

// Function to return the sum of the percentages
function totalamounts(){
    // Get the sum
    let sum = 0;
    for (let i=0; i<document.getElementsByClassName("levels").length; i++) {
        let el = document.getElementsByClassName("levels")[i];
        // For each DOM element we iterate through, add the product of the element's value
        // and the percentage (Grade) to sum.
        sum += Grade[i] * parseFloat(el.value);
    }
    return sum;
};

// Return the total number of grades inputed
function totals(){    
    let total = 0;
    for (let i=0; i<document.getElementsByClassName("levels").length; i++) {
        total += parseFloat(document.getElementsByClassName("levels")[i].value);
    }
    return total
};



function adding(sum, numberOfGrades){
    return sum/numberOfGrades;
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
    let average = adding(finalnumber, amountofnumbers);
    document.getElementById("test").innerHTML = average;
};

function reset(){
    document.getElementById('reset').reset();
}

