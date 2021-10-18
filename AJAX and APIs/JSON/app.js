let jsonString='{"ticker":{"base":"BTC","target":"USD","price":"60990.54608098","volume":"69920.53525229","change":"137.24955422"},"timestamp":1634392742,"success":true,"error":""}';

let parsedString=JSON.parse(jsonString);

let changedToJson=JSON.stringify(parsedString);
console.log(parsedString);
console.log(changedToJson);