import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import WelcomePage from './Pages/WelcomePage';
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <Router>
      <div className="h-screen w-screen">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/Home" element={<HomePage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
