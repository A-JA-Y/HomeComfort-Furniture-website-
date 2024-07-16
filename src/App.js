import "./App.css";
import MyCarousel from "./components/home/carousel";
import SaleCoutdown from "./components/home/saleCoutdown";

import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Navbar />
      <MyCarousel />
      <SaleCoutdown />
    </>
  );
}

export default App;
