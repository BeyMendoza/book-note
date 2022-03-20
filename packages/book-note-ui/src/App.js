import Home from './pages/Home';
import { Card } from 'book-ui-library';
import { PAGE_ROUTES } from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style.scss';

export default () => {
  return (
    <Card style={{ borderRadius: 0, minHeight: '100vh', padding: 0 }} bg="background.default">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            {PAGE_ROUTES.map(({ Element, ...rest }, key) => {
              return <Route key={key} {...rest} element={<Element />} />;
            })}
            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Route>
        </Routes>
      </Router>
    </Card>
  );
};
