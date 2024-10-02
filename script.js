document.getElementById('exchange-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const giveCurrency = document.getElementById('giveCurrency').value;
    const receiveCurrency = document.getElementById('receiveCurrency').value;
    const amount = parseFloat(document.getElementById('amount').value);

    const exchangeRates = {
        rub: { thb: 0.35, usd: 0.013, usdt_bep20: 0.012, usdt_trc20: 0.012, ton: 0.01, usdt_ton: 0.012, btc: 0.000002 },
        thb: { rub: 2.85, usd: 0.03, usdt_bep20: 0.032, usdt_trc20: 0.032, ton: 0.03, usdt_ton: 0.032, btc: 0.00003 },
        usdt_bep20: { rub: 74, thb: 32, usd: 1, usdt_trc20: 1, ton: 0.98, usdt_ton: 1, btc: 0.000027 },
        usdt_trc20: { rub: 74, thb: 32, usd: 1, usdt_bep20: 1, ton: 0.98, usdt_ton: 1, btc: 0.000027 },
        ton: { rub: 73, thb: 31, usd: 0.98, usdt_bep20: 1.02, usdt_trc20: 1.02, usdt_ton: 1.02, btc: 0.000028 },
        usdt_ton: { rub: 74, thb: 32, usd: 1, usdt_bep20: 1, usdt_trc20: 1, ton: 0.98, btc: 0.000027 },
        btc: { rub: 3700000, thb: 125000, usd: 36000, usdt_bep20: 37000, usdt_trc20: 37000, ton: 35000, usdt_ton: 37000 }
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
