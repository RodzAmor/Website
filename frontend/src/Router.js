import Main from './Main';
import Books from './Books';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles.css';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/books" element={<Books />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
