import { Routes, Route } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import MyRecipes from "./pages/MyRecipes";
import Account from "./pages/Account";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/myrecipes" element={<MyRecipes />} />
        <Route path="/myaccount" element={<Account />} />
      </Routes>
    </>
  );
}

export default App;
