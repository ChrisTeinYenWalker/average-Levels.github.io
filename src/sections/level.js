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
    let el = document.getElementsByClassName('levels');
    for (let i=0; i < Grade.length; i++){//figure out better for statement
        // For each DOM element we iterate through, add the product of the element's value
        // and the percentage (Grade) to sum.
        sum += Grade[i] * parseFloat(el[i+1].value); //problem with calling i in parsefloat
    }
    return sum;
};

// Return the total number of grades inputed
function totals(){    
    let total = 0;
    for(let i=0; i < document.getElementsByClassName("levels").length; i++){
        total += parseFloat(document.getElementsByClassName("levels")[i].value) || 0;
    }
    return total
};


function adding(sum, numberOfGrades){
    return sum/numberOfGrades;
};


function awnser(){
    let amountofnumbers = totals();
    let finalnumber = totalamounts();
    if(amountofnumbers == 0){
        document.getElementById('test').innerHTML = "please try again";   
    }
    else{
        let average = adding(finalnumber, amountofnumbers);
        document.getElementById("test").innerHTML = average;
    }
};

function reset(){
    document.getElementById('reset').reset();
};