function convert() {
    let value = document.getElementById("inputValue").value;
    let type = document.getElementById("conversionType").value;
    let resultText = "";

    if (value === "") {
        document.getElementById("result").innerText = "Please enter a value.";
        return;
    }

    let num = Number(value);

    if (type === "c2f") {
        let f = (num * 9/5) + 32;
        resultText = num + " °C = " + f.toFixed(2) + " °F";
    }
    else if (type === "km2miles") {
        let miles = num * 0.621371;
        resultText = num + " km = " + miles.toFixed(2) + " miles";
    }
    else if (type === "m2ft") {
        let feet = num * 3.28084;
        resultText = num + " m = " + feet.toFixed(2) + " ft";
    }
    else if (type === "cm2in") {
        let inches = num * 0.393701;
        resultText = num + " cm = " + inches.toFixed(2) + " inches";
    }

    document.getElementById("result").innerText = resultText;
}
