// const {franc,frankAll}=import("franc");
const franc=import('franc');
// const franc="3";
// fran)
// console.log(franc);
// franc.then((res)=>
// {
//     console.log(res);
// }).catch((e)=>
// {
//     console.log("error occured",e);
// });
const langs=require("langs");
console.log(langs);
let p=process.argv.slice(2);
console.log(p);
let str="";
for(let i=0;i<p.length;i++)
{
    str+=p[i];
}
// console.log(str);

// console.log(str);
// // franc('Alle menslike wesens word vry') // => 'afr'
// // franc('এটি একটি ভাষা একক IBM স্ক্রিপ্ট') // => 'ben'
// // franc('Alle menneske er fødde til fridom') // => 'nno'
// console.log(franc);
franc.then((res)=>
{
    console.log(res);
    // ans=res.franc('Non bière épicé. Putain vin camembert apéro merde. Dans prendre quand même voir épicé fais chier savoir boulangerie bière fais chier. Devoir comme même bière aucun fais chier carrément et du camembert guillotine');
    ans=res.franc(str);
    console.log(langs.where(2,ans).name);
    // finalAns=langs.where(2,ans).name;
    
    // console.log(finalAns);
    // return new Promise((resolve,reject)=>{

    // });
}).catch((e)=>
{
    console.log("enter correct language");
});
// console.log("jo");