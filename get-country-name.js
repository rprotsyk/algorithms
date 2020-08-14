const https = require('https');
async function getCountryName(code) {
    // write your code here
    // API endpoint: https://jsonmock.hackerrank.com/api/countries?page=<PAGE_NUMBER>
    let page = 0;
    let name = null;
    let response = await doRequest(`https://jsonmock.hackerrank.com/api/countries?page=${page}`);
    let data = response.data;
    let foundCode = data.find(d => d.alpha2Code === code);
    name = foundCode ? foundCode.name: "";
    while(!foundCode) {
       page = page + 1;
       response = await doRequest(`https://jsonmock.hackerrank.com/api/countries?page=${page}`);
       data = response.data;
       foundCode = data.find(d => d.alpha2Code === code);
       name = foundCode ? foundCode.name: "";
    }

    return name;
}

function doRequest(url) {
  return new Promise ((resolve, reject) => {
    https.get(url, (resp) => {
      let data = '';
    
      // A chunk of data has been recieved.
      resp.on('data', (chunk) => {
        data += chunk;
      });
    
      // The whole response has been received. Print out the result.
      resp.on('end', () => {
       resolve(JSON.parse(data));
      });
    
    }).on("error", (err) => {
      console.log("Error: " + err.message);
    });
  }); 
}

async function main() {
  const name = await getCountryName('UA');
  console.log(name);
}

main();
function byteCount(s) {
  return encodeURI(s).split(/%..|./).length - 1;
}
console.log(byteCount('Señorita'));
console.log([...new Set([1,2,2, 9, 3 ,5 ,5, 5, 9])].sort())
