import Header from "./components/header/header.component";
import Hero from "./components/hero/hero.component";
import "./App.css";
import Companies from "./components/companies/companies.component";
import Residencies from "./components/residencies/residencies.component";
import Value from "./components/value/value.component";
import Contact from "./components/contacts/contact";

function App() {
  return (
    <div>
      <div className="App">
        <div>
          <div className="white-gradient" />
          <Header />
          <Hero />
        </div>
      </div>

      <Companies />
      <Residencies />
      <Value />
      <Contact />
    </div>
  );
}

export default App;
