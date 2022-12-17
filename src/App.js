import logo from "./logo.svg";
import "./App.css";
import SearchForm from "./SearchForm";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>

        <SearchForm />
      </header>
    </div>
  );
}

export default App;
