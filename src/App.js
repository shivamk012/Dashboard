import './App.css';
import { Routes, Route } from "react-router-dom"
import GoogleAuth from './Components/GoogleAuth';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <GoogleAuth/> } />
        <Route path="/dashboard" element = {<Dashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;
