const convertBtn = document.getElementById("convert");
const inputVal = document.getElementById("input");
const fromUnit = document.getElementById("fromunit");
const outputVal = document.getElementById("output");
const toUnit = document.getElementById("tounit");
const errorMsg = document.querySelector(".error");
const body = document.querySelector("body");
const darkModeToggle = document.getElementById("darkmode-toggle");

// Conversion factors
const conversionFactors = {
  cm: {cm:1, m: 0.01, km: 0.00001, in: 0.3937, ft: 0.0328, mi: 0.00000621371 },
  m: { m:1,cm: 100, km: 0.001, in: 39.3701, ft: 3.28084, mi: 0.000621371 },
  km: {km:1, cm: 100000, m: 1000, in: 39370.1, ft: 3280.84, mi: 0.621371 },
  in: {in:1, cm: 2.54, m: 0.0254, km: 0.0000254, ft: 0.0833333, mi: 0.0000157828 },
  ft: { ft:1,cm: 30.48, m: 0.3048, km: 0.0003048, in: 12, mi: 0.000189394 },
  mi: { mi:1,cm: 160934, m: 1609.34, km: 1.60934, in: 63360, ft: 5280 }
};

// Conversion function
function convert() {
  if (inputVal.value === "" || isNaN(inputVal.value)) {
    errorMsg.textContent = "Please enter a valid number";
    outputVal.value = "";
  } else {
    errorMsg.textContent = "";
    const from = fromUnit.value;
    const to = toUnit.value;
    const factor = conversionFactors[from][to];
    outputVal.value = (inputVal.value * factor).toFixed(4);
  }
}

// Event listeners
convertBtn.addEventListener("click", convert);
inputVal.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    convert();
  }
});

darkModeToggle.addEventListener("change", function() {
  if (this.checked) {
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
  }
});
