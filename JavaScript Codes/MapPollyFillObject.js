// expected output
// {
//   upi: {
//     status: true,
//     _type: "payment_method",
//     key: "upi",
//   },
//  ...
// }

const obj = {
  upi: true,
  netbanking: true,
  cards: true,
};

Object.prototype.map = function () {
  let tempObj = {};
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      let nestedObj = {
        status: obj[i],
        _type: "payment_method",
        key: i,
      };

      tempObj[i] = nestedObj;
    }
  }
  return tempObj;
};

console.log(obj.map());
