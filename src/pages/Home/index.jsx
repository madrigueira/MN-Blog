import "./index.scss";
import { Link } from "react-router-dom";

const Home = ({ post }) => {
  return (
    <div className="Home">
      {post &&
        post.map((post) => (
          <Link to={post.slug} key={post.slug}>
            <h3>
              {post.title}
              <b>jul/2023</b>
            </h3>
          </Link>
        ))}
      <h3>
        Uma Carta de Amor ao GraphQL<b>jul/2023</b>
      </h3>
      <h3>
        O Bootstrap Destruiu Minha Vida<b>jul/2023</b>
      </h3>
      <h3>
        Por Que Meu Mano Deyvin tá Puto? (Ou a Glamourização da Rotina Dev)
        <b>jul/2023</b>
      </h3>
    </div>
  );
};

export default Home;
