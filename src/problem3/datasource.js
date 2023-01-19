// Datasource API 
// - Datasource.getPrices() that returns a Promise 
// - price.mid() returns midPoint of sell and buy 
// - price.quote() returns a substring of currency 

class Datasource {
    constructor() {

    }

    async getPrices() {
        try {
          const response = await fetch('https://my-json-server.typicode.com/lihuicham/price-api/data');
          if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
          }
          const data = await response.json();
          return data.prices;
        }
        catch (error) {
          console.error(`Error message: ${error}`);
        }
    }
}


ds = new Datasource();
ds.getPrices()
    .then(prices => {
        prices.forEach(price => {
            console.log(`Mid price for ${ price.pair } is ${ price.mid() } ${ price.quote() }.`);
        });
    }).catch(error => {
        console.error(error);
    });

