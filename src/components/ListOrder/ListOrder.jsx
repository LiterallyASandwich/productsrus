export default function ListOrder({ orders, handleAddToOrder }) {
    console.log(orders)
    return (
        <div className="ListOrder">
            {orders.map((order) => (
            <>
            <p> Order: {order.orderId}</p>
            <p>Quantity: {order.orderQty}</p>
            <p> Total: {order.orderTotal.toFixed(2)} </p>
            </> 
          ))}
                
            </div>
    )
}