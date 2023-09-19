import "./App.scss";
import Header from "./Components/Partials/Header/Header";
import AppRouter from "./Components/App/Router/AppRouter";
import Footer from "./Components/Partials/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
