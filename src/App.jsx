import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";

/**
 *   Sets up a Single Page Application using React.
 */
function App() {

  return (
    <>
      {/* Available page routes. */}
      <div className = "app-header">
        <Router>
            <Routes>
              <Route path="/" element={<HomePage/>} />        {/*Element shows which page to route.*/}

              <Route path="/catalog" element={<CatalogPage/>} />
            </Routes>
        </Router>
      </div>

    </>
  )
}

export default App
