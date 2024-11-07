
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import Layout from "./components/layout/Layout";
import NotFound from "./components/notFound/NotFound"
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import Cart from './components/cart/Cart';
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
