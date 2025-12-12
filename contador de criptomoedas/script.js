const cryptoIdInput = document.getElementById('crypto-id');
const fetchDataButton = document.getElementById('fetch-data');
const cryptoInfoDiv = document.getElementById('crypto-info');
const cryptoNameH2 = document.getElementById('crypto-name');
const currentPriceSpan = document.getElementById('current-price');
const priceChange24hSpan = document.getElementById('price-change');
const marketCapSpan = document.getElementById('market-cap'); 
const high24hSpan = document.getElementById('high-24h');
const low24hSpan = document.getElementById('low-24h'); 
const totalSupplySpan = document.getElementById('total-supply');
const circulatingSupplySpan = document.getElementById('circulating-supply');

fetchDataButton.addEventListener('click', () => {
    const cryptoId = cryptoIdInput.value.trim().toLowerCase();
    
    if (cryptoId === '') {
        alert('Por favor, insira o ID da criptomoeda.');
        return;
    }

    const apiUrl = `https://api.coingecko.com/api/v3/coins/${cryptoId}`;
    fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erro na requisição para '${cryptoId}': ${response.status} ${response.statusText}`);
        }
        return response.json();
    })
    .then(data => {
        cryptoNameH2.textContent = data.name; 
        currentPriceSpan.textContent = `R$ ${data.market_data.current_price.brl.toLocaleString('pt-BR')}`;
        
        const priceChange24h = data.market_data.price_change_percentage_24h_in_currency.brl;
        priceChange24hSpan.textContent = `${priceChange24h ? priceChange24h.toFixed(2) : 'N/A'}%`;
        marketCapSpan.textContent = `R$ ${data.market_data.market_cap.brl.toLocaleString('pt-BR')}`;
        high24hSpan.textContent = `R$ ${data.market_data.high_24h.brl.toLocaleString('pt-BR')}`;
        low24hSpan.textContent = `R$ ${data.market_data.low_24h.brl.toLocaleString('pt-BR')}`;
        totalSupplySpan.textContent = 
            data.market_data.total_supply ? data.market_data.total_supply.toLocaleString('pt-BR') : 'N/A';
        circulatingSupplySpan.textContent = 
            data.market_data.circulating_supply ? data.market_data.circulating_supply.toLocaleString('pt-BR') : 'N/A';
        cryptoInfoDiv.style.display = 'block';
    })
    .catch(error => {
        console.error('Erro ao obter dados da criptomoeda:', error);
        alert('Erro ao obter dados da criptomoeda. Verifique o ID e tente novamente.');
        cryptoInfoDiv.style.display = 'none';
    });
});