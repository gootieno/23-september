/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
const themeButton = document.getElementById("theme");
themeButton.addEventListener("click", () => {
//   if (document.body.className.includes("darkMode")) {
//     document.body.classList.remove("darkMode");
//     // alert("dark mode removed");
//   } else {
//     document.body.classList.add("darkMode");
//     // alert("dark mode added");
//   }
  document.body.classList.toggle('darkMode')
});

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

    const urlParts = url.split("/");
    console.log("url parts ", urlParts);
    const dogBreed = urlParts[4];

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
    const breedContainer = document.querySelector("ul");
    // example for inline styling use case
    // breedContainer.style.display = "flex";
    // breedContainer.style.flexDirection = "column";
    const breedLi = document.createElement("li");
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    const figCaption = document.createElement("figcaption");

    img.setAttribute("src", url);
    figCaption.innerText = dogBreed;
    breedLi.style.border = "2px solid red";

    figure.append(img, figCaption);
    breedLi.appendChild(figure);
    breedContainer.appendChild(breedLi);
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
  const firstDog = document.querySelector(".gallery > ul > li:first-child");
  if (firstDog) firstDog.remove();
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
  /*-------------------- Select the last dog card ----------------------- */
  // Your code here
  /*-------------------- Remove the last dog card ----------------------- */
  // Your code here
  const lastDog = document.querySelector(
    "section.gallery > ul > li:last-child"
  );
  lastDog && lastDog.remove();
});
