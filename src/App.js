import "./App.css";
import HomePage from "./pages/HomePage";
import PayrollPage from "./pages/PayrollPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QuickLonePage from "./pages/QuickLonePage";
import InventoryPage from "./pages/InventoryPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/payroll" element={<PayrollPage />} />
        <Route path="/loan" element={<QuickLonePage />} />
        <Route path="/inventory" element={<InventoryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
