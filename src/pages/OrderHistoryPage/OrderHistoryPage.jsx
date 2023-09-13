import { useState, useEffect } from 'react'
import * as ordersAPI from '../../utilities/orders-api';
import ListOrder from '../../components/ListOrder/ListOrder'
export default function OrderHistoryPage() {
  

  const [orders, setOrders] = useState([]) 

  useEffect(function() {
    async function getOrders() {
    const orders = await ordersAPI.getOrderHistory();
    console.log(orders)
    setOrders(orders)
    }
    getOrders();
  }, []);


  return (

    <main className= "OrderHistoryPage" >
    <h1>OrderHistoryPage</h1>
    <ListOrder
        orders={orders}
      />
    </main>
  );
}