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
import DataFacther from "./components/DataFacther";
import Search from "./components/SearchBar";
import DropDownMenuBar from "./components/DropDownMenu";
import TabsComponents from "./components/TabsComponent";
import ModelComponent from "./components/ModelComponent"
import Carousel from "./components/Carousel";
import StarRatings from "./components/StarRatings";

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
			</BrowserRouter >
			<DropDownMenuBar />
			<TabsComponents />
			<ModelComponent />
			<ToDoList />
			{/* <Accordion /> */}
			<AccordionNew />
			<ContactForm />
			{/* <ProgressBar /> */}
			<ProgressOpenBar />
			<MortageCalculator />
			<DataFacther />
			<Search />
			<Carousel />
			<StarRatings />
		</>
	)
}

export default App
