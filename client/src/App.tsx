import "./App.css";
import { Header } from "./components/Header/Header";
import SalaryCard from "./components/SalaryCard/SalaryCard";
import HomepageButton from "./components/HomepageButton/HomepageButton";

function App() {
  return (
    <div className="App">
      <Header />
      <SalaryCard />
      <HomepageButton />
    </div>
  );
}

export default App;
