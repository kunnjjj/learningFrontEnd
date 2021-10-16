function fakePromise() {
  return new Promise((resolve, reject) => {

        let rand=Math.random();
        if(rand < 0.5)
        {
            resolve("i got resolved");
        }
        else
        {
            reject("i got rejected");
        }
  });
}

const res = fakePromise();

res.then((data) => {
    console.log("resolved");
    console.log(data);
})
.catch((data) => {
    console.log("rejected");
    console.log(data);
});
