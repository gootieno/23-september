// Your code here
window.addEventListener("DOMContentLoaded", () => {
  //   alert("DOM has loaded");
  /*
        select red input 
        listen to input event 
        check value to see if it contains red
        change background of red input if yes
        leave transparent if no
    */
  const redInput = document.getElementById("red-input");
  const changeRed = () => {
    if (redInput.value.toLowerCase().includes("red"))
      redInput.style.backgroundColor = "red";
    else redInput.style.backgroundColor = "transparent";
  };

  redInput.addEventListener("input", changeRed);

  /*
    select add item element
    select list add element
    select ul element
    add click event to add item
        create li element
        li element innerText = list add value
        append li to ul
  */

  const addItem = document.getElementById("add-item");
  const listAdd = document.getElementById("list-add");
  const listContainer = document.querySelector("#section-2 > ul");

  const createList = () => {
    const listItem = document.createElement("li");
    listItem.innerText = listAdd.value;
    listContainer.appendChild(listItem);
    listAdd.value = "";
  };

  addItem.addEventListener("click", createList);

  /*
    select element #color-select
    select #color-select parent section
    add event listener on color select
        change parent section background color
  */
  const colorSelect = document.getElementById("color-select");
  const section3 = document.getElementById("section-3");

  const changeBackground = (event) => {
    console.log("event object ", event);
    section3.style.backgroundColor = event.target.value;
  };

  colorSelect.addEventListener("change", changeBackground);

  const removeListeners = document.getElementById("remove-listeners");
  removeListeners.addEventListener("click", () => {
    console.log(removeListeners.className);
    if (!removeListeners.className.includes("add")) {
      redInput.removeEventListener("input", changeRed);
      addItem.removeEventListener("click", createList);
      colorSelect.removeEventListener("change", changeBackground);
      removeListeners.classList.add("add");
    } else {
      redInput.addEventListener("input", changeRed);
      addItem.addEventListener("click", createList);
      colorSelect.addEventListener("change", changeBackground);
      removeListeners.classList.remove("add");
    }
  });

  //   const createButton = () => {
  //     const buttonSection = document.getElementById("section-4");
  //     const reinstateListenersButton = document.createElement("button");
  //     reinstateListenersButton.innerText = "Reinstate Listeners";
  //     buttonSection.appendChild(reinstateListenersButton);
  //     return reinstateListenersButton;
  //   };

  //   const reinstateListenersButton = createButton();

  //   const reinstateListeners = () => {
  //     redInput.addEventListener("input", changeRed);
  //     addItem.addEventListener("click", createList);
  //     colorSelect.addEventListener("change", changeBackground);
  //   };
  //   reinstateListenersButton.addEventListener("click", reinstateListeners);
});
