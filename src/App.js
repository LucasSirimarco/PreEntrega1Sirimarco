import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { CartContextProvider } from "./context/CartContext"
import { NotificationProvider } from './Notification/Notification';
import Checkout from './components/Checkout/Checkout';
import Cart from './components/Cart/Cart'
import Brief from './components/Brief/Brief';


function App() {
  return <>
    <NotificationProvider>
      <CartContextProvider>
        <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer greeting='Listado de todos los productos' />} />
              <Route path='/category/:categoryId' element={<ItemListContainer  greeting='Categoria:'/>} />
              <Route path='/detail/:productId' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='*' element={<h1>Página No Encontrada</h1>} />
              <Route path='/checkout' element={<Checkout />} />
              <Route path='/ticket' element={<Brief />} />
            </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </NotificationProvider>
    
    </>
}

export default App;
