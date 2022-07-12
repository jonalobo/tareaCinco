import NavBar from "./components/NavBar";
import Footer from "./container/Footer";
import ItemListContainer from "./container/ItemListContainer";

function App() {
  return (
    <>
    <NavBar />
    <ItemListContainer texto="Contenedor de items" />
    <Footer />
    </>
  );
}

export default App;
