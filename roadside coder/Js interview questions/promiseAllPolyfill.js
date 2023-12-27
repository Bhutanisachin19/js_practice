const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 resolved....");
  }, 2000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2 resolved....");
  }, 3000);
});

const p3 = new Promise((resolve, reject) => {
  // setTimeout(() => {
  //     resolve('Promise 3 resolved....');
  // }, 5000)

  setTimeout(() => {
    reject("Promise 3 rejected....");
  }, 5000);
});

const promiseArray = [p1, p2, p3];

async function executePromise(recievedPromise) {
  return await recievedPromise;
}

const promiseAllPolyfill = (promiseArray) => {
  let mainResult = [];
  return new Promise((resolve, reject) => {
    promiseArray.forEach((promise, index) => {
      executePromise(promise)
        .then((res) => {
          mainResult.push(res);
          if (promiseArray.length === mainResult.length) {
            resolve(mainResult);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

promiseAllPolyfill(promiseArray)
  .then((res) => console.log("Response of polyfill", res))
  .catch((err) => console.log("Error from polyfill", err));
