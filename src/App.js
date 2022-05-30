import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecommendVideo from "./RecommendVideo";
import SearchPage from "./SearchPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/search/:searchTerm"
            element={
              <div className="app_page">
                <Sidebar />
                <SearchPage />
              </div>
            }
          />
          <Route
            path="/"
            element={
              <div className="app_page">
                <Sidebar />
                <RecommendVideo />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
