import Navbar from "./components/Navbar";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Home from "./pages/Home";
import { Route, Routes} from "react-router-dom";

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/pricing" element={<Pricing/>}/>

      </Routes>

    </>
  );
}

export default App;
