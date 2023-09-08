
export default function ListItem({ item, handleAddToOrder }) {
    return (
        <div className="ListItem">
            <div className="name">{item.name}</div>
            <div className="description">{item.description}</div>
            <div className="buy">
                <span>${item.price.toFixed(2)}</span>
                    <button className="btn-sm" onClick={() => handleAddToOrder(item._id)}>
                    ADD
                    </button>
                </div>
            </div>
    )
}