// const doubleAfter1Sec = (num) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (num < 0) {
//         reject("Number must be non-negative");
//       } else {
//         resolve(num * 2);
//       }
//     }, 1000);
//   });
// };

// const run = async () => {
//   try {
//     const result = await doubleAfter1Sec(5);
//     console.log("Result:", result);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// };

// run();

// const doubleAfter1Sec = (num) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (num < 0) {
//         reject("Number must be non-negative");
//       } else {
//         resolve(num * 2);
//       }
//     }, 1000);
//   });
// };

// doubleAfter1Sec(5).then((result) => {
//   console.log("Result: ", result);
// }).catch((error) => {
//   console.error("Error", error);
// });

const doubleAfter1Sec = (num, callback) => {
  setTimeout(() => {
    if (num < 0) {
      callback("Number must be non-negative", null);
    } else {
      callback(null, num * 2);
    }
  }, 1000);
};

doubleAfter1Sec(5, (err, result) => {
  if (err) {
    console.error("Error:", error);
  } else {
    console.log("Result:", result);
  }
});
