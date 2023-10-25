/*
Make fetch requests in the browser for each of the following tasks.
Paste your code for fetch requests here once you finish each task.
*/

/* =============== 1. Print the status code of the response =============== */

// Your code here

/* ====== 2. Print true if the status of the response was successful ====== */

// Your code here

/* =================== 3. Print the Content-Type Header =================== */

// Your code here

/* ============== 4. Print the body of the response as text =============== */

// Your code here

// example
/*
.status - status code of the response
.ok - returns true if the response was successful and false otherwise
.headers.get(headerName) - returns the value of the header with the given headerName
.text() - returns a Promise that resolves to the body of the
*/

// const getElectronicProducts = async () => {
//   const response = await fetch(`/categories/electronics/products`);
//   console.log("response ", response);

//   console.log("response ok? ", response.ok);
//   console.log("response headers ", response.headers.get("Content-Type"));
//   console.log("response text ", await response.text());
// };
const getElectronicProducts = async () => {
  fetch(`/categories/electronics/products`)
    .then((response) => {
      console.log("response ", response);

      console.log("response ok? ", response.ok);
      console.log("response headers ", response.headers.get("Content-Type"));
      return response.text();
    })
    .then((text) => console.log("response text ", text));
};

getElectronicProducts();
