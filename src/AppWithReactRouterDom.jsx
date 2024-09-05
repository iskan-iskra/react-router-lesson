import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

// Компоненты для разных страниц
const Home = () => <h1>Главная страница</h1>;
const About = () => <h1>О нас</h1>;
const PostList = () => (
  <>
    <h1>Посты</h1>
    <ul>
      <li>
        <Link to="/post/1">пост - 1</Link>
      </li>
      <li>
        <Link to="/post/2">пост - 2</Link>
      </li>
      <li>
        <Link to="/post/3">пост - 3</Link>
      </li>
    </ul>
  </>
);
const Post = () => {
  const { id } = useParams();
  return id ? <h1>Пост с id: {id}</h1> : <h1>Пост не найден</h1>;
};
const Error = () => <h1>404: страница не найдена</h1>;

const AppWithReactRouterDOM = () => (
  <BrowserRouter>
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
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/post-list" element={<PostList />} />
      <Route path="/post/:id" element={<Post />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
);

export default AppWithReactRouterDOM;
