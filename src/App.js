import { useState, createElement } from "react";

import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import Login from "./components/Login";
import Register from "./components/Register";
import CreateGame from "./components/CreateGame";
import EditGame from "./components/EditGame";
import DetailsGame from "./components/DetailsGame";
import CatalogGames from "./components/CatalogGames";

function App() {

  const [page, setPage] = useState('/home');

  const routes = {
    '/home' : <WelcomeWorld/>,
    '/allGame': <CatalogGames/>,
    '/createGame': <CreateGame/>,
    '/login': <Login/>,
    '/register': <Register/>
  }

  const navigationChangeHandler = (path) => {
    setPage(path);
    }

  return (
    <div id="box">

      <Header navigationChangeHandler={navigationChangeHandler}/>

      <main id="main-content">
        { routes[page] || <h2>No page found!</h2>}
      </main>
    </div>
  );
}

export default App;
