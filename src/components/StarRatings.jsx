import { useState } from "react";


const Stars = ({totalStars = 5}) => {

    const [star, setStar] = useState(0);

    return (
        <div>
            {
                [...Array(totalStars)].map((item, index) => {
                    const stars = index + 1;
                    return (
                        <button 
                            key={index}
                            onClick={() => setStar(stars)}
                            style={{ cursor:'pointer', color: stars <= star ? 'gold' : 'gray'}}
                        >
                            ★
                        </button>
                    )
                })
            }
        </div>
    )
}

const StarRatings = () => {
    return <Stars />
}

export default StarRatings;