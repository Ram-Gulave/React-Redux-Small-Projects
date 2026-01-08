import {useDispatch} from "react-redux";
import {AddItem, RemoveItem} from "../redux/slice";
import {useEffect} from "react";
import {fetchProducts} from "../redux/productSlice";   
import {useSelector} from "react-redux"; 

const Product = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    const seletor = useSelector((state) => state.products.items);
    console.log(seletor);

    return (
        <section className="product-section">
            <div className="product-container">
                <div className="image-area">
                    <img src="/laptop.jpg" alt="Product Image" className="product-image" />
                </div>
                <div className="details-area">
                    <h1 className="product-title">Sample Product Name</h1>
                    <p className="product-description">
                        This is a detailed description of the product. It covers features, benefits,
                        materials used, dimensions, quality, and why you should buy it.
                    </p>
                    <div className="price-stock">
                        <span className="product-price">$49.99</span>
                        <span className="product-stock">In Stock</span>
                    </div>
                    <button onClick={() => dispatch(AddItem())} className="add-to-cart-btn">Add to Cart</button>
                    <button onClick={() => dispatch(RemoveItem())} className="add-to-cart-btn">Remove from Cart</button>
                </div>
            </div>
        </section>
    )
}

export default Product;