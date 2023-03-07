import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import ItemDetail from "./Components/ItemDetail/ItemDetail";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={ <ItemListContainer />}/>
        <Route path="/category/:id" element={ <ItemListContainer />}/>
        <Route path="/cart" element={ <Cart/>}/>
        <Route path="/item/:id" element={<ItemDetail/>}/>
        <Route path="*" element={<h1>error 404 not found</h1>}/>
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
