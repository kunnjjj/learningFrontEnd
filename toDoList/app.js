var btn = document.querySelector("#btn");
var ul = document.querySelector("#todo ul");
var inp = document.querySelector("input");
function swap(x, y) {}
btn.addEventListener("click", function () {
  {
    // code for enter
    let listItem = document.createElement("li");
    // console.log("clicked");
    // listItem.setAttribute("style", "margin-top:50px");
    // listItem.setAttribute
    let txt = inp.value;
    if (txt != "") {
      //   listItem.innerText = txt;
      // listItem.setAttribute("style", "background-color: pink");
      let div = document.createElement("span");
      div.innerText = txt;
      // listItem.innerText=txt;

      let up = document.createElement("button");

      up.setAttribute("class", "fas fa-arrow-up");
      up.setAttribute(
        "style",
        "position:absolute; left:250px;margin: 0px 1px 1px"
      );
      //   up.setAttribute("style","position:relative");
      let down = document.createElement("button");
      down.setAttribute("class", "fas fa-arrow-down");
      down.setAttribute(
        "style",
        "position:absolute; left:280px ;margin: 0px 1px 1px"
      );
      let trash = document.createElement("button");
      trash.setAttribute("class", "fa fa-trash");
      trash.setAttribute(
        "style",
        "position:absolute;left:310px; margin: 0px 1px 1px"
      );

      //   div.setAttribute("class","width-div");
      //   div.classList.add(".width-div");
      div.setAttribute(
        "style",
        "width:20vw;  display:inline; position:relative; left:10px"
      );
      listItem.append(div);
      //   listItem.append(div);
      listItem.append(up);
      listItem.append(down);
      listItem.append(trash);
      trash.addEventListener("click", () => {
        // listItem.innerText="i just got clicked";
        // console.log("i gott");
        listItem.remove();
      });
      up.addEventListener("click", (e) => {
        let par = up.parentElement;
        let lists = document.querySelectorAll("ul li");
        console.log(lists.length);
        for (let i = lists.length - 1; i >= 0; i--) {
          if (i > 0 && lists[i] === par) {
            console.log("hi");
            // swap(lists[i],lists[i-1]);
            let tmp = lists[i].childNodes[0].innerText;
            console.log(tmp);
            lists[i].childNodes[0].innerText =
              lists[i - 1].childNodes[0].innerText;
            lists[i - 1].childNodes[0].innerText = tmp;
            // lists[i]=lists[i-1];
            // lists[i-1]=tmp;
            break;
          }
        }
      });
      down.addEventListener("click", (e) => {
        let par = up.parentElement;
        let lists = document.querySelectorAll("ul li");
        console.log(lists.length);
        for (let i = 0; i + 1 < lists.length; i++) {
          if (lists[i] === par) {
            console.log("hi");
            // swap(lists[i],lists[i-1]);
            let tmp = lists[i].childNodes[0].innerText;
            console.log(tmp);
            lists[i].childNodes[0].innerText =
              lists[i + 1].childNodes[0].innerText;
            lists[i + 1].childNodes[0].innerText = tmp;
            // lists[i]=lists[i-1];
            // lists[i-1]=tmp;
            break;
          }
        }
      });
      
      ul.append(listItem);
      inp.value = "";
      console.log(ul);
    }
  }
});
// inp.addEventListener(""
inp.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    // code for enter
    let listItem = document.createElement("li");
    // console.log("clicked");
    // listItem.setAttribute("style", "margin-top:50px");
    // listItem.setAttribute
    let txt = inp.value;
    if (txt != "") {
      //   listItem.innerText = txt;
      // listItem.setAttribute("style", "background-color: pink");
      let div = document.createElement("span");
      div.innerText = txt;
      // listItem.innerText=txt;

      let up = document.createElement("button");

      up.setAttribute("class", "fas fa-arrow-up");
      up.setAttribute(
        "style",
        "position:absolute; left:250px;margin: 0px 1px 1px"
      );
      //   up.setAttribute("style","position:relative");
      let down = document.createElement("button");
      down.setAttribute("class", "fas fa-arrow-down");
      down.setAttribute(
        "style",
        "position:absolute; left:280px ;margin: 0px 1px 1px"
      );
      let trash = document.createElement("button");
      trash.setAttribute("class", "fa fa-trash");
      trash.setAttribute(
        "style",
        "position:absolute;left:310px; margin: 0px 1px 1px"
      );

      //   div.setAttribute("class","width-div");
      //   div.classList.add(".width-div");
      div.setAttribute(
        "style",
        "width:20vw;  display:inline; position:relative; left:10px"
      );
      listItem.append(div);
      //   listItem.append(div);
      listItem.append(up);
      up.addEventListener("click", (e) => {
        let par = up.parentElement;
        let lists = document.querySelectorAll("ul li");
        console.log(lists.length);
        for (let i = lists.length - 1; i >= 0; i--) {
          if (i > 0 && lists[i] === par) {
            console.log("hi");
            // swap(lists[i],lists[i-1]);
            let tmp = lists[i].childNodes[0].innerText;
            console.log(tmp);
            lists[i].childNodes[0].innerText =
              lists[i - 1].childNodes[0].innerText;
            lists[i - 1].childNodes[0].innerText = tmp;
            // lists[i]=lists[i-1];
            // lists[i-1]=tmp;
            break;
          }
        }
      });
      down.addEventListener("click", (e) => {
        let par = up.parentElement;
        let lists = document.querySelectorAll("ul li");
        console.log(lists.length);
        for (let i = 0; i + 1 < lists.length; i++) {
          if (lists[i] === par) {
            console.log("hi");
            // swap(lists[i],lists[i-1]);
            let tmp = lists[i].childNodes[0].innerText;
            console.log(tmp);
            lists[i].childNodes[0].innerText =
              lists[i + 1].childNodes[0].innerText;
            lists[i + 1].childNodes[0].innerText = tmp;
            // lists[i]=lists[i-1];
            // lists[i-1]=tmp;
            break;
          }
        }
      });
      listItem.append(down);
      listItem.append(trash);
      trash.addEventListener("click", () => {
        // listItem.innerText="i just got clicked";
        // console.log("i gott");
        listItem.remove();
      });
      ul.append(listItem);
      inp.value = "";

      // console.log(lists);
    }
  }
});
