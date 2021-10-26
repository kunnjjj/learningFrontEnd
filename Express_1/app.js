const { query } = require("express");
var express = require("express");
var app = express();
// console.dir(app);

app.listen(3000, () => {
  console.log("listening on port 3000");
});

app.get('/cats',(req,res)=>
{
    // req("got a req");
    res.send("hello");
});
app.get('/search/:something',(req,res)=>
{
    let {something}=req.params;
    console.log(something);
    res.send(`you have seached for ${something}`);
});

app.use(() => {
    console.log("something is happening");
  });

