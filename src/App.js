import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Login/>} path="/login"/>
          <Route element={<Signup/>} path="/signup"/>
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App;
