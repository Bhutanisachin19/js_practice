const testObj = {
  name: "sachin",

  getName: function () {
    console.log("Regular function this", this);
  },

  getArrowName: () => {
    console.log("Arrow function this", this);
  },
};

// testObj.getName();
// testObj.getArrowName();

const testObj2 = {
  name: "Messi",
};

// testObj2.getName = testObj.getName;
// testObj2.getName();

// testObj2.getArrowName = testObj.getArrowName;
// testObj2.getArrowName();

var firstName = "Sachin Bhutani";

const testObj3 = {
  firstName: "TestObj3 Name",
  greetNormal: function () {
    console.log("Normal Geeting", this.firstName);
  },
  greetArrow: () => {
    console.log("Arrow Greeting", this.firstName);
  },
};

// output when run in browser , not in node
testObj3.greetNormal(); // TestObj3 Name
testObj3.greetArrow(); // Sachin -> as arrow function does not have a "this" and take this of its partent i.e here window object
