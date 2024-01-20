import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Services from "./components/Services";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Services />
      <Products />
      <Footer/>
    </div>
  );
}

export default App;
