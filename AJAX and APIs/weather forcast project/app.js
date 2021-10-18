// axios("http://api.weatherapi.com/v1?q=paris");
// fetch("http://api.weatherapi.com/v1?key=1425360fe7b64596bb8220222211610&q=paris");
// fetch("http://api.weatherapi.com/v1/current.json?key=1425360fe7b64596bb8220222211610&q=London&aqi=no");

let d = document.createElement("div");
d.innerText = "hello";
let DD = document.querySelector("div");
DD.append(d);

let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  console.clear();
  let inp = document.getElementById("inp");
  if (inp == "") return;

  //   console.log(inp.value);
  let place = inp.value;
  let before =
    "http://api.weatherapi.com/v1/current.json?key=1425360fe7b64596bb8220222211610&q=";
  let after = "&aqi=yes";
  before += place;
  before += after;
  axios(before)
    .then((res) => {
        try
        {
            console.log("at this pt");
            console.log(res);
            console.log(res.data);
            console.log(res.data.location);
            console.log(res.data.current);
            console.log(res.data.current.condition.icon);
            // let src=res.current.condition;
        }
        catch(e)
        {
            console.log(e);
            console.log("error is found in intermediate steps");
        }

    //   let E = res.json();
    //   return E;
    })
    // .then((data) => {
    //   console.log(data);
    //   console.log(data.location);
    //   let divs = document.querySelectorAll("div div");
    //   console.log("here");
    //   for (let div of divs) {
    //     // div.remove();
    //     console.log(div);
    //   }
    //   //   return new Promise();
    // })
    .catch((e) => {
      console.log("we have found an error");
      console.log(e);
      console.log("enter correct city");
    });
});
