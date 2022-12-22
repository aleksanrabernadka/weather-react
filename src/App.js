import "./App.css";
import SearchForm from "./SearchForm";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>

        <SearchForm />
        <footer>
          <a
            href="https://github.com/aleksanrabernadka/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            Open-sourced {}
          </a>
          on Github
        </footer>
      </header>
    </div>
  );
}

export default App;
