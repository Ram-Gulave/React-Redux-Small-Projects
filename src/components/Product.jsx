import { useDispatch } from "react-redux";
import { AddItem, RemoveItem } from "../redux/slice";
import { useEffect } from "react";
import { fetchProducts } from "../redux/productSlice";
import { useSelector } from "react-redux";

const Product = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    const productSeletor = useSelector((state) => state.products.items);
    // console.log(productSeletor);

    const cartSelector = useSelector((state) => state.cart);
    console.log(cartSelector);

    return (
        <div className="grid">
            {
                productSeletor.length && productSeletor.map((item, id) => (
                    <div key={id} className="card">
                        <img src={item.thumbnail} alt="product-image" className="card-image" />
                        <div className="card-content">
                            <h4 className="card-title">{item.title}</h4>
                            <p className="card-description">{item.description}</p>
                            <div className="card-action">
                                <span className="card-price">${item.price}</span>

                                {
                                    cartSelector.value.find(cartItem => cartItem.id === item.id) ?
                                    <button onClick={() => dispatch(RemoveItem(item.id))} className="btn btn-danger btn-sm ml-2">Remove from Cart</button>
                                    :
                                    <button onClick={() => dispatch(AddItem(item))} className="btn btn-primary btn-sm">Add to Cart</button>
                                }
                                <div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Product;