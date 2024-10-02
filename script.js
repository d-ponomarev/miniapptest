document.getElementById('exchange-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const giveCurrency = document.getElementById('giveCurrency').value;
    const receiveCurrency = document.getElementById('receiveCurrency').value;
    const amount = parseFloat(document.getElementById('amount').value);

    // Пример курсов обмена
    const exchangeRates = {
        rub: { thb: 0.35, usd: 0.013, usdt: 0.012 },
        thb: { rub: 2.85, usd: 0.03, usdt: 0.032 },
        usd: { rub: 75, thb: 33, usdt: 1 },
        usdt: { rub: 74, thb: 32, usd: 1 }
    };

    let result = 0;

    if (exchangeRates[giveCurrency] && exchangeRates[giveCurrency][receiveCurrency]) {
        result = amount * exchangeRates[giveCurrency][receiveCurrency];
    } else if (exchangeRates[receiveCurrency] && exchangeRates[receiveCurrency][giveCurrency]) {
        result = amount / exchangeRates[receiveCurrency][giveCurrency];
    }

    document.getElementById('calculationResult').innerText = `Результат обмена: ${result.toFixed(2)} ${receiveCurrency.toUpperCase()}`;

    const resultDiv = document.getElementById('result');
    resultDiv.classList.remove('hidden');
    resultDiv.classList.add('show');
});

document.getElementById('submitRequestBtn').addEventListener('click', function() {
    alert('Заявка отправлена');
});
