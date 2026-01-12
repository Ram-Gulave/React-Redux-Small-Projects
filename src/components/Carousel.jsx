
import { useState } from "react";

const CarouselImages = ({ images }) => {
    const [active, setActive] = useState(0);

    const goToNext = () => {
        setActive((prev) => {
            // console.log(prev);           // ← prints OLD value
            return (prev + 1) % images.length;
        });
    }

    const goToPrevious = () => {
        setActive((prev) => (prev - 1 + images.length) % images.length)
    }
    return (
        <div className="flex justify-center items-center gap-3 my-10">
            <button onClick={goToNext} className="bg-amber-500 rounded-3xl px-6 py-2 text-white">Next</button>
            <img src={images[active]} alt="images" />
            <button onClick={goToPrevious} className="bg-amber-500 rounded-3xl px-6 py-2 text-white">Previous</button>
        </div>
    )
}

const Carousel = () => {
    const images = [
        "/laptop.jpg",
        "/laptop1.jpg",
        "/laptop2.jpg",
    ]

    return <CarouselImages images={images} />
}

export default Carousel;