function changeColor(delay, color) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let body = document.querySelector("body");

      body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
}



// we use try and catch when we are using debudding async functions , rejecting promises
/*
    async func()
    {
        try{
            await f1();
        }
        catch(e)
        {
            console.log("error");
            console.log(e);
        }
    }

*/
async function RAINBOW()
{
    await changeColor(1000,"red");
    await changeColor(1000, "purple");
    await changeColor(1000, "yellow");
}
RAINBOW();
// function rainbow() {
//   const res = changeColor(1000, "red");
//   res
//     .then(() => {
//        return changeColor(1000, "yellow");
//     //   return new Promise();
//     })
//     .then(() => {
//       return changeColor(1000, "black");
//     //   return new Promise();
//     })
//     .then(() => {
//       return changeColor(1000, "purple");

//     //   return new Promise();
//     })
//     .catch(() => {
//       console.log("something went wrong");
//     });
// }

// rainbow();
