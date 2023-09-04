import logo from "./logo.svg";
import "./App.css";
import MyFirstComponent from "./MyFirstComponent"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyFirstComponent />

        <MyFirstComponent />
      </header>
    </div>
  );
}

export default App;
