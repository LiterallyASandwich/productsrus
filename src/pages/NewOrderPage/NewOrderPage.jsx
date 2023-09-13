import { useState, useEffect } from 'react';
import * as itemsAPI from '../../utilities/items-api';
import * as ordersAPI from '../../utilities/orders-api';
import { Link, useNavigate } from 'react-router-dom';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
// import UserLogOut from '../../components/UserLogOut/UserLogOut';
import List from '../../components/List/List'


export default function NewOrderPage() {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState(null);
  const navigate = useNavigate();
  useEffect(function() {
    console.log('useEffect runs after every render');
  });
  useEffect(function() {
    async function getItems() {
      const res = await itemsAPI.getAll();
      setItems(res);
    }
    getItems();
    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    }
      getCart();
  }, []);
  
  async function handleAddToOrder(itemId) {
    const updatedCart = await ordersAPI.addItemToCart(itemId);
    setCart(updatedCart);
  }

  async function handleChangeQty(itemId, newQty) {
    const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty);
    setCart(updatedCart);
  }

  async function handleCheckout() {
    await ordersAPI.checkout();
    navigate('/orders');
  }

  return (
    <main className="NewOrderPage">
      <h1>Order Our Products!</h1>
       
        
        <Link to="/orders" className="button btn-sm">PREVIOUS ORDERS</Link>
      {/* <UserLogOut user={user} setUser={setUser} /> */}
      
      <List
        handleAddToOrder={handleAddToOrder}
        items={items}
      /> 
      <OrderDetail
        order={cart}
        handleChangeQty={handleChangeQty}
        handleCheckout={handleCheckout}
      />
    </main>
  );
}
