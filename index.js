const rp = require('request-promise');
const cheerio = require('cheerio');
const puppeteer = require('puppeteer');
const url = 'https://www.reddit.com/r/ambien/';


// try {
//   rp(url)
//   function(html) {
//     console.log(html)
//   }

// } catch (err) {
//   console.log(err)
// }

//first successful try 
// rp(url)
//     .then(function (html) {
//         // Process html...
//         // console.log(cheerio('big > a', html).length)
//         // console.log(cheerio('big > a', html))
//         console.log(html)
//     })
//     .catch(function (err) {
//         // Crawling failed...
//         console.log(err)
//     });

puppeteer
  .launch()
  .then(function(browser) {
    return browser.newPage()
  })
  .then(function(page){
    return page.goto(url).then(function(){
      return page.content();
    })
  })
  .then(function(html){
    cheerio('h2', html).each(function(){
      console.log(cheerio(this).text())
    })
  })
  .catch(function(err){
    console.log(err)
  })

