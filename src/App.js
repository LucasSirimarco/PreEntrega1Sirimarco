import './App.css';
import NavBar from './components/NavBar/NavBar';
import Category from './components/Category/Category';
import Item from './components/Item/Item';
import Contador from './components/Contador/Contador';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter,Routes,Route } from 'react-router-dom'


function App() {
  return <>

    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category' element={<Category />} />
          <Route path='/item' element={<Item />} />
          <Route path='/cart' element={<Contador />} />
        </Routes>
    </BrowserRouter>
    
    </>
}

export default App;
