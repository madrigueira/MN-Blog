import "./index.scss";

const Post = ({ post }) => {
  return (
    <div className="Post">
      <h1>{post.title}</h1>
      <div className="meta">
        <a href="">Matheus Negrini Dias</a>
        <p>{post.updatedAt}</p>
      </div>
      <div className="content">
        <div dangerouslySetInnerHTML={{ __html: post.content.html }}></div>
      </div>
    </div>
  );
};

export default Post;
