const metascraper = require('metascraper')([
    // require('metascraper-author')(),
    // require('metascraper-date')(),
    //require('metascraper-description')(),
    require('metascraper-image')(),
    require('metascraper-logo')(),
    require('metascraper-logo-favicon')(),
    // require('metascraper-clearbit-logo')(),
    // require('metascraper-publisher')(),
    require('metascraper-title')(),
    require('metascraper-url')()
  ])
  const got = require('got')
  const _ = require('lodash')

 
 /**
   * get metadata using meta-scraper
   * @param targetUrl
   * @returns {Promise.<*>}
   */
  async function getMetaScraper(targetUrl) {

    try {
      const {body: html, url} = await got(targetUrl,{timeout:5000})

      let data = await Promise.all([
        //get meta-data
        new Promise(async (rs, rj) => {
          try {
            const metadata = await metascraper({html, url})
            rs(metadata)
          } catch (e) {
            rs(e)
          }
        })
        /*//get keywords using cheerio
        new Promise((rs,rj)=>{
          //const $ = cheerio.load(html);
          let keywords = html('meta[name="keywords"]').attr('content')
          return rs(keywords || [])
        })*/
      ])

      let metadata = _.extend({}, data[0])

      console.log(`metadata`, metadata)

      return Promise.resolve({metadata, html})
    } catch (e) {

      return Promise.reject(e)
    }
  }

  getMetaScraper("https://www.linkedin.com/company/promethean/")