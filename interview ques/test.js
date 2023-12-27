// 3 -> fizz ,5 -> buzz and 5and 3 -> buzzfizz

/*
const testFunction = () => {
  for (let i = 1; i <= 15; i++) {
    if (i % 5 == 0 && i % 3 == 0) {
      console.log("BuzzFizz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};

testFunction();

*/

const testFunction2 = () => {
  const arr = ["1ayus2", "4alex5", "7varun3"];
  var sum = 0;

  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];

    for (let j = 0; j < temp.length; j++) {
      //   console.log(temp);
      if (Number(temp[j])) {
        // console.log("Number", temp[j]);

        sum = sum + Number(temp[j]);
      }
    }
  }

  console.log(sum);
};

testFunction2();
