import { resetScore } from "./score.js";
import { resetComments } from "./comments.js";

export const createMainContent = async () => {
  // Create h1
  const h1 = document.createElement("h1");
  h1.innerText = "Catstagram";

  // Create img
  const img = document.createElement("img");
  img.setAttribute("id", "kitten-image");
  img.style.margin = "20px";
  img.style.maxWidth = "750px";

  const newKittenBtn = createNewKittenBtn();

  const container = document.querySelector(".container");
  container.appendChild(h1);
  container.append(newKittenBtn);
  container.appendChild(img);

  let kittenImage = localStorage.getItem("kittenImageUrl");
  if (kittenImage) img.setAttribute("src", kittenImage);
  else {
    kittenImage = await fetchImage();
    img.setAttribute("src", kittenImage);
  }
};

const fetchImage = async () => {
  // Fetch image from API and set img url
  try {
    const kittenResponse = await fetch(
      "https://api.thecatapi.com/v1/images/search?size=small"
    );
    // Converts to JSON
    const kittenData = await kittenResponse.json();
    // console.log(kittenData);
    const kittenImgUrl = kittenData[0].url;
    console.log("kitten image url ", kittenImgUrl);
    localStorage.setItem("kittenImageUrl", kittenImgUrl);

    localStorage.setItem("comments", JSON.stringify(["a", "b"]));
    return kittenImgUrl;
    // After the image is finished loading, reset the score and comments
  } catch (e) {
    console.log("Failed to fetch image", e);
  }
};

const createNewKittenBtn = () => {
  // Create "New Kitten" button
  const newKittenBtn = document.createElement("button");
  newKittenBtn.id = "new-kitten";
  newKittenBtn.innerText = "New Kitten";
  newKittenBtn.addEventListener("click", async () => {
    const kittenUrl = await fetchImage();
    const kittenImg = document.querySelector("#kitten-image");
    kittenImg.setAttribute("src", kittenUrl);
  });
  return newKittenBtn;
};
