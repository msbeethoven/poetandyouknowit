const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const writeStream = fs.createWriteStream('post.txt');
//const puppeteer = require('puppeteer');
//const url = 'https://www.reddit.com/';
//const urls = ['https://www.reddit.com/', 'https://www.reddit.com/r/Maniac/']



request('https://www.reddit.com/','https://www.reddit.com/r/Maniac/', (error,
response, html) => {
  if (!error && response.statusCode == 200){
    const $ = cheerio.load(html);

    $('h2').each((index, element) => {
      const titles = $(element).text()
      console.log(titles)
      writeStream.write(`${titles} \n`)
    })
  }
})
// request(urls[1], (err, res, body) => {
//   //Load HTML body into cheerio
//   const $ = cheerio.load(body);
//   console.log( $('h2').html())
//   //Cheerio functions
// })

//list of promises to the array of urls 
// let promises = urls.map(url => rp(url))

// Promise.all(promises)
// .then(([...resolvedUrls])) => {
//     //resolvedUrls.forEach(url => url.html())
// })

// puppeteer
//   .launch()
//   .then(function(browser) {
//     return browser.newPage()
//   })
//   .then(function(page){
//     for (let i = 0; i < urls.length; i++){
//       const url = urls[i]
//       //console.log(urls.length)
//       //console.log("PAGE", page)
//       return page.goto(`${url}`)
//     }
//   })
//   .then(function(html){
//     cheerio('h2', html).each(function(){
//       console.log(cheerio(this).text())
//       writeStream.write(`${cheerio(this).text()} \n`)
//     })
//   })
//   .catch(function(err){
//     console.log(err)
//   })


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


