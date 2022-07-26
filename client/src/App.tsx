import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/globals.css";
import LoginPage from "./views/LoginPage";
import SignupPage from "./views/SignupPage/SignupPage";
import AddSalary from "./views/AddSalary";
import Homepage from "./views/Homepage";
import AllSalaries from "./views/AllSalaries";
import { useState } from "react";
import Footer from "./components/Layout/Footer";
import { User } from "./types";
import NotFound from "./views/NotFound/NotFound";
import Layout from "./components/Layout";

function App() {
  const [user, setUser] = useState(null);
  const [loggedUser, setLoggedUser] = useState<User>(null);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            element={
              <Layout loggedUser={loggedUser} setLoggedUser={setLoggedUser} />
            }
          >
            <Route path="/" element={<Homepage />} />
            <Route
              path="/login"
              element={<LoginPage user={user} setUser={setUser} />}
            />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/add-salary" element={<AddSalary />} />
            <Route
              path="/all-salaries"
              element={
                <AllSalaries
                  loggedUser={loggedUser}
                  setLoggedUser={setLoggedUser}
                />
              }
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
