import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AddToCart = () => {

    const cartSelector = useSelector((state) => state.cart.value);
    console.log("Added data :- ", cartSelector.length);

    return (
        <div className="cart-wrapper">
            <Link to="/cart">
                <span className="cart-count">{cartSelector.length}</span>
            </Link>
        </div>
    )
}

export default AddToCart;