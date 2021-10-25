try {
  const imp = module.require("../exportingFolder/math.js");
  console.log(imp);
} catch (e) {
  console.log(e);
}


for (let i = 0; i < 10; i++) console.log("hello");
