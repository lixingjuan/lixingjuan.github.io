// const reg = /^(\/v2|\/v1.5|\/robor\/v1.5|\/robor\/v2|\/robor)/g;

// const arr = ["/v2/bbb", "/v1.5/bbb", "/v1.5/robor/v1.5"];
// const resArr = arr.map((item) => item.replace(reg, ""));
// console.log(resArr);

var parse = require("url-parse"),
  url = parse(
    "http://confluence.datayes.com/pages/viewpage.action?pageId=53760800",
    true
  );

console.log(url);
