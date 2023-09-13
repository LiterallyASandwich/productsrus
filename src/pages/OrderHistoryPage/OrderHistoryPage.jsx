import { useEffect } from 'react'
import * as ordersAPI from '../../utilities/orders-api';
export default function OrderHistoryPage() {
  
  useEffect(function() {
    async function getOrders() {
    const orders = await ordersAPI.getOrderHistory();
    console.log(orders)
    }
    getOrders();
  }, []);


  return (

    <>
    <h1>OrderHistoryPage</h1>
    <List
        getOrderHistory={getOrderHistory}
        orders={orders}
      />
    </>
  );
}