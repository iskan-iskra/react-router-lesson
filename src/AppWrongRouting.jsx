import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";

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
const Post = ({ id }) => <h1>{`Пост с id: ${id}`}</h1>;
const Error = () => <h1>404: страница не найдена</h1>;

Post.propTypes = { id: PropTypes.number.isRequired };

// Функция для рендеринга нужного компонента в зависимости от пути
function routingFunction(reqPath) {
  const postIdMatch = reqPath.match(/^\/post\/(\d+)$/);
  switch (reqPath) {
    case "/":
      return <Home />;
    case "/about":
      return <About />;
    case "/post-list":
      return <PostList />;
    default:
      // Затем проверяем динамические маршруты
      if (postIdMatch) {
        const postId = postIdMatch[1];
        return <Post id={+postId} />;
      }
      // Если ничего не подошло, отображаем страницу ошибки
      return <Error />;
  }
}

// Основное приложение с ручным роутингом
function AppWrongRouting() {
  // Стейт для хранения текущего пути
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // Функция для рендеринга нужного компонента в зависимости от пути
  const renderComponent = useCallback(
    () => routingFunction(currentPath),
    [currentPath]
  );

  // Обновление компонента при изменении пути
  useEffect(() => {
    const handleLocationChange = () => setCurrentPath(window.location.pathname);

    window.addEventListener("popstate", handleLocationChange);

    return () => window.removeEventListener("popstate", handleLocationChange);
  }, []);

  return (
    <div>
      <nav>
        {/* Неправильная навигация через теги <a> */}
        <ul>
          <li>
            <a href="/">Главная</a>
          </li>
          <li>
            <a href="/about">О нас</a>
          </li>
          <li>
            <a href="/post-list">Посты</a>
          </li>
          <li>
            <a href="/asdasdasd">Не существующая страница</a>
          </li>
        </ul>
      </nav>

      <div>
        {/* Рендеринг соответствующего компонента */}
        {renderComponent()}
      </div>
    </div>
  );
}

export default AppWrongRouting;
