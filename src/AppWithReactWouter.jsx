import { Route, Link, Switch, useRoute } from "wouter";

// Компоненты для разных страниц
const Home = () => <h1>Главная страница</h1>;
const About = () => <h1>О нас</h1>;
const PostList = () => (
  <>
    <h1>Посты</h1>
    <ul>
      <a href="/post/1">
        <li>пост - 1</li>
      </a>
      <a href="/post/2">
        <li>пост - 2</li>
      </a>{" "}
      <a href="/post/3">
        <li>пост - 3</li>
      </a>
    </ul>
  </>
);
const Post = () => {
  const [match, params] = useRoute("/post/:id");
  if (match) {
    return <h1>Пост с id: {params.id}</h1>;
  } else {
    return <h1>Пост не найден</h1>;
  }
};
const Error = () => <h1>404: страница не найдена</h1>;

const AppWithReactWouter = () => (
  <>
    <nav>
      <ul>
        <li>
          <Link to="/">Главная</Link>
        </li>
        <li>
          <Link to="/about">О нас</Link>
        </li>
        <li>
          <Link to="/post-list">Посты</Link>
        </li>
        <li>
          <Link to="/asdasd">Не существующая страница</Link>
        </li>
      </ul>
    </nav>
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/post-list" component={PostList} />
      <Route path="/post/:id" component={Post} />
      <Route component={Error} />
    </Switch>
  </>
);

export default AppWithReactWouter;
