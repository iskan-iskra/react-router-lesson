import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Компоненты для разных страниц
const Home = () => <h1>Главная страница</h1>;
const About = () => <h1>О нас</h1>;
const Contacts = () => <h1>Контакты</h1>;
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
          <Link to="/contacts">Контакты</Link>
        </li>
        <li>
          <Link to="/asdasd">Не существующая страница</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
);

export default AppWithReactRouterDOM;
