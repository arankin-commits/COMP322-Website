setTimeout(function() {
    let continueCalc = true;
    let resultList = [];
    let total = null;
    let min = null;
    let max = null;
    let avg = null;
    
    while (continueCalc) {
        let x = prompt("Enter the first number (x): ");
        let y = prompt("Enter the second number (y): ");
        let operator = prompt("Enter an operator (+, -, *, /, %): ");
        let result;
    
        // Checks if x and y are numbers
        if (isNaN(x) || isNaN(y)) {
            result = "wrong input number";
        }
        // Checks operator and performs calculations
        else if (operator === "+") {
            result = Number(x) + Number(y);
        }
        else if (operator === "-") {
            result = Number(x) - Number(y);
        }
        else if (operator === "*") {
            result = Number(x) * Number(y);
        }
        else if (operator === "/") {
            result = Number(x) / Number(y);
        }
        else if (operator === "%") {
            result = Number(x) % Number(y);
        }
        else {
            result = "computation error";
        }
    
        // Result table
        let table = document.getElementById("calcTable");
        let row = table.insertRow();
    
        let xCell = row.insertCell();
        let operatorCell = row.insertCell();
        let yCell = row.insertCell();
        let resultCell = row.insertCell();
    
        xCell.textContent = x;
        operatorCell.textContent = operator;
        yCell.textContent = y;
        resultCell.textContent = result;
    
        operatorCell.style.backgroundColor = "#f7ca88";
        operatorCell.style.fontWeight = "bold";
    
        resultList.push(result);
    
        continueCalc = confirm("Click OK to calculate again or Cancel to exit.");
    }
    
    let validNumbers = resultList.filter(item => typeof item === "number");
    
    min = Math.min(...validNumbers);
    max = Math.max(...validNumbers);
    total = validNumbers.reduce((acc, val) => acc + val, 0);
    let validNumbersCount = validNumbers.length;
    avg = validNumbersCount > 0 ? total / validNumbersCount : 0;
    
    // Summary table
    let table = document.getElementById("summaryTable");
    let row = table.insertRow();
    
    let minCell = row.insertCell();
    let maxCell = row.insertCell();
    let avgCell = row.insertCell();
    let totalCell = row.insertCell();
    
    minCell.textContent = min;
    maxCell.textContent = max;
    avgCell.textContent = avg;
    totalCell.textContent = total;
}, 100);
