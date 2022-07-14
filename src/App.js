import NavBar from "./components/NavBar";
import Footer from "./container/Footer";
/* import ItemDetailContainer from "./container/ItemDetailContainer"; */
import ItemListContainer from "./container/ItemListContainer";

function App() {
  return (
    <>
    <NavBar />
    <ItemListContainer />
    {/* <ItemDetailContainer /> */}
    <Footer />
    </>
  );
}

export default App;
