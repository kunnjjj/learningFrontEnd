

let req=new XMLHttpRequest();

req.onload= function()
{
    console.log("run succesfully");
    console.log(JSON.parse(this.responseText).ticker.price);
}
req.onerror=function()
{
    console.log("error");
}

req.open("GET","https://api.cryptonator.com/api/ticker/btc-usd");
req.send();
