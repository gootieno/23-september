// Your code here
window.addEventListener("DOMContentLoaded", () => {
  const addButton = document.getElementById("add");
  const shoppingListContainer = document.getElementById("shopping-list");
  const listName = document.getElementById("name");
  const listType = document.getElementById("type");

  addButton.addEventListener("click", (event) => {
    event.preventDefault();
    const list = document.createElement("li");
    list.innerText = listName.value;
    list.setAttribute("data-type", listType.value);

    shoppingListContainer.appendChild(list);
    listName.value = "";
  });
});
