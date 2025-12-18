import { Routes, Route } from "react-router";
import Navbar from "../src/components/NavBar/Navbar";
import Home from "../src/pages/Home/Home";
import { Recipes } from "../src/pages/Recipes/Recipes";
import MyKitchen from "../src/pages/MyKitchen";
import Account from "../src/pages/Account";

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
