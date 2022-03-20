import Home from './pages/Home';
import { Card } from './lib/core';
import { PAGE_ROUTES } from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style.scss';

export default () => {
  return (
    <Card style={{ borderRadius: 0, minHeight: '100vh', padding: 0 }} bg="background.default">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            {PAGE_ROUTES.map((route, key) => {
              const { exact, Element, path } = route;
              return <Route key={key} exact={exact} path={path} element={<Element />} />;
            })}
          </Route>
        </Routes>
      </Router>
    </Card>
  );
};
