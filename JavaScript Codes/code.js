/*  
    145 
    1! + 4!  + 5!
    range 1 to 1000000
*/

const logic = (n) => {
  let stringnumber = "" + n;

  let res,
    finalres = 0;
  for (let i = 0; i < stringnumber.length; i++) {
    res = fact(parseInt(stringnumber[i]));
    finalres = finalres + res;
  }

  // console.log("Result is", finalres);

  if (finalres == n) console.log("It is a curios number");
  else console.log("It is not a curios number");
};

const fact = (num) => {
  if (num == 0) {
    return 1;
  }

  return num * fact(num - 1);
};

logic(14542);
