import {useEffect, useState} from 'react';
import { Link } from "react-router-dom"
export function Home() {
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');

    const [pokemon, setPokemon] = useState([]);

    const [prevUrl, setPrevUrl] = useState('');
    const [nextUrl, setNextUrl] = useState('');

    useEffect(() => {
        async function getData() {
            const res = await fetch(url)
            const data = await res.json()
            console.log(data);

            setPrevUrl(data.previous);
            setNextUrl(data.next);

            setPokemon(data.results);
        }
        getData();
    }, [url]);

    return (
        <>
            <div className='text-center'>
                <h1 className='text-4xl text-red-500'>Pokedex</h1>
                {pokemon.map((pokemon) => {
                    /*const splitString = pokemon.url.split('/');
                    const id = splitString[6];*/

                    const url = new URL(pokemon.url);
                    const id = url.pathname.match(/\/pokemon\/(\d+)\//)[1];

                    return (

                        <Link to={"/pokemon/" + pokemon.name} key={pokemon.name} className='flex justify-center items-center'>
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                            alt={`${pokemon.name}`}/>
                            <p key={pokemon.name} className='text-black'>{pokemon.name}</p>
                        </Link>
                    )
                })}

                <div className='flex flex-row justify-center gap-2'>
                    {prevUrl ? (
                        <button className='border p-2 cursor-pointer gap' onClick={() => {
                            setUrl(prevUrl)
                        }}>Prev</button>
                    ) : (
                        <button disabled className='border p-2 cursor-pointer'>Prev</button>
                    )}
                    {nextUrl ? (
                        <button className='border p-2 cursor-pointer' onClick={() => {
                            setUrl(nextUrl)
                        }}>Next</button>
                    ) : (
                        <button disabled className='border p-2 cursor-pointer'>Next</button>
                    )}
                </div>
            </div>
        </>
    );
}
