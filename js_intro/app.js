// let cnt=0;
// // causes lag
// function delay(n)
// {
//     const x = new Date().getTime();
//         while(new Date().getTime()<x+n* 1000){}
// }
// delay(5);
// //above lags

// const id=setInterval(()=>
// {
//     console.log(10);
//     console.log(cnt);
//     cnt++;
// },2000);

// setTimeout(()=>
// {
//     clearInterval(id);
// },12000);

const url = "https://webwhatsapp.com";

function downloadPath(url, download) {
  console.log(`starting download from ${url}`);
  setTimeout(() => {
    const broken = url.split(".");
    console.log(broken);
    broken.pop();
    path = "";
    for (let i = 0; i < broken.length; i++) {
      path += broken[i];
    }
    console.log(path);
    download(path);
  }, 3000);
}
function compressFile(path,compressed)
{
    console.log(`starting compression`);
    setTimeout(()=>
    {
        const comp=path+".zip";
        console.log("compressed url: " + comp);
        compressed(comp);
    },2000);
}

downloadPath(url, (path) => {
    compressFile(path,function (comp)
    {
        console.log("ho");

    });
});
