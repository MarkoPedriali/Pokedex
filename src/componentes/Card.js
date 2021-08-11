import { useCallback, useEffect, useState } from 'react';
import{ Link } from 'react-router-dom';


export default function Card(poke){

    const[pokemon,setPokemon] = useState(poke.poke) /*no cardlist, o fetch buscou obejtos com name e url.. entao precisei de um fetch aqui pra pegar as props como nome, img, weght, etc... */
    const [loading, setLoading] = useState(true);
    console.log(poke);
    const getData = useCallback(() => {
        fetch(poke.poke.url)
        .then(res => res.json())
        .then ((result) =>{
            setPokemon(result)
            setLoading(false)
        })
        .catch((error) =>{
            alert("manutençao")
            setLoading(true)
        })
    }, [poke.poke.url]);

    useEffect(() =>{
        getData();
    },[getData])

    let id = ('000' + pokemon.id).slice(-3);//para padronizar o ID no formato #3digitos(padrao que vem da imagem da api)


    // useEffect(() => {/* o effect vem logo abaixo da constante state.. isso, pelo flow do codigo, faz com que o o efect seja renderizado junto com oo Card assim que ele for chamado, dai ele faz o state atribuir oparametro recebido a contante pokemon */
    //     setPokemon(info.info);
    // }, [info.info]);


    return(
      
            <div className="app__list__card">
                <Link className="app__list__link" to={{
                    pathname:"/sobre/" + pokemon.id,
                    state: pokemon
                    }} >
                <img src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + id +".png"} alt={pokemon.name}/>
                <div className="app__list__card__info">
                    <p className="app__list__card__id">{'#'+id}</p>
                    <h3 className="app__list__card__name">{pokemon.name}</h3>
                    <div className="app__list__card__category">
                        {
                        /* {
                            na nossa api, o objeto é pokemon.types. esse é o objeto que vamos percorrer pois dentro deles
                            é que tem o type.name que sao os parametros que queremos mapear no key
                        } */
                        loading ? <span className="app__list__card__category--loading"></span> :
                        pokemon.types.map((item) => (
                            <span key={item.type.name} className={'app__list__card__category--'+item.type.name}>{item.type.name}</span> //no classname usei a propria variavel de item para utilizar no css 
                         ) )
                        }
                    </div>
                </div>
                </Link>
            </div>        
            
       
        
    );
}