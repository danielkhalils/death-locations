import React, { useEffect, useState, useRef } from "react";
import './Carousel.css';

function Carousel(){

    const [data, setData] = useState([]);
    const carousel = useRef(null);

    useEffect(() => {
        fetch('http://localhost:3000/src/static/shoes.json')
        .then((response) => response.json()) 
        .then(setData)
    }, []);

    const handleLeftClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }

    const handleRightClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    }

    if(!data || !data.length) return null;

    return(
        <div className="container">
            <div className="logo">
                <img src="/src/assets/tomb-100.png" alt="logo"/>
            </div>
            <div className="carousel" ref={carousel}>
                {data.map((item) => {     
                    const {id, name, brand, price, shoeUrl} = item;            
                    return(
                        <div className="item" key={id}>
                            <div className="image">''
                                <img src={shoeUrl} alt={name} />
                            </div>
                            <div className="info">
                                <span className="name">{name}</span>
                                <span className="price">{price}</span>
                                <span className="brand">{brand}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="buttons">
                <button onClick={handleLeftClick}><img src="/src/assets/tomb-100.png" alt="Scroll Left"/></button>
                <button onClick={handleRightClick}><img src="/src/assets/tomb-100.png" alt="Scroll Right"/></button>
            </div>
        </div>
    )
}

export default Carousel