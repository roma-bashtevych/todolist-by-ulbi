import './App.css'
import {BrowserRouter} from "react-router-dom";
import {Navbar} from "./components/UI/navbar/Navbar";
import {Routers} from "./components/routers/Routers";

function App() {
    return (
        <BrowserRouter>
        <Navbar/>
          <Routers/>
        </BrowserRouter>
    )
}

export default App;
