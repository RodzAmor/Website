import Main from './Main';
import Books from './Books';
import WIP from './WIP';
import DerivativesReport from './DerivativesReport';
import InvestmentThesis from './InvestmentThesis';
import TennisReport from './TennisReport';
import ChessGame from './ChessGame';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles.css';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/books" element={<Books />} />
        <Route path="/stocks" element={<WIP />} />
        <Route path="/derivatives-report" element={<DerivativesReport />} />
        <Route path="/nvidia-investment-thesis" element={<InvestmentThesis />} />
        <Route path="/tennis-report" element={<TennisReport />} />
        <Route path="/chess" element={<ChessGame />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
