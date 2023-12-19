export default function CommentForm({ onAddComment }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formText = Object.fromEntries(formData);

    onAddComment(formText);

    console.log(formText);

    event.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="comment">Leave a comment!</label>
      <input type="text" id="comment" name="text"></input>
      <button type="submit">Send</button>
    </form>
  );
}
