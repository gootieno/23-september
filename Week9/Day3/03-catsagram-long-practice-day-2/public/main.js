export const createMainContent = async () => {
  // Create h1
  const h1 = document.createElement("h1");
  h1.innerText = "Catstagram";

  // Create img
  const img = document.createElement("img");
  img.setAttribute("class", "cat-image");
  img.style.margin = "20px";
  img.style.maxWidth = "750px";

  const container = document.querySelector(".container");
  container.appendChild(h1);
  container.appendChild(img);

  const kittenUrl = await fetchImage();
  console.log("kitten url ", kittenUrl);
  img.src = kittenUrl;
};

const fetchImage = async () => {
  // Fetch image from API and set img url
  try {
    const kittenResponse = await fetch(
      "https://api.thecatapi.com/v1/images/search?size=small"
    );
    // Converts to JSON
    const kittenData = await kittenResponse.json();
    console.log(kittenData);
    return kittenData[0].url;
  } catch (e) {
    console.log("Failed to fetch image", e);
  }
};
