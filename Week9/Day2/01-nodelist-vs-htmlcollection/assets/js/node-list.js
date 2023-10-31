export default () => {
  const bodyChildNodes = document.body.childNodes; // NodeList [text, div, text]
  console.log("body child nodes ", bodyChildNodes);
  // console.log("body child ", bodyChildNodes[0].children);

  const div = bodyChildNodes[1]; // NOT bodyChildNodes[0]
  console.log("div ", div);

  const divChildNodes = div.childNodes; // NodeList [text, span, text]
  console.log("div child nodes ", divChildNodes);
  const helloWorld = divChildNodes[0].textContent; // Hello World!\n
  const span = divChildNodes[1]; // <span>Yes!</span>
  // debugger
};
