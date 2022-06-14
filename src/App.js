import './App.css';
import Home from './Components/Home';
import './Styles/style.css'
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />



    </Routes>
  );
}

export default App;
