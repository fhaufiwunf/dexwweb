import { Token } from "@mui/icons-material";
import "./App.css";
import Header from "./components/Header";
import Swap from "./components/Swap";
import swap from "./components/Swap";
import token from "./components/Tokens";

import {Routes, Route} from "react-router-dom"
function App() {
  return(
    <div className="App">
      <Header/>
      <div className="mainWindow">
        <Routes>
          <Route path="/" element={<Swap/>}/>
          <Route path="/token" element={<Token/>}/>
        </Routes>
      </div>
    </div>

  ) ;
  
}

export default App;
