import { useEffect, useState } from "react"

import GameCard from "./GameCard";

export default function CatalogGames() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/data/games?sortBy=_createdOn%20desc', {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
            .then(res => res.json())
            .then(gameResponse => {
                setGames(gameResponse);
            })
    }, [])

    return (
        <section id="catalog-page">
            <h1>All Games</h1>

            { games.length > 0
                ? games.map(x => <GameCard key={x._id} game={x} />)
                : <h3 className="no-articles">No articles yet</h3>            
            }

        </section>
    )
}