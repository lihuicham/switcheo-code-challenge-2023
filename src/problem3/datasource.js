// Datasource API 
// - Datasource.getPrices() that returns a Promise 
// - price.mid() returns midPoint of sell and buy 
// - price.quote() returns a substring of currency 

class Datasource {
    constructor(url) {
      this.url = url  // a Datasource instance has its own url property 
    }

    // getPrices() - returns an array of prices in Promise
    async getPrices() {       
        try {
          const response = await fetch(this.url);  // use the fetch API 
          if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);  // throw HTTP error if any 
          }
          const data = await response.json();   // fulfilled handler returns a JSON object (alternatively, can be written as promise.then())

          // data.prices is an array of prices
          // however, a Price instance is instantiated for each price object in the prices array with array.map() function. 
          // this mapping is needed to allow price.mid() and price.quote() to be called later
          return data.prices.map(price => new Price(price.buy, price.sell, price.id, price.pair, price.timestamp)); 
        }
        catch (error) {
          console.error(`Error message: ${error}`);  // rejected handler log error message in console. 
        }
    }
}

class Price {
  // a Price object will have buy, sell, id, pair and timestamps as properties 
  constructor(buy, sell, id, pair, timestamp) {
    this.buy = buy;
    this.sell = sell;
    this.id = id;
    this.pair = pair; 
    this.timestamp = timestamp;
  }

  // mid() - returns the midpoint value of sell and buy, divided by 100 
  mid() {
    const midprice =  (this.buy + this.sell) / 200;
    return midprice;
  }

  // quote() - returns the currency of the trade pair, using substring
  quote() {
    const substring = this.pair.substring(3, 6);
    return substring;
  }
}

ds = new Datasource('https://my-json-server.typicode.com/lihuicham/price-api/data');

// Testing - uncomment below code to check output in console 

ds.getPrices()
    .then(prices => {
        prices.forEach(price => {
            console.log(`Mid price for ${ price.pair } is ${ price.mid() } ${ price.quote() }.`);
        });
    }).catch(error => {
        console.err(error);
    });


