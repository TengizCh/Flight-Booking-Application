import "./App.scss";
import Navbar from "./Components/NavBar/Navbar";
import Home from "./Components/Home/Home";
import Search from "./Components/Search/Search";
import Support from "./Components/Support/Support";
import Info from "./Components/Info/Info";
import Lounge from "./Components/Lounge/Lounge";
import Travalers from "./Components/Travalers/Travalers";
import Subscribers from "./Components/Subscribers/Subscribers";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Search />
      <Support />
      <Info />
      <Lounge />
      <Travalers />
      <Subscribers />
      <Footer />
    </div>
  );
}

export default App;
