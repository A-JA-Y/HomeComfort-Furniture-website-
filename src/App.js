import "./App.css";

import Footer from "./components/footer";

import Navbar from "./components/navbar";
import Home from "./pages/home";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <Footer />
      </div>
    </>
  );
}

export default App;
