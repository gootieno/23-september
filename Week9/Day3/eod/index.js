document.addEventListener("DOMContentLoaded", async () => {
  // get comments
  const getComments = async () => {
    const response = await fetch("/comments");
    const { comments } = await response.json();

    console.log("comments ", comments);
    for (const comment of comments) {
      addComment(comment);
    }
  };
  // add comments to page
  const addComment = (data) => {
    const commentContainer = document.getElementById("comments-list-container");

    const comment = document.createElement("p");
    comment.innerText = data;

    commentContainer.appendChild(comment);
  };
  // create comments

  const createComment = async () => {
    const submit = document.getElementById("comment-submit");
    const commentInput = document.getElementById("comment-input");

    submit.addEventListener("click", async (e) => {
      e.preventDefault();

      const response = await fetch("/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ comment: commentInput.value }),
      });

      const { comment } = await response.json();
      addComment(comment);
      commentInput.value = "";
    });
  };
  // add comment to page

  await getComments();
  await createComment();
});
