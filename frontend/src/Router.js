import Main from './Main';
import Books from './Books';
import WIP from './WIP';
import OptionsReport from './OptionsReport.html';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles.css';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/books" element={<Books />} />
        <Route path="/stocks" element={<WIP />} />
        <Route path="/optionsreport" element={<div dangerouslySetInnerHTML={{ __html: OptionsReport }} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
