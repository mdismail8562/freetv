import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import WatchChannel from "./pages/WatchChannel";
import Categories from "./pages/Categories";
import Favorites from "./pages/Favorites";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <div className="bg-drift min-h-screen">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/watch/:id" element={<WatchChannel/>}/>
        <Route path="/categories" element={<Categories/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </div>
  );
}
