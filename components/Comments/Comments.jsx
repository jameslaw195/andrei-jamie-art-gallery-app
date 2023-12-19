export default function Comments({ comments }) {
  return (
    <div>
      {comments?.map((comment, index) => {
        return (
          <div className="comments-container" key={index}>
            <p>{comment.text}</p>
            <p>
              {comment.date} {comment.time}
            </p>
          </div>
        );
      })}
    </div>
  );
}
