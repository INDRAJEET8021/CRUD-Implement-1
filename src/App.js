import "./App.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Create from "./Components/Create";
import Read from "./Components/Read";
import Update from "./Components/Update";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      {/* <header className="App-header"> 
      </header>
      */}
      
     <Route exact path="/" element={<Create/>}></Route>
     <Route exact path="/read" element={<Read/>}></Route>
     <Route exact path="/update" element={<Update/>}></Route>

     {/* react routing is very important to rendered or show the created data in the display  */}
    </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
