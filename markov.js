const fs = require('fs');

var order = 5;
var ngrams = {};


try {
  var data = fs.readFileSync('./post.txt', 'utf8');
  console.log("titles", data)
} catch (err){
  console.log(err)
}

for (var i = 0; i <= data.length - order ; i++){
  var gram = data.substring(i, i + order);

  if (!ngrams[gram]){
    ngrams[gram] = [];
  }
    ngrams[gram].push(data.charAt(i + order));
}

//console.log(ngrams)

//firebase --> function --> twitter api 
function markov() {

  var currentGram = data.substring(0, order); //start from 0, 3
  var result = currentGram; //pick starting ngram and start that result 


  for (let i = 0 ; i < 100; i++){
    var possibilities = ngrams[currentGram]; //look up what are the possible next characeters based on the current gram
    console.log( "poss", possibilities) //undefined
    if (!possibilities){ //protection for if random runs out of possibilites
      break;
    }
    var next = possibilities[Math.floor(Math.random() * possibilities)];
    result += next;
    var len = result.length;
    currentGram = result.substring(len - order, len) //next gram is last 3 chars of the text 
    console.log(result)
  }

}

markov(data)

