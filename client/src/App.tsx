import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./globals.css";
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
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route
            path="/login"
            element={<LoginPage user={user} setUser={setUser} />}
          ></Route>
          <Route path="/signup" element={<SignupPage />}></Route>
          <Route path="/add-salary" element={<AddSalary />}></Route>
          <Route
            path="/all-salaries"
            element={<AllSalaries user={user} setUser={setUser} />}
          ></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
