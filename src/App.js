import { Routes,Route } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Header from './Components/Header';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Login/>}/>
      
      </Routes>
    </>
  );
}

export default App;
