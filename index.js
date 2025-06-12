    const patterns = {
      2: /^[01]+$/i,
      8: /^[0-7]+$/i,
      10: /^\d+$/i,
      16: /^[0-9a-f]+$/i,
    };

    function validateInput(input, base) {
      const regex = patterns[base];
      return regex ? regex.test(input.trim()) : false;
    }

    function convert(event) {
      if (event) event.preventDefault();
      const input = document.getElementById("inputNumber").value.trim();
      const base = parseInt(document.getElementById("inputBase").value);
      const errorDiv = document.getElementById("error");
      const outputSection = document.getElementById("outputSection");

      errorDiv.textContent = "";
      outputSection.style.display = "none";

      if (input === "") {
        errorDiv.textContent = "Please enter a number.";
        return;
      }

      if (!validateInput(input, base)) {
        errorDiv.textContent = `Invalid number for base ${base}.`;
        return;
      }

      const decimal = parseInt(input, base);

      if (isNaN(decimal)) {
        errorDiv.textContent = "Conversion error. Please check your input.";
        return;
      }

      document.getElementById("binaryResult").textContent = decimal.toString(2);
      document.getElementById("decimalResult").textContent = decimal.toString(10);
      document.getElementById("octalResult").textContent = decimal.toString(8);
      document.getElementById("hexaResult").textContent = decimal.toString(16).toUpperCase();

      outputSection.style.display = "block";
    }

    // Attach form submit event
    document.getElementById("converterForm").addEventListener("submit", convert);


