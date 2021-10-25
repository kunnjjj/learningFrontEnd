const joke=require("give-me-a-joke");
const col=require("colors");
joke.getRandomDadJoke (function(joke) {
    console.log(joke.rainbow);
});