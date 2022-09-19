import { useState, createElement } from "react";

import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import Login from "./components/Login";
import Register from "./components/Register";
import CreateGame from "./components/CreateGame";
import EditGame from "./components/EditGame";
import DetailsGame from "./components/DetailsGame";
import CatalogGames from "./components/CatalogGame/CatalogGames";
import ErrorPage from "./components/ErrorPage";

function App() {

  const [page, setPage] = useState('/home');

  const navigationChangeHandler = (path) => {
    console.log(path);
    setPage(path);
  }

  const router = (path) => {
    let pathName = path.split('/');

    let rootPath = pathName[1];
    let argument = pathName[2];

    const routes = {
      'home' : <WelcomeWorld/>,
      'allGame': <CatalogGames navigationChangeHandler={navigationChangeHandler} />,
      'createGame': <CreateGame/>,
      'login': <Login/>,
      'register': <Register/>,
      'details': <DetailsGame id={argument} />
    }
    return routes[rootPath];
  }



  return (
    <div id="box">

      <Header navigationChangeHandler={navigationChangeHandler}/>

      <main id="main-content">
        { router(page) || <ErrorPage />}
      </main>
    </div>
  );
}

export default App;
