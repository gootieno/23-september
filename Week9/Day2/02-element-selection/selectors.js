const select = () => {
  /* Write queries for each of the following */

  /* Section 1 */
  // 1. Get all seeded fruit elements
  // Your code here
  console.log(
    "seeded fruit elements ",
    document.getElementsByClassName("seed")
  );
  // 2. Get all seedless fruit elements
  // Your code here
  console.log(
    "seedless fruit elements ",
    document.getElementsByClassName("seedless")
  );
  // 3. Get first seedless fruit element
  // Your code here
  console.log("first seedless ", document.querySelector(".seedless"));
  /* Section 2 */
  // 4. Get inner span with text "you"
  // Your code here
  console.log("you span ", document.querySelector("#wrapper > p > span"));
  // 5. Get all children of element "wrapper"
  // Your code here
  const wrapperChildren = document.getElementById("wrapper").children;
  console.log("wrapper children ", wrapperChildren);
  //   console.log(inner);
  // 6. Get all odd number list items in the list
  // Your code here
  const oddListItems = document.getElementsByClassName("odd");
  console.log("odd list items ", oddListItems);
  // 7. Get all even number list items in the list
  // Your code here
  /*
    create an array
    loop through ol children 
    push odds to array
    log array
  */
  const arr1 = [];
  const olChildren = document.querySelector("ol").children;
  //   console.log("ol children ", olChildren);
  for (let i = 0; i < olChildren.length; i++) {
    if (i % 2 !== 0) {
      arr1.push(olChildren[i]);
    }
  }

  console.log("even list items ", arr1);
  console.log(
    "event list items 2.0 ",
    document.querySelectorAll("ol > :not(.odd)")
  );
  /* Section 3 */
  // 8. Get all tech companies without a class name
  // Your code here
  let classList = document.getElementsByTagName("p");
  console.log("all p tags ", classList);
  let paragraph = classList[classList.length - 1];
  console.log("paragraph ", paragraph);
  let firstIndex = paragraph.children[0].innerHTML;
  console.log("all tech no class ", firstIndex);
  // 9. Get "Amazon" list element
  // Your code here
  let amazon;
  const techCompanies = document.getElementById("three").querySelectorAll("a");

  for (let i = 0; i < techCompanies.length; i++) {
    if (techCompanies[i].innerText === "Amazon") {
      amazon = techCompanies[i];
      break;
    }
  }
  console.log("Amazon ", amazon);
  console.log(
    "Amazon 2.0 ",
    document.querySelector("#three > p > a:last-child")
  );
  // 10. Get all unicorn list elements (not the image element)
  // Your code here
  console.log(
    "all unicorn no pics ",
    Array.from(document.getElementsByClassName("unicorn")).map(
      (element) => element.parentElement
    )
  );
};

window.onload = select;
