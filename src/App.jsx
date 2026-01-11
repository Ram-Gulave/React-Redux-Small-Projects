import Header from "./components/Header";
import { useDispatch } from "react-redux";
import './App.css';
import Product from "./components/Product";
import { ClearCart } from "./redux/slice";
import CartList from "./components/CartList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Accordion from "./components/Accordion";
import AccordionNew from "./components/AccordionNew";
import ContactForm from "./components/ContactForm";
// import ProgressBar from "./components/ProgressBar";
import ProgressOpenBar from "./components/ProgressOpenBar";
import MortageCalculator from "./components/MortageCalculator";
import ToDoList from "./components/ToDoList";

function App() {
	const dispatch = useDispatch();

	return (
		<>
			<BrowserRouter>
			<Header path="/" />
			<div className="app-background container">
				<h3 className="">Remove all items from cart</h3>
				<button onClick={() => dispatch(ClearCart())} className="btn btn-danger">Clear Cart</button>
			</div>
				<Routes>
					<Route path="/" element={<Product />} />
					<Route path="/cart" element={<CartList />} />
				
				</Routes>
				<ToDoList />
				{/* <Accordion /> */}
				<AccordionNew />
				<ContactForm />
				{/* <ProgressBar /> */}
				<ProgressOpenBar />
				<MortageCalculator />
			</BrowserRouter >
		</>
	)
}

export default App
