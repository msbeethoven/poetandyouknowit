const fs = require('fs');

let order = 5;
let ngrams = {};

try {
  var data = fs.readFileSync('./post.txt', 'utf8');
  //console.log(data)
} catch (err){
  console.log(err)
}

for (let i = 0; i <= data.length - order ; i++){
  let gram = data.substring(i, i + order);

  if (!ngrams[gram]){
    ngrams[gram] = [];
  }
    ngrams[gram].push(data.charAt(i + order));
}

//console.log(ngrams)


function markov() {

  let currentGram = data.substring(0, order); //start from 0, 3
  let result = currentGram; //pick starting ngram and start that result 


  for (let i = 0 ; i < 15; i++){
    let possibilities = ngrams[currentGram]; //look up what are the possible next characeters based on the current gram
    //console.log( "poss", possibilities)
    if (!possibilities){ //protection for if random runs out of possibilites
      break;
    }
    let next = possibilities[Math.floor(Math.random() * possibilities.length)];
    result += next;
    let len = result.length;
    currentGram = result.substring(len - order, len) //next gram is last 3 chars of the text 
    console.log(result)
  }

}

markov(data)

