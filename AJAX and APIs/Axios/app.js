// axios({ method: "get", url: "https://api.cryptonator.com/api/ticker/btc-usd" })
//   .then((res) => {
//     console.log(res);
//     console.log(res.data.ticker.price);
//   })
//   .catch((e) => {
//     console.log("error occured", e);
//   });

async function getData() {
  try {
    let res = await axios("https://api.cryptonator.com/api/ticker/btc-usd");
    console.log(res);
    console.log(res.data.ticker.price);
  } catch (e) {
    console.log("error occured", e);
  }
}
getData();
