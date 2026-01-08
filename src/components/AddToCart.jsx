import {useSelector} from "react-redux";    

const AddToCart = () => {

    const selector = useSelector((state) => state.cart.value);
    console.log(selector);    

    return (
        <div className="cart-wrapper">
            <a href="#" className="cart-icon">
                <i className="fas fa-shopping-cart"></i>
                <span className="cart-count">{selector}</span>
            </a>
        </div>
    )
}

export default AddToCart;