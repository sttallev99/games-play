import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import Login from "./components/Login";
import Register from "./components/Register";
import CreateGame from "./components/CreateGame";
import EditGame from "./components/EditGame";
import DetailsGame from "./components/DetailsGame";
import CatalogGames from "./components/CatalogGames";

function App() {
  const routes = {
    '/home' : WelcomeWorld,
    '/allGame': CatalogGames,
    'createGame': CreateGame,
    '/login': Login,
    '/register': Register
  }
  return (
    <div id="box">

      <Header />

      <main id="main-content">
        <WelcomeWorld />
      </main>
    </div>
  );
}

export default App;
