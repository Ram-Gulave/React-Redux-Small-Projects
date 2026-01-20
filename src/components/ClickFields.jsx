import { useEffect, useRef,useState } from "react"

const ClickFields = () => {
	const [count, setCount] = useState(0)
	let val = useRef(0);
	let btnRef = useRef();
	// let val = 0   // value is not persists on a every re-render. When rendering happens whole code excute from start to end.

	const handleClick = () => {
		val.current = val.current + 1;
		console.log("value of a current ",val.current);		
		setCount(count + 1);
	}

	useEffect(() => {
		console.log("Re-render on every trigger....");
	})

	const handleColor = () => {
		btnRef.current.style.backgroundColor = "green";
	}
	// useEffect(() => {
	//   inputref.current = setInterval(() => {
	//     console.log("Timer running");
	//   }, 1000)
	//   return () => {
	//     clearInterval(inputref.current)
	//   }
	// }, [])

	return (
		<div>
			<button className="add-to-cart-btn" ref={btnRef} onClick={handleClick}>Increment</button>
			<button className="btn" onClick={handleColor} >Chnage Color</button>
			<p className="card-content">{count}</p>
		</div>
	)
}

export default ClickFields