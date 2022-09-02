import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import WelcomePage from './Pages/WelcomePage';
import HomePage from "./Pages/HomePage";
import SearchPage from './Pages/SearchPage';

function App() {
  return (
    <Router>
      <div className="h-screen w-screen">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/Home" element={<HomePage/>} />
          <Route path="/Search" element={<SearchPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
