import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Start from './componentes/Start';
import StartGame from './componentes/StartGame';
import PlayerName from './componentes/PlayerName';
import Players from './componentes/Players';
import SeleccionCuadricula from './componentes/SeleccionCuadricula';
import Game from './componentes/Game';
import { P1Provider } from './componentes/Provider/GameContext';



function App() {
  return (
    <P1Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start />} />
            <Route path="game" element={<Game />}>
              <Route path="/game/players" element={<Players />}/>
              <Route path="/game/name" element={<PlayerName />}/>
              <Route path="/game/size" element={<SeleccionCuadricula />}/>
              <Route path="/game/startgame" element={<StartGame />}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </P1Provider>
  );
}

export default App;
