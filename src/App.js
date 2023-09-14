
import './App.css';
import Header from './component/Header';
import Drawers from './component/Drawers';
import  {BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Meal from "./Pages/Meal"
import Menu from "./Pages/Menu"
import Chat from "./Pages/Chat"
import About from "./Pages/About"
import Help from "./Pages/Help"
// import { Box } from '@mui/material';
// import MainBody from './component/MainBody';
// import SideRight from './component/SideRight';
function App() {
  return (
    <div className="App">
      
      <Header/>
    <BrowserRouter>

        <Routes>
        <Route path="/" element={<Drawers/>}>
          <Route index element={<Home/>}/>
          <Route path='/meal' element={<Meal/>}/>
          <Route path='/menu' element={<Menu/>}/>
          <Route path='/chat' element={<Chat/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/help' element={<Help/>}/>   
        </Route> 
        </Routes>
  
    </BrowserRouter>
 </div>
  );
}

export default App;
