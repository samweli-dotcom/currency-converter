async function convertCurrency() {
  const amount = parseFloat(document.getElementById('amount').value);
  const fromCurrency = document.getElementById('fromCurrency').value;
  const toCurrency = document.getElementById('toCurrency').value;
  const resultDiv = document.getElementById('result');

  if (isNaN(amount) || amount <= 0) {
    resultDiv.innerText = "Please enter a valid amount.";
    return;
  }

  const url = `https://api.exchangerate.host/convert?from=${fromCurrency}&to=${toCurrency}&amount=${amount}`;

  try {
    resultDiv.innerText = "Converting...";
    const response = await fetch(url);
    const data = await response.json();

    if (data.success) {
      const converted = data.result.toFixed(2);
      resultDiv.innerText = `${amount} ${fromCurrency} = ${converted} ${toCurrency}`;
    } else {
      resultDiv.innerText = "Conversion failed. Try again.";
    }
  } catch (error) {
    resultDiv.innerText = "Error fetching exchange rates.";
    console.error(error);
  }
}
