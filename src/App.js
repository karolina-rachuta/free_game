import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import GameDetails from './components/GameDetails';
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/games/:id' element={<GameDetails/>}/>
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
