import "./globals.css";
import "../src/components/SalaryCard/SalaryCard.css";
import { Header } from "./components/Header/Header";
import SalaryCard from "./components/SalaryCard/SalaryCard";
import HomepageButton from "./components/HomepageButton/HomepageButton";

function App() {
  return (
    <div className="App">
      <Header />
      <SalaryCard
        jobTitle="Software Engineer"
        company="Microsoft Corporation"
        salary={760000}
        votes={12}
      />
      <HomepageButton />
    </div>
  );
}

export default App;
