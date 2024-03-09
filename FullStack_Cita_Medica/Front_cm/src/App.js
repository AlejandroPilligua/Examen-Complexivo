import logo from './logo.svg';
import './App.css';

//importamos los componentes
import CompShowMedicos from './medico/ShowMedicos';
import CompCreateMedico from './medico/CreateMedico';
import CompEditMedico from './medico/EditMedico';

//importamos el router
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />        
      </header>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={ <CompShowMedicos />} />
            <Route path='/create' element={ <CompCreateMedico />} />
            <Route path='/edit/:id' element={ <CompEditMedico />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
