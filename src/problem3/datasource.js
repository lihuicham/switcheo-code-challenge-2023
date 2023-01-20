// Datasource API 
// - Datasource.getPrices() that returns a Promise 
// - price.mid() returns midPoint of sell and buy 
// - price.quote() returns a substring of currency 

class Datasource {
    constructor(url) {
      this.url = url
    }

    async getPrices() {
        try {
          const response = await fetch(this.url);
          if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
          }
          const data = await response.json();

          return data.prices.map(price => new Price(price.buy, price.sell, price.id, price.pair, price.timestamp));
        }
        catch (error) {
          console.error(`Error message: ${error}`);
        }
    }
}

class Price {
  constructor(buy, sell, id, pair, timestamp) {
    this.buy = buy;
    this.sell = sell;
    this.id = id;
    this.pair = pair; 
    this.timestamp = timestamp;
  }

  mid() {
    const midprice =  (this.buy + this.sell) / 200;
    return midprice;
  }

  quote() {
    const substring = this.pair.substring(3, 6);
    return substring;
  }
}

ds = new Datasource('https://my-json-server.typicode.com/lihuicham/price-api/data');

// Testing - uncomment below code to check output in console 

// ds.getPrices()
//     .then(prices => {
//         prices.forEach(price => {
//             console.log(`Mid price for ${ price.pair } is ${ price.mid() } ${ price.quote() }.`);
//         });
//     }).catch(error => {
//         console.err(error);
//     });


