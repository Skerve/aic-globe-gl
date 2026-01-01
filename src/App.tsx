import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobePage from './pages/GlobePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/globe" element={<GlobePage />} />
      </Routes>
    </Router>
  );
}

export default App;
