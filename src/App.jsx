import Header from "./components/Header";
import { useDispatch } from "react-redux";
import './App.css';
import Product from "./components/Product";
import { ClearCart } from "./redux/slice";

function App() {
	const dispatch = useDispatch();

	return (
		<>
			<Header />
			<div className="app-background container">
				<h3 className="">Remove all items from cart</h3>
				<button onClick={() => dispatch(ClearCart())} className="btn btn-danger">Clear Cart</button>
			</div>
			<Product />
		</>
	)
}

export default App
