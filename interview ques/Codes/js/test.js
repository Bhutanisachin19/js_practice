/*
const rev = (abc) => {
  let newStr = "";

  //   console.log(abc[4]);

  for (let i = abc.length - 1; i >= 0; i--) {
    newStr += abc[i];
  }

  console.log(newStr);
};

rev("hello");

*/

/*
Find unique data from two arrays.
	Arr1 = [51, 24, 40, 18, 12]
	Arr2 = [20, 32, 18, 25, 51, 76]
	OutputArr = [12, 18, 20, 24, 25, 32, 40, 51, 76]
*/

const arr = () => {
  let Arr1 = [51, 24, 40, 18, 12];
  let Arr2 = [20, 32, 18, 25, 51, 76];
  let result = [];

  result = [...Arr1, ...Arr2];

  let resArr = new Set(result.sort());

  resArr = [...resArr];

  console.log(resArr);
};

arr();
