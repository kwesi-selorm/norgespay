import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./globals.css";
import LoginPage from "./components/LoginPage/LoginPage";
import SignupPage from "./components/SignupPage/SignupPage";
import AddSalary from "./components/AddSalary/AddSalary";
import Homepage from "./components/Homepage/Homepage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/signup" element={<SignupPage />}></Route>
          <Route path="/add-salary" element={<AddSalary />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
