// ----------- PROMISIFY FUNCTION -----------
function promisify(callbackBasedApi) {
  return function promisified(...args) {
    console.log("Arguments passed to promisified:", args);

    return new Promise((resolve, reject) => {
      // Create a callback that handles error/result
      function callback(err, result) {
        console.log("Callback called with:", err, result);
        if (err) {
          return reject(err);
        }
        resolve(result);
      }

      // Add our callback to the original arguments
      const newArgs = [...args, callback];
      console.log("Arguments passed to original API:", newArgs);

      // Call the original API
      callbackBasedApi(...newArgs);
    });
  };
}

// ----------- FAKE CALLBACK API (Node.js-style) -----------
function fakeApi(x, y, callback) {
  setTimeout(() => {
    if (x < 0) {
      callback("Error: negative number");
    } else {
      callback(null, x + y);
    }
  }, 1000);
}

// ----------- USAGE WITH PROMISIFY -----------
const fakeApiAsync = promisify(fakeApi);

// Call it with some arguments
fakeApiAsync(10, 5)
  .then(result => console.log("Promise resolved with:", result))
  .catch(err => console.error("Promise rejected with:", err));

fakeApiAsync(-3, 5)
  .then(result => console.log("Promise resolved with:", result))
  .catch(err => console.error("Promise rejected with:", err));
