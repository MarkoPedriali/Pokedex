import Card from './Card';
import { useEffect, useState } from 'react';

export default function Cardlist(){

    const [pokemon, setPokemon] = useState([]);
    const [loadind, setLoading] = useState(false);

    const getData = () => {
        fetch('https://pokeapi.co/api/v2/pokemon/?offset=199&limit=300')// fetch buscar dados(tbm fazer pesquisa)
        .then(res => res.json()) //transforma em um json
        .then ((result) => {
            setPokemon(result.results)
            setLoading(false)
        })
        .catch((error) => { //caso o fetch de erro
            alert('Em manutenção')
            setLoading(true)
        })
    }

    useEffect(()=> {
        getData();
    }, []);



    //  *******  MATERIAL PRIMERIAS AULAS
    // const [pokemon, setPokemon] = useState([]);
    // let listPokemon = () => {
    //     setPokemon([
    //         {
    //             "id": 1,
    //             "name":"lapras",
    //             "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/131.png",
    //             "altura": 25,
    //             "peso": 2200,
    //             "habilidades":["Bomba-d'agua","Submerso"] ,
    //         },
    //         {
    //             "id": 2,
    //             "name":"pikachu",
    //             "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg", 
    //             "altura": 4,
    //             "peso": 60 ,
    //             "habilidades": ["Choque-do-Trovao"],
    //         },
    //         {
    //             "id": 3,
    //             "name":"butterfree",
    //             "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png", 
    //             "altura": 11,
    //             "peso": 320,
    //             "habilidades": ["Sono","Voar"],
    //         },
    //         {
    //             "id": 4,
    //             "name":"blastoise",
    //             "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png" ,
    //             "altura": 16,
    //             "peso":855 ,
    //             "habilidades": ["Torrent","Rain-dish"],
    //         },
    //         {
    //             "id": 5,
    //             "name":"beedrill",
    //             "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png" ,
    //             "altura": 10,
    //             "peso": 295,
    //             "habilidades":["Swarm", "Sniper"] ,
    //         },
    //         {
    //             "id": 6,
    //             "name":"charmeleon",
    //             "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png" ,
    //             "altura": 11,
    //             "peso":190 ,
    //             "habilidades": ["Blaze","Solar-Power"],
    //         },
           

    // ])};


    return(
        <>
        
       
        <div className="app__list">
            {
                // pokemon.map((item) => (
                //     <Card poke ={item} key={item.id}></Card> /* o key...*/
                // ))

                loadind ? ( // a interrogação é o if verdadeiro
                        <Card></Card> //se o loading verdadeiro, card vazio
                    ): ( // else.... renderiza o card normalmente
                        pokemon.map ((item) => (
                        <Card poke ={item} key={item.name}></Card>
                        ))
                )

            }
            {/* <button onClick={listPokemon}>Listar Pokémons</button> */}
            
        </div>
        </>
    );
} 