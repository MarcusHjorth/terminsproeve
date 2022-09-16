import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import WelcomePage from './Pages/WelcomePage';
import HomePage from "./Pages/HomePage";
import SearchPage from './Pages/SearchPage';
import MySchedulePage from './Pages/MySchedulePage';
import ClassDetails from './Pages/ClassDetails';
import LogInPage from './Pages/LogInPage';


function App() {
  return (
    <Router>
      <div className="h-screen w-screen font-poppins">
        <Routes>
          <Route path="*" element={<WelcomePage />} />
          <Route path="/Home" element={<HomePage/>} />
          <Route path="/Search" element={<SearchPage />} />
          <Route path="/MySchedule" element={<MySchedulePage />} />
          <Route path="/Classes/:id" element={<ClassDetails /> } />
          <Route path="/Login" element={<LogInPage /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
