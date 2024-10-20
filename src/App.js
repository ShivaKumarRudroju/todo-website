import Home from "./components/Home";
import Cart from "./components/Cartpage";
import Collectionpage from "./components/Collectionpage";
import Productpage from "./components/Productpage";
import User from "./components/User";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Home />
        <Routes>
          <Route path="/cartpage" element={<Cart />} />
          <Route path="/collectionpage" element={<Collectionpage />} />
          <Route path="/productpage" element={<Productpage />} />
          <Route path="/user" element={<User/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
