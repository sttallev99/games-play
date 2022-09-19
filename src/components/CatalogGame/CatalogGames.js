import { useEffect, useState } from "react"

import * as gameService from '../../services/gameService';
import GameCard from "./GameCard";

export default function CatalogGames({
    navigationChangeHandler
}) {
    const [games, setGames] = useState([]);

    useEffect(() => {
        gameService.getAll()
            .then(gameResponse => {
                setGames(gameResponse);
            })
    }, [])

    return (
        <section id="catalog-page">
            <h1>All Games</h1>

            { games.length > 0
                ? games.map(x => <GameCard key={x._id} game={x} navigationChangeHandler={navigationChangeHandler} />)
                : <h3 className="no-articles">No articles yet</h3>            
            }

        </section>
    )
}