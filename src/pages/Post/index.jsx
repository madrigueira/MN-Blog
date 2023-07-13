import "./index.scss";
import { obterInicialMes } from "../../assets/months";

const Post = ({ post }) => {
  const time = post.date.slice(11, -9).replace(":", "h");
  const dateNotOrder = post.date.slice(0, -15).split("-");
  const date = `${dateNotOrder[2]} de ${obterInicialMes(dateNotOrder[1])} de ${
    dateNotOrder[0]
  }`;

  return (
    <div className="Post">
      <h1>{post.title}</h1>
      <div className="meta">
        <a href="">Matheus Negrini Dias</a>
        <p>{`Dia ${date}, às ${time}`}</p>
      </div>
      <div className="content">
        <div dangerouslySetInnerHTML={{ __html: post.content.html }}></div>
      </div>
    </div>
  );
};

export default Post;
