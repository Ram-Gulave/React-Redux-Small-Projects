import { useSelector } from "react-redux";
import { ClearCart, RemoveItem } from "../redux/slice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function CartList() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const cartSelector = useSelector((state) => state.cart.value);
    console.log("Cart data :- ", cartSelector);

    const [cartItems, setCartItems] = useState(cartSelector);

    useEffect(() => {
        setCartItems(cartSelector);
    }, [cartSelector]);

    const manageInput = (id, q) => {
        const quantity = parseInt(q) > 1 ? parseInt(q) : 1;
        const tempQuantity = cartSelector.map(item => {
            return item.id === id ? { ...item, quantity: quantity } : item;
        });

        setCartItems(tempQuantity);
    }


    const handleCart = () => {
        localStorage.clear();
        dispatch(ClearCart());
        navigate("/");
        alert("Proceeding to checkout with updated cart items.");
    }

    return (
        <>
            <div>
                <h2 className="container">Cart Items</h2>
                <div className="container cart-list">
                    {cartItems.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        <ul>
                            {cartItems.map((item, index) => (
                                <li key={index} className="cart-item">
                                    <h4>{item.name}</h4>
                                    <img src={item.thumbnail} alt={item.name} width="100" />
                                    <p>{item.brand}</p>
                                    <p>
                                        Quantity <input onChange={(e) => manageInput(item.id, e.target.value)} type="number" min="1" max="10" defaultValue="1" />
                                    </p>
                                    <p>Price: ${(item.quantity ? (item.quantity * item.price) : item.price).toFixed(2)}.</p>
                                    <button onClick={() => dispatch(RemoveItem(item.id))} className="btn btn-danger btn-sm ml-2">Remove</button>
                                </li>
                            ))}
                            <h3 className="total-box">
                                Total: ${cartItems.reduce((total, item) => item.quantity ? total + Math.ceil(item.price * item.quantity) : total + Math.ceil(item.price), 0)}
                            </h3>

                            <button onClick={() => dispatch(handleCart())} className="btn btn-primary btn-lg mb-4">Proceed to Checkout</button>
                        </ul>
                    )}
                </div>
            </div>
        </>
    )
}