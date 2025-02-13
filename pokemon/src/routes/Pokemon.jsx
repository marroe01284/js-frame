import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
export function Pokemon() {
    const [pokemon, setPokemon] = useState({})
    const [isLoading, setLoading] = useState()
    const { name } = useParams();
    const [moveFilter, setMoveFilter] = useState("");
    useEffect(() => {
        async function getData() {
            const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + name);
            const data = await res.json();
            console.log(data);
            setPokemon({
                ...data,
                moves: data.moves.map((move) => move.move),
            });
            setLoading(false);
        }
        getData();
    }, []);


    const params = useParams();
    const filteredMoves = pokemon.moves?.filter((move) =>
        move.name.toLowerCase().includes(moveFilter.toLowerCase())
    );
    return (
        <>
            <h1>{name}</h1>
            {isLoading ? (<h2>Loading...</h2>) :
                (<div>
                    <h2>{pokemon.id}</h2>
                    <img src={pokemon.sprites?.front_default} alt={name} />
                    <input type=" text"
                        className="border"
                        placeholder="Search moves..."
                        onChange={(e) => {
                            setMoveFilter(e.target.value);
                        }}
                    />
                    {filteredMoves && (
                        <ul>
                            {filteredMoves.map((move) => (
                                <li key={move.name}>{move.name}</li>
                            ))}
                        </ul>
                    )}

                </div>
                )}


        </>
    )
}