
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import SearchResults from './components/SearchResults';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import BookDetail from './components/BookDetail';
import NoPage from './components/NoPage';


function App() {
  return (
    <BrowserRouter>
      <nav className="navbar" style = {{paddingBottom: '20'}}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/cart">Cart</NavLink>
        <NavLink to="/checkout">Checkout</NavLink>
      </nav>
      <Routes>
        <Route path="/"                   element={<Home/>} />
        <Route path="/cart"               element={<Cart/>} />
        <Route path="/checkout"               element={<Checkout/>} />
        <Route path="*"                   element={<NoPage/>} />
        <Route path="/search/:queryText"  element={<SearchResults/>} />
        {/* <Route path="/books"              element={<BookStore/>} /> */}
        <Route path="/book/:bookID"       element={<BookDetail/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
