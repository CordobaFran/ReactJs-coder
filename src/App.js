import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';
import ItemDetailContainer from './containers/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer';

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid px-0">
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={"Bienvenidos a Petshop Store"} />} />
          <Route path='/detail/:productId' element={<ItemDetailContainer />} />
          <Route path='/products/:categoryId' element={<ItemListContainer />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
