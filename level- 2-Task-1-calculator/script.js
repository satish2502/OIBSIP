document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("input");
    const output = document.getElementById("output");
    let currentInput = "";
    let currentOutput = "";

    // Function to update the display of the calculator
    const updateDisplay = () => {
        input.textContent = currentInput;
        output.textContent = currentOutput;
    };

    // Add click event listeners to the buttons of the calculator
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            const value = button.textContent;

            if (value === "Enter") {
                try {
                    currentOutput = eval(currentInput);
                    currentInput = currentOutput;
                } catch (error) {
                    currentOutput = "Error";
                }
            } else if (value === "Clear") {
                currentInput = "";
                currentOutput = "";
            } else if (value === "Del") {
                currentInput = currentInput.slice(0, -1);
            } else if (value === "Ans") {
                currentInput += currentOutput;
            } else {
                currentInput += value;
            }

            updateDisplay();
        });
    });
});
