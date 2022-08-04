import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';
import Cart from './containers/Cart';
import ItemDetailContainer from './containers/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer';
import ShopProvider from './Context/ShopContext';

function App() {
  return (
    <ShopProvider>
      <BrowserRouter>
        <div className="container-fluid px-0">
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={"Bienvenidos a Petshop Store"} />} />
            <Route path='/detail/:productId' element={<ItemDetailContainer />} />
            <Route path='/products/:categoryId' element={<ItemListContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ShopProvider>
  );
}

export default App;
