export function HomeCollection({ products }) {


    return (
        <>
            {
                products.map((product,index) => (
                    <li key={product.id} className="home-collection-card">
                        <img className="home-collection-list-img" src={product.images[index]}/>
                        <span className="home-collection-list-name">{product.name}</span>
                    </li>
                ))
            }
        </>
    )
}