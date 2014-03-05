function countWords(inputWords) {
    return inputWords.reduce(function(wordCounter, word) {
        // My solution (solves the task)
        // if(!wordCounter.hasOwnProperty(word)){
        // wordCounter[word] = 1;
        // } else {
        // wordCounter[word]++;
        // }
        // return wordCounter;

        // Official solution
        wordCounter[word] = ++wordCounter[word] || 1; // increment or initialize to 1
        return wordCounter;
    }, {});
}

module.exports = countWords;
