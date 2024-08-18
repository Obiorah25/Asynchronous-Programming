// // Task 01.
// // Write an async function iterateWithAsyncAwait that takes an array of values and logs each value with a delay of 1 second between logs.
// async function iterateWithAsyncAwait(values) {
//     for (const value of values) {
//         console.log(value);
//         await new Promise(resolve => setTimeout(resolve, 1000));
//     }
// }
// // Example usage:
// const values = [1, 2, 3, 4, 5, 6, 7];
// iterateWithAsyncAwait(values);

// //Task 02.
// //Create an async function awaitCall that simulates fetching data from an API. Use await to wait for the API response and then log the data.
// async function awaitCall() {
//     // Simulate fetching data from an API with a delay
//     const fetchData = () => {
//         return new Promise(resolve => {
//             setTimeout(() => {
//                 resolve({ id: 1, name: "Henry Obikings", age: 18 });
//             }, 2000); // Simulating a 2-second delay for the API call
//         });
//     };
//     // Wait for the "API response"
//     const data = await fetchData();

//     // Log the fetched data
//     console.log("Fetched Data:", data);
// }
// // Example usage:
// awaitCall();

//Task 03.
//Modify the awaitCall function to handle errors gracefully. If the API call fails, catch the error and log a user-friendly error message.
// async function awaitCall() {
//     // Simulate fetching data from an API with a delay
//     const fetchData = () => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 // Randomly resolve or reject the promise to simulate success/failure
//                 if (Math.random() > 0.5) {
//                     resolve({ id: 1, name: "John Doe", age: 30 });
//                 } else {
//                     reject("Failed to fetch data from the API");
//                 }
//             }, 2000); // Simulating a 2-second delay for the API call
//         });
//     };

//     try {
//         // Wait for the "API response"
//         const data = await fetchData();
//         // Log the fetched data
//         console.log("Fetched Data:", data);
//     } catch (error) {
//         // Handle any errors that occur during the API call
//         console.error("Error:", error);
//         console.log("Something went wrong while fetching the data. Please try again later.");
//     }
// }
// // Example usage:
// awaitCall();

//Task 03 b.
//Write a function chainedAsyncFunctions that calls three separate async functions sequentially. Each function should log a message after a delay of 1 second. Chain these functions using await.
async function firstAsyncFunction() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("First function complete.");
}

async function secondAsyncFunction() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("Second function complete.");
}

async function thirdAsyncFunction() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("Third function complete.");
}

async function chainedAsyncFunctions() {
  await firstAsyncFunction();
  await secondAsyncFunction();
  await thirdAsyncFunction();
}
// Example usage:
chainedAsyncFunctions();
