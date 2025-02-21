// **📌 切換顯示不同計算器**
function showCalculator(type) {
    document.getElementById("carbon_calculator").style.display = (type === "carbon") ? "block" : "none";
    document.getElementById("engineering_calculator").style.display = (type === "engineer") ? "block" : "none";
}

// **📊 碳盤查計算**
function calculateCarbon() {
    let carbonInput = document.getElementById("carbon_input").value;
    let carbonAmount = parseFloat(carbonInput) || 0;
    document.getElementById("carbon_result").innerText = carbonAmount.toFixed(2);
}

// **🔢 工程計算機**
function initCalculator() {
    const buttons = [
        "7", "8", "9", "/",
        "4", "5", "6", "*",
        "1", "2", "3", "-",
        "0", ".", "=", "+"
    ];
    const calcDisplay = document.getElementById("calc_display");
    const calcButtons = document.getElementById("calculator_buttons");

    buttons.forEach(btn => {
        let button = document.createElement("button");
        button.innerText = btn;
        button.onclick = function() { handleCalculatorInput(btn) };
        calcButtons.appendChild(button);
    });
}

let currentExpression = "";
function handleCalculatorInput(input) {
    if (input === "=") {
        try {
            currentExpression = eval(currentExpression).toString();
        } catch {
            currentExpression = "錯誤";
        }
    } else {
        currentExpression += input;
    }
    document.getElementById("calc_display").value = currentExpression;
}

// **初始化計算機按鈕**
document.addEventListener("DOMContentLoaded", initCalculator);
