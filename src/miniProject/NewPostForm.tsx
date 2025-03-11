import "../miniProject/newpost.css";

function AddPostForm() {
  return (
    <form className="add">
      <h2>Share your opinion</h2>
      <input type="text" placeholder="Name of post" />
      <input type="text" placeholder="Type a post" />
      <input type="text" placeholder="Hashtag" />
      <button>Add post</button>
      <button>❤️</button>
      <button>Delete</button>
    </form>
  );
}

export default AddPostForm;
