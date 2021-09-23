import fetch from 'node-fetch';

import { urls } from './urls.js';

async function main() {

  for (let i = 0; i < urls.length; i++) {
    const result = await fetch(urls[i], {
      "headers": {
        "accept": "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.9,hi;q=0.8,es;q=0.7,id;q=0.6,jv;q=0.5,de;q=0.4",
        "sec-ch-ua": "\"Chromium\";v=\"92\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"92\"",
        "sec-ch-ua-mobile": "?0",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "cross-site"
      },
      "method": "GET"
    });

    const data = await result.text();

    console.log(data);
  }
}

main().catch(console.error);
