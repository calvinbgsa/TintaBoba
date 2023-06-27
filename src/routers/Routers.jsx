import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../App';
import Menu from '../Menu';
import Order from '../Order';
import About from '../AboutUs';

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
