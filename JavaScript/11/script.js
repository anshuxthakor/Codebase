// Promises and Async/Await in JavaScript

// A Promise is an object representing the eventual completion (or failure) of an asynchronous operation.
// It has 3 states --> Pending, Fulfilled, Rejected

// Pending --> Initial state, neither fulfilled nor rejected.
// Fulfilled --> The operation completed successfully.
// Rejected --> The operation failed.

// Syntax --> new Promise((resolve, reject) => { ... })
// resolve(value) --> Call this when the operation is successful.
// reject(error) --> Call this when the operation fails.

var myPromise = new Promise((resolve, reject) => {
  var success = true;

  setTimeout(() => {
    if (success) {
      resolve("Data fetched successfully!");
    } else {
      reject("Failed to fetch data!");
    }
  }, 2000);
});

console.log(myPromise); // Promise { <pending> } initially

// To consume a Promise, we use .then(), .catch(), .finally()
// .then() --> Runs when the Promise is resolved.
// .catch() --> Runs when the Promise is rejected.
// .finally() --> Runs regardless of the outcome (resolved or rejected).

myPromise
  .then((result) => {
    console.log(result); // "Data fetched successfully!"
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Promise settled (either resolved or rejected).");
  });

// Chaining Promises --> Each .then() returns a new Promise, allowing us to chain multiple async operations.

function orderFood() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Order placed.");
      resolve("Pizza");
    }, 1000);
  });
}

function cookFood(item) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(item + " is being cooked.");
      resolve(item + " cooked");
    }, 1000);
  });
}

function serveFood(item) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(item + " is served.");
      resolve(item + " served");
    }, 1000);
  });
}

orderFood()
  .then((item) => cookFood(item))
  .then((item) => serveFood(item))
  .then((finalResult) => console.log(finalResult))
  .catch((err) => console.log(err));

// Promise.all() --> Takes an array of Promises and resolves when ALL of them resolve.
// If ANY one Promise rejects, Promise.all() rejects immediately.

var p1 = new Promise((resolve) => setTimeout(() => resolve("P1 done"), 1000));
var p2 = new Promise((resolve) => setTimeout(() => resolve("P2 done"), 2000));
var p3 = new Promise((resolve) => setTimeout(() => resolve("P3 done"), 1500));

Promise.all([p1, p2, p3]).then((results) => {
  console.log(results); // ["P1 done", "P2 done", "P3 done"]
});

// Promise.allSettled() --> Waits for ALL Promises to settle (resolve or reject) and returns their results.
// Unlike Promise.all(), it does NOT reject early, it always resolves with an array of statuses.

var p4 = new Promise((resolve, reject) =>
  setTimeout(() => reject("P4 failed"), 1000),
);

Promise.allSettled([p1, p4]).then((results) => {
  console.log(results);
  // [{status: "fulfilled", value: "P1 done"}, {status: "rejected", reason: "P4 failed"}]
});

// Promise.race() --> Resolves or rejects as soon as ONE of the Promises settles (whichever is first).

Promise.race([p1, p2]).then((result) => {
  console.log(result); // "P1 done" (since p1 resolves first)
});

// Promise.any() --> Resolves as soon as ONE Promise fulfills. Ignores rejections unless ALL reject.
// If all Promises reject, it throws an AggregateError.

Promise.any([p4, p2]).then((result) => {
  console.log(result); // "P2 done" (since p4 rejects but p2 fulfills)
});

// Async/Await --> A cleaner, more readable way to work with Promises.

// async keyword --> Placed before a function, it makes the function always return a Promise.
// await keyword --> Used inside an async function to pause execution until the Promise settles.
// await can only be used inside an async function.

async function greet() {
  return "Hello!";
}
greet().then((msg) => console.log(msg)); // "Hello!" because async functions always return a Promise

// Using await to handle a Promise
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data received!"), 2000);
  });
}

async function getData() {
  console.log("Fetching started...");
  var result = await fetchData(); // Execution pauses here until the Promise resolves
  console.log(result);
  console.log("Fetching finished.");
}
getData();

// Error Handling with Async/Await --> We use try...catch instead of .catch()

function riskyTask() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject("Something went wrong!"), 1000);
  });
}

async function handleTask() {
  try {
    var result = await riskyTask();
    console.log(result);
  } catch (error) {
    console.log("Caught an error:", error);
  } finally {
    console.log("Task attempt finished.");
  }
}
handleTask();

// Sequential vs Parallel Execution with async/await

// Sequential --> Each await waits for the previous one to finish (slower, one after another)
async function sequential() {
  var a = await fetchData();
  var b = await fetchData();
  console.log("Sequential done:", a, b); // Takes ~4 seconds total
}

// Parallel --> Start all Promises together, then await them (faster, runs at the same time)
async function parallel() {
  var promiseA = fetchData();
  var promiseB = fetchData();
  var [a, b] = await Promise.all([promiseA, promiseB]);
  console.log("Parallel done:", a, b); // Takes ~2 seconds total
}

// Async/Await inside Loops

var ids = [1, 2, 3];

function getUserById(id) {
  return new Promise((resolve) => {
    setTimeout(() => resolve("User" + id), 500);
  });
}

// Using for...of --> Runs sequentially (waits for each one before moving to next)
async function fetchUsersSequentially() {
  for (var id of ids) {
    var user = await getUserById(id);
    console.log(user);
  }
}

// Using map with Promise.all --> Runs in parallel (all requests fire at once)
async function fetchUsersParallel() {
  var promises = ids.map((id) => getUserById(id));
  var users = await Promise.all(promises);
  console.log(users); // ["User1", "User2", "User3"]
}