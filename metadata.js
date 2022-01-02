const fbScraper = require('scrape-fb-ogcache')

let url=`https://www.youtube.com/watch?v=hEmvxvC6BA4`
fbScraper(url,"323047194769763|sI0-qT1_2oJjDWICLz77wK8qZds",(res)=>{
    console.log(res)
})