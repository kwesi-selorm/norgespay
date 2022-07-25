import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/globals.css";
import LoginPage from "./views/LoginPage";
import SignupPage from "./views/SignupPage/SignupPage";
import AddSalary from "./components/AddSalary";
import Homepage from "./views/Homepage";
import AllSalaries from "./views/AllSalaries";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <Router>
        <Navbar user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/login"
            element={<LoginPage user={user} setUser={setUser} />}
          />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/add-salary" element={<AddSalary />} />
          <Route
            path="/all-salaries"
            element={<AllSalaries user={user} setUser={setUser} />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
