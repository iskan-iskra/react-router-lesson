import { MyRoute, MyLink, MyRouter } from "./my-router-dom";

const Home = () => <h1>Главная страница</h1>;
const About = () => <h1>О нас</h1>;
const PostList = () => <h1>Посты</h1>;
const Error = () => <h1>404: страница не найдена</h1>;

function AppWithMyRouterDom() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <MyLink to="/">Главная</MyLink>
          </li>
          <li>
            <MyLink to="/about">О нас</MyLink>
          </li>
          <li>
            <MyLink to="/post-list">Посты</MyLink>
          </li>
          <li>
            <MyLink to="/asdasd">Не существующая страница</MyLink>
          </li>
        </ul>
      </nav>
      <MyRouter>
        <MyRoute path="/" component={<Home />} />
        <MyRoute path="/about" component={<About />} />
        <MyRoute path="/post-list" component={<PostList />} />
        <MyRoute path="*" component={<Error />} />
      </MyRouter>
    </div>
  );
}

export default AppWithMyRouterDom;
