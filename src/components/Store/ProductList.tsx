import data from '../../products/products.json';
import { IProduct } from "../../types/types";


const ProductList = () => {
    const products: IProduct[] = data.data;

    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {products.map(item => (
                    <li key={item.id}>
                        <h2>{item.name}</h2>
                        <p>{item.type}</p>
                        <p>Price: {item.price}</p>
                        <p>Gender: {item.gender.join(', ')}</p>
                        <img style={{height: '200px', width: '200px'}} src={item.image} alt={item.name} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductList;

