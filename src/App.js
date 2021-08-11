import { BrowserRouter, Switch, Route } from "react-router-dom";
import Info from "./componentes/Info";
import Cardlist from "./componentes/Cardlist";
import './styles/global.scss'

function App() {
  return (

   <div className="app">
    <BrowserRouter> {/* avisa ao nevegador que aqui tem rotas */}
      <Switch>{/* aqui avisa que tem escolhas, no caso cards dos pokemons */}
        <Route path="/" exact={true} component={Cardlist}/>{/*ver exact no readme */}
        <Route path="/sobre/:id" component={Info}/> {/*path = caminho da rota */}
      </Switch>
    </BrowserRouter>
   
   </div>

  );
}

export default App;
