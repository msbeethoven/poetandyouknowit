const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
//const writeStream = fs.createWriteStream('post.txt');
var tumblr = require('tumblr.js');
const axios = require('axios');
var secrets = require('./secrets')

var client = tumblr.createClient(secrets);

let post = ''
fs.readFile('post.txt', 'utf8', function (err, data) {
  if (err) throw err;
  console.log("this is data", typeof data)
  post = data
  console.log("this is the first post", post)
  //return data
  createPost(data)
})

const createPost = (body) => {
  let line = body.split('\n').length
  let randomLine = Math.floor(Math.random() * line - 1);
  client.createTextPost(
    'whatreddit',
    {body: body.split('\n')[randomLine] },
    function (err, data, resp) {
      if (err){
        console.error(err)
      }
      //console.log(resp.body)
    }
  )
};

//works -- every three seconds but the same post over and over, not random
// const createPost = (body) => {
//   let line = body.split('\n').length
//   let randomLine = Math.floor(Math.random() * line - 1);
//   setInterval(() => client.createTextPost(
//     'whatreddit',
//     {body: body.split('\n')[randomLine] },
//     function (err, data, resp) {
//       if (err){
//         console.error(err)
//       }
//       //console.log(resp.body)
//     }
//   ), 3000)
// };
// setInterval(function(){
//   console.log("testing")
// }, 3000)

console.log("this is post", post)




//console.log("what is this", client.blogPosts)

client.userInfo(function (err, data) {
  if (err) {
    console.error(err)
  }
  data.user.blogs.forEach(function (blog) {
    //console.log("blog name?", blog.name); //whatreddit
    //console.log("this is data", data)
  });
});

// client.createTextPost(
//   'whatreddit',
//   {body: 'hello'},
//   function(err, data, resp) {
//     //console.log(resp.body)
//   }
// )

// const postAPost = () => async text => {
//   try {
//     const res = await axios.post('api.tumblr.com/v2/blog/whatreddit/posts')
//     console.log('what would res be', res)
//   } catch (err){
//     console.error(err)
//   }
// }


//var blog = new tumblr.Blog('whatreddit.tumblr.com', client);

// blog.text({limit: 2}, function(error, response) {
//   if (error) {
//     throw new Error(error);
//   }

//   console.log(response.posts);
// });

// var user = new tumblr.User(oauth);

// user.info(function(error, response) {
//   if (error) {
//     throw new Error(error);
//   }

//   console.log(response.user);
// });

// request('https://www.reddit.com/', (error,
// response, html) => {

//   if (!error && response.statusCode == 200){
//     const $ = cheerio.load(html);
//     let titles = []
//     $('h2').each((index, element) => {
//       var title = $(element).text()
//       writeStream.write(`${titles}`)
//       titles.push(title)
//     })
//     console.log('titles', titles)
//     return titles
//   }
// })

// const interval = setInterval(() => {
//   console.log('req', request())
//   request.put('https://stackathon-36be9.firebaseio.com/test.json', {
//  json: {
//    //text: request().join(' ')
//    text: titles.join(' ')
//  }
// }, (error, res, body) => {
//  if (error) {
//    console.error(error)
//    return
//  }
//  console.log(`statusCode: ${res.statusCode}`)
//  console.log(body)
// })
// }, 3000)
// clearInterval(interval);
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


