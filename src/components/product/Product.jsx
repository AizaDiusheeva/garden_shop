import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './product.scss';


const Product = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`http://localhost:3333/products/${id}`);
                const data = await response.json();
                console.log('Ответ от сервера:', data);

                if (Array.isArray(data)) {
                    setItem(data[0]); // Если сервер возвращает массив
                } else {
                    setItem(data); // Если сервер возвращает объект
                }
            } catch (error) {
                console.error('Ошибка загрузки продукта:', error);
            }
        };

        fetchProduct();
    }, [id]);

    const increaseQuantity = () => {
        setQuantity((prev) => prev + 1);
    };

    const decreaseQuantity = () => {
        setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    };

    if (!item) {
        return <p>Product not found</p>;
    }

    return (

        <div className="product">
            <div className="product__item">
                <div className="product__image">
                    <img src={`http://localhost:3333${item.image}`} alt={item.title} />
                </div>
            </div>
            <div className="product__details">
                <div className="product__info">
                    <strong>{item.title}</strong>
                    <div className="product__price">
                        {item.discont_price ? (
                            <>
                                <span className="new-price">{item.discont_price}$</span>
                                <span className="old-price">{item.price}$</span>
                            </>
                        ) : (
                            <span>{item.price}₽</span>
                        )}
                        {item.discont_price && (
                            <div className="discount-badge">
                                -{Math.round(((item.price - item.discont_price) / item.price) * 100)}%
                            </div>
                        )}
                    </div>
                </div>
                <div className="product__controls">
                    <div className="product__quantity-btn">
                        <button className="product__minus" onClick={decreaseQuantity}>-</button>
                        <span className="product__quantity">{quantity}</span>
                        <button className="product__plus" onClick={increaseQuantity}>+</button>
                    </div>
                    <button className="product__add-to-cart-btn">Add to cart</button>
                </div>
                <div className="product__description">
                    <strong>{item.title}</strong>
                    <p>{item.description}</p>
                    <button className="product__read-more-btn">Read more</button>
                </div>
            </div>
        </div>
    );
};

export default Product;