export default function Comments({ comments, slug }) {
  const filteredComments = comments.filter((comment) => comment.slug === slug);

  return (
    <div>
      {filteredComments?.map((comment, index) => {
        return (
          <div key={index}>
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
