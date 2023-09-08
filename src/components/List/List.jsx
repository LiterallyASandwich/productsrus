import ListItem from '../ListItem/ListItem';

export default function List({ items, handleAddToOrder }) {
    const showItems = items.map(item =>
        <ListItem
        key={item._id}
        item={item}
        handleAddToOrder={handleAddToOrder}
        />
        
        );
        return (
            <main className="List">
                {showItems}
            </main>
        )
}