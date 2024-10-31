
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Layout from "./components/Layout/Layout";
import NotFound from "./components/NotFound/NotFound"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import CartProvider from './context/CartProvider';





function App() {
  return (
    <>
    <CartProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={'Entrega II - Yacuzzi Walter'} />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/detail/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart/>}/>
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </CartProvider>
      
    </>
  )
}

export default App
