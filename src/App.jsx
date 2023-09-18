import "./App.scss";
import NavBar from "./Components/Partials/Nav/NavBar";
import AppRouter from "./Components/App/Router/AppRouter";

function App() {
  return (
    <div className="App">
      <NavBar />
      <AppRouter />
    </div>
  );
}

export default App;
