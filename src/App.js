import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Start from './componentes/Start';
import StartGame from './componentes/StartGame';
import PlayerName from './componentes/PlayerName';
import Players from './componentes/Players';
import SeleccionCuadricula from './componentes/SeleccionCuadricula';
import { P1Provider } from './componentes/Provider/GameContext';
import Tema from './componentes/Tema';
import NoEncotrada from './componentes/NoEncotrada';
import NotLogged from './componentes/NotLogged';
import Informacion from './componentes/Informacion';

function App() {
  return (
    <P1Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start />} />
            {/* <Route path="game" element={<Game />}> */}
              <Route path="/game/players" element={<Players />}/>
              <Route path="/game/name" element={<PlayerName />}/>
              <Route path="/game/theme" element={<Tema />}/>
              <Route path="/game/size" element={<SeleccionCuadricula />}/>
              <Route path="/game/startgame/:size" element={<StartGame />}/>
            {/* </Route> */}
            <Route path="/notLogged" element={<NotLogged/>} />
            <Route path="/info" element={<Informacion />} />
            <Route path="*" element={<NoEncotrada/>} />
            
          </Routes>
        </BrowserRouter>
      </P1Provider>
  );
}

export default App;
