import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import { BrowserRouter,Routes,Route, Form } from "react-router-dom";
import Cart from "./Components/Cart/Cart"
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import CartContextProvider from "./context/CartContext";
import NotFound from "./Components/NotFound/NotFound";


function App() {
  return (
    <div>
      <BrowserRouter>
      <CartContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={ <ItemListContainer />}/>
        <Route path="/category/:id" element={ <ItemListContainer />}/>
        <Route path="/cart" element={<Cart/> }/>
        <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
        <Route path="/formulario" element={<Form/>}/>
        <Route path="*" element= {<NotFound/>}/>
      </Routes>      
      <Footer />
      </CartContextProvider>
      </BrowserRouter>

    </div>
  );
}

export default App;
