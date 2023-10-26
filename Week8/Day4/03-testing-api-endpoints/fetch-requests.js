/*
Make fetch requests in the browser for each of the following tasks.
Paste your code for fetch requests here once you finish each task.
*/

/* =============================== Phase 1 ================================ */
/*
  Make a request with fetch request to GET /posts and print the response
  components to the console.
*/

// Your code here

/* =============================== Phase 2 ================================ */
/*
  Make a request with fetch request to POST /posts and print the response
  components to the console.
*/

// Your code here
// const getPosts = async () => {
//   return fetch("/posts")
//     .then((res) => res.json())
//     .then((resBody) => console.log(resBody));
// };

const getPosts = async () => {
  const res = await fetch("/posts");
  const body = await res.json();
  console.log(body);
};

getPosts();

/*
<input /> <---- post message input field
<button>Submit</button>
*/
const post = "Brand new post!";

const createPost = async (post) => {
  const response = await fetch("/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: post,
    }),
  });

  console.log("response object ", response);
  const data = await response.text();
  console.log("data ", data);
};

createPost(post);
