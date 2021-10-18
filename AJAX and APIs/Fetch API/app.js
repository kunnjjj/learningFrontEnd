// console.log(fetch("https://api.cryptonator.com/api/ticker/btc-usd"));
// above returns us a promise so .then  can be used

// fetch("https://api.cryptonator.com/api/ticker/btc-usd")
// .then((res)=>{

//     console.log("successullllll");
//     console.log(res);
//     let E=res.json(); // waits for the whole response to parse and returns a promise
//     console.log(E);
//     return E;
// })
// .then((data)=>{
//     console.log("data",data);
// })
// .catch((err)=>
// {
//     console.log("we caught an error");
// });

async function getReq() {
  try {
    let res = await fetch("https://api.cryptonator.com/api/ticker/btc-usd");
    console.log(res);
    console.log("res aagya");
    let E = await res.json();
    console.log(E);
    console.log(E.ticker.price);
  } catch (e) {
    console.log("error aaya", e);
  }
}
getReq();
