import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import "./styles/globals.css";
import LoginPage from "./views/LoginPage";
import SignupPage from "./views/SignupPage/SignupPage";
import AddSalary from "./views/AddSalary";
import Homepage from "./views/Homepage";
import AllSalaries from "./views/AllSalaries";
import { useState } from "react";
import NotFound from "./views/NotFound/NotFound";
import Layout from "./components/Layout";

/*TODO: Add transition to salary cards when they are hovered upon (increase scaling); 
On clicking a salary card, a new page should open with further details on the card (sector, years of experience, median salary value, maximum and minimum salary, chart of salary progression?, conversion tool);
Implement react query mutations; Add new view component for displaying a single salary card, route possibly /salary/:id
*/

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <Router>
        <RecoilRoot>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Homepage />} />
              <Route
                path="/login"
                element={<LoginPage user={user} setUser={setUser} />}
              />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/add-salary" element={<AddSalary />} />
              <Route path="/all-salaries" element={<AllSalaries />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </RecoilRoot>
      </Router>
    </div>
  );
}

export default App;
