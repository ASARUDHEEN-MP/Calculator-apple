import logo from './logo.svg';
import './App.css';
import Ui from './Components/Ui';
import Loading from './Components/Loading';
import { Routes, Route, Navigate, Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/*' element={<Ui />} />
      </Routes>
     
    </div>
  );
}

export default App;
