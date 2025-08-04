// const doubleAfter1Sec = (num, callback) => {
//   setTimeout(() => {
//     callback(num * 2);
//   }, 1000);
// };

// doubleAfter1Sec(5, (result) => {
//   console.log("Result:", result);
// });

// const doubleAfter1Sec = (num) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(num * 2);
//     }, 1000);
//   });
// };

// doubleAfter1Sec(5).then((result) => {
//   console.log("result: ", result);
// })

const doubleAfter1Sec = (num) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num * 2);
    }, 1000);
  });
};

const run = async () => {
  const result = await doubleAfter1Sec(5);
  console.log("result:", result);
};

run();
