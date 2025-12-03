import { Routes, Route } from "react-router";
import Navbar from "./components/NavBar/Navbar";
import Home from "./pages/Home/Home";
import { Recipes } from "./pages/Recipes/Recipes";
import MyKitchen from "./pages/MyKitchen";
import Account from "./pages/Account";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/mykitchen" element={<MyKitchen />} />
        <Route path="/myaccount" element={<Account />} />
      </Routes>
    </>
  );
}

export default App;
