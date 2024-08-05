import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AuthServicesPage } from "./pages/AuthServicesPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthServicesPage />} />

      </Routes>
    </Router>
  );
}

export default App;
