const axios = require('axios');

let url=`https://duckduckgo.com/`

let headers = {
    'dnt': '1',
    'accept-encoding': 'gzip, deflate, sdch',
    'x-requested-with': 'XMLHttpRequest',
    'accept-language': 'en-GB,en-US;q=0.8,en;q=0.6,ms;q=0.4',
    'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36',
    'accept': 'application/json, text/javascript, */*; q=0.01',
    'referer': 'https://duckduckgo.com/',
    'authority': 'duckduckgo.com',
}


async function getToken(keywords){
    let res = await axios.get(url, {
        params: {
            q: keywords
        }
    })
    token = res.data.match(/vqd=([\d-]+)\&/)[1]

    return token;
}

async function GetImages(keywords){
    let reqUrl = url + 'i.js';

    let token = await getToken(keywords);
    console.log(token)

    let params = {
        "l": "wt-wt",
        "o": "json",
        "q": keywords,
        "vqd": token,
        "f": ",size:Medium,,license:Share",
        "p": "1"
    }

    let response = await axios.get(reqUrl, {
        params,
        headers
    })

    let data = response.data;

    console.log(data)
}

GetImages("loki")

