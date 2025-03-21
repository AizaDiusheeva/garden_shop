import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Filter from  "../Nav/Filter"; // Убедись, что компонент `Filter` подключен
import Products from '../products/Products';
import "./allproduct.scss";

const AllProducts = () => {
    const [products, setProducts] = useState([]); // Все товары
    const [filteredProducts, setFilteredProducts] = useState([]); // Фильтрованные товары

    // Фильтры
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [discountOnly, setDiscountOnly] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:3333/products/'); // Запрос всех товаров
                const result = await response.json();

                console.log("Полученные данные:", result);

                if (!Array.isArray(result.data)) {
                    throw new Error("Некорректные данные от API");
                }

                setProducts(result.data);
            } catch (error) {
                console.error("Ошибка загрузки товаров:", error);
            }
        };

        fetchProducts();
    }, []);

    // Фильтрация товаров
    useEffect(() => {
        let filtered = products;

        if (minPrice) filtered = filtered.filter(product => product.price >= Number(minPrice));
        if (maxPrice) filtered = filtered.filter(product => product.price <= Number(maxPrice));
        if (discountOnly) filtered = filtered.filter(product => product.discountPrice);
        if (searchQuery) {
            filtered = filtered.filter(product =>
                product.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        setFilteredProducts(filtered);
    }, [minPrice, maxPrice, discountOnly, searchQuery, products]);

    return (
        <div className="all-products-page">
            <h2>Все товары</h2>

            {/* Фильтры */}
            <Filter
                minPrice={minPrice} setMinPrice={setMinPrice}
                maxPrice={maxPrice} setMaxPrice={setMaxPrice}
                discountOnly={discountOnly} setDiscountOnly={setDiscountOnly}
                searchQuery={searchQuery} setSearchQuery={setSearchQuery}
            />

            {/* Список товаров */}
            <div className="products-list">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <Link to={`/products/${product.id}`} key={product.id} className="product-card">
                            <div className="image-wrapper">
                                {product.discountPrice && (
                                    <div className="discount-badge">
                                        -{Math.round(((product.price - product.discountPrice) / product.price) * 100)}%
                                    </div>
                                )}
                                <img src={`http://localhost:3333${product.image}`} alt={product.title} />
                            </div>
                            <h3>{product.title}</h3>

                            <div className="price-container">
                                {product.discountPrice ? (
                                    <>
                                        <p className="new-price">${product.discountPrice}</p>
                                        <p className="old-price">${product.price}</p>
                                    </>
                                ) : (
                                    <p className="regular-price">${product.price}</p>
                                )}
                            </div>
                        </Link>
                    ))
                ) : (
                    <p>Товары не найдены</p>
                )}
            </div>
        </div>
    );
};

export default AllProducts;
