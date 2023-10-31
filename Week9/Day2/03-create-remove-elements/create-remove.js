/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");

// const getDogs = async () => {
//  // get dogs
// }
// if data is needed from event click
// add.addEventListener("click", (data) => getDogs(data));
// // if data isn't needed from event click
// add.addEventListener("click", getDogs);

add.addEventListener("click", async () => {
  try {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await res.json();
    console.log("data ", data);
    const url = data.message; // URL of new dog image
    console.log("dog url ", url);

    // const header = document.querySelector(".header");
    // const div = document.createElement("div");
    // const span = document.createElement("span");

    // div.setAttribute("id", "container");
    // span.innerText = "Hello";

    // div.appendChild(span);
    // header.appendChild(div);
    /*--------------- Get breed (Hint: Parse from URL) ---------------- */
    // Your code here

    /*------------ Create new dog card with the url above ------------- */
    /*

    <li>
        <figure>
            <img src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1007.jpg" />
            <figcaption>hound-afghan</figcaption>
        </figure>
    </li>

    0. select element and append created element(s)
    1. create elements
    2. manipulation => setting attributes, setting inner text, etc. 
    3. append elements in order
    */
    /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */
    // Your code here

    /* Add the new dog card as a child to the ul in the .gallery element */
    // Your code here
  } catch (e) {
    console.log("Couldn't fetch dog :(");
  }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
  /*-------------------- Select the first dog card --------------------- */
  // Your code here
  /*-------------------- Remove the first dog card --------------------- */
  // Your code here
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
  /*-------------------- Select the last dog card ----------------------- */
  // Your code here
  /*-------------------- Remove the last dog card ----------------------- */
  // Your code here
});
