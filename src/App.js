import './App.css';
import Home from './Components/Home';
import './Styles/style.css'
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Courses from './Components/Courses';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" >
          <Route path=":id" element={<Courses />} />
        </Route>



      </Routes>
    </>
  );
}

export default App;
