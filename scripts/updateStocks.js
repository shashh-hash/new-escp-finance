const fs = require('fs');
const https = require('https');

// Function to fetch data from URL
function fetchData(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => {
                try {
                    resolve(JSON.parse(data));
                } catch (e) {
                    reject(e);
                }
            });
        }).on('error', reject);
    });
}

async function updateStockData() {
    const stockData = {
        lastUpdated: new Date().toISOString(),
        stocks: []
    };

    try {
        // Fetch S&P 500, NASDAQ, DOW from Yahoo Finance API alternative
        // Using a free financial API - Alpha Vantage (you'll need to sign up for free API key)
        // For now, using placeholder - you can add your API key

        // Fetch Gold price from free API
        try {
            const goldData = await fetchData('https://api.metals.live/v1/spot/gold');
            if (goldData && goldData[0]) {
                stockData.stocks.push({
                    symbol: 'GOLD',
                    value: goldData[0].price.toFixed(2),
                    change: '+0.00%',
                    positive: true,
                    type: 'metal'
                });
            }
        } catch (err) {
            console.log('Gold fetch failed:', err.message);
        }

        // Fetch Silver price
        try {
            const silverData = await fetchData('https://api.metals.live/v1/spot/silver');
            if (silverData && silverData[0]) {
                stockData.stocks.push({
                    symbol: 'SILVER',
                    value: silverData[0].price.toFixed(2),
                    change: '+0.00%',
                    positive: true,
                    type: 'metal'
                });
            }
        } catch (err) {
            console.log('Silver fetch failed:', err.message);
        }

        // For indices, you would need a paid API or web scraping
        // Adding placeholders that maintain current values
        const currentData = JSON.parse(fs.readFileSync('./src/data/stockData.json', 'utf8'));
        const indexStocks = currentData.stocks.filter(s => s.type === 'index' || s.type === 'commodity');
        stockData.stocks.push(...indexStocks);

        // Write updated data
        fs.writeFileSync(
            './src/data/stockData.json',
            JSON.stringify(stockData, null, 2)
        );

        console.log('Stock data updated successfully at', stockData.lastUpdated);
    } catch (error) {
        console.error('Error updating stock data:', error);
        process.exit(1);
    }
}

updateStockData();
