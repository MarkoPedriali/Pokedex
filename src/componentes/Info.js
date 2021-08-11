import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


export default function Info(props) {

  const pokemon = props.location.state

  let id = ('000' + pokemon.id).slice(-3);
  // const [pokemons, setPokemons] = useState(props.location.state);

  // useEffect(() => {
  //   setPokemons(info.location.state);
  // }, [info.location.state])

  return (
    <section className="app__info">
      <div className="app__info__info-card">
        <h1>{pokemon.name}</h1>
        <div className="app__info__info-card-info-body">
          <img src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + id +".png"} alt={pokemon.name}/> 
          <div className="info-block">
            <div className="geral">
              <p><strong>Altura: </strong> {pokemon.height}</p>
              <p><strong>Peso: </strong> {pokemon.weight}</p>
              <p><strong>Habilidades: </strong>
              {
                pokemon.abilities.map( (item) => (
                <p key={item.ability.name}>{' '+item.ability.name}</p>
                ))
              } </p> 
            </div>
            <br></br>
            <p><strong>Attributes</strong></p>
            {
              pokemon.stats.map( (item) => (
                <p> <strong>{item.stat.name}:</strong>{' '+item.base_stat}</p>
              ))
            }<br></br>
            <div >
            <p className='movimentos'><strong>Movimentos</strong></p>
            <p>
            {
              pokemon.moves.map( (item) => (
                item.move.name + ' ,'
              ))
            }
            </p>
            </div>
          </div>
          <div className="type-info">
            <p className="tipos"><strong>Tipo</strong></p>
              {
                pokemon.types.map((item) => (
                  <span key={item.type.name} className={"app__category-info--"+item.type.name}>{item.type.name}</span>
                ))
              }
          </div>
        </div>
        <div className="info-footer">
          <Link className="link" to="/">← Voltar</Link>
        </div>
      </div>
    </section>
  );
}